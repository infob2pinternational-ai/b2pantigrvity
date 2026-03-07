import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Truck, BarChart, Rocket, ChevronLeft, ChevronRight } from 'lucide-react';

const servicesSlider = [
    {
        id: 1,
        title: "LED Mobile",
        titleHighlight: "Advertising",
        desc: "High-impact mobile physical reach. We take your brand directly to the streets, ensuring maximum visibility across cities with our dynamic LED displays.",
        icon: Truck
    },
    {
        id: 2,
        title: "AI-Driven Growth",
        titleHighlight: "Solutions",
        desc: "Precision marketing through data and automation. We harness artificial intelligence for advanced social intelligence, SEO, and paid strategies that convert.",
        icon: BarChart
    },
    {
        id: 3,
        title: "Global Marketing",
        titleHighlight: "Campaigns",
        desc: "Custom-tailored campaigns designed for scale and brand elevation. We cut through the noise to deliver unparalleled ROI and global recognition.",
        icon: Rocket
    }
];

const Hero = () => {
    const canvasRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    // Canvas particle network background logic
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        let particles = [];
        let numParticles = window.innerWidth > 768 ? 100 : 50;
        let mouseX = null;
        let mouseY = null;
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            numParticles = window.innerWidth > 768 ? 100 : 50;
            initParticles();
        };

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 1;
                this.vy = (Math.random() - 0.5) * 1;
                this.radius = Math.random() * 2 + 1;
                const colors = ['#2563eb', '#7c3aed', '#94a3b8']; // text-brand-primary, secondary, slate
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
                if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;

                if (mouseX && mouseY) {
                    let dx = mouseX - this.x;
                    let dy = mouseY - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 100) {
                        this.x -= dx * 0.05;
                        this.y -= dy * 0.05;
                    }
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.globalAlpha = 0.6;
                ctx.fill();
            }
        }

        const initParticles = () => {
            particles = [];
            for (let i = 0; i < numParticles; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();

                for (let j = i + 1; j < particles.length; j++) {
                    let dx = particles[i].x - particles[j].x;
                    let dy = particles[i].y - particles[j].y;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx.beginPath();
                        ctx.strokeStyle = '#94a3b8';
                        ctx.globalAlpha = Math.max(0, 1 - (distance / 150) - 0.5);
                        ctx.lineWidth = 1;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const handleMouseLeave = () => {
            mouseX = null;
            mouseY = null;
        };

        window.addEventListener('resize', resizeCanvas);
        const heroSection = document.getElementById('home');
        if (heroSection) {
            heroSection.addEventListener('mousemove', handleMouseMove);
            heroSection.addEventListener('mouseleave', handleMouseLeave);
        }

        resizeCanvas();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (heroSection) {
                heroSection.removeEventListener('mousemove', handleMouseMove);
                heroSection.removeEventListener('mouseleave', handleMouseLeave);
            }
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    // Slider Auto-Play Logic
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % servicesSlider.length);
        }, 5000); // 5 seconds per slide
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % servicesSlider.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + servicesSlider.length) % servicesSlider.length);

    return (
        <section
            id="home"
            className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-50"
        >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(37,99,235,0.15)_0%,_transparent_50%),radial-gradient(circle_at_30%_70%,_rgba(124,58,237,0.15)_0%,_transparent_50%)] z-0 pointer-events-none"></div>

            {/* Animated Canvas Plexus */}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-80 z-0 pointer-events-none"></canvas>

            <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full max-w-7xl">
                <div className="flex items-center justify-between w-full h-[500px]">
                    {/* Left Navigation Arrow */}
                    <button
                        onClick={prevSlide}
                        className="hidden sm:flex z-20 p-3 sm:p-4 rounded-full bg-white/50 hover:bg-white text-slate-800 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all hover:scale-110 border border-slate-200"
                        aria-label="Previous service"
                    >
                        <ChevronLeft size={28} />
                    </button>

                    {/* Slider Content Area */}
                    <div className="flex-1 w-full mx-auto relative h-full flex items-center justify-center px-2 sm:px-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="w-full max-w-3xl flex flex-col items-center text-center backdrop-blur-sm bg-white/30 p-6 sm:p-10 rounded-[3rem] border border-white/40 shadow-2xl relative"
                            >
                                <div className="mb-6 p-4 sm:p-5 bg-white rounded-2xl shadow-xl shadow-slate-200/50 inline-flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                                    {React.createElement(servicesSlider[currentSlide].icon, { size: 48, className: "text-brand-primary" })}
                                </div>
                                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tight text-slate-900 leading-tight">
                                    {servicesSlider[currentSlide].title} <br className="hidden md:block" />
                                    <span className="text-gradient">{servicesSlider[currentSlide].titleHighlight}</span>
                                </h1>
                                <p className="text-base sm:text-lg md:text-xl text-slate-700 mb-10 max-w-2xl mx-auto font-medium">
                                    {servicesSlider[currentSlide].desc}
                                </p>

                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                                    <a
                                        href="#services"
                                        className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-semibold hover:scale-105 hover:shadow-xl hover:shadow-brand-primary/30 transition-all duration-300"
                                    >
                                        Explore Scope
                                    </a>
                                    <a
                                        href="#contact"
                                        className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white border border-slate-200 text-slate-900 font-semibold hover:border-brand-primary hover:bg-slate-50 hover:scale-105 transition-all duration-300 shadow-sm"
                                    >
                                        Get in Touch
                                    </a>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right Navigation Arrow */}
                    <button
                        onClick={nextSlide}
                        className="hidden sm:flex z-20 p-3 sm:p-4 rounded-full bg-white/50 hover:bg-white text-slate-800 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all hover:scale-110 border border-slate-200"
                        aria-label="Next service"
                    >
                        <ChevronRight size={28} />
                    </button>
                </div>

                {/* Mobile Navigation and Dots (centered below content) */}
                <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 flex items-center gap-6 z-20">
                    <button onClick={prevSlide} className="sm:hidden p-2 text-slate-500 hover:text-brand-primary transition-colors">
                        <ChevronLeft size={24} />
                    </button>

                    <div className="flex gap-3">
                        {servicesSlider.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentSlide(idx)}
                                aria-label={`Go to slide ${idx + 1}`}
                                className={`h-2.5 rounded-full transition-all duration-500 ease-in-out ${idx === currentSlide
                                        ? 'w-10 bg-gradient-to-r from-brand-primary to-brand-secondary shadow-md'
                                        : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                                    }`}
                            />
                        ))}
                    </div>

                    <button onClick={nextSlide} className="sm:hidden p-2 text-slate-500 hover:text-brand-primary transition-colors">
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>

            {/* Scroll indicator - Moved slightly down so it doesn't overlap dots */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2"
            >
                <a href="#trust" aria-label="Scroll down" className="flex justify-center items-start w-8 h-12 border-2 border-slate-400/50 rounded-full p-1 cursor-pointer hover:border-brand-primary transition-colors">
                    <motion.div
                        animate={{ y: [0, 15, 0], opacity: [1, 0, 1] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1.5 h-3 bg-brand-primary rounded-full"
                    />
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;
