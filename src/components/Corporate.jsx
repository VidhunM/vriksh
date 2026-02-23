import React from 'react';

const Corporate = () => {
    return (
        <section id="corporate" className="py-24 bg-brand-purple relative overflow-hidden text-white">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0 opacity-20">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Office Background" className="w-full h-full object-cover" />
            </div>

            <div className="max-w-[1200px] mx-auto px-5 relative z-10">
                <div className="grid lg:grid-cols-[1fr,1.2fr] gap-20 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-10">Corporate Institutions</h2>
                        <p className="text-lg opacity-90 mb-10 leading-relaxed">
                            We provide tailored wellness and skill development programs for corporate organizations. Enable your workforce with the tools they need for peak performance and mental resilience.
                        </p>
                        <button className="bg-white text-brand-purple px-10 py-4 rounded-full font-bold text-lg hover:bg-brand-cream hover:-translate-y-1 transition-all">
                            Learn More
                        </button>
                    </div>

                    <div className="flex flex-col gap-5">
                        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors group">
                            <div className="flex items-center gap-5 mb-4">
                                <span className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold">01</span>
                                <h3 className="text-2xl font-bold">Workshops</h3>
                            </div>
                            <p className="opacity-80 mb-5">Interactive sessions on stress management, leadership, and emotional intelligence.</p>
                            <a href="#" className="font-bold text-white group-hover:underline inline-flex items-center gap-2">
                                View details <span>→</span>
                            </a>
                        </div>

                        <div className="bg-white p-8 rounded-3xl text-brand-purple shadow-2xl hover:-translate-y-1 transition-transform group">
                            <div className="flex items-center gap-5 mb-4">
                                <span className="w-10 h-10 bg-brand-purple text-white rounded-full flex items-center justify-center font-bold">02</span>
                                <h3 className="text-2xl font-bold">Training Programs</h3>
                            </div>
                            <p className="text-gray-700 mb-5 font-medium">Long-term skill development and mental health awareness programs.</p>
                            <a href="#" className="font-extrabold text-brand-purple group-hover:underline inline-flex items-center gap-2">
                                View details <span>→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Corporate;
