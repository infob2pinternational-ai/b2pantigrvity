import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
    // Placeholder blog data
    const blogPosts = [
        {
            id: 1,
            title: "Why Digital LED Van Advertising is the Future of Local Marketing in Kerala",
            excerpt: "In a world where digital ads are often skipped, businesses are looking for ways to capture attention in the real world. Enter Digital LED Van Advertising—the mobile powerhouse.",
            author: "B2P Expert Team",
            date: "March 13, 2026",
            category: "Marketing Trends",
            image: "/led-van-advertising.png",
            content: `
                <p class="mb-4">In a world where digital ads are often skipped or blocked, businesses are looking for ways to capture attention in the real world. Enter Digital LED Van Advertising—the mobile powerhouse of modern marketing.</p>
                
                <p class="mb-6">For businesses in Thrissur and across Kerala, LED vans are no longer just an "option"; they are becoming a necessity for any brand that wants to stand out in the current competitive market.</p>

                <h4 class="text-xl font-bold text-slate-900 mb-3 mt-8">What is Digital LED Van Advertising?</h4>
                <p class="mb-6">Simply put, it’s a high-definition LED screen mounted on a mobile vehicle. Unlike a static billboard that stays in one place, these "mobile billboards" travel through busy markets, residential areas, and high-traffic junctions, bringing your brand's message directly to your audience.</p>

                <h4 class="text-xl font-bold text-slate-900 mb-4 mt-8">Why It’s Perfect for the Current Situation (2026 Trends)</h4>
                
                <div class="space-y-4 mb-8">
                    <div>
                        <strong class="text-slate-900 block mb-1">1. Hyper-Local Targeting</strong>
                        <p>You can’t move a giant hoarding, but you can move a van. Whether you want to target shoppers at the Thrissur Round in the morning or families in residential colonies by evening, LED vans allow you to pick your exact route.</p>
                    </div>
                    <div>
                        <strong class="text-slate-900 block mb-1">2. High Engagement with Motion Graphics</strong>
                        <p>Human eyes are naturally drawn to movement. A bright, high-resolution video playing on a moving van has a 97% recall rate compared to traditional print ads. It doesn’t just show an ad; it creates an experience.</p>
                    </div>
                    <div>
                        <strong class="text-slate-900 block mb-1">3. Cost-Effective for Local Brands</strong>
                        <p>Traditional TV ads or prime-location hoardings can be expensive. LED vans offer a premium "big-screen" feel at a fraction of the cost, making it ideal for product launches, store openings, and even political or social awareness campaigns.</p>
                    </div>
                    <div>
                        <strong class="text-slate-900 block mb-1">4. Day and Night Visibility</strong>
                        <p>The advanced LED technology ensures your ad is crystal clear even in direct sunlight and incredibly vibrant after sunset, extending your advertising hours significantly.</p>
                    </div>
                </div>

                <h4 class="text-xl font-bold text-slate-900 mb-4 mt-8">How to Optimize Your LED Van Campaign</h4>
                <p class="mb-4">To get the best ROI (Return on Investment), keep these three tips in mind:</p>
                <ul class="list-disc pl-5 space-y-2 mb-8">
                    <li><strong>Keep it Short:</strong> People usually see the van for 5–10 seconds. Use bold text and a clear Call to Action (CTA).</li>
                    <li><strong>Use QR Codes:</strong> Encourage viewers to scan the screen to get a special discount or visit your website.</li>
                    <li><strong>Sync with Social Media:</strong> Post the van’s location on your Instagram or Facebook to create a "spot the van" contest.</li>
                </ul>

                <h4 class="text-xl font-bold text-slate-900 mb-3 mt-8">Conclusion</h4>
                <p>As we move further into 2026, the brands that win will be the ones that meet their customers where they are. <strong>B2P International</strong> specializes in bridging these gaps, helping you use innovative tools like digital LED vans to expand your reach across Kerala and beyond.</p>
            `
        },
        {
            id: 2,
            title: "2026 B2B Growth: Why AI is No Longer Optional for Small Businesses",
            excerpt: "The \"wait and see\" era of AI is over. For B2B companies, the shift toward AI-driven growth solutions is the key to punching above their weight.",
            author: "B2P Tech Team",
            date: "March 10, 2026",
            category: "Technology",
            image: "/ai-growth.png",
            content: `
                <p class="mb-4">The "wait and see" era of Artificial Intelligence is officially over. As we move through 2026, AI has transitioned from a futuristic experiment to the essential infrastructure for business growth.</p>
                
                <p class="mb-6">For B2B companies in hubs like Thrissur and Kochi, the shift toward AI-driven growth solutions is the key to "punching above their weight."</p>

                <h4 class="text-xl font-bold text-slate-900 mb-4 mt-8">1. Moving from Automation to "Agentic" Intelligence</h4>
                <p class="mb-6">In 2024, we used AI to write emails. In 2026, we use AI Agents. These are smart systems that don't just follow instructions—they reason. They can monitor your website, identify a high-value visitor, research their company, and draft a personalized proposal before your coffee is even cold.</p>

                <h4 class="text-xl font-bold text-slate-900 mb-4 mt-8">2. The Death of the "Cold Call"</h4>
                <p class="mb-6">Cold calling is being replaced by Intent-Based Marketing. AI tools now analyze "first-party data" (who is visiting your site and what they are reading) to tell you exactly when a customer is ready to buy. This reduces wasted effort and ensures your sales team only focuses on high-probability deals.</p>

                <h4 class="text-xl font-bold text-slate-900 mb-4 mt-8">3. Personalization at Scale</h4>
                <p class="mb-6">One of the biggest hurdles for growing businesses is maintaining a personal touch. AI-driven personalization allows you to send 1,000 emails that each feel like they were hand-written by a CEO. This "human-centric" automation is what builds trust and drives long-term B2B partnerships.</p>

                <h4 class="text-xl font-bold text-slate-900 mb-4 mt-8">4. Local Expertise meets Global Tech</h4>
                <p class="mb-6">For businesses in Kerala, the opportunity lies in combining local industry knowledge with global AI tools. Whether it's optimizing supply chains in the manufacturing sector or streamlining client onboarding in service industries, AI levels the playing field.</p>

                <h4 class="text-xl font-bold text-slate-900 mb-3 mt-8">Conclusion</h4>
                <p>At B2P International, we believe the future belongs to the "Augmented Professional"—the business leader who uses AI to enhance human creativity and relationship-building. Ready to transform your business into a 2026 growth engine?</p>
            `
        },
        {
            id: 3,
            title: "Scaling Beyond Borders: The Secret to Successful Global B2B Campaigns in 2026",
            excerpt: "For businesses based in Thrissur, the world has never been more accessible. To succeed in 2026, a Global Marketing Campaign must be about strategic relevance.",
            author: "B2P Global Strategy Team",
            date: "February 28, 2026",
            category: "Global Strategy",
            image: "/global-marketing.png",
            content: `
                <p class="mb-4">For businesses based in Thrissur, Kerala, the world has never been more accessible. However, as international trade becomes more digital, the competition for attention is global. To succeed in 2026, a "Global Marketing Campaign" must be more than just broad reach—it must be about strategic relevance.</p>
                
                <p class="mb-6">At B2P International, we’ve seen that the most successful global brands share one secret: they think globally but act locally. Here is how you can build a campaign that wins in any market.</p>

                <h4 class="text-xl font-bold text-slate-900 mb-4 mt-8">1. Trust is the New Global Currency</h4>
                <p class="mb-2">In an era of AI-generated content, B2B buyers are more skeptical than ever. A successful campaign in 2026 relies on validation assets.</p>
                <div class="bg-brand-primary/5 border-l-4 border-brand-primary p-4 rounded-r-lg mb-6">
                    <strong>Pro Tip:</strong> Instead of bold claims, use case studies and localized testimonials. Buyers in Europe have different pain points than buyers in Southeast Asia; your marketing must reflect that.
                </div>

                <h4 class="text-xl font-bold text-slate-900 mb-4 mt-8">2. The Shift to "Dark Social"</h4>
                <p class="mb-2">Much of today’s B2B decision-making happens in private groups, LinkedIn messages, and industry forums—what experts call "Dark Social."</p>
                <div class="bg-brand-secondary/5 border-l-4 border-brand-secondary p-4 rounded-r-lg mb-6">
                    <strong>The Strategy:</strong> Your global campaign shouldn’t just aim for clicks. It should aim to be "talked about" by experts in the field. This is why Employee Advocacy—having your team share insights—is now a more powerful global tool than traditional display ads.
                </div>

                <h4 class="text-xl font-bold text-slate-900 mb-4 mt-8">3. Localization Over Translation</h4>
                <p class="mb-2">A common mistake is simply translating a campaign into another language. True localization means adapting your Value Proposition to fit local business norms.</p>
                <div class="bg-slate-100 border-l-4 border-slate-400 p-4 rounded-r-lg mb-6">
                    <strong>Example:</strong> A campaign in Germany might focus on precision and compliance, while a campaign in the UAE might focus on speed and relationship-building.
                </div>

                <h4 class="text-xl font-bold text-slate-900 mb-4 mt-8">4. Omnichannel Orchestration</h4>
                <p class="mb-2">Your global customers are everywhere—from LinkedIn to industry-specific podcasts. In 2026, your campaign must be a "drumbeat" of consistent value across multiple platforms.</p>
                <div class="bg-brand-primary/5 border-l-4 border-brand-primary p-4 rounded-r-lg mb-6">
                    <strong>The Goal:</strong> Ensure that whether a prospect sees your LED van in Kerala or your whitepaper on LinkedIn in London, the brand experience feels unified and professional.
                </div>

                <h4 class="text-xl font-bold text-slate-900 mb-3 mt-8">How B2P International Can Help</h4>
                <p>Global expansion is complex, but you don't have to navigate it alone. We specialize in bridging markets by combining deep local insights with global marketing infrastructure. We help you identify the right "Account-Based Marketing" (ABM) strategies to target high-value international clients effectively.</p>
            `
        }
    ];

    return (
        <section id="blog" className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight"
                    >
                        Our <span className="text-brand-primary">Blog</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-600 leading-relaxed"
                    >
                        Insights, strategies, and news from the frontlines of global B2B connectivity.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-slate-200/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 flex flex-col group"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <div className="absolute inset-0 bg-slate-900/20 z-10 group-hover:bg-transparent transition-colors duration-300"></div>
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-brand-primary shadow-sm">
                                    {post.category}
                                </div>
                            </div>

                            <div className="p-8 flex-grow flex flex-col">
                                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar size={14} />
                                        <span>{post.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <User size={14} />
                                        <span>{post.author}</span>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-primary transition-colors line-clamp-2">
                                    {post.title}
                                </h3>

                                <p className="text-slate-600 mb-6 flex-grow line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <button className="inline-flex items-center gap-2 text-brand-primary font-bold hover:text-brand-secondary transition-colors mt-auto w-max py-2 group/btn">
                                    Read Article
                                    <ArrowRight size={18} className="transform group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.article>
                    ))}
                </div>

                <div className="mt-16 text-center text-slate-500 italic">
                    <p>More articles coming soon!</p>
                </div>
            </div>
        </section>
    );
};

export default Blog;
