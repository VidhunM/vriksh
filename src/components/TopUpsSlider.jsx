import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

// Program data
const topUpPrograms = [
    {
        id: 1,
        title: "Corporate Wellness Events",
        desc: "Interactive, play-based activities help employees relax, recharge, and boost morale while strengthening team bonding, creating a more positive and connected workplace environment",
        image: "/images/Corporate Wellness Events.jpg"
    },
    {
        id: 2,
        title: "Maternity Support Programme",
        desc: "At Vriksh, expert counselling and guided support help mothers feel emotionally prepared while navigating both pre- and post-maternity phases.",
        image: "/images/Maternity Support Programme.jpg"
    },
    {
        id: 3,
        title: "Peer Support Champions",
        desc: "They listen with empathy, offer initial guidance, and help employees connect with professional counsellors when additional support is needed.",
        image: "/images/peer support.jpg"
    },
    {
        id: 4,
        title: "4-Week Emotional Intelligence Program",
        desc: "Build self-awareness, strengthen relationships, and enhance communication through practical emotional intelligence skills.",
        image: "/images/EMOTIONAL INTELLIGENCE.jpg"
    }
];

// Card Component - Optimized for full visibility
const ProgramCard = ({ program, isActive }) => (
    <div className="w-full h-full flex items-center justify-center p-4 md:p-6">
        <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row transform transition-all duration-300 hover:shadow-3xl">
            {/* Image Section - Adjusted proportions */}
            <div className="md:w-2/5 h-64 md:h-auto bg-gradient-to-br from-[#F9FAFB] to-gray-100 p-6 flex items-center justify-center">
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                    <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                        onError={(e) => {
                            e.target.src = "https://via.placeholder.com/600x400?text=Wellness+Program";
                        }}
                    />
                </div>
            </div>

            {/* Content Section - Adjusted padding for better fit */}
            <div className="md:w-3/5 p-8 md:p-10 lg:p-12 flex flex-col justify-center bg-white">
                <h3 className="text-[#1A1A1A] text-2xl md:text-3xl lg:text-4xl font-bold mb-4 font-inter-tight leading-tight">
                    {program.title}
                </h3>
                <p className="text-[#4B5563] text-sm md:text-base lg:text-lg font-geist leading-relaxed mb-8">
                    {program.desc}
                </p>
                <button className="group relative bg-[#520378] hover:bg-[#3a0154] text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_10px_25px_rgba(82,3,120,0.3)] flex items-center gap-3 w-fit">
                    <span>Enquire Now</span>
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
);

