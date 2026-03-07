import React, { useState, useEffect } from 'react';
import AnimatedNumber from '../components/AnimatedNumber';
import InstitutionalContact from '../components/InstitutionalContact';
import TopUpsSlider from '../components/TopUpsSlider';

const stats = [
    { end: 5000, suffix: '+', label: 'Professional Network', icon: '/icons/Mask group2.png' },
    { end: 4.8, decimals: 1, suffix: '/5', label: 'Client Rating', icon: '/icons/Mask group.png' },
    { end: 100, suffix: '%', label: 'Private & Confidential', icon: '/icons/Mask 1.png' },
];

const offeringCards = [
    {
        title: "Counselling Sessions",
        desc: "Secure, one-on-one sessions for emotional wellbeing and personal growth",
        icon: "/icons/counselling.png"
    },
    {
        title: "Webinars & Group Sessions",
        desc: "200+ curated topics featuring expert-led discussions, interactive workshops, and peer learning circles",
        icon: "/icons/webinars.png"
    },
    {
        title: "Psychometric Assessments",
        desc: "Evidence-based tools that detect mental health concerns early and deliver meaningful, data-driven insights",
        icon: "/icons/psychometric.png"
    },
    {
        title: "Awareness Campaigns",
        desc: "Multilingual posters, podcasts, toolkits, and on-site activations that drive employee awareness and engagement",
        icon: "/icons/awareness.png"
    },
    {
        title: "POSH Training",
        desc: "Structured, on-demand courses designed to meet compliance standards and strengthen workplace safety",
        icon: "/icons/posh.png"
    },
    {
        title: "Analysis Reports",
        desc: "Track your workforce's overall well-being with comprehensive, data-driven insights",
        icon: "/icons/analysis.png"
    }
];

const testimonials = [
    {
        name: "Madhavi",
        role: "Counsellor",
        text: "Vriksh training webinars are crisp and clearly explained. I thoroughly enjoyed all the sessions. The trainers are highly knowledgeable and experienced. Thank you for such insightful learning experiences.",
        date: "February 2025"
    },
    {
        name: "Dr. Ashwini Kamath",
        role: "Special Educator",
        text: "Very informative and useful seminar on DTLD conducted by Vriksh. I would recommend all special educators and counselors to attend their sessions.",
        date: "October 2025"
    },
    {
        name: "Veena Padmanabha",
        role: "Counsellor",
        text: "An excellent initiative with a professional and well-structured approach. One can truly rely on the information provided. Superb coordination among the team. Highly commendable!",
        date: "July 2025"
    },
    {
        name: "Ananya R.",
        role: "Individual Counselling Client",
        text: "Vriksh provided me with a safe and understanding space to express myself. The sessions helped me manage my anxiety and rebuild my confidence step by step. I truly felt heard and supported throughout my journey.",
        date: "June 2025"
    },
    {
        name: "Disha Arunagiri",
        role: "Counsellor",
        text: "Vriksh is coming up with a lot of great practical content, and each workshop is worth the money. The sessions are interactive and not just theoretical, which keeps me focused and engaged, listening to every word of the speaker. I would love to learn more from Vriksh. Go for it if you want to improve your practice. Thank you, Vriksh.",
        date: "January 2025"
    },
    {
        name: "Ayesha Barvin",
        role: "Special Educator",
        text: "I had a wonderful session with Vriksh and gained a lot of knowledge after joining the course. The time management of the course was excellent. The instructors were very humble and cleared all our doubts patiently.",
        date: "March 2025"
    }
];

