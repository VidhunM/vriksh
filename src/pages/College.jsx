import React, { useState, useEffect, useRef } from 'react';
import AnimatedNumber from '../components/AnimatedNumber';
import InstitutionalContact from '../components/InstitutionalContact';

const tabs = [
    "Full-Time College Counselling",
    "Soft & Life Skills Classes",
    "Career Guidance & Support",
    "Workshops for Students & Staff",
    "Psychometric Assessment Program",
    "In-Depth Analytics & Reporting – College"
];

const collegeCounsellingCards = [
    {
        title: "Dedicated On-Campus Counsellor",
        desc: "A qualified counsellor available on campus to support your staff and students.",
        icon: "/icons/wdwo1.png"
    },
    {
        title: "Proactive Workshops and Training",
        desc: "Regular workshops, awareness sessions for well-being & early identification of concerns.",
        icon: "/icons/wdwo2.png"
    },
    {
        title: "Crisis Management Support",
        desc: " Immediate help and professional guidance during difficult or emergency situations.",
        icon: "/icons/wdwo3.png"
    },
    {
        title: "Career & Academic Guidance",
        desc: "Assistance with course selection, career planning, internships, and goal-setting.",
        icon: "/icons/wdwo4.png"
    },
    {
        title: "Confidential & Ethical Practice",
        desc: "Safe, private counselling services ensure trust and confidentiality in every interaction.",
        icon: "/icons/wdwo5.png"
    },
    {
        title: "Structured Documentation & Analytics",
        desc: "Regular case reports, well-being trend analysis, and insights to support informed decisions.",
        icon: "/icons/wdwo6.png"
    }
];

const softSkillsCards = [
    {
        title: "Effective Communication",
        desc: "Enhance verbal, written, and presentation skills for academic and professional success.",
        icon: "/icons/soft1.png"
    },
    {
        title: "Time Management",
        desc: "Learn to prioritize, plan, and balance studies, projects, and personal life.",
        icon: "/icons/soft2.png"
    },
    {
        title: "Teamwork & Leadership",
        desc: "Collaborate effectively, lead projects, and take initiative confidently.",
        icon: "/icons/soft3.png"
    },
    {
        title: "Emotional Intelligence & Resilience",
        desc: "Develop self-awareness, manage stress, and adapt to challenges.",
        icon: "/icons/soft4.png"
    },
    {
        title: "Interview & Professional Etiquette",
        desc: "Prepare for interviews, build resumes, and practice workplace manners.",
        icon: "/icons/soft5.png"
    },
    {
        title: "Critical Thinking & Problem Solving",
        desc: "Improve decision-making, analytical thinking, and practical problem-solving skills.",
        icon: "/icons/soft6.png"
    }
];

const careerGuidanceCards = [
    {
        title: "Career Assessment",
        desc: "Identify strengths, skills, interests, and suitable career paths.",
        icon: "/icons/career1.png"
    },
    {
        title: "Career Counselling Sessions",
        desc: "One-on-one guidance to clarify options and make informed decisions.",
        icon: "/icons/career2.png"
    },
    {
        title: "Goal Setting & Action Planning",
        desc: "Set short-term and long-term academic and career goals.",
        icon: "/icons/career3.png"
    },
    {
        title: "Job Readiness",
        desc: "Prepare resumes, cover letters, and develop interview skills.",
        icon: "/icons/career4.png"
    },
    {
        title: "Ongoing Mentorship & Support",
        desc: "Continuous guidance to navigate academic, personal, and career challenges.",
        icon: "/icons/career5.png"
    },
    {
        title: "Skill Development & Workshops",
        desc: "Learn essential skills like communication, leadership, and professional etiquette.",
        icon: "/icons/career6.png"
    }
];

const workshopCards = [
    {
        title: "Expert-Led & Interactive",
        desc: "Sessions conducted by experienced professionals.",
        icon: "/icons/work c1.png"
    },
    {
        title: "Customizable Topics",
        desc: "Workshops tailored to your college’s needs and priorities.",
        icon: "/icons/work c2.png"
    },
    {
        title: "Role-Appropriate Content",
        desc: "Designed specifically for students or staff.",
        icon: "/icons/work c3.png"
    },
    {
        title: "Practical & Skill-Focused",
        desc: "Actionable strategies and techniques that can be applied immediately.",
        icon: "/icons/work c4.png"
    },
    {
        title: "Preventive & Development Oriented",
        desc: "Promoting overall well-being and positive college culture",
        icon: "/icons/work c5.png"
    },
    {
        title: "Structured Documentation & Reports",
        desc: "Session summaries, feedback insights, and management-level documentation.",
        icon: "/icons/work c6.png"
    }
];

const psychometricCards = [
    {
        title: "Scientifically Validated Tools",
        desc: "Standardized assessments for reliable and accurate insights.",
        icon: "/icons/Psycho 1.png"
    },
    {
        title: "Holistic Student Profiling",
        desc: "Understand cognitive abilities, personality, behavior, and emotional patterns.",
        icon: "/icons/Psycho 2.png"
    },
    {
        title: "Early Identification of Concerns",
        desc: "Screening for learning, attention, and emotional challenges.",
        icon: "/icons/Psycho 3.png"
    },
    {
        title: "Individual Feedback & Guidance",
        desc: "Clear interpretation sessions with students and, where needed, parents or staff.",
        icon: "/icons/Psycho 4.png"
    },
    {
        title: "Data-Driven Interventions",
        desc: "Personalized recommendations for academic, career, and personal development.",
        icon: "/icons/Psycho 5.png"
    },
    {
        title: "Documentation & Analytics",
        desc: "Detailed reports, progress tracking, and management-level summaries.",
        icon: "/icons/Psycho 6.png"
    }
];

const analyticsCards = [
    {
        title: "Well-Being Trend Analysis",
        desc: "Track patterns in student emotional, behavioral, and academic well-being.",
        icon: "/icons/In depth1.png"
    },
    {
        title: "Risk Indicator Mapping",
        desc: "Early detection of high-risk areas among student groups or departments.",
        icon: "/icons/In depth2.png"
    },
    {
        title: "Intervention Impact Measurement",
        desc: "Measure the effectiveness of counselling, workshops, and support initiatives.",
        icon: "/icons/In depth3.png"
    },
    {
        title: "Course & Demographic Insights",
        desc: "Data segmented by program, year, or student demographics for targeted action.",
        icon: "/icons/In depth4.png"
    },
    {
        title: "Periodic Leadership Reports",
        desc: "Structured summaries for management and college leadership review.",
        icon: "/icons/In depth5.png"
    },
    {
        title: "Evidence-Based Recommendations",
        desc: "Strategic, data-driven action plans for student growth and campus well-being.",
        icon: "/icons/In depth6.png"
    }
];

const offerCards = collegeCounsellingCards;

const trustedStats = [
    { end: 5000, suffix: '+', label: 'Strong Professional Network (PAN India)', icon: '/icons/Mask group2.png' },
    { end: 4.8, decimals: 1, suffix: '/5', label: 'Client Rating', icon: '/icons/Mask group.png' },
    { end: 20000, suffix: '+', label: 'Students Benefited', icon: '/icons/Mask 1.png' },
    { end: 100, suffix: '%', label: 'Private & Confidential', icon: '/icons/Mask 1.png' },
];

const College = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const tabsRef = useRef(null);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 640);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    useEffect(() => {
        setCurrentSlide(0);

        // Scroll active tab into view on mobile
        if (isMobile && tabsRef.current) {
            const activeTabElement = tabsRef.current.children[activeTab];
            if (activeTabElement) {
                const container = tabsRef.current;

                // Small delay to ensure layout is ready
                setTimeout(() => {
                    const scrollTarget = activeTabElement.offsetLeft - (container.offsetWidth / 2) + (activeTabElement.offsetWidth / 2);
                    const startScroll = container.scrollLeft;
                    const distance = scrollTarget - startScroll;
                    const duration = 1000; // Slower scroll duration (1 second)
                    let startTime = null;

                    const animateScroll = (timestamp) => {
                        if (!startTime) startTime = timestamp;
                        const progress = Math.min((timestamp - startTime) / duration, 1);

                        // EaseInOutQuad function
                        const easing = progress < 0.5
                            ? 2 * progress * progress
                            : 1 - Math.pow(-2 * progress + 2, 2) / 2;

                        container.scrollLeft = startScroll + (distance * easing);

                        if (progress < 1) {
                            requestAnimationFrame(animateScroll);
                        }
                    };

                    requestAnimationFrame(animateScroll);
                }, 50);
            }
        }
    }, [activeTab, isMobile]);

    // Auto-cycle tabs on mobile
    useEffect(() => {
        if (!isMobile) return;

        const interval = setInterval(() => {
            setActiveTab((prev) => (prev + 1) % tabs.length);
        }, 5000); // Cycle every 5 seconds

        return () => clearInterval(interval);
    }, [isMobile]);

    const [typedText, setTypedText] = useState('');
    const fullText = '"Safe Campus"';
    const line1Part = '"Saf';
    const [animationPhase, setAnimationPhase] = useState('initial-blink'); // phases: 'initial-blink', 'typing-line1', 'move-down', 'typing-line2', 'complete'

    useEffect(() => {
        let timer;
        if (animationPhase === 'initial-blink') {
            timer = setTimeout(() => {
                setAnimationPhase('typing-line1');
            }, 1000);
        } else if (animationPhase === 'typing-line1') {
            if (typedText.length < line1Part.length) {
                timer = setTimeout(() => {
                    setTypedText(line1Part.slice(0, typedText.length + 1));
                }, 150);
            } else {
                timer = setTimeout(() => {
                    setAnimationPhase('move-down');
                }, 500);
            }
        } else if (animationPhase === 'move-down') {
            timer = setTimeout(() => {
                setAnimationPhase('typing-line2');
            }, 300);
        } else if (animationPhase === 'typing-line2') {
            if (typedText.length < fullText.length) {
                timer = setTimeout(() => {
                    setTypedText(fullText.slice(0, typedText.length + 1));
                }, 150);
            } else {
                setAnimationPhase('complete');
            }
        } else if (animationPhase === 'complete') {
            timer = setTimeout(() => {
                setTypedText('');
                setAnimationPhase('initial-blink');
            }, 3000); // Wait 3s before looping
        }
        return () => clearTimeout(timer);
    }, [animationPhase, typedText]);

    return (
        <section className="bg-white pt-0">
            {/* ── Purple Header Banner ── */}
            <div className="bg-[#520378] pt-24 pb-6 sm:pt-36 sm:pb-10 text-center relative z-10 w-full">
                <div className="max-w-[1240px] mx-auto px-6">
                    <h1 className="text-xl sm:text-4xl font-bold text-white uppercase tracking-wider font-inter-tight">
                        COLLEGE-BASED MENTAL HEALTH PROGRAM
                    </h1>
                </div>
            </div>

            <div
                className="w-full py-12 sm:py-20 flex flex-col items-center"
                style={{ background: 'linear-gradient(180deg, #FFFAE4 0%, #FFFFFF 100%)' }}
            >
                {/* ── Split Content Section (Hero) ── */}
                <div className="max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-14 flex flex-col lg:flex-row items-center lg:items-center gap-10 lg:gap-16 w-full mb-16 lg:mb-24">
                    {/* Left side text */}
                    <div className="flex-1 max-w-[600px] flex flex-col justify-center">
                        <h2 className="text-2xl sm:text-4xl lg:text-[38px] font-bold text-[#062623] leading-[1.1] mb-5 font-inter-tight tracking-tight">
                            Nurturing Resilience, <br />  Empowering Students
                        </h2>
                        <p className="text-sm lg:text-base sm:text-[17px] text-gray-700 leading-[1.7] mb-6 max-w-[750px] font-medium font-geist">
                            Create a resilient campus where students feel supported, confident, and ready to face life’s challenges. Our programs help young adults manage stress, build healthy relationships, and develop emotional skills essential for personal and academic growth. Through counselling, wellbeing initiatives, and mental health awareness, we support students in navigating challenges and preparing for the future. By fostering a positive and inclusive campus culture, we help build a healthier, stronger learning environment.
                        </p>
                        <div>
                            <button className="bg-[#520378] text-white px-5 py-2 sm:px-10 sm:py-4 rounded-full font-bold text-[13px] sm:text-base hover:bg-[#6b049d] transition-all transform hover:scale-105 shadow-md active:scale-95">
                                Partner With Us
                            </button>
                        </div>
                    </div>

                    {/* Right side image */}
                    <div className="flex-1 w-full flex justify-center lg:justify-end overflow-hidden rounded-[16px] shadow-lg max-w-[650px]">
                        <img
                            src="/images/clg01.png"
                            alt="College students learning"
                            className="w-full aspect-[4.9/3] object-cover transition-transform duration-700 hover:scale-110 scale-120"
                        />
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col items-center mt-[-4rem]">
                <div className="max-w-[1240px] mx-auto px-6 flex flex-col items-center text-center">
                    <h2 className="text-black text-2xl sm:text-4xl lg:text-[38px] font-bold leading-[1.1] mb-5 font-inter-tight min-h-[1.2em]">
                        Together we help you build
                        <span className="text-[#F37321]">
                            {(animationPhase === 'initial-blink' || animationPhase === 'typing-line1') && typedText}
                            {(animationPhase === 'initial-blink' || animationPhase === 'typing-line1') && <span className="cursor-blink">|</span>}
                        </span>
                        <br />
                        <span className="text-[#F37321]">
                            {(animationPhase === 'move-down' || animationPhase === 'typing-line2' || animationPhase === 'complete') && typedText}
                            {(animationPhase === 'move-down' || animationPhase === 'typing-line2' || animationPhase === 'complete') && animationPhase !== 'complete' && <span className="cursor-blink">|</span>}
                        </span>
                    </h2>
                    <style>{`
                        @keyframes blink {
                            0%, 100% { opacity: 1; }
                            50% { opacity: 0; }
                        }
                        .cursor-blink {
                            display: inline-block;
                            margin-left: 2px;
                            animation: blink 0.8s infinite;
                            font-weight: 300;
                            color: #F37321;
                        }
                        .scrollbar-hide::-webkit-scrollbar {
                            display: none;
                        }
                        .scrollbar-hide {
                            -ms-overflow-style: none;
                            scrollbar-width: none;
                        }
                    `}</style>
                    <div className="flex justify-center">
                        <button className="bg-[#520378] text-white px-5 py-2 sm:px-10 sm:py-4 rounded-full font-bold text-[13px] sm:text-base hover:bg-[#6b049d] transition-all transform hover:scale-105 shadow-md active:scale-95">
                            Get in Touch With Us
                        </button>
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
                        <p className="text-white/90 text-[13px] sm:text-[19px] text-center max-w-[800px] mb-8 sm:mb-10 font-geist leading-[1.6]">
                            A comprehensive, campus-based mental health program designed to support college students’ emotional well-being, resilience, and holistic development.

                        </p>

                        {/* Desktop Tabs (Hidden on Mobile) */}
                        <div className="hidden sm:flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 px-2 lg:px-12 w-full max-w-[1900px]">
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

                        {/* Mobile Tabs & Arrows (Above Cards) */}
                        <div className="flex sm:hidden flex-col items-center w-full mt-4">
                            {/* Tabs - Horizontally Scrollable with Animation */}
                            <div
                                ref={tabsRef}
                                className="flex flex-nowrap overflow-x-auto scrollbar-hide gap-3 mb-6 px-6 w-full relative"
                                style={{ WebkitOverflowScrolling: 'touch' }}
                            >
                                {tabs.map((tab, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveTab(idx)}
                                        className={`px-5 py-2.5 rounded-full text-[12px] transition-all duration-[600ms] font-medium whitespace-nowrap flex-shrink-0 ${activeTab === idx
                                            ? 'bg-white text-[#520378] shadow-lg scale-105 font-bold'
                                            : 'bg-transparent text-white/80 border border-white/30 hover:bg-white/10'
                                            }`}
                                    >
                                        <div className="relative flex flex-col items-center">
                                            {tab}
                                            {activeTab === idx && (
                                                <div className="absolute -bottom-[20px] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-white z-20"></div>
                                            )}
                                        </div>
                                    </button>
                                ))}
                            </div>

                        </div>

                        <div className="w-full max-w-[1100px] mt-2 sm:mt-6 mb-8 overflow-visible py-4 sm:py-0 relative">
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
                                            const currentCards = activeTab === 0 ? collegeCounsellingCards : activeTab === 1 ? softSkillsCards : activeTab === 2 ? careerGuidanceCards : activeTab === 3 ? workshopCards : activeTab === 4 ? psychometricCards : analyticsCards;
                                            setCurrentSlide(prev => (prev + 1) * 3 < currentCards.length ? prev + 1 : prev);
                                        }}
                                        disabled={(() => {
                                            const currentCards = activeTab === 0 ? collegeCounsellingCards : activeTab === 1 ? softSkillsCards : activeTab === 2 ? careerGuidanceCards : activeTab === 3 ? workshopCards : activeTab === 4 ? psychometricCards : analyticsCards;
                                            return (currentSlide + 1) * 3 >= currentCards.length;
                                        })()}
                                        className={`absolute right-[-15px] top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#520378]/20 border border-white/30 flex items-center justify-center transition-all z-20 ${(() => {
                                            const currentCards = activeTab === 0 ? collegeCounsellingCards : activeTab === 1 ? softSkillsCards : activeTab === 2 ? careerGuidanceCards : activeTab === 3 ? workshopCards : activeTab === 4 ? psychometricCards : analyticsCards;
                                            return (currentSlide + 1) * 3 >= currentCards.length;
                                        })() ? 'opacity-0 pointer-events-none' : 'hover:bg-white/10 active:scale-95'}`}
                                    >
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </>
                            )}

                            <div className="overflow-hidden w-full">
                                <div
                                    className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-6 gap-y-10 sm:gap-y-14 lg:gap-y-16 transition-transform duration-1000 ease-in-out"
                                    style={{
                                        transform: isMobile ? `translateX(-${currentSlide * 100}%)` : 'none',
                                        display: isMobile ? 'flex' : 'grid',
                                        gap: isMobile ? '0' : undefined
                                    }}
                                >
                                    {(() => {
                                        const currentCards = activeTab === 0
                                            ? collegeCounsellingCards
                                            : activeTab === 1
                                                ? softSkillsCards
                                                : activeTab === 2
                                                    ? careerGuidanceCards
                                                    : activeTab === 3
                                                        ? workshopCards
                                                        : activeTab === 4
                                                            ? psychometricCards
                                                            : analyticsCards;

                                        if (isMobile) {
                                            const slides = [];
                                            for (let i = 0; i < currentCards.length; i += 3) {
                                                slides.push(currentCards.slice(i, i + 3));
                                            }
                                            return slides.map((slideCards, slideIdx) => (
                                                <div key={slideIdx} className="w-full flex-shrink-0 flex flex-col gap-y-10 px-2">
                                                    {slideCards.map((card, idx) => (
                                                        <div key={idx} className="relative w-full flex flex-col drop-shadow-[0_4px_16px_rgba(0,0,0,0.06)] pt-8">
                                                            <div className="absolute -top-[4px] left-6 w-[72px] h-[72px] bg-white rounded-[12px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] flex items-center justify-center z-10 border border-gray-100">
                                                                <div className="w-[54px] h-[54px] bg-white rounded-[8px] flex items-center justify-center">
                                                                    <img src={card.icon} alt="icon" className="w-[36px] h-[36px] object-contain" />
                                                                </div>
                                                            </div>
                                                            <div className="bg-white rounded-[16px] pt-10 pb-6 px-5 h-full min-h-[160px] flex flex-col items-start relative z-0 border border-gray-100/30">
                                                                <h3 className="text-[#1A1A1A] text-[18px] font-bold mb-3 font-geist leading-[1.3] z-10">
                                                                    {card.title}
                                                                </h3>
                                                                <p className="text-[#4A5568] text-[13.5px] font-geist leading-[1.6]">
                                                                    {card.desc}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            ));
                                        }

                                        return currentCards.map((card, idx) => (
                                            <div key={idx} className="relative w-full flex flex-col drop-shadow-[0_4px_16px_rgba(0,0,0,0.06)] h-full pt-8 sm:pt-10">
                                                <div className="absolute -top-[4px] left-6 sm:left-6 w-[72px] h-[72px] bg-white rounded-[12px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] flex items-center justify-center z-10 border border-gray-100">
                                                    <div className="w-[54px] h-[54px] bg-white rounded-[8px] flex items-center justify-center">
                                                        <img src={card.icon} alt="icon" className="w-[36px] h-[36px] object-contain" />
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
                                        ));
                                    })()}
                                </div>
                            </div>

                            <div className="mt-8 sm:mt-12 flex justify-center">
                                <button className="bg-white hover:bg-gray-50 text-[#520378] px-8 py-3.5 rounded-full font-bold text-[14px] sm:text-[15px] transition-all hover:scale-105 active:scale-95 shadow-md">
                                    Get in Touch With Us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Silent Struggles Section ── */}
            <div className="relative w-full py-10 sm:py-16 bg-white overflow-hidden">
                <div
                    className="absolute -top-40 left-10 w-[1800px] sm:w-[800px] h-full bg-no-repeat bg-left-top opacity-50 pointer-events-none"
                    style={{ backgroundImage: "url('/images/abt.png')", backgroundSize: 'contain' }}
                ></div>

                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">
                    <h2 className="text-[#520378] text-[20px] sm:text-[34px] font-bold mb-4 font-inter-tight text-center">
                        Student Well-Being at Risk
                    </h2>
                    <p className="text-[#333333] text-[13px] sm:text-[19px] text-center max-w-[800px] mb-4 sm:mb-20 lg:mb-6 font-geist leading-[1.6]">
                        Indian students face rising risks of excessive screen use, risky substance<br className="hidden sm:block" />
                        habits, and growing mental health challenges.
                    </p>

                    {/* Overlapping Circles Container */}
                    <div className="grid grid-cols-2 md:flex md:flex-row items-center justify-center w-full max-w-[1000px] gap-0 sm:gap-0 mt-2 mb-4 sm:mt-0 sm:mb-0">
                        {/* Circle 1 */}
                        <div className="w-[160px] h-[160px] sm:w-[260px] sm:h-[260px] rounded-full border-[0.5px] border-[#999999] bg-transparent flex flex-col items-center justify-center text-center p-3 sm:p-4 z-10 translate-x-[6%] translate-y-[5%] md:translate-x-0 md:translate-y-14 hover:bg-gray-50/50 transition-all duration-300">
                            <h3 className="text-[#F37321] text-[28px] sm:text-[44px] font-medium mb-1 leading-none"><AnimatedNumber end={60} />-<AnimatedNumber end={70} suffix="%" /></h3>
                            <p className="text-[#1A1A1A] text-[9px] sm:text-[15px] font-normal leading-[1.4] max-w-[150px]">of students experience<br />moderate to severe anxiety <br />or depressive symptoms</p>
                        </div>

                        {/* Circle 2 */}
                        <div className="w-[160px] h-[160px] sm:w-[260px] sm:h-[260px] rounded-full border-[0.5px] border-[#999999] bg-transparent flex flex-col items-center justify-center text-center p-3 sm:p-4 z-20 -translate-x-[6%] translate-y-[5%] md:translate-x-0 md:-ml-8 hover:bg-gray-50/50 transition-all duration-300">
                            <h3 className="text-[#F37321] text-[28px] sm:text-[48px] font-medium mb-1 leading-none"><AnimatedNumber end={20} />–<AnimatedNumber end={25} suffix="%" /></h3>
                            <p className="text-[#1A1A1A] text-[9px] sm:text-[15px] font-normal leading-[1.4] max-w-[150px]">of students engage <br />in risky alcohol,<br />tobacco, or drug use</p>
                        </div>

                        {/* Circle 3 (Below and Centered) */}
                        <div className="col-span-2 flex justify-center -mt-6 sm:mt-0">
                            <div className="w-[160px] h-[160px] sm:w-[260px] sm:h-[260px] rounded-full border-[0.5px] border-[#999999] bg-transparent flex flex-col items-center justify-center text-center p-3 sm:p-4 z-30 -translate-y-[8%] md:translate-y-12 md:-ml-8 hover:bg-gray-50/50 transition-all duration-300">
                                <h3 className="text-[#F37321] text-[28px] sm:text-[48px] font-medium mb-1 leading-none"><AnimatedNumber end={65} />–<AnimatedNumber end={70} suffix="%" /></h3>
                                <p className="text-[#1A1A1A] text-[9px] sm:text-[15px] font-normal leading-[1.4] max-w-[150px]">of students experience<br />moderate to severe <br />anxiety or depressive <br />symptoms</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Benefits Section ── */}
            <div
                className="w-full pt-0 pb-10 sm:py-14"
                style={{ background: 'linear-gradient(360deg, #FFF9E3 0%, #FFFFFF 100%)' }}
            >
                <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 flex flex-col items-center">
                    <h2 className="text-[#101828] text-[20px] sm:text-[34px] font-bold mb-4 font-inter-tight text-center tracking-wide">
                        College-Based Mental Health Program Benefits
                    </h2>
                    <p className="text-[#475467] text-[13px] sm:text-[19px] text-center max-w-[800px] mb-8 sm:mb-10 font-geist leading-[1.6]">
                        Our structured mental health framework strengthens student wellbeing, equips educators, prevents crises, and fosters a positive campus culture where everyone thrives.
                    </p>

                    <div className="flex flex-col lg:flex-row items-stretch justify-between w-full gap-4 lg:gap-16">
                        <div className="flex-1 w-full flex justify-center lg:justify-start">
                            <img
                                src="/images/banner 5.png"
                                alt="College students"
                                className="w-full max-w-[550px] lg:max-w-[500px] xl:max-w-[550px] object-cover rounded-[16px] shadow-md"
                            />
                        </div>

                        <div className="flex-[1.5] w-full grid grid-cols-2 gap-y-8 gap-x-4 sm:gap-y-10 sm:gap-x-10 items-start content-center py-4">
                            {/* Item 1 */}
                            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 h-auto sm:h-[90px] w-full">
                                <div className="flex-shrink-0 w-auto sm:w-[120px] flex justify-center">
                                    <img src="/icons/Guidance.png" alt="Guidance" className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] object-contain" />
                                </div>
                                <div className="bg-[#FCA253] rounded-[8px] p-2 sm:p-3 flex-1 w-full h-full min-h-[60px] sm:min-h-0 flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
                                    <span className="text-[#1A1A1A] text-[11px] sm:text-[13.5px] font-bold text-center leading-[1.2] sm:leading-[1.3] font-inter-tight tracking-wide">
                                        Campus-Wide<br className="sm:hidden" /> Wellbeing<br />Architecture
                                    </span>
                                </div>
                            </div>

                            {/* Item 2 */}
                            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 h-auto sm:h-[90px] w-full">
                                <div className="flex-shrink-0 w-auto sm:w-[120px] flex justify-center">
                                    <img src="/icons/confidential.png" alt="Confidential" className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] object-contain" />
                                </div>
                                <div className="bg-[#FCA253] rounded-[8px] p-2 sm:p-3 flex-1 w-full h-full min-h-[60px] sm:min-h-0 flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
                                    <span className="text-[#1A1A1A] text-[11px] sm:text-[13.5px] font-bold text-center leading-[1.2] sm:leading-[1.3] font-inter-tight tracking-wide">
                                        Academic<br className="sm:hidden" /> & Behavioral<br />Support
                                    </span>
                                </div>
                            </div>

                            {/* Item 3 */}
                            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 h-auto sm:h-[90px] w-full">
                                <div className="flex-shrink-0 w-auto sm:w-[120px] flex justify-center">
                                    <img src="/icons/convenices.png" alt="Identification" className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] object-contain" />
                                </div>
                                <div className="bg-[#FCA253] rounded-[8px] p-2 sm:p-3 flex-1 w-full h-full min-h-[60px] sm:min-h-0 flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
                                    <span className="text-[#1A1A1A] text-[11px] sm:text-[13.5px] font-bold text-center leading-[1.2] sm:leading-[1.3] font-inter-tight tracking-wide">
                                        Early Identification<br className="sm:hidden" /> & Preventive Support
                                    </span>
                                </div>
                            </div>

                            {/* Item 4 */}
                            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 h-auto sm:h-[90px] w-full">
                                <div className="flex-shrink-0 w-auto sm:w-[120px] flex justify-center">
                                    <img src="/icons/export support.png" alt="Empowerment" className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] object-contain" />
                                </div>
                                <div className="bg-[#FCA253] rounded-[8px] p-2 sm:p-3 flex-1 w-full h-full min-h-[60px] sm:min-h-0 flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
                                    <span className="text-[#1A1A1A] text-[11px] sm:text-[13.5px] font-bold text-center leading-[1.2] sm:leading-[1.3] font-inter-tight tracking-wide">
                                        Faculty <br className="sm:hidden" /> Empowerment<br />Programs
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 sm:mt-10 flex justify-center">
                        <button className="bg-[#520378] hover:bg-[#400260] text-white px-6 py-3.5 sm:px-10 sm:py-4 rounded-full font-bold text-[14px] sm:text-[15px] transition-all hover:scale-105 active:scale-95 shadow-lg tracking-wide">
                            Get Started Today
                        </button>
                    </div>
                </div>
            </div>

            {/* ── Trusted Partner Section ── */}
            <div className="w-full bg-white py-16 sm:py-20 px-4 sm:px-8 relative z-20">
                <div
                    className="max-w-[1240px] mx-auto rounded-[20px] pt-12 pb-10 sm:pt-14 sm:pb-12 px-6 sm:px-10 lg:px-12 shadow-xl"
                    style={{ background: '#520378' }}
                >
                    <h2 className="text-white text-center text-[20px] sm:text-[34px] font-bold mb-14 sm:mb-16 font-inter-tight tracking-wide">
                        What Makes Us Your Trusted Partner?
                    </h2>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 gap-y-12 sm:gap-y-16 lg:gap-8">
                        {trustedStats.map((stat, index) => (
                            <div key={index} className="relative mt-0 sm:mt-0">
                                {/* Icon top-left - absolutely positioned to overlap */}
                                <div className="absolute -top-[16px] left-[-4%] sm:-top-[26px] sm:left-[-6%] w-[38px] h-[38px] sm:w-[56px] sm:h-[56px] bg-white rounded-[8px] sm:rounded-[14px] flex items-center justify-center border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.1)] z-10">
                                    <img
                                        src={stat.icon}
                                        alt={stat.label}
                                        className="w-[20px] h-[20px] sm:w-[32px] sm:h-[32px] object-contain"
                                    />
                                </div>
                                {/* Content Card */}
                                <div className="bg-[#F8EAFD] rounded-[10px] sm:rounded-[12px] pt-[20px] sm:pt-[42px] pb-4 sm:pb-7 px-2 sm:px-7 w-full aspect-square sm:aspect-auto sm:h-full shadow-sm flex flex-col items-center sm:items-start justify-center text-center sm:text-left sm:min-h-[110px] overflow-hidden">
                                    <div className="text-[18px] sm:text-[20px] lg:text-[22px] font-bold text-gray-950 font-inter-tight leading-tight mb-0.5">
                                        <AnimatedNumber end={stat.end} decimals={stat.decimals} suffix={stat.suffix} />
                                    </div>
                                    <div className="text-[11px] sm:text-[14px] text-gray-600 font-medium text-center sm:text-left leading-tight sm:leading-normal">
                                        {stat.label}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Institutional Contact Section ── */}
            <InstitutionalContact programType="College-Based" />

        </section >
    );
};

export default College;
