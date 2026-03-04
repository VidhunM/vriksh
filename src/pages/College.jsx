import React, { useState } from 'react';

const tabs = [
    "Campus Counselling",
    "Mental Health Workshops",
    "Stress & Anxiety Management",
    "Career Guidance",
    "Crisis Support",
    "Faculty Training"
];

const offerCards = [
    {
        title: "Professional Campus Counsellors",
        desc: "Experienced psychologists available on-campus to support student wellbeing."
    },
    {
        title: "Life Skills & Resilience Workshops",
        desc: "Equipping students with emotional intelligence, stress management, and coping skills."
    },
    {
        title: "Crisis Intervention",
        desc: "Immediate, high-quality support during psychological emergencies or critical events."
    },
    {
        title: "Career & Future Planning",
        desc: "Helping students navigate career anxiety and build confidence for their future."
    },
    {
        title: "Safe & Inclusive Campus Culture",
        desc: "Promoting mental health awareness and reducing stigma through campus-wide initiatives."
    },
    {
        title: "Faculty Wellness & Support",
        desc: "Training educators to identify student concerns and manage their own wellbeing."
    }
];

const trustedStats = [
    { value: '5,000+', label: 'Professional Network', icon: '/icons/Mask group.png' },
    { value: '4.8/5', label: 'Client Rating', icon: '/icons/Mask group2.png' },
    { value: '40,000+', label: 'Students Benefited', icon: '/icons/Mask group3.png' },
    { value: '100%', label: 'Private & Confidential', icon: '/icons/Mask group3.png' },
];