const CorporateEAP = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section className="bg-white pt-0">
            {/* Purple Header Banner + Hero combined */}
            <div className="relative bg-gradient-to-b from-white to-[#FFF9E1] overflow-hidden">
                {/* Purple top banner */}
                <div className="bg-[#520378] pt-20 pb-4 sm:pt-32 sm:pb-10 text-center relative z-10 w-full">
                    <div className="max-w-[1240px] mx-auto px-6">
                        <h1 className="text-white text-[clamp(24px,4vw,40px)] font-bold tracking-[0.08em] uppercase font-inter-tight">
                            EMPLOYEE ASSISTANCE PROGRAMME (EAP)
                        </h1>
                    </div>
                </div>

                {/* Hero content area */}
                <div className="relative overflow-hidden">
                    {/* Person image — desktop/tablet */}
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
                            <h2 className="text-xl sm:text-4xl lg:text-[38px] font-bold text-gray-950 leading-[1.1] mb-5 font-inter-tight tracking-wide">
                                We help employees <br />
                                Unlock their Full Potential.
                            </h2>
                            <p className="text-sm sm:text-[18px] text-gray-600 leading-[1.7] mb-6 max-w-[750px] font-medium font-geist">
                                With a trusted Employee Assistance Programme (EAP), you equip your workforce with confidential care that drives measurable impact. Professional mental health support helps employees manage stress, build resilience, and improve overall well-being. This proactive approach strengthens performance, productivity, and workplace engagement.
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

            {/* Stats Section */}
            <div className="px-4 sm:px-8 pb-8 relative z-20 -mt-18 sm:-mt-4">
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

            {/* Workplace & Wellbeing Snapshot */}
            <div className="relative w-full py-10 sm:py-16 bg-white overflow-hidden">
                {/* Background watermark */}
                <div
                    className="absolute -top-40 left-20 sm:left-[10%] lg:left-[15%] w-[350px] sm:w-[500px] h-full bg-no-repeat bg-left-top opacity-50 pointer-events-none"
                    style={{ backgroundImage: "url('/images/abt.png')", backgroundSize: 'contain' }}
                />

                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">
                    <h2 className="text-[#520378] text-[20px] sm:text-[34px] font-bold mb-4 font-inter-tight text-center">
                        Workplace &amp; Wellbeing Snapshot
                    </h2>
                    <p className="text-[#333333] text-[13px] sm:text-[19px] text-center max-w-[900px] mb-10 sm:mb-14 font-geist leading-[1.6]">
                        Employees worldwide face low engagement, limited wellbeing, and rising workplace stress, highlighting the need for stronger mental health and wellbeing support.
                    </p>

                    <div className="grid grid-cols-2 md:flex md:flex-row items-center justify-center w-full max-w-[900px] gap-0 sm:gap-0 mt-2 mb-4 sm:mt-0 sm:mb-0">
                        {/* Circle 1 */}
                        <div className="w-[160px] h-[160px] sm:w-[260px] sm:h-[260px] rounded-full border-[0.5px] border-[#999999] bg-transparent flex flex-col items-center justify-center text-center p-3 sm:p-4 z-10 translate-x-[8%] translate-y-[8%] md:translate-x-0 md:translate-y-14 hover:bg-gray-50/50 transition-all duration-300">
                            <h3 className="text-[#F37321] text-[38px] sm:text-[44px] font-medium mb-2 leading-none">
                                <AnimatedNumber end={21} suffix="%" />
                            </h3>
                            <p className="text-[#1A1A1A] text-[9.5px] sm:text-[15px] font-normal leading-[1.4] max-w-[160px]">
                                Employees worldwide<br />are engaged at work
                            </p>
                        </div>

                        {/* Circle 2 */}
                        <div className="w-[160px] h-[160px] sm:w-[260px] sm:h-[260px] rounded-full border-[0.5px] border-[#999999] bg-transparent flex flex-col items-center justify-center text-center p-3 sm:p-4 z-20 -translate-x-[8%] translate-y-[8%] md:translate-x-0 md:-ml-8 hover:bg-gray-50/50 transition-all duration-300">
                            <h3 className="text-[#F37321] text-[42px] sm:text-[48px] font-medium mb-2 leading-none">
                                <AnimatedNumber end={33} suffix="%" />
                            </h3>
                            <p className="text-[#1A1A1A] text-[9.5px] sm:text-[15px] font-normal leading-[1.4] max-w-[160px]">
                                Employees Globally<br />Say They Are Thriving<br />In Life
                            </p>
                        </div>

                        {/* Circle 3 */}
                        <div className="w-[160px] h-[160px] sm:w-[260px] sm:h-[260px] rounded-full border-[0.5px] border-[#999999] bg-transparent flex flex-col items-center justify-center text-center p-3 sm:p-4 z-10 col-span-2 justify-self-center -translate-x-4 -translate-y-4 md:translate-x-0 md:translate-y-14 md:-ml-8 hover:bg-gray-50/50 transition-all duration-300">
                            <h3 className="text-[#F37321] text-[38px] sm:text-[44px] font-medium mb-2 leading-none">
                                <AnimatedNumber end={40} suffix="%" />
                            </h3>
                            <p className="text-[#1A1A1A] text-[9.5px] sm:text-[15px] font-normal leading-[1.4] max-w-[160px]">
                                Employees reported<br />experiencing stress
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Empowering Employees Section */}
            <div
                className="w-full bg-[#520378] bg-[length:80%_auto] sm:bg-[length:120%_80%] bg-bottom bg-no-repeat py-16 sm:py-20 relative overflow-hidden mt-14"
                style={{ backgroundImage: "url('/images/wdwo.png')" }}
            >
                <div className="max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-14 flex flex-col items-center relative z-10">
                    <h2 className="text-white text-[20px] sm:text-[42px] font-bold mb-4 font-inter-tight text-center tracking-tight leading-tight">
                        Empowering Employees. Enabling Organisations
                    </h2>
                    <p className="text-white/80 text-[14px] sm:text-[19px] text-center max-w-[850px] mb-8 sm:mb-20 font-geist leading-[1.6]">
                        Every organisation's needs are varied and so are our offerings. Customise your plan
                        according to your employees' needs and watch them unravel their best versions
                    </p>

                    <div className="w-full max-w-[1240px] overflow-visible py-4 relative">
                        {/* Mobile Navigation Arrows */}
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

                        <div className="overflow-hidden w-full pt-10">
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

            {/* Boost Your Employee Morale Section */}
            <div className="w-full pt-16 pb-0 sm:py-14 bg-white">
                <div className="max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-14 flex flex-col items-center">
                    <h2 className="text-[#520378] text-[20px] sm:text-[34px] font-bold mb-4 font-inter-tight text-center tracking-tight">
                        Boost your employee morale
                    </h2>
                    <p className="text-[#475467] text-[13px] sm:text-[19px] text-center max-w-[900px] mb-12 sm:mb-16 font-geist leading-[1.6]">
                        Employees worldwide are engaged at work Employees globally say they are thriving in life Employees reported experiencing stress
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0 sm:gap-10 w-full mb-12 items-center justify-center">
                        {[
                            { percent: 72, label: "Increased Employee Retention" },
                            { percent: 58, label: "Increase in New Talents" },
                            { percent: 54, label: "Improved Employee Feedback" },
                            { percent: 58, label: "Increased Business Performance" },
                            { percent: 26, label: "Reduced Company Costs" }
                        ].map((stat, idx) => {
                            const radius = isMobile ? 75 : 70;
                            const strokeWidth = isMobile ? 6 : 8;
                            const normalizedRadius = radius - strokeWidth;
                            const circumference = normalizedRadius * 2 * Math.PI;
                            const strokeDashoffset = circumference - (stat.percent / 100) * circumference;

                            // Mobile overlapping logic
                            let mobileClasses = "";
                            if (isMobile) {
                                if (idx === 0) mobileClasses = "translate-x-[8%] translate-y-[8%] z-10";
                                if (idx === 1) mobileClasses = "-translate-x-[8%] translate-y-[8%] z-20";
                                if (idx === 2) mobileClasses = "translate-x-[8%] -translate-y-[8%] z-30";
                                if (idx === 3) mobileClasses = "-translate-x-[8%] -translate-y-[8%] z-40";
                                if (idx === 4) mobileClasses = "col-span-2 justify-self-center -translate-y-12 z-50";
                            }

                            return (
                                <div key={idx} className={`flex flex-col items-center text-center group ${mobileClasses}`}>
                                    <div className="relative w-[180px] h-[180px] sm:w-[150px] sm:h-[150px] lg:w-[180px] lg:h-[180px] transition-transform duration-300 group-hover:scale-105 flex items-center justify-center">
                                        <div className="absolute inset-0 rounded-full border-[0.5px] border-[#999999] opacity-0 sm:hidden"></div>
                                        <svg
                                            height={isMobile ? "150" : "100%"}
                                            width={isMobile ? "150" : "100%"}
                                            viewBox={isMobile ? "0 0 150 150" : "0 0 140 140"}
                                            className="transform -rotate-90"
                                        >
                                            <circle
                                                stroke="#E5E7EB"
                                                fill="transparent"
                                                strokeWidth={strokeWidth}
                                                r={normalizedRadius}
                                                cx={isMobile ? "75" : "70"}
                                                cy={isMobile ? "75" : "70"}
                                            />
                                            <circle
                                                stroke="#FCA253"
                                                fill="transparent"
                                                strokeWidth={strokeWidth}
                                                strokeDasharray={circumference + ' ' + circumference}
                                                style={{ strokeDashoffset }}
                                                strokeLinecap="round"
                                                r={normalizedRadius}
                                                cx={isMobile ? "75" : "70"}
                                                cy={isMobile ? "75" : "70"}
                                                className="transition-all duration-1000 ease-out"
                                            />
                                        </svg>
                                        <div className="absolute inset-0 flex flex-col items-center justify-center p-2 sm:p-4">
                                            <span className="text-[#520378] text-xl sm:text-2xl lg:text-3xl font-bold font-inter-tight">
                                                <AnimatedNumber end={stat.percent} suffix="%" />
                                            </span>
                                            <p className="text-[#1A1A1A] text-[10.5px] sm:text-[11px] lg:text-[13px] font-medium leading-[1.2] mt-0.5 max-w-[85%]">
                                                {stat.label}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Top ups Section - With Fixed Card Stacking Animation (4 Cards) */}
            <TopUpsSlider />

            {/* Testimonials Section */}
            <EAPTestimonials />

            {/* Get in Touch Section */}
            <InstitutionalContact programType="Corporate-EAP" />
        </section>
    );
};

// Testimonials Component
const EAPTestimonials = () => {
    const [testIndex, setTestIndex] = useState(0);
    const [itemsVisible, setItemsVisible] = useState(3);
    const [mobileTestNav, setMobileTestNav] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsVisible(1);
            } else if (window.innerWidth < 1024) {
                setItemsVisible(2);
            } else {
                setItemsVisible(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const totalSlides = Math.ceil(testimonials.length / itemsVisible);

    const prevSlide = () => {
        setTestIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const nextSlide = () => {
        setTestIndex((prev) => (prev + 1) % totalSlides);
    };

    return (
        <div
            className="py-12 sm:py-14"
            style={{ background: 'linear-gradient(180deg, #FFF9E1 0%, #FFFFFF 100%)' }}
        >
            <div className="max-w-[1320px] mx-auto px-6">
                {/* Header with Title and Nav Arrows - Desktop */}
                <div className="hidden sm:flex justify-between items-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-950 font-inter-tight leading-tight max-w-[600px]">
                        Trusted by Individuals, Institutions & Professionals
                    </h2>
                    <div className="flex gap-4">
                        <button
                            onClick={prevSlide}
                            className="w-12 h-12 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all group"
                        >
                            <svg className="w-6 h-6 transform transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-12 h-12 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center hover:bg-[#520378] hover:text-white transition-all group"
                        >
                            <svg className="w-6 h-6 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Header with Navigation - Mobile */}
                <div className="sm:hidden flex flex-row justify-between items-center w-full mb-8">
                    <h2 className="text-xl font-bold text-gray-950 font-inter-tight">
                        Trusted by Individuals, Institutions & Professionals
                    </h2>
                    <div className="flex gap-3">
                        <button
                            onClick={() => { prevSlide(); setMobileTestNav('left'); }}
                            className={`w-10 h-10 rounded-full flex items-center justify-center shadow-sm border border-gray-100 transition-all active:scale-95 ${mobileTestNav === 'left' ? 'bg-[#520378] text-white' : 'bg-white'}`}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path></svg>
                        </button>
                        <button
                            onClick={() => { nextSlide(); setMobileTestNav('right'); }}
                            className={`w-10 h-10 rounded-full flex items-center justify-center shadow-sm border border-gray-100 transition-all active:scale-95 ${mobileTestNav === 'right' ? 'bg-[#520378] text-white' : 'bg-white'}`}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
                        </button>
                    </div>
                </div>

                {/* Testimonial Slider Container */}
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${testIndex * (100 / itemsVisible)}%)` }}
                    >
                        {testimonials.map((item, index) => (
                            <div
                                key={`${item.name}-${index}`}
                                className="w-full md:w-1/2 lg:w-1/3 flex-none px-4"
                            >
                                <div className="bg-white rounded-[24px] p-8 flex flex-col shadow-sm border border-gray-50 min-h-[400px] h-full">
                                    <div className="mb-6">
                                        <h3 className="text-lg sm:text-xl font-bold text-gray-950 mb-1 font-inter-tight">{item.name}</h3>
                                        <p className="text-sm sm:text-base text-gray-500 font-geist">{item.role}</p>
                                    </div>
                                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-8 font-geist flex-grow">
                                        &ldquo;{item.text}&rdquo;
                                    </p>
                                    <div className="mt-auto pt-6 border-t border-gray-50 flex justify-between items-center">
                                        <div className="flex items-center gap-2.5">
                                            <div className="w-5 h-5">
                                                <svg viewBox="0 0 24 24" className="w-full h-full">
                                                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.07-3.71 1.07-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                                    <path fill="#FBBC05" d="M5.84 14.11c-.22-.67-.35-1.39-.35-2.11s.13-1.44.35-2.11V7.05H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.95l3.66-2.84z" />
                                                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.05l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                                </svg>
                                            </div>
                                            <div className="flex text-orange-400 text-[14px] sm:text-[18px]">
                                                {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
                                            </div>
                                        </div>
                                        <span className="text-xs sm:text-base font-bold text-gray-800 font-geist">{item.date}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dot Indicators */}
                <div className="flex justify-center gap-2 mt-12">
                    {Array.from({ length: totalSlides }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setTestIndex(i)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${testIndex === i
                                ? 'w-8 bg-[#520378]'
                                : 'w-2 bg-gray-300 hover:bg-gray-400'
                                }`}
                            aria-label={`Go to page ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CorporateEAP;