import React, { useState, useEffect } from 'react';
import AnimatedNumber from '../components/AnimatedNumber';
import InstitutionalContact from '../components/InstitutionalContact';

const stats = [
    { end: 5000, suffix: '+', label: 'Professional Network', icon: '/icons/Mask group2.png' },
    { end: 4.8, decimals: 1, suffix: '/5', label: 'Client Rating', icon: '/icons/Mask group.png' },
    { end: 100, suffix: '%', label: 'Private & Confidential', icon: '/icons/Mask 1.png' },
];

const offeringCards = [
    {
        title: "Counselling Sessions",
        desc: "Secure, one-on-one sessions for emotional wellbeing and personal growth",
        icon: "/icons/wdwo1.png"
    },
    {
        title: "Webinars & Group Sessions",
        desc: "200+ curated topics featuring expert-led discussions, interactive workshops, and peer learning circles",
        icon: "/icons/wdwo2.png"
    },
    {
        title: "Psychometric Assessments",
        desc: "Evidence-based tools that detect mental health concerns early and deliver meaningful, data-driven insights",
        icon: "/icons/wdwo3.png"
    },
    {
        title: "Awareness Campaigns",
        desc: "Multilingual posters, podcasts, toolkits, and on-site activations that drive employee awareness and engagement",
        icon: "/icons/wdwo4.png"
    },
    {
        title: "POSH Training",
        desc: "Structured, on-demand courses designed to meet compliance standards and strengthen workplace safety",
        icon: "/icons/wdwo5.png"
    },
    {
        title: "Analysis Reports",
        desc: "Track your workforce's overall well-being with comprehensive, data-driven insights",
        icon: "/icons/wdwo6.png"
    }
];

