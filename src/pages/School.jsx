import React, { useState } from 'react';

const tabs = [
    "Campus Counselling",
    "Special Education Support",
    "Life Skills Program",
    "Psychometric Assessment",
    "Workshops",
    "Analytics & Reporting"
];

const offerCards = [
    {
        title: "Dedicated On-Campus Counsellor",
        desc: "A full-time professional supporting your students and staff."
    },
    {
        title: "Preventive & Proactive Programs",
        desc: "Regular workshops, awareness sessions, & early identification of concerns."
    },
    {
        title: "Crisis Management Support",
        desc: "Immediate intervention and structured care during critical situations."
    },
    {
        title: "Parent & Teacher Collaboration",
        desc: "Consistent updates, guidance sessions, and coordinated support."
    },
    {
        title: "Confidential & Ethical Practice",
        desc: "Safe, private, and professional counselling services."
    },
    {
        title: "Structured Documentation & Analytics",
        desc: "Periodic case reports, well-being trend analysis & management-level"
    }
];

const School = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="bg-white pt-0">
            {/* ── Purple Header Banner ── */}
            <div className="bg-[#520378] pt-24 pb-6 sm:pt-36 sm:pb-10 text-center relative z-10 w-full">
                <div className="max-w-[1240px] mx-auto px-6">
                    <h1 className="text-white text-[clamp(20px,3.5vw,36px)] font-bold tracking-[0.02em] uppercase font-inter-tight">
                        SCHOOL-BASED MENTAL HEALTH PROGRAM
                    </h1>
                </div>
            </div>

            <div className="bg-[#FEFCE8] w-full py-12 sm:py-20 flex flex-col items-center">
                {/* ── Split Content Section ── */}
                <div className="max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-14 flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16 w-full mb-16 lg:mb-24">
                    {/* Left side text */}
                    <div className="flex-1 max-w-[600px] flex flex-col justify-center">
                        <h2 className="text-[#103D31] text-2xl sm:text-[36px] font-bold leading-[1.2] mb-6 font-inter-tight">
                            Enriching Minds, Empowering<br className="hidden sm:block" /> School Communities
                        </h2>
                        <p className="text-sm sm:text-[15px] font-medium text-gray-800 leading-[1.7] mb-8 font-geist">
                            Transform your campus into a resilient community by sowing
                            the seeds of wellness. Empower students, teachers, and
                            parents with practical emotional skills that last a lifetime.
                            Build a supportive school culture where every child feels
                            safe, heard, and understood. Your journey toward a healthier,
                            emotionally stronger campus starts here.
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
                            src="/images/schl01.png"
                            alt="School children smiling"
                            className="w-full max-w-[550px] aspect-[4/3] object-cover rounded-[16px] shadow-lg"
                        />
                    </div>
                </div>
            </div>

            {/* ── What do we offer? Section ── */}
            <div className="relative w-full mt-4 sm:mt-12">
                {/* SVG Symmetrical Double-Curve at the top matching exactly the image wave */}
                <svg viewBox="0 0 1440 160" preserveAspectRatio="none" className="w-full h-[60px] sm:h-[100px] lg:h-[140px] block" style={{ transform: 'translateY(1px)' }}>
                    <path fill="#520378" d="M 0,80 C 120,80 240,120 360,120 C 480,120 600,40 720,40 C 840,40 960,120 1080,120 C 1200,120 1320,80 1440,80 L 1440,165 L 0,165 Z"></path>
                </svg>

                <div
                    className="w-full bg-[#520378] bg-cover bg-bottom bg-no-repeat pt-0 sm:pt-4 pb-20 sm:pb-32 relative z-10"
                    style={{ backgroundImage: "url('/images/wdwo.png')" }}
                >
                    <div className="max-w-[1200px] mx-auto px-6 relative z-10 flex flex-col items-center">
                        <h2 className="text-white text-[28px] sm:text-[34px] font-bold mb-4 font-inter-tight text-center">
                            What do we offer?
                        </h2>
                        <p className="text-white/90 text-[13px] sm:text-[14.5px] text-center max-w-[700px] mb-12 sm:mb-16 font-geist leading-[1.6]">
                            A comprehensive, school-based mental health program designed to support<br className="hidden sm:block" />
                            students' emotional well-being, resilience, and overall development.
                        </p>

                        {/* Tabs */}
                        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-20 px-2 lg:px-12 w-full max-w-[1000px]">
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

                        {/* Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 sm:gap-y-16 lg:gap-y-20 w-full max-w-[1100px] mt-12 mb-12">
                            {offerCards.map((card, idx) => (
                                <div key={idx} className="relative w-full flex flex-col drop-shadow-[0_4px_16px_rgba(0,0,0,0.06)] h-full pt-10 sm:pt-12">
                                    {/* Small top-left box for icon */}
                                    <div className="absolute -top-[4px] left-6 sm:left-6 w-[72px] h-[72px] bg-white rounded-[12px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] flex items-center justify-center z-10 border border-gray-100">
                                        <div className="w-[54px] h-[54px] bg-white rounded-[8px] flex items-center justify-center">
                                            <img src="/icons/workshop.png" alt="icon" className="w-[36px] h-[36px] object-contain" />
                                        </div>
                                    </div>

                                    {/* Main card body flex container */}
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

                        {/* Button inside purple section */}
                        <div className="mt-16 sm:mt-24">
                            <button className="bg-white hover:bg-gray-50 text-[#520378] px-8 py-3.5 rounded-full font-bold text-[14px] sm:text-[15px] transition-all hover:scale-105 active:scale-95 shadow-md">
                                Get in Touch With Us
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Silent Struggles Section ── */}
            <div className="relative w-full py-16 sm:py-24 bg-white overflow-hidden">
                {/* Background Leaf Image */}
                <div
                    className="absolute top-0 left-0 w-[300px] sm:w-[500px] h-full bg-no-repeat bg-left-top opacity-50 pointer-events-none"
                    style={{ backgroundImage: "url('/images/abt.png')", backgroundSize: 'contain' }}
                ></div>

                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">
                    <h2 className="text-[#520378] text-[28px] sm:text-[34px] font-bold mb-4 font-inter-tight text-center">
                        Silent Struggles of Today's Students
                    </h2>
                    <p className="text-[#333333] text-[13px] sm:text-[14.5px] text-center max-w-[800px] mb-16 sm:mb-24 font-geist leading-[1.6]">
                        Indian students face rising risks of digital dependency, increasing academic<br className="hidden sm:block" />
                        anxiety, growing peer pressure, and deepening concerns about body image
                    </p>

                    {/* Overlapping Circles Container */}
                    <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-[1000px]">

                        {/* Circle 1 */}
                        <div className="w-[190px] h-[190px] sm:w-[220px] sm:h-[220px] rounded-full border-[0.5px] border-[#999999] bg-transparent flex flex-col items-center justify-center text-center p-4 z-10 -mb-6 md:mb-0 hover:bg-gray-50/50 transition-all duration-300">
                            <h3 className="text-[#F37321] text-[38px] sm:text-[44px] font-medium mb-1 leading-none">60%</h3>
                            <p className="text-[#1A1A1A] text-[11px] sm:text-[12px] font-normal leading-[1.4]">Students aged 5-16<br />are at risk of digital or<br />screen addiction</p>
                        </div>

                        {/* Circle 2 */}
                        <div className="w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] rounded-full border-[0.5px] border-[#999999] bg-transparent flex flex-col items-center justify-center text-center p-4 z-20 -mb-6 md:mb-0 md:-ml-12 hover:bg-gray-50/50 transition-all duration-300">
                            <h3 className="text-[#F37321] text-[46px] sm:text-[54px] font-medium mb-1 leading-none">81%</h3>
                            <p className="text-[#1A1A1A] text-[11px] sm:text-[12px] font-normal leading-[1.4]">Students Report<br />Anxiety Related To<br />Studies And Exams</p>
                        </div>

                        {/* Circle 3 */}
                        <div className="w-[190px] h-[190px] sm:w-[220px] sm:h-[220px] rounded-full border-[0.5px] border-[#999999] bg-transparent flex flex-col items-center justify-center text-center p-4 z-30 -mb-6 md:mb-0 md:-ml-12 hover:bg-gray-50/50 transition-all duration-300">
                            <h3 className="text-[#F37321] text-[38px] sm:text-[44px] font-medium mb-1 leading-none">33%</h3>
                            <p className="text-[#1A1A1A] text-[11px] sm:text-[12px] font-normal leading-[1.4]">Students struggle with<br />peer pressure</p>
                        </div>

                        {/* Circle 4 */}
                        <div className="w-[200px] h-[200px] sm:w-[230px] sm:h-[230px] rounded-full border-[0.5px] border-[#999999] bg-transparent flex flex-col items-center justify-center text-center p-4 z-40 md:-ml-12 hover:bg-gray-50/50 transition-all duration-300">
                            <h3 className="text-[#F37321] text-[38px] sm:text-[44px] font-medium mb-1 leading-none">45%</h3>
                            <p className="text-[#1A1A1A] text-[11px] sm:text-[12px] font-normal leading-[1.4]">Students are<br />dissatisfied with their<br />body image</p>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    );
};

export default School;
