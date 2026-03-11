import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const topUpPrograms = [
    {
        title: "Corporate Wellness Events",
        subtext: "Interactive, play-based activities help employees relax and recharge.",
        desc: "Interactive, play-based activities help employees relax, recharge, and boost morale while strengthening team bonding, creating a more positive and connected workplace environment.",
        image: "/images/Corporate Wellness Events.jpg",
        cta: "Enquire Now"
    },
    {
        title: "Maternity Support Programme",
        subtext: "Support new mothers through a smooth and confident transition back to work.",
        desc: "At Vriksh, expert counselling and guided support help mothers feel emotionally prepared while navigating both pre- and post-maternity phases.",
        image: "/images/Maternity Support Programme.jpg",
        imagePosition: "md:object-[70%_center]",
        cta: "Enquire Now"
    },
    {
        title: "Peer Support Champions",
        subtext: "Trained peers provide first-line emotional support within the workplace.",
        desc: "They listen with empathy, offer initial guidance, and help employees connect with professional counsellors when additional support is needed.",
        image: "/images/peer support.jpg",
        cta: "Enquire Now"
    },
    {
        title: "4-Week Emotional Intelligence Program",
        subtext: "Develop the skills to understand, manage, and respond to emotions effectively.",
        desc: "Build self-awareness, strengthen relationships, and enhance communication through practical emotional intelligence skills.",
        image: "/images/EMOTIONAL INTELLIGENCE.jpg",
        cta: "Enquire Now"
    }
];

const CardContent = ({ program }) => {
    const handleEnquireClick = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="w-[82%] md:w-[90%] max-w-[950px] h-auto md:h-[450px] bg-[#f8f9fa] rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col md:flex-row border border-gray-100">
                <div className="md:w-[45%] h-[140px] md:h-full bg-white p-4">
                    <div className="w-full h-full rounded-xl overflow-hidden shadow-inner">
                        <img src={program.image} alt={program.title} className={`w-full h-full object-cover ${program.imagePosition || 'object-center'}`} />
                    </div>
                </div>
                <div className="md:w-[55%] p-5 md:p-12 flex flex-col justify-center text-left">
                    <h3 className="text-[#1A1A1A] text-lg md:text-[clamp(18px,4vw,42px)] font-bold mb-2.5 tracking-tight md:leading-[1.1]">{program.title}</h3>
                    <p className="text-[#1A1A1A] text-[11px] md:text-[18px] font-medium mb-2 opacity-90">{program.subtext}</p>
                    <p className="text-[#475467] text-[10px] md:text-base leading-relaxed mb-5">{program.desc}</p>
                    <button
                        onClick={handleEnquireClick}
                        className="w-fit bg-[#1A1A1A] text-white px-5 py-2 text-[13px] md:px-8 md:py-3 md:text-base rounded-full font-bold md:hover:bg-black transition-colors md:active:scale-95"
                    >
                        {program.cta}
                    </button>
                </div>
            </div>
        </div>
    );
};

