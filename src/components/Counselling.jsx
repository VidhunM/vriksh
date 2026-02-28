import React, { useState } from 'react';

const Counselling = () => {
    const [activeCategory, setActiveCategory] = useState('Stress & Anxiety');

    const categories = [
        'Stress & Anxiety',
        'Depression',
        'Love & Relationship',
        'Grief / Loss of loved ones',
        'Academics & Career',
        'Child / Adolescence'
    ];

    const contentMap = {
        'Stress & Anxiety': {
            title: 'Counselling for Stress and Anxiety',
            desc: "Nothing diminishes anxiety faster than action. Of course, it is easier said than done. But if you've come this far, we want you to know that you are one step closer to taking control of your health and well-being.",
            stat: 'Millions of Indians face anxiety and stress. You are not alone.',
            cta: 'Book an Appointment'
        },
        'Depression': {
            title: 'Counselling for Depression',
            desc: "Many people carry their pain silently, smiling on the outside while struggling within. You don't have to face it alone. Reaching out for help is a sign of strength, not weakness. Help is here and reaching out can be the beginning of healing and renewed hope.",
            stat: '1 in 20 adults in India experiences depression',
            cta: 'Take the First Step'
        },
        'Love & Relationship': {
            title: 'Counselling for Love and Relationship',
            desc: "Many couples struggle silently, even while appearing strong on the outside. You don't have to navigate misunderstandings and conflicts alone. Seeking support is a courageous step toward renewed trust, connection, and understanding.",
            stat: 'Relationship issues affect 1 in 3 people seeking help in India.',
            cta: 'Get Support Now'
        },
        'Grief / Loss of loved ones': {
            title: 'Counselling for Grief / Loss of loved ones',
            desc: "Losing someone you love can feel overwhelming and deeply painful. Grief looks different for everyone, and there is no \"right\" way to feel. You don't have to carry the weight alone - support can help you process your loss and find strength as you move forward.",
            stat: 'Loss of 1 loved one can leave at least 5 others grieving',
            cta: 'Start Your Healing Journey'
        },
        'Academics & Career': {
            title: 'Counselling for Academics & Career',
            desc: "Academic pressure and career decisions can feel confusing and overwhelming. You don't have to navigate expectations, choices, and uncertainty alone. With the right guidance, you can gain clarity, confidence, and direction for your future.",
            stat: '93% of Indian students know only 7 career options.',
            cta: 'Discover the Right Career Path'
        },
        'Child / Adolescence': {
            title: 'Counselling for Child / Adolescence',
            desc: "Every child grows in their own way - with different strengths, struggles, and dreams. Sometimes they just need a little extra patience, understanding, and support. With the right care, they can flourish into confident and resilient individuals.",
            stat: '1 in 7 adolescents face mental health challenges.',
            cta: 'Seek Help Early'
        }
    };

    const activeContent = contentMap[activeCategory];

    return (
        <section
            id="counselling"
            className="relative pt-16 sm:pt-20 pb-10 sm:pb-14 bg-[#520378] text-white overflow-hidden"
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

            {/* ✅ Minimal Top Curve - Pronounced wave to remove straight line */}
            <div className="absolute top-[-1px] left-0 w-full overflow-hidden leading-[0] z-20">
                <svg
                    className="relative block w-full h-[45px] sm:h-[75px] lg:h-[100px]"
                    viewBox="0 0 1440 100"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,0 L1440,0 L1440,40 C1200,100 960,0 720,0 C480,0 240,100 0,40 Z"
                        fill="#FFFFFF"
                    />
                </svg>
            </div>

            <div className="relative z-30 max-w-[1240px] mx-auto px-6">

                {/* Title */}
                <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center font-inter-tight">
                    Counselling
                </h2>

                {/* Category Buttons - Mobile Auto Slider */}
                <div className="lg:hidden relative overflow-hidden mb-8 py-2">
                    <div className="animate-marquee hover:pause-animation flex gap-4">
                        {[...categories, ...categories].map((cat, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveCategory(cat)}
                                className={`whitespace-nowrap px-6 py-2 rounded-full text-[13px] font-medium transition-all flex-shrink-0 ${activeCategory === cat
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
                            onClick={() => setActiveCategory(cat)}
                            className={`whitespace-nowrap px-7 py-2.5 rounded-full text-[14px] font-medium transition-all ${activeCategory === cat
                                ? 'bg-white text-[#520378] shadow-md scale-105'
                                : 'bg-transparent text-white border border-white/40 hover:bg-white/10'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Content Section */}
                <div className="flex flex-col lg:flex-row gap-10 lg:items-center min-h-[400px]">

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
                    <div className="lg:w-[60%] text-center lg:text-left">
                        <div className="max-w-[550px] lg:ml-4 mx-auto lg:mx-0">
                            <h3 className="text-[22px] sm:text-[26px] font-bold mb-1 leading-tight transition-all duration-300 font-inter-tight lg:whitespace-nowrap">
                                {activeContent.title}
                            </h3>

                            <p className="text-base sm:text-[19px] lg:text-[15px] mb-2 opacity-90 leading-relaxed min-h-[70px]">
                                {activeContent.desc}
                            </p>

                            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-8 inline-block">
                                <p className="text-[14px] sm:text-[16px] font-bold text-brand-cream italic">
                                    "{activeContent.stat}"
                                </p>
                            </div>

                            <div>
                                <button className="bg-white text-[#520378] px-8 py-2.5 rounded-full font-semibold text-[14px] hover:bg-brand-cream transition-all shadow-lg active:scale-95">
                                    {activeContent.cta}
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Counselling;