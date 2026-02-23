import React from 'react';

const Counselling = () => {
    const categories = [
        'Stress & Anxiety',
        'Depression',
        'Love & Relationship',
        'Grief/Loss of loved ones',
        'Academics & Career',
        'Child/ Adolescence'
    ];

    return (
        <section
            id="counselling"
            className="relative pt-24 pb-20 bg-[#520378] text-white overflow-hidden"
        >
            {/* ✅ Background Image with Overlay - Improved Visibility */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/counselling.png"
                    alt="Background"
                    className="w-full h-full object-cover object-center opacity-40"
                />
                <div className="absolute inset-0 bg-[#520378]/70"></div>
            </div>

            {/* ✅ Minimal Top Curve - Refined for Mobile to remove top line */}
            <div className="absolute top-[-0.5px] sm:top-0 left-0 w-full overflow-hidden leading-[0] z-20">
                <svg
                    className="relative block w-full h-[40px] sm:h-[70px] lg:h-[90px]"
                    viewBox="0 0 1440 80"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,0 L1440,0 L1440,40 C1200,80 960,0 720,0 C480,0 240,80 0,40 Z"
                        fill="#FFFFFF"
                    />
                </svg>
            </div>

            <div className="relative z-30 max-w-[1240px] mx-auto px-6">

                {/* Title */}
                <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
                    Counselling
                </h2>

                {/* Category Buttons - Mobile Auto Slider */}
                <div className="lg:hidden relative overflow-hidden mb-8 py-2">
                    <div className="animate-marquee hover:pause-animation flex gap-4">
                        {[...categories, ...categories].map((cat, index) => (
                            <button
                                key={index}
                                className={`whitespace-nowrap px-6 py-2 rounded-full text-[13px] font-medium transition-all flex-shrink-0 ${index === 0
                                    ? 'bg-white text-[#520378] shadow-md'
                                    : 'bg-transparent text-white border border-white/40 hover:bg-white/10'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Category Buttons - Desktop (Static & Centered) */}
                <div className="hidden lg:flex gap-3 justify-center mb-10">
                    {categories.map((cat, index) => (
                        <button
                            key={index}
                            className={`whitespace-nowrap px-7 py-2.5 rounded-full text-[14px] font-medium transition-all ${index === 0
                                ? 'bg-white text-[#520378] shadow-md scale-105'
                                : 'bg-transparent text-white border border-white/40 hover:bg-white/10'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Content Section */}
                <div className="flex flex-col lg:flex-row gap-10 lg:items-center">

                    {/* Image Column */}
                    <div className="lg:w-[40%] flex justify-center">
                        <div className="rounded-[18px] overflow-hidden shadow-xl h-[250px] sm:h-[280px] lg:h-[300px] w-full max-w-[460px]">
                            <img
                                src="/images/counselling 2.png"
                                alt="Counselling Session"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="lg:w-[60%]">
                        <div className="max-w-[520px] lg:ml-4">
                            <h3 className="text-[24px] sm:text-[30px] font-bold mb-4 leading-tight">
                                Counselling for Stress and Anxiety
                            </h3>

                            <p className="text-[15px] mb-6 opacity-90 leading-relaxed">
                                Nothing diminishes anxiety faster than action.
                                Of course, it is easier said than done. But if
                                you've come this far, we want you to know that
                                you are one step closer to taking control of
                                your health and well-being.
                            </p>

                            <button className="bg-white text-[#520378] px-8 py-2.5 rounded-full font-semibold text-[14px] hover:bg-gray-100 transition-all shadow-lg">
                                Book an Appointment
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Counselling;