const TopUpsSlider = () => {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const cardsContainerRef = useRef(null);
    const cardsRef = useRef([]);
    const footerRef = useRef(null);
    
    const [isMobile, setIsMobile] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    // Check mobile view
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Desktop GSAP Animation
    useGSAP(() => {
        if (isMobile) return;

        const cards = cardsRef.current;
        if (!cards.length || !sectionRef.current || !cardsContainerRef.current) return;

        // Clean up existing ScrollTriggers
        ScrollTrigger.getAll().forEach(st => st.kill());

        const viewportHeight = window.innerHeight;
        
        // Calculate header and footer heights
        const headerHeight = headerRef.current?.offsetHeight || 180;
        const footerHeight = footerRef.current?.offsetHeight || 80;
        
        // Available space for cards
        const availableHeight = viewportHeight - headerHeight - footerHeight;
        
        // Set container height to fill available space
        gsap.set(cardsContainerRef.current, {
            height: availableHeight,
            position: 'relative',
            marginTop: `${headerHeight}px`,
            marginBottom: `${footerHeight}px`
        });

        // Set initial card positions - all perfectly centered in available space
        cards.forEach((card, index) => {
            gsap.set(card, {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: index === 0 ? 1 : 0,
                scale: index === 0 ? 1 : 0.95,
                zIndex: cards.length - index,
                transformOrigin: 'center center',
                pointerEvents: index === 0 ? 'auto' : 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            });
        });

        // Total scroll distance - adjusted for smooth transitions
        const totalScrollDistance = viewportHeight * 3;

        // Main timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: `+=${totalScrollDistance}`,
                pin: true,
                scrub: 1,
                pinSpacing: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                markers: false
            },
            defaults: {
                ease: "power2.inOut",
                duration: 1
            },
            onUpdate: function() {
                const progress = this.progress();
                if (progress < 0.25) setActiveIndex(0);
                else if (progress < 0.5) setActiveIndex(1);
                else if (progress < 0.75) setActiveIndex(2);
                else setActiveIndex(3);
            }
        });

        // Card transition sequence
        // Card 1 to Card 2
        tl.to(cards[0], {
            opacity: 0,
            scale: 0.95,
            duration: 0.8,
            pointerEvents: 'none'
        }, 0)
        .to(cards[1], {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            pointerEvents: 'auto'
        }, 0.2)

        // Card 2 to Card 3
        .to(cards[1], {
            opacity: 0,
            scale: 0.95,
            duration: 0.8,
            pointerEvents: 'none'
        }, 1.2)
        .to(cards[2], {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            pointerEvents: 'auto'
        }, 1.4)

        // Card 3 to Card 4
        .to(cards[2], {
            opacity: 0,
            scale: 0.95,
            duration: 0.8,
            pointerEvents: 'none'
        }, 2.4)
        .to(cards[3], {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            pointerEvents: 'auto'
        }, 2.6);

        // Refresh ScrollTrigger after setup
        setTimeout(() => ScrollTrigger.refresh(), 200);

        return () => {
            ScrollTrigger.getAll().forEach(st => st.kill());
        };
    }, { scope: sectionRef, dependencies: [isMobile] });

    // Mobile Slider Component
    if (isMobile) {
        return (
            <div className="w-full bg-[#520378] py-12 min-h-screen flex items-center">
                <div className="container mx-auto px-4">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h2 className="text-white text-4xl font-bold mb-4 font-inter-tight">
                            Top ups
                        </h2>
                        <p className="text-white/80 text-base max-w-2xl mx-auto font-geist">
                            Like a cherry on the cake, we are more than just an Employee Assistance Program (EAP) platform.
                        </p>
                    </div>

                    {/* Mobile Cards - Full height container */}
                    <div className="relative h-[500px] max-w-4xl mx-auto">
                        {topUpPrograms.map((program, idx) => (
                            <div
                                key={program.id}
                                className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                                    idx === activeIndex 
                                        ? 'opacity-100 translate-x-0' 
                                        : idx < activeIndex 
                                            ? 'opacity-0 -translate-x-full' 
                                            : 'opacity-0 translate-x-full'
                                }`}
                                style={{ zIndex: idx === activeIndex ? 10 : 0 }}
                            >
                                <ProgramCard program={program} isActive={idx === activeIndex} />
                            </div>
                        ))}
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex justify-center gap-2 mt-6">
                        {topUpPrograms.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveIndex(idx)}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    idx === activeIndex 
                                        ? 'w-8 bg-white' 
                                        : 'w-2 bg-white/40 hover:bg-white/60'
                                }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>

                    {/* Talk to Us Button */}
                    <div className="text-center mt-8">
                        <button className="bg-white text-[#520378] hover:bg-gray-100 px-8 py-3 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl">
                            Talk to Us
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // Desktop Version - Optimized for full card visibility
    return (
        <section ref={sectionRef} className="w-full bg-[#520378] relative overflow-hidden">
            {/* Header Section - Fixed height */}
            <div ref={headerRef} className="absolute top-0 left-0 w-full z-20">
                <div className="container mx-auto px-6 py-12 text-center">
                    <h2 className="text-white text-5xl md:text-6xl font-extrabold mb-4 font-inter-tight tracking-tight">
                        Top ups
                    </h2>
                    <p className="text-white/80 text-lg max-w-3xl mx-auto font-geist">
                        Like a cherry on the cake, we are more than just an Employee Assistance Program (EAP) platform.
                    </p>
                </div>
            </div>

            {/* Cards Container - Perfectly positioned */}
            <div 
                ref={cardsContainerRef} 
                className="relative w-full"
                style={{ 
                    height: 'calc(100vh - 260px)',
                    marginTop: '180px',
                    marginBottom: '80px'
                }}
            >
                {topUpPrograms.map((program, idx) => (
                    <div
                        key={program.id}
                        ref={el => cardsRef.current[idx] = el}
                        className="absolute inset-0 flex items-center justify-center"
                        style={{ 
                            zIndex: topUpPrograms.length - idx,
                            opacity: idx === 0 ? 1 : 0
                        }}
                    >
                        <ProgramCard 
                            program={program} 
                            isActive={idx === activeIndex} 
                        />
                    </div>
                ))}
            </div>

            {/* Footer Button */}
            <div ref={footerRef} className="absolute bottom-0 left-0 w-full z-20">
                <div className="container mx-auto px-6 py-6 text-center">
                    <button className="bg-white text-[#520378] hover:bg-gray-100 px-10 py-3 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl">
                        Talk to Us
                    </button>
                </div>
            </div>

            {/* Progress Indicators */}
            <div className="fixed right-6 top-1/2 transform -translate-y-1/2 space-y-2 z-50">
                {topUpPrograms.map((_, idx) => (
                    <div
                        key={idx}
                        className={`w-1.5 rounded-full transition-all duration-300 ${
                            idx === activeIndex 
                                ? 'h-8 bg-white' 
                                : 'h-1.5 bg-white/30 hover:bg-white/50'
                        }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default TopUpsSlider;