import React from 'react';

const Hero = () => {
    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-no-repeat bg-center bg-cover text-white pt-20 text-center">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-purple/60 to-black/30"></div>

            <div className="relative z-10 max-w-[900px] px-5">
                <h1 className="text-[clamp(40px,8vw,72px)] font-extrabold leading-[1.1] mb-6 animate-fade-in-up">
                    Enriching Minds.<br />Strengthening Futures.
                </h1>
                <p className="text-[clamp(16px,2vw,20px)] mb-10 max-w-[600px] mx-auto opacity-90 leading-relaxed">
                    Vriksh provides world-class educational and wellness programs to help you reach your full potential.
                </p>
                <div>
                    <button className="bg-brand-purple text-white px-10 py-4 rounded-full font-bold text-lg transition-all hover:bg-brand-purple-light hover:-translate-y-1 hover:shadow-xl active:scale-95">
                        Explore Now
                    </button>
                </div>
            </div>

            <div className="absolute bottom-7.5 left-1/2 -translate-x-1/2 z-10">
                <div className="w-[26px] h-[42px] border-2 border-white rounded-full relative">
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full animate-bounce-slow"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
