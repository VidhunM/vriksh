import React from 'react';

const Academy = () => {
    const categories = [
        {
            title: 'Webinars',
            desc: 'Our experts conduct curated webinars to provide the most engaging and effective learning experience',
            btnText: 'Start Learning Today'
        },
        {
            title: 'Training Programs',
            desc: <span>Interactive, activity-based programs designed by our<br />in-house experts to equip you with practical skills for<br />real-world application.</span>,
            btnText: 'Explore Programs'
        },
        {
            title: 'Certificate Courses',
            desc: 'Learn from our experienced psychologists to develop new skills and advance your career in mental health related',
            btnText: 'Discover Courses'
        }
    ];

    return (
        <section id="academy" className="py-12 sm:py-16 bg-gradient-to-b from-[#FFF9E1] to-white overflow-hidden relative">
            {/* Decorative background element - Top Left */}
            <div
                className="absolute top-[-40px] left-[-40px] w-80 h-80 pointer-events-none opacity-[0.5] -rotate-12"
            >
                <img
                    src="/images/abt.png"
                    alt=""
                    className="w-full h-full object-contain mix-blend-multiply brightness-[0.9] contrast-[1.1]"
                />
            </div>

            {/* Decorative background element - Bottom Right */}
            <div
                className="absolute bottom-[-60px] right-[-60px] w-80 h-80 pointer-events-none opacity-[0.5] rotate-[15deg] scale-x-[-1]"
            >
                <img
                    src="/images/abt.png"
                    alt=""
                    className="w-full h-full object-contain mix-blend-multiply brightness-[0.9] contrast-[1.1] transition-transform duration-700 hover:scale-105"
                />
            </div>

            <div className="max-w-[1240px] mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 lg:items-center justify-center relative z-10">
                    {/* Left: Image */}
                    <div className="lg:w-[45%] flex justify-center lg:justify-end">
                        <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] lg:aspect-square max-w-[500px]">
                            <img
                                src="/images/Academy.png"
                                alt="Student waves at laptop"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Right: Content & Cards */}
                    <div className="lg:w-[55%]">
                        <div className="mb-10 text-center lg:text-left">
                            <h2 className="text-[28px] sm:text-[34px] font-bold mb-6 text-gray-950 leading-tight font-inter-tight">Vriksh E-Academy</h2>
                            <p className="text-[19px] text-gray-800 max-w-[660px] leading-[1.8] font-normal mx-auto lg:mx-0">
                                We empower aspiring professionals and communities with live, interactive, skill based mental health training, bridging theory and real-world practice.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {categories.map((cat, index) => (
                                <div key={index} className={`bg-[#FCA65B] p-5 ${index === 0 ? 'pt-10' : ''} rounded-2xl flex flex-col items-center justify-center text-center shadow-lg border border-black/5 hover:scale-[1.02] transition-transform`}>
                                    <h3 className="text-[16px] font-bold mb-3 text-gray-950 uppercase tracking-[0.05em] [word-spacing:0.15em] w-full font-inter-tight leading-tight">{cat.title}</h3>
                                    <p className="text-[12.5px] text-gray-950/90 mb-8 leading-[1.6] flex-grow font-medium w-full text-center">
                                        {cat.desc}
                                    </p>
                                    <button className="w-full bg-[#520378] text-white py-2.5 rounded-full font-bold text-[11px] hover:bg-[#520378]/90 transition-all shadow-md mt-auto uppercase tracking-wider">
                                        {cat.btnText}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Academy;