const CorporateEAP = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024); // Threshold for EAP cards
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section className="bg-white pt-0">
            {/* ── Purple Header Banner + Hero combined ── */}
            <div className="relative  bg-gradient-to-b from-white to-[#FFF9E1] overflow-hidden relative">

                {/* Purple top banner */}
                <div className="bg-[#520378] pt-20 pb-4 sm:pt-32 sm:pb-10 text-center relative z-10 w-full">
                    <div className="max-w-[1240px] mx-auto px-6">
                        <h1 className="text-white text-[clamp(24px,4vw,40px)] font-bold tracking-[0.08em] uppercase font-inter-tight">
                            EMPLOYEE ASSISTANCE PROGRAMME (EAP)
                        </h1>
                    </div>
                </div>

                {/* Hero content area — person image overlaps the purple banner */}
                <div className="relative overflow-hidden">
                    {/* Person image — cropped from center to bottom (Desktop/Tablet) */}
                    <div className="hidden sm:block absolute top-[-12%] right-2 sm:right-[4%] lg:right-[6%] bottom-0 sm:w-[50%] lg:w-[45%] max-w-[455px] h-[140%] overflow-hidden pointer-events-none">
                        <img
                            src="/images/eap01.png"
                            alt="EAP Support"
                            className="w-full h-full object-cover object-top"
                        />
                    </div>

                    {/* Text content */}
                    <div className="max-w-[1240px] mx-auto px-6 sm:px-14 pt-10 sm:py-16 pb-0">
                        <div className="max-w-[100%] sm:max-w-[50%] lg:max-w-[55%] relative z-10">
                            <h2 className="text-2xl sm:text-4xl lg:text-[38px] font-bold text-gray-950 leading-[1.1] mb-5 font-inter-tight tracking-wide">
                                We help employees <br />
                                Unlock their Full Potential.
                            </h2>
                            <p className="text-sm sm:text-[18px] text-gray-600 leading-[1.7] mb-6 max-w-[750px] font-medium font-geist">
                                With a trusted Employee Assistance Programme (EAP), equip your workforce with care that drives measurable impact.
                            </p>
                            <button className="bg-[#520378] hover:bg-[#400260] text-white px-6 py-2.5 sm:px-8 sm:py-3.5 rounded-full font-semibold text-[14px] sm:text-[15px] transition-all hover:scale-105 active:scale-95 shadow-md">
                                Talk to an expert
                            </button>
                        </div>
                    </div>

                    {/* Mobile Image */}
                    <div className="block sm:hidden w-full h-[360px] mt-0 overflow-hidden relative z-10 flex justify-end">
                        <img
                            src="/images/eap01.png"
                            alt="EAP Support Mobile"
                            className="w-[115%] max-w-[115%] h-full object-cover object-top relative right-[-5%]"
                        />
                    </div>
                </div>
            </div>

            {/* ── Stats Section ── */}
            <div className="px-4 sm:px-8 pb-8 relative z-20 -mt-2 sm:-mt-4">
                <div
                    className="max-w-[1240px] mx-auto rounded-[16px] pt-10 pb-8 sm:pt-12 sm:pb-10 px-5 sm:px-12 shadow-lg"
                    style={{ background: '#520378' }}
                >
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-10">
                        {stats.map((stat, index) => (
                            <div key={index} className="relative mt-5 sm:mt-4">
                                <div className="absolute -top-[22px] left-[-4%] sm:-top-[26px] sm:left-[-6%] w-[46px] h-[44px] sm:w-[54px] sm:h-[54px] bg-white rounded-[10px] sm:rounded-[12px] flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.1)] z-10">
                                    <img
                                        src={stat.icon}
                                        alt={stat.label}
                                        className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                                    />
                                </div>
                                <div className="bg-[#F8EAFD] shadow-sm rounded-[10px] pt-[26px] sm:pt-[40px] pb-5 sm:pb-6 px-4 sm:px-7 h-full w-full flex flex-col justify-center min-h-[110px]">
                                    <div className="text-[24px] sm:text-[38px] font-bold text-gray-950 font-inter-tight leading-tight mb-0.5">
                                        <AnimatedNumber end={stat.end} decimals={stat.decimals} suffix={stat.suffix} />
                                    </div>
                                    <div className="text-[15px] sm:text-[28px] text-gray-700 font-medium">
                                        {stat.label}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Workplace & Wellbeing Snapshot ── */}
            <div className="relative w-full py-10 sm:py-16 bg-white overflow-hidden">
                {/* Background watermark */}
                <div
                    className="absolute -top-40 left-10 w-[350px] sm:w-[500px] h-full bg-no-repeat bg-left-top opacity-30 pointer-events-none"
                    style={{ backgroundImage: "url('/images/abt.png')", backgroundSize: 'contain' }}
                />

                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">
                    <h2 className="text-[#520378] text-[28px] sm:text-[34px] font-bold mb-4 font-inter-tight text-center">
                        Workplace &amp; Wellbeing Snapshot
                    </h2>
                    <p className="text-[#333333] text-[13px] sm:text-[14.5px] text-center max-w-[600px] mb-10 sm:mb-14 font-geist leading-[1.6]">
                        Indian students face rising risks of digital dependency, increasing academic
                        anxiety, growing peer pressure, and deepening concerns about body image
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-[900px]">
                        {/* Circle 1 */}
                        <div className="w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] rounded-full border-[0.5px] border-[#999999] bg-transparent flex flex-col items-center justify-center text-center p-6 z-10 -mb-6 md:mb-0 md:translate-y-14 hover:bg-gray-50/50 transition-all duration-300">
                            <h3 className="text-[#F37321] text-[38px] sm:text-[44px] font-medium mb-2 leading-none">21%</h3>
                            <p className="text-[#1A1A1A] text-[11.5px] sm:text-[13px] font-normal leading-[1.4] max-w-[160px]">
                                Employees worldwide<br />are engaged at work
                            </p>
                        </div>

                        {/* Circle 2 (Middle) */}
                        <div className="w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] rounded-full border-[0.5px] border-[#999999] bg-transparent flex flex-col items-center justify-center text-center p-6 z-20 -mb-6 md:mb-0 md:-ml-8 hover:bg-gray-50/50 transition-all duration-300">
                            <h3 className="text-[#F37321] text-[42px] sm:text-[48px] font-medium mb-2 leading-none">33%</h3>
                            <p className="text-[#1A1A1A] text-[11.5px] sm:text-[13px] font-normal leading-[1.4] max-w-[160px]">
                                Employees Globally<br />Say They Are Thriving<br />In Life
                            </p>
                        </div>

                        {/* Circle 3 */}
                        <div className="w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] rounded-full border-[0.5px] border-[#999999] bg-transparent flex flex-col items-center justify-center text-center p-6 z-10 md:-ml-8 md:translate-y-14 hover:bg-gray-50/50 transition-all duration-300">
                            <h3 className="text-[#F37321] text-[38px] sm:text-[44px] font-medium mb-2 leading-none">40%</h3>
                            <p className="text-[#1A1A1A] text-[11.5px] sm:text-[13px] font-normal leading-[1.4] max-w-[160px]">
                                Employees reported<br />experiencing stress
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            {/* ── Empowering Employees Section ── */}
            <div
                className="w-full bg-[#520378] bg-[length:80%_auto] sm:bg-[length:120%_80%] bg-bottom bg-no-repeat py-16 sm:py-24 relative overflow-hidden mt-20"
                style={{ backgroundImage: "url('/images/wdwo.png')" }}
            >
                <div className="max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-14 flex flex-col items-center relative z-10">
                    <h2 className="text-white text-[32px] sm:text-[42px] font-bold mb-4 font-inter-tight text-center tracking-tight leading-tight">
                        Empowering Employees. Enabling Organisations
                    </h2>
                    <p className="text-white/80 text-[14px] sm:text-[16px] text-center max-w-[850px] mb-8 sm:mb-20 font-geist leading-[1.6]">
                        Every organisation's needs are varied and so are our offerings. Customise your plan
                        according to your employees' needs and watch them unravel their best versions
                    </p>


                    <div className="w-full max-w-[1240px] overflow-visible py-4 relative">
                        {/* Mobile Navigation Arrows (Sides) */}
                        {isMobile && (
                            <>
                                <button
                                    onClick={() => setCurrentSlide(prev => Math.max(0, prev - 1))}
                                    disabled={currentSlide === 0}
                                    className={`absolute left-[-15px] top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#520378]/20 border border-white/30 flex items-center justify-center transition-all z-20 ${currentSlide === 0 ? 'opacity-0 pointer-events-none' : 'hover:bg-white/10 active:scale-95'}`}
                                >
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={() => {
                                        setCurrentSlide(prev => (prev + 1) * 3 < offeringCards.length ? prev + 1 : prev);
                                    }}
                                    disabled={(currentSlide + 1) * 3 >= offeringCards.length}
                                    className={`absolute right-[-15px] top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#520378]/20 border border-white/30 flex items-center justify-center transition-all z-20 ${(currentSlide + 1) * 3 >= offeringCards.length ? 'opacity-0 pointer-events-none' : 'hover:bg-white/10 active:scale-95'}`}
                                >
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </>
                        )}

                        <div className="overflow-hidden w-full">
                            <div
                                className="flex lg:grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-x-8 lg:gap-y-16 transition-transform duration-1000 ease-in-out"
                                style={{
                                    transform: isMobile ? `translateX(-${currentSlide * 100}%)` : 'none',
                                    display: isMobile ? 'flex' : 'grid',
                                    gap: isMobile ? '0' : undefined
                                }}
                            >
                                {(() => {
                                    if (isMobile) {
                                        const slides = [];
                                        for (let i = 0; i < offeringCards.length; i += 3) {
                                            slides.push(offeringCards.slice(i, i + 3));
                                        }
                                        return slides.map((slideCards, slideIdx) => (
                                            <div key={slideIdx} className="w-full flex-shrink-0 flex flex-col gap-y-12 px-2">
                                                {slideCards.map((card, idx) => (
                                                    <div key={idx} className="relative bg-white rounded-[20px] p-8 pt-12 shadow-md flex flex-col items-start min-h-[180px]">
                                                        <div className="absolute -top-6 left-8 w-[64px] h-[64px] bg-white rounded-[14px] shadow-md flex items-center justify-center border border-orange-100">
                                                            <img src={card.icon} alt="icon" className="w-[36px] h-[36px] object-contain" />
                                                        </div>
                                                        <h3 className="text-[#520378] text-[20px] sm:text-[22px] font-bold mb-4 font-inter-tight leading-[1.2]">
                                                            {card.title}
                                                        </h3>
                                                        <p className="text-[#4A5568] text-[14px] sm:text-[15px] font-geist leading-[1.6]">
                                                            {card.desc}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        ));
                                    }

                                    return offeringCards.map((card, idx) => (
                                        <div key={idx} className="relative bg-white rounded-[20px] p-8 pt-12 shadow-md flex flex-col items-start transition-transform hover:-translate-y-1">
                                            <div className="absolute -top-6 left-8 w-[64px] h-[64px] bg-white rounded-[14px] shadow-md flex items-center justify-center border border-orange-100">
                                                <img src={card.icon} alt="icon" className="w-[36px] h-[36px] object-contain" />
                                            </div>
                                            <h3 className="text-[#520378] text-[20px] sm:text-[22px] font-bold mb-4 font-inter-tight leading-[1.2]">
                                                {card.title}
                                            </h3>
                                            <p className="text-[#4A5568] text-[14px] sm:text-[15px] font-geist leading-[1.6]">
                                                {card.desc}
                                            </p>
                                        </div>
                                    ));
                                })()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* ── Boost Your Employee Morale Section ── */}
            <div className="w-full py-16 sm:py-24 bg-white">
                <div className="max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-14 flex flex-col items-center">
                    <h2 className="text-[#520378] text-[28px] sm:text-[34px] font-bold mb-4 font-inter-tight text-center tracking-tight">
                        Boost your employee morale
                    </h2>
                    <p className="text-[#475467] text-[13px] sm:text-[14.5px] text-center max-w-[800px] mb-16 sm:mb-20 font-geist leading-[1.6]">
                        Our Employee Assistance Program (EAP) is specially curated to nurture
                        your workforce’s emotional wellbeing.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 w-full">
                        {[
                            { percent: 72, label: "Increased Employee Retention" },
                            { percent: 58, label: "Increase in New Talents" },
                            { percent: 54, label: "Improved Employee Feedback" },
                            { percent: 58, label: "Increased Business Performance" },
                            { percent: 26, label: "Reduced Company Costs" }
                        ].map((stat, idx) => {
                            const radius = 70;
                            const strokeWidth = 10;
                            const normalizedRadius = radius - strokeWidth * 2;
                            const circumference = normalizedRadius * 2 * Math.PI;
                            const strokeDashoffset = circumference - (stat.percent / 100) * circumference;

                            return (
                                <div key={idx} className="flex flex-col items-center text-center group">
                                    <div className="relative w-[140px] h-[140px] sm:w-[150px] sm:h-[150px] mb-6 transition-transform duration-300 group-hover:scale-110">
                                        <svg height="100%" width="100%" viewBox="0 0 140 140" className="transform -rotate-90">
                                            <circle
                                                stroke="#E2E8F0"
                                                fill="transparent"
                                                strokeWidth={strokeWidth}
                                                r={normalizedRadius}
                                                cx="70"
                                                cy="70"
                                            />
                                            <circle
                                                stroke="#FCA253"
                                                fill="transparent"
                                                strokeWidth={strokeWidth}
                                                strokeDasharray={circumference + ' ' + circumference}
                                                style={{ strokeDashoffset }}
                                                strokeLinecap="round"
                                                r={normalizedRadius}
                                                cx="70"
                                                cy="70"
                                                className="transition-all duration-1000 ease-out"
                                            />
                                        </svg>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-[#1A1A1A] text-2xl sm:text-3xl font-bold font-inter-tight">
                                                {stat.percent}%
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-[#1A1A1A] text-[13px] sm:text-[14px] font-bold leading-[1.4] max-w-[140px] font-geist">
                                        {stat.label}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>


            {/* ── Top ups Section ── */}
            <div
                className="w-full py-16 sm:py-24 bg-white"
            >
                <div className="max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-14 flex flex-col items-center">
                    <h2 className="text-[#1A1A1A] text-[28px] sm:text-[42px] font-extrabold mb-4 font-inter-tight text-center tracking-tight">
                        Top ups
                    </h2>
                    <p className="text-[#475467] text-[13px] sm:text-[15px] text-center max-w-[850px] mb-12 sm:mb-16 font-geist leading-[1.6]">
                        Like a cherry on the cake, we are more than just an Employee Assistance Program (EAP) platform. Our additional programs are
                        thoughtfully designed to engage diverse employee interests while strengthening overall workplace wellbeing
                    </p>

                    {/* 4 Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-12 sm:mb-16">
                        {[
                            {
                                title: "4-Week Stress & Anxiety Program",
                                desc: "A structured, evidence-driven approach to reduce stress and strengthen emotional resilience"
                            },
                            {
                                title: "4-Week Emotional Intelligence Program",
                                desc: "Develop the skills to understand, manage, and respond to emotions effectively"
                            },
                            {
                                title: "Corporate Wellness Events",
                                desc: "Bring energy to the workplace through interactive, play-based experiences that boost morale and team bonding"
                            },
                            {
                                title: "4-Week Affirmation & Mindfulness Program",
                                desc: "Cultivate awareness, reframe negative patterns, and build emotional balance through evidence-based practices"
                            }
                        ].map((card, idx) => (
                            <div key={idx} className="bg-[#520378] rounded-[24px] p-6 pt-10 flex flex-col items-start relative shadow-md transition-transform hover:-translate-y-1 h-full min-h-[320px]">
                                <h3 className="text-white text-[19px] sm:text-[21px] font-bold mb-4 font-inter-tight leading-[1.2]">
                                    {card.title}
                                </h3>
                                <p className="text-white/80 text-[13.5px] sm:text-[14.5px] font-geist leading-[1.6] mb-auto">
                                    {card.desc}
                                </p>

                                {/* Illustration Placeholder (matching image style) */}
                                <div className="mt-8 self-end w-full flex justify-end">
                                    <div className="relative w-24 h-24">
                                        {/* Simple representation of the yellow document/character icon */}
                                        <div className="absolute right-0 bottom-0 w-16 h-20 bg-[#FFB800] rounded-[4px] border-2 border-black flex flex-col p-2">
                                            <div className="w-6 h-6 rounded-full border-2 border-black mb-1 mx-auto" />
                                            <div className="w-full h-1 bg-black/20 mb-1" />
                                            <div className="w-full h-1 bg-black/20 mb-1" />
                                            <div className="w-2/3 h-1 bg-black/20" />
                                        </div>
                                        <div className="absolute right-[-4px] bottom-4 w-10 h-10">
                                            {/* White hand icon placeholder */}
                                            <svg viewBox="0 0 24 24" className="w-full h-full text-white fill-current stroke-black stroke-1">
                                                <path d="M7 10c0-1.1.9-2 2-2h1V7c0-2.8 2.2-5 5-5s5 2.2 5 5v3h1c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2v-8z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Controls */}
                    <div className="w-full flex flex-col sm:flex-row items-center justify-end gap-6">
                        <button className="bg-[#520378] hover:bg-[#400260] text-white px-10 py-3 rounded-full font-bold text-[15px] transition-all hover:scale-105 active:scale-95 shadow-md">
                            Talk to Us
                        </button>
                        <div className="flex gap-3">
                            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
                                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
                                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Get in Touch Section ── */}
            <InstitutionalContact programType="Corporate-EAP" />
        </section>
    );
};

export default CorporateEAP;