const College = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="bg-white pt-0">
            {/* ── Purple Header Banner ── */}
            <div className="bg-[#520378] pt-24 pb-6 sm:pt-36 sm:pb-10 text-center relative z-10 w-full">
                <div className="max-w-[1240px] mx-auto px-6">
                    <h1 className="text-white text-[clamp(20px,3.5vw,36px)] font-bold tracking-[0.02em] uppercase font-inter-tight">
                        COLLEGE-BASED MENTAL HEALTH PROGRAM
                    </h1>
                </div>
            </div>

            <div className="bg-[#FEFCE8] w-full py-12 sm:py-20 flex flex-col items-center">
                {/* ── Split Content Section (Hero) ── */}
                <div className="max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-14 flex flex-col lg:flex-row items-center lg:items-center gap-10 lg:gap-16 w-full mb-16 lg:mb-24">
                    {/* Left side text */}
                    <div className="flex-1 max-w-[600px] flex flex-col justify-center">
                        <h2 className="text-[#103D31] text-2xl sm:text-[36px] font-bold leading-[1.2] mb-6 font-inter-tight">
                            Championing Student Wellness,<br className="hidden sm:block" /> Cultivating Success
                        </h2>
                        <p className="text-sm sm:text-[15px] font-medium text-gray-800 leading-[1.7] mb-8 font-geist">
                            Prioritize the mental health of your students and foster a culture of resilience
                            and academic excellence. Our holistic approach supports students through the
                            challenges of higher education, ensuring they thrive both personally and
                            professionally during their college years and beyond.
                        </p>
                        <div>
                            <button className="bg-[#520378] hover:bg-[#400260] text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-full font-semibold text-[13px] sm:text-[14px] transition-all hover:scale-105 active:scale-95 shadow-md">
                                Partner With Us
                            </button>
                        </div>
                    </div>

                    {/* Right side image */}
                    <div className="flex-1 w-full flex justify-center lg:justify-end">
                        <img
                            src="/images/clg01.png"
                            alt="College students learning"
                            className="w-full max-w-[550px] aspect-[4/3] object-cover rounded-[16px] shadow-lg"
                        />
                    </div>
                </div>
            </div>

            {/* ── What do we offer? Section ── */}
            <div className="relative w-full mt-4 sm:mt-12">
                <svg viewBox="0 0 1440 160" preserveAspectRatio="none" className="w-full h-[60px] sm:h-[100px] lg:h-[140px] block" style={{ transform: 'translateY(1px)' }}>
                    <path fill="#520378" d="M 0,80 C 120,80 240,120 360,120 C 480,120 600,40 720,40 C 840,40 960,120 1080,120 C 1200,120 1320,80 1440,80 L 1440,165 L 0,165 Z"></path>
                </svg>

                <div
                    className="w-full bg-[#520378] bg-[length:80%_auto] sm:bg-[length:120%_80%] bg-bottom bg-no-repeat pt-0 pb-12 sm:pb-20 relative z-10"
                    style={{ backgroundImage: "url('/images/wdwo.png')" }}
                >
                    <div className="max-w-[1600px] mx-auto px-6 relative z-10 flex flex-col items-center">
                        <h2 className="text-white text-[28px] sm:text-[34px] font-bold mb-3 font-inter-tight text-center">
                            What do we offer?
                        </h2>
                        <p className="text-white/90 text-[13px] sm:text-[14.5px] text-center max-w-[700px] mb-8 sm:mb-10 font-geist leading-[1.6]">
                            Comprehensive mental health solutions tailored for higher education institutions<br className="hidden sm:block" />
                            to support academic growth and personal development.
                        </p>

                        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 px-2 lg:px-12 w-full max-w-[1900px]">
                            {tabs.map((tab, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveTab(idx)}
                                    className={`px-5 sm:px-6 py-2 sm:py-[10px] rounded-full text-[12px] sm:text-[13px] transition-all duration-300 font-medium whitespace-nowrap ${activeTab === idx
                                        ? 'bg-white text-[#520378] shadow-md font-semibold'
                                        : 'bg-transparent text-white/90 border border-white/50 hover:bg-white/10 hover:text-white'
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 sm:gap-y-14 lg:gap-y-16 w-full max-w-[1100px] mt-6 mb-8">
                            {offerCards.map((card, idx) => (
                                <div key={idx} className="relative w-full flex flex-col drop-shadow-[0_4px_16px_rgba(0,0,0,0.06)] h-full pt-8 sm:pt-10">
                                    <div className="absolute -top-[4px] left-6 sm:left-6 w-[72px] h-[72px] bg-white rounded-[12px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] flex items-center justify-center z-10 border border-gray-100">
                                        <div className="w-[54px] h-[54px] bg-white rounded-[8px] flex items-center justify-center">
                                            <img src="/icons/workshop.png" alt="icon" className="w-[36px] h-[36px] object-contain" />
                                        </div>
                                    </div>
                                    <div className="bg-white rounded-[16px] pt-10 sm:pt-12 pb-6 px-5 sm:px-6 h-full flex flex-col items-start relative z-0 border border-gray-100/30">
                                        <h3 className="text-[#1A1A1A] text-[18px] sm:text-[19px] font-bold mb-3 font-geist leading-[1.3] z-10">
                                            {card.title}
                                        </h3>
                                        <p className="text-[#4A5568] text-[13.5px] sm:text-[14px] font-geist leading-[1.6]">
                                            {card.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 sm:mt-12">
                            <button className="bg-white hover:bg-gray-50 text-[#520378] px-8 py-3.5 rounded-full font-bold text-[14px] sm:text-[15px] transition-all hover:scale-105 active:scale-95 shadow-md">
                                Get in Touch With Us
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Silent Struggles Section ── */}
            <div className="relative w-full py-16 sm:py-24 bg-white overflow-hidden">
                <div
                    className="absolute -top-50 left-20 w-[400px] sm:w-[600px] h-full bg-no-repeat bg-left-top opacity-50 pointer-events-none"
                    style={{ backgroundImage: "url('/images/abt.png')", backgroundSize: 'contain' }}
                ></div>

                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">
                    <h2 className="text-[#520378] text-[28px] sm:text-[34px] font-bold mb-4 font-inter-tight text-center">
                        Student Well-Being at Risk
                    </h2>
                    <p className="text-[#333333] text-[13px] sm:text-[14.5px] text-center max-w-[800px] mb-16 sm:mb-24 font-geist leading-[1.6]">
                        Indian students face rising risks of excessive screen use, risky substance<br className="hidden sm:block" />
                        habits, and growing mental health challenges
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-[900px]">
                        {/* Circle 1 */}
                        <div className="w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] rounded-full border-[0.5px] border-[#999999] bg-transparent flex flex-col items-center justify-center text-center p-6 z-10 -mb-6 md:mb-0 md:translate-y-14 hover:bg-gray-50/50 transition-all duration-300">
                            <h3 className="text-[#F37321] text-[38px] sm:text-[44px] font-medium mb-2 leading-none">60-70%</h3>
                            <p className="text-[#1A1A1A] text-[11.5px] sm:text-[13px] font-normal leading-[1.4] max-w-[180px]">Students report<br />excessive screen use<br />affecting sleep,<br />academics, and social life</p>
                        </div>

                        {/* Circle 2 (Middle) */}
                        <div className="w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] rounded-full border-[0.5px] border-[#999999] bg-transparent flex flex-col items-center justify-center text-center p-6 z-20 -mb-6 md:mb-0 md:-ml-8 hover:bg-gray-50/50 transition-all duration-300">
                            <h3 className="text-[#F37321] text-[42px] sm:text-[48px] font-medium mb-2 leading-none">20–25%</h3>
                            <p className="text-[#1A1A1A] text-[11.5px] sm:text-[13px] font-normal leading-[1.4] max-w-[180px]">Students Engage In<br />Risky Alcohol,<br />Tobacco, Or Drug Use</p>
                        </div>

                        {/* Circle 3 */}
                        <div className="w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] rounded-full border-[0.5px] border-[#999999] bg-transparent flex flex-col items-center justify-center text-center p-6 z-10 md:-ml-8 md:translate-y-14 hover:bg-gray-50/50 transition-all duration-300">
                            <h3 className="text-[#F37321] text-[38px] sm:text-[44px] font-medium mb-2 leading-none">65–70%</h3>
                            <p className="text-[#1A1A1A] text-[11.5px] sm:text-[13px] font-normal leading-[1.4] max-w-[180px]">students experience<br />moderate to severe<br />anxiety or depressive<br />symptoms</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Benefits Section ── */}
            <div className="w-full bg-gradient-to-b from-[#FFFDF6] to-[#FCF4DF] py-16 sm:py-24">
                <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 flex flex-col items-center">
                    <h2 className="text-[#101828] text-[28px] sm:text-[34px] font-bold mb-4 font-inter-tight text-center tracking-tight">
                        College-Based Mental Health Program Benefits
                    </h2>
                    <p className="text-[#475467] text-[13px] sm:text-[14.5px] text-center max-w-[800px] mb-12 sm:mb-16 font-geist leading-[1.6]">
                        A stronger mental health ecosystem within the campus leads to better academic performance,<br className="hidden sm:block" />
                        enhanced student retention, and a more vibrant college community.
                    </p>

                    <div className="flex flex-col lg:flex-row items-stretch justify-between w-full gap-10 lg:gap-16">
                        <div className="flex-1 w-full flex justify-center lg:justify-start">
                            <img
                                src="/images/banner 4.png"
                                alt="College students"
                                className="w-full max-w-[550px] lg:max-w-[500px] xl:max-w-[550px] object-cover rounded-[16px] shadow-md"
                            />
                        </div>

                        <div className="flex-[1.5] w-full grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-6 sm:gap-x-10 items-center content-center py-4">
                            <div className="flex items-center gap-3 md:gap-4 h-[90px] w-full">
                                <div className="flex-shrink-0 w-[120px] flex justify-center">
                                    <img src="/icons/Guidance.png" alt="Guidance" className="w-[100px] h-[100px] object-contain" />
                                </div>
                                <div className="bg-[#FCA253] rounded-[8px] p-3 flex-1 h-full flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
                                    <span className="text-[#1A1A1A] text-[13px] sm:text-[13.5px] font-bold text-center leading-[1.3] font-inter-tight tracking-tight">
                                        Enhanced<br />Placement Readiness<br />& Confidence
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 md:gap-4 h-[90px] w-full">
                                <div className="flex-shrink-0 w-[120px] flex justify-center">
                                    <img src="/icons/confidential.png" alt="Confidential" className="w-[100px] h-[100px] object-contain" />
                                </div>
                                <div className="bg-[#FCA253] rounded-[8px] p-3 flex-1 h-full flex items-center justify-center shadow-[0_2px_8_rgba(0,0,0,0.05)]">
                                    <span className="text-[#1A1A1A] text-[13px] sm:text-[13.5px] font-bold text-center leading-[1.3] font-inter-tight tracking-tight">
                                        Better Student<br />Retention &<br />Academic Success
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 md:gap-4 h-[90px] w-full">
                                <div className="flex-shrink-0 w-[120px] flex justify-center">
                                    <img src="/icons/convenices.png" alt="Confidential" className="w-[100px] h-[100px] object-contain" />
                                </div>
                                <div className="bg-[#FCA253] rounded-[8px] p-3 flex-1 h-full flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
                                    <span className="text-[#1A1A1A] text-[13px] sm:text-[13.5px] font-bold text-center leading-[1.3] font-inter-tight tracking-tight">
                                        Reduced Stress<br />Among Students<br />& Staff
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 md:gap-4 h-[90px] w-full">
                                <div className="flex-shrink-0 w-[120px] flex justify-center">
                                    <img src="/icons/export support.png" alt="Support" className="w-[100px] h-[100px] object-contain" />
                                </div>
                                <div className="bg-[#FCA253] rounded-[8px] p-3 flex-1 h-full flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
                                    <span className="text-[#1A1A1A] text-[13px] sm:text-[13.5px] font-bold text-center leading-[1.3] font-inter-tight tracking-tight">
                                        Positive Campus<br />Reputation &<br />Student Wellness
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Trusted Partner Section ── */}
            <div className="w-full bg-white py-16 sm:py-20 px-4 sm:px-8 relative z-20">
                <div
                    className="max-w-[1240px] mx-auto rounded-[20px] pt-12 pb-10 sm:pt-14 sm:pb-12 px-6 sm:px-10 lg:px-12 shadow-xl"
                    style={{ background: '#520378' }}
                >
                    <h2 className="text-white text-center text-[28px] sm:text-[34px] font-bold mb-14 sm:mb-16 font-inter-tight tracking-wide">
                        What Makes Us Your Trusted Partner?
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 sm:gap-y-16 lg:gap-8">
                        {trustedStats.map((stat, index) => (
                            <div key={index} className="relative mt-2 sm:mt-0">
                                <div className="absolute -top-[20px] left-[-4%] sm:-top-[26px] sm:left-[-6%] w-[46px] h-[46px] sm:w-[56px] sm:h-[56px] bg-white rounded-[10px] sm:rounded-[14px] flex items-center justify-center border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.1)] z-10">
                                    <img
                                        src={stat.icon}
                                        alt={stat.label}
                                        className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] object-contain"
                                    />
                                </div>
                                <div className="bg-[#F8EAFD] rounded-[10px] sm:rounded-[12px] pt-[32px] sm:pt-[42px] pb-5 sm:pb-7 px-5 sm:px-7 h-full w-full shadow-sm flex flex-col justify-center min-h-[110px]">
                                    <div className="text-[20px] lg:text-[22px] font-bold text-gray-950 font-inter-tight leading-tight mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-[13px] sm:text-[14px] text-gray-600 font-medium">
                                        {stat.label}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
};

export default College;
