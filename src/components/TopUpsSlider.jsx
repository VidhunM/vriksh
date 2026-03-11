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
            <div className="w-[90%] max-w-[950px] h-auto md:h-[450px] bg-[#f8f9fa] rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col md:flex-row border border-gray-100">
                <div className="md:w-[45%] h-[200px] md:h-full bg-white p-4">
                    <div className="w-full h-full rounded-xl overflow-hidden shadow-inner">
                        <img src={program.image} alt={program.title} className={`w-full h-full object-cover ${program.imagePosition || 'object-center'}`} />
                    </div>
                </div>
                <div className="md:w-[55%] p-8 md:p-12 flex flex-col justify-center text-left">
                    <h3 className="text-[#1A1A1A] text-2xl md:text-[clamp(18px,4vw,42px)] font-bold mb-4 tracking-tight md:leading-[1.1]">{program.title}</h3>
                    <p className="text-[#1A1A1A] text-sm md:text-[18px] font-medium mb-3 opacity-90">{program.subtext}</p>
                    <p className="text-[#475467] text-[12px] md:text-base leading-relaxed mb-8">{program.desc}</p>
                    <button
                        onClick={handleEnquireClick}
                        className="w-fit bg-[#1A1A1A] text-white px-8 py-3 rounded-full font-bold md:hover:bg-black transition-colors md:active:scale-95"
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
    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 1024 : false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

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
        return (
            <div className="bg-[#520378] py-20 px-6">
                <h2 className="text-white text-3xl font-bold text-center mb-10">Top ups</h2>
                <div className="space-y-8">
                    {topUpPrograms.map((p, i) => <CardContent key={i} program={p} />)}
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
