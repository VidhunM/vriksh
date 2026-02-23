import React from 'react';

const Hero = () => {
    return (
        <section className="relative h-[450px] sm:h-[550px] lg:h-[650px] flex items-center justify-center overflow-hidden pt-16 sm:pt-24 lg:pt-28">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0 text-justify">
                <img
                    src="/images/hero.png"
                    alt="Enriching Minds"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-[1240px] w-full px-6 flex flex-col items-center justify-center text-center text-white py-8 sm:py-12">
                <div className="max-w-[900px] animate-fade-in-up flex flex-col items-center">
                    <h1 className="text-[clamp(28px,6vw,48px)] font-bold leading-[1.2] tracking-tight mb-5 drop-shadow-md text-center">
                        Enriching Minds.<br />
                        <span className="text-white">Strengthening Futures.</span>
                    </h1>

                    <p className="text-[clamp(14px,2.5vw,16px)] mb-8 max-w-[550px] opacity-90 leading-relaxed font-normal text-center mx-auto px-2">
                        Confidential, evidence-based mental health and wellbeing solutions for individuals, institutions, and organisations
                    </p>

                    <div className="flex justify-center">
                        <button className="bg-white text-brand-purple px-8 py-2.5 rounded-full font-bold text-sm hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-2xl">
                            Let's Talk
                        </button>
                    </div>
                </div>
            </div>
            {/* Subtle bottom fade */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
        </section>
    );
};

export default Hero;