const TopUpsSlider = () => {
    const containerRef = useRef(null);
    const cardsRef = useRef([]);
    const [isMobile, setIsMobile] = useState(
        typeof window !== 'undefined'
            ? (('matchMedia' in window && window.matchMedia('(pointer: coarse)').matches) || window.innerWidth < 1024)
            : false
    );
    const [mobileIndex, setMobileIndex] = useState(0);
    const scrollRef = useRef(null);

    useEffect(() => {
        const checkMobile = () => {
            const isTouch = 'matchMedia' in window ? window.matchMedia('(pointer: coarse)').matches : false;
            setIsMobile(isTouch || window.innerWidth < 1024);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (isMobile && scrollRef.current) {
            const el = scrollRef.current;
            const child = el.children[mobileIndex];
            if (child) {
                const centeredLeft = child.offsetLeft - (el.clientWidth - child.clientWidth) / 2;
                el.scrollTo({ left: centeredLeft, behavior: 'auto' });
            }
        }
    }, [isMobile, mobileIndex]);

    useGSAP(() => {
        if (isMobile || !containerRef.current) return;

        const cards = cardsRef.current.filter(Boolean);

        // Set initial positions
        gsap.set(cards[0], { zIndex: 1, yPercent: 0 });
        gsap.set(cards.slice(1), {
            yPercent: 150,
            zIndex: (i) => i + 2
        });

        // Create scroll timeline - pins when container top hits viewport top
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",        // Pin when top of container hits top of viewport
                end: "+=1800",           // Reduced for faster scroll progression
                scrub: 0.6,              // Lowered for snappier, more responsive movement
                pin: true,               // Pin the entire container
                pinSpacing: true,
                anticipatePin: 1,
            }
        });

        // Animate cards stacking
        cards.forEach((card, i) => {
            if (i === 0) {
                tl.to({}, { duration: 0.3 }); // Reduced pause for first card
                return;
            }

            tl.to(card, {
                yPercent: 0,
                ease: "power2.out",    // Faster exit than inOut
                duration: 1
            });

            tl.to({}, { duration: 0.3 }); // Reduced pause for subsequent cards
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, { dependencies: [isMobile] });

    if (isMobile) {
        const scrollToIndex = (i) => {
            const el = scrollRef.current;
            if (!el) return;
            const child = el.children[i];
            if (!child) return;
            const centeredLeft = child.offsetLeft - (el.clientWidth - child.clientWidth) / 2;
            el.scrollTo({ left: centeredLeft, behavior: 'smooth' });
        };
        const prev = () => {
            const next = Math.max(0, mobileIndex - 1);
            setMobileIndex(next);
            scrollToIndex(next);
        };
        const next = () => {
            const max = topUpPrograms.length - 1;
            const nextIdx = Math.min(max, mobileIndex + 1);
            setMobileIndex(nextIdx);
            scrollToIndex(nextIdx);
        };
        const onScroll = () => {
            const el = scrollRef.current;
            if (!el) return;
            let nearest = 0;
            let minDelta = Infinity;
            Array.from(el.children).forEach((child, idx) => {
                const delta = Math.abs(child.offsetLeft - el.scrollLeft);
                if (delta < minDelta) {
                    minDelta = delta;
                    nearest = idx;
                }
            });
            if (nearest !== mobileIndex) setMobileIndex(nearest);
        };
        return (
            <div className="bg-[#520378] py-12">
                <h2 className="text-white text-3xl font-bold text-center mb-6">Top ups</h2>
                <div className="relative">
                    <button
                        onClick={prev}
                        disabled={mobileIndex === 0}
                        className={`absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 text-white border border-white/30 flex items-center justify-center z-20 ${mobileIndex === 0 ? 'opacity-30 pointer-events-none' : 'active:scale-95'}`}
                        aria-label="Previous"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button
                        onClick={next}
                        disabled={mobileIndex >= topUpPrograms.length - 1}
                        className={`absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 text-white border border-white/30 flex items-center justify-center z-20 ${mobileIndex >= topUpPrograms.length - 1 ? 'opacity-30 pointer-events-none' : 'active:scale-95'}`}
                        aria-label="Next"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
                    </button>
                    <div
                        ref={scrollRef}
                        onScroll={onScroll}
                        className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-0 scroll-smooth no-scrollbar justify-center"
                    >
                        {topUpPrograms.map((p, i) => (
                            <div key={i} className="snap-center shrink-0 w-[78vw]">
                                <CardContent program={p} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div ref={containerRef} className="bg-[#520378] w-full min-h-screen overflow-hidden flex flex-col items-center justify-between py-12">
            {/* Header */}
            <div className="text-center px-4 z-50 flex-shrink-0">
                <h2 className="text-white text-5xl font-extrabold mb-4">Top ups</h2>
                <p className="text-white/80 max-w-5xl mx-auto text-lg">
                    Like a cherry on the cake, we are more than just an Employee Assistance Program (EAP) platform.
                    Our additional programs are thoughtfully designed to engage diverse employee interests while strengthening overall workplace wellbeing.
                </p>
            </div>

            {/* Cards Container */}
            <div className="relative w-full max-w-[1200px] h-[500px] flex items-center justify-center flex-shrink-0">
                {topUpPrograms.map((program, idx) => (
                    <div
                        key={idx}
                        ref={el => cardsRef.current[idx] = el}
                        className="absolute w-full h-full flex items-center justify-center"
                    >
                        <CardContent program={program} />
                    </div>
                ))}
            </div>


        </div>
    );
};

export default TopUpsSlider;
