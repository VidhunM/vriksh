import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

// 4 CARDS for top-up section
const topUpPrograms = [
    {
        title: "Corporate Wellness Events",
        desc: "Interactive, play-based activities help employees relax, recharge, and boost morale while strengthening team bonding, creating a more positive and connected workplace environment",
        image: "/images/Corporate Wellness Events.jpg"
    },
    {
        title: "Maternity Support Programme",
        desc: "At Vriksh, expert counselling and guided support help mothers feel emotionally prepared while navigating both pre- and post-maternity phases.",
        image: "/images/Maternity Support Programme.jpg"
    },
    {
        title: "Peer Support Champions",
        desc: "They listen with empathy, offer initial guidance, and help employees connect with professional counsellors when additional support is needed.",
        image: "/images/peer support.jpg"
    },
    {
        title: "4-Week Emotional Intelligence Program",
        desc: "Build self-awareness, strengthen relationships, and enhance communication through practical emotional intelligence skills.",
        image: "/images/EMOTIONAL INTELLIGENCE.jpg"
    }
];

// Card Content Component (reusable) - SMALLER CARD SIZE, NO PROGRAM NUMBERS, NO SUBTITLE
const CardContent = ({ program, index }) => (
    <div className="w-full h-full flex items-center justify-center">
        <div className="w-[90%] max-w-[900px] h-[450px] bg-white rounded-[24px] shadow-[0_15px_30px_rgba(0,0,0,0.1)] overflow-hidden border border-white/50 flex flex-col md:flex-row">
            {/* Image Part - Smaller */}
            <div className="md:w-[40%] h-[180px] md:h-full bg-[#F9FAFB] p-4 flex items-center justify-center relative overflow-hidden">
                <div className="w-full h-full rounded-[12px] overflow-hidden shadow-lg relative group/img border-2 border-white">
                    <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover/img:scale-110"
                    />
                </div>
            </div>

            {/* Content Part - Smaller, No Program Number, No Subtitle */}
            <div className="md:w-[60%] p-6 sm:p-8 flex flex-col justify-center items-start text-left bg-white">
                <h3 className="text-[#1A1A1A] text-[22px] sm:text-[28px] lg:text-[32px] font-bold mb-3 font-inter-tight leading-tight">
                    {program.title}
                </h3>
                <p className="text-[#475467] text-[13px] sm:text-[15px] lg:text-[16px] font-geist leading-[1.6] mb-6 opacity-90">
                    {program.desc}
                </p>
                <button className="group relative bg-[#520378] hover:bg-[#400260] text-white px-8 py-3 rounded-full font-bold text-[14px] transition-all hover:scale-105 active:scale-95 shadow-[0_8px_20px_rgba(82,3,120,0.2)] flex items-center gap-2 overflow-hidden">
                    <span className="relative z-10">Enquire Now</span>
                    <svg className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
);

// TopUpsSlider Component with Fixed Card Stacking Animation (4 Cards)
const TopUpsSlider = () => {
    const mainContainer = useRef(null);
    const cardsRef = useRef([]);
    const [isMobile, setIsMobile] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useGSAP(() => {
        const cards = cardsRef.current;
        if (!cards || cards.length === 0 || !mainContainer.current || isMobile) return;

        // Kill any existing ScrollTriggers
        ScrollTrigger.getAll().forEach(st => st.kill());
        
        // Set container to have position relative
        gsap.set(mainContainer.current, { 
            position: 'relative'
        });
        
        // Set all cards to absolute positioning with CENTERED positioning
        gsap.set(cards, {
            position: 'absolute',
            top: '50%',
            left: '50%',
            xPercent: -50,
            width: '100%',
            height: '100%'
        });

        // CARD 1: Perfectly centered (visible)
        gsap.set(cards[0], { 
            yPercent: -50,
            zIndex: 10
        });
        
        // CARDS 2,3,4: Start completely below the viewport
        gsap.set(cards[1], { 
            yPercent: 150,
            zIndex: 20
        });
        
        gsap.set(cards[2], { 
            yPercent: 150,
            zIndex: 30
        });

        gsap.set(cards[3], { 
            yPercent: 150,
            zIndex: 40
        });

        // Calculate scroll distance - Restored for smoother, more controlled scrolling
        const scrollDistance = window.innerHeight * 5;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: mainContainer.current,
                start: "top top",
                end: `+=${scrollDistance}`,
                pin: true,
                scrub: 1.2,
                pinSpacing: true,
                invalidateOnRefresh: true,
                anticipatePin: 1,
                markers: false
            }
        });

        // STEP 1: First card is already centered - add pause (Reduced for faster start)
        tl.to({}, { duration: 0.6 });

        // STEP 2: Card 2 slides up to center
        tl.to(cards[1], {
            yPercent: -50,
            duration: 1,
            ease: "power2.inOut"
        });

        // Hold Card 2
        tl.to({}, { duration: 0.8 });

        // STEP 3: Card 3 slides up to center
        tl.to(cards[2], {
            yPercent: -50,
            duration: 1,
            ease: "power2.inOut"
        });

        // Hold Card 3
        tl.to({}, { duration: 0.8 });

        // STEP 4: Card 4 slides up to center
        tl.to(cards[3], {
            yPercent: -50,
            duration: 1,
            ease: "power2.inOut"
        });

        // Hold Card 4
        tl.to({}, { duration: 1 });

        setTimeout(() => ScrollTrigger.refresh(), 100);

        return () => {
            ScrollTrigger.getAll().forEach(st => st.kill());
        };
    }, { scope: mainContainer, dependencies: [isMobile] });

    // Mobile version - simple slider
    if (isMobile) {
        return (
            <div className="w-full min-h-screen bg-[#520378] relative z-[40] flex flex-col items-center justify-center overflow-hidden">
                <div className="w-full max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-14 flex flex-col items-center text-center">
                    <h2 className="text-white text-[28px] sm:text-[42px] lg:text-[48px] font-extrabold mb-4 font-inter-tight tracking-tight">
                        Top ups
                    </h2>
                    <p className="text-white/80 text-[13px] sm:text-[19px] text-center max-w-[1000px] mb-12 sm:mb-16 font-geist leading-[1.6]">
                        Like a cherry on the cake, we are more than just an Employee Assistance Program (EAP) platform. Our additional programs are thoughtfully designed to engage diverse employee interests while strengthening overall workplace wellbeing
                    </p>
                </div>

                <div className="w-full max-w-[1100px] mx-auto px-4 relative">
                    {/* Mobile Cards */}
                    <div className="relative h-[500px] overflow-hidden">
                        {topUpPrograms.map((program, idx) => (
                            <div
                                key={idx}
                                className={`absolute w-full transition-all duration-500 ease-in-out ${
                                    idx === currentIndex 
                                        ? 'opacity-100 translate-x-0' 
                                        : idx < currentIndex 
                                            ? 'opacity-0 -translate-x-full' 
                                            : 'opacity-0 translate-x-full'
                                }`}
                                style={{ zIndex: idx === currentIndex ? 10 : 0 }}
                            >
                                <CardContent program={program} index={idx} />
                            </div>
                        ))}
                    </div>
                    
                    {/* Mobile Navigation */}
                    <div className="flex justify-center gap-4 mt-6">
                        <button
                            onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                            disabled={currentIndex === 0}
                            className="w-10 h-10 rounded-full bg-white text-[#520378] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center font-bold text-xl"
                        >
                            ←
                        </button>
                        <button
                            onClick={() => setCurrentIndex(prev => Math.min(topUpPrograms.length - 1, prev + 1))}
                            disabled={currentIndex === topUpPrograms.length - 1}
                            className="w-10 h-10 rounded-full bg-white text-[#520378] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center font-bold text-xl"
                        >
                            →
                        </button>
                    </div>
                    
                    {/* Dot Indicators */}
                    <div className="flex justify-center gap-2 mt-4">
                        {topUpPrograms.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`h-2 rounded-full transition-all ${
                                    idx === currentIndex 
                                        ? 'w-6 bg-white' 
                                        : 'w-2 bg-white/40'
                                }`}
                            />
                        ))}
                    </div>

                    <div className="mt-8 text-center">
                        <button className="bg-white text-[#520378] hover:bg-gray-100 px-10 py-3.5 rounded-full font-bold text-[16px] transition-all hover:scale-105 active:scale-95 shadow-xl">
                            Talk to Us
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // Desktop version with fixed GSAP stacking effect (4 cards)
    return (
        <div className="w-full bg-[#520378] relative z-[40] flex flex-col items-center justify-center overflow-hidden" ref={mainContainer}>
            <div className="w-full max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-14 flex flex-col items-center text-center pt-16">
                <h2 className="text-white text-[28px] sm:text-[42px] lg:text-[48px] font-extrabold mb-4 font-inter-tight tracking-tight">
                    Top ups
                </h2>
                <p className="text-white/80 text-[13px] sm:text-[19px] text-center max-w-[900px] mb-12 sm:mb-16 font-geist leading-[1.6]">
                    Like a cherry on the cake, we are more than just an Employee Assistance Program (EAP) platform. Our additional programs are thoughtfully designed to engage diverse employee interests while strengthening overall workplace wellbeing
                </p>
            </div>

            <div className="w-full max-w-[1200px] mx-auto relative h-[500px]">
                {topUpPrograms.map((program, idx) => (
                    <div
                        key={idx}
                        ref={el => cardsRef.current[idx] = el}
                        className="absolute top-0 left-0 w-full h-full"
                    >
                        <CardContent program={program} index={idx} />
                    </div>
                ))}
            </div>

            <div className="w-full max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-14 text-center pb-16">
                <button className="bg-white text-[#520378] hover:bg-gray-100 px-10 py-3.5 rounded-full font-bold text-[16px] transition-all hover:scale-105 active:scale-95 shadow-xl">
                    Talk to Us
                </button>
            </div>
        </div>
    );
};

export default TopUpsSlider;