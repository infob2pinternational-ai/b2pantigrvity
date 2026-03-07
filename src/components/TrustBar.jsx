import React from 'react';
import { motion } from 'framer-motion';

const TrustBar = () => {
    // We'll use some generic placeholder text/shapes to represent trusted client logos.
    const clients = [
        { id: 1, name: "TechCorp" },
        { id: 2, name: "GlobalTrade" },
        { id: 3, name: "Innovate AI" },
        { id: 4, name: "Nexus Media" },
        { id: 5, name: "Axiom Growth" }
    ];

    return (
        <section className="py-12 bg-white border-y border-slate-100" id="trust">
            <div className="container mx-auto px-6 max-w-6xl">
                <p className="text-center text-sm font-bold tracking-widest text-slate-400 uppercase mb-8">
                    Trusted by Industry Leaders
                </p>
                <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
                    {clients.map((client, index) => (
                        <motion.div
                            key={client.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="text-xl md:text-2xl font-black text-slate-300 hover:text-brand-primary transition-colors duration-300 cursor-default"
                        >
                            {client.name}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustBar;
