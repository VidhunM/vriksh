import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EventDetails = () => {
    const { id } = useParams();

    // Testimonials State
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsVisible, setItemsVisible] = useState(3);

    // GSAP Refs
    const containerRef = useRef(null);
    const cardRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) setItemsVisible(1);
            else if (window.innerWidth < 1024) setItemsVisible(2);
            else setItemsVisible(3);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const eventsData = {
        '1': {
            title: 'ADHD Toolkit – Practical Strategies & Activities',
            tag: 'Workshop',
            type: 'Webinar',
            level: 'Beginner',
            summary: 'Learn practical strategies and explore 20+ engaging activities to support children and teens with Attention Deficit Hyperactivity Disorder. Gain tools to improve attention, sitting tolerance, impulse control, and focus.',
            rating: 4.9,
            createdBy: 'Vriksh Psychological Support Services | Vriksh E-Academy',
            lastUpdated: '2026',
            language: 'English',
            price: 'Rs.1000',
            image: '/images/uc1.jpeg',
            time: '5:00PM - 6:30 PM',
            date: '20-03-2026',
            highlights: [
                '20+ practical activities for real world application',
                'E-Certificate from Vriksh Psychological Support Services'
            ],
            description: [
                'Want to better support children and teens with Attention Deficit Hyperactivity Disorder (ADHD)? In this session, you’ll gain practical, hands-on strategies to understand ADHD and effectively support attention, behaviour regulation, and focus in everyday settings like home and school.'
            ],
            whatYouLearn: [
                "Understand the overview and key challenges of Attention Deficit Hyperactivity Disorder (ADHD) in children and teens",
                "Learn 20+ practical activities to improve attention, sitting tolerance, impulse control, and focus",
                "Explore effective strategies for parents and teachers, including ready-to-use templates and homework ideas",
                "Access activity materials and an E-Certificate to support practical implementation"
            ],
            whoFor: [
                "Parents", "Teachers", "Psychology students", "Counsellors",
                "Anyone interested in understanding and supporting children with ADHD"
            ]
        },
        '2': {
            title: 'Self-Care: Pause, Recharge & Reconnect',
            tag: 'Workshop',
            type: 'Webinar',
            level: 'Beginner',
            summary: 'Learn simple, practical strategies to nurture your emotional and mental well-being. Explore mindful practices and self-care tools that help you pause, reconnect with yourself, and manage everyday stress.',
            rating: 4.9,
            createdBy: 'Vriksh Psychological Support Services | Vriksh E-Academy',
            lastUpdated: '2026',
            language: 'English',
            price: 'FREE',
            image: '/images/uc2.jpeg',
            time: '6:00PM - 7:00 PM',
            date: '04-04-2026',
            cardTitle: 'AI for Brainstorming and Planning',
            highlights: [
                'Simple self-care practices for everyday well-being',
                'Guided mindfulness activity'
            ],
            description: [
                'Feeling overwhelmed or constantly busy? This Free Self-Care Webinar is designed to help you slow down, reflect, and reconnect with yourself. In this interactive session, you will learn practical self-care techniques and mindfulness practices that support emotional balance and mental clarity.',
                'Through simple exercises and guided reflection, participants will discover ways to integrate self-care into their daily routine and build healthier habits for overall well-being.'
            ],
            whatYouLearn: [
                'Understand the importance of self-care for emotional and mental well-being.',
                'Learn simple self-care strategies to manage stress and maintain balance in daily life.',
                'Practice guided mindfulness techniques to relax the mind and reconnect with yourself.',
                'Discover daily micro self-care habits that can be easily integrated into your routine.'
            ],
            whoFor: [
                'Students, working professionals, parents, educators, and anyone who wants to prioritize their mental and emotional well-being.'
            ],
            enrollLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfD_XU_your_form_id/viewform',
            whatsappLink: 'https://docs.google.com/forms/d/e/1FAIpQLScv1Mc0UCKWzHuRPmqcTKOmR7q6tqSrX9qWJQCtGlh7PbNitg/viewform?usp=publish-editor'
        },
        '3': {
            title: 'Building Trust with Students in Counselling Sessions',
            tag: 'Workshop',
            type: 'Webinar',
            level: 'Beginner',
            summary: 'Learn practical ways to build trust with students, create a safe counselling space, and communicate with empathy while maintaining ethical confidentiality.',
            rating: 4.9,
            createdBy: 'Vriksh Psychological Support Services | Vriksh E-Academy',
            lastUpdated: '2026',
            language: 'English',
            price: 'FREE',
            image: '/images/uc3.jpeg',
            time: '6:00PM - 7:00 PM',
            date: '23-03-2026',
            highlights: [
                'Practical trust-building exercises',
                'Ethical confidentiality boundaries'
            ],
            description: [
                'Trust is the heart of effective counselling. When students feel safe, respected, and heard, they are more likely to open up and seek support.',
                'This interactive workshop helps counsellors understand how small behaviours—such as listening, empathy, and clear communication - can build strong connections with students. Through simple activities, short role-play exercises, and real counselling scenarios, participants will explore practical ways to create safe and supportive counselling environments. The session will also highlight the importance of confidentiality and how to communicate its boundaries ethically while maintaining student trust.'
            ],
            whatYouLearn: [
                'Understand why trust and rapport are essential in student counselling.',
                'Learn simple communication techniques that help students feel comfortable sharing.',
                'Explore ways to create safe and supportive counselling spaces.',
                'Understand confidentiality and ethical boundaries when working with students.',
                'Engage in short interactive activities and reflection exercises to practice trust-building approaches.'
            ],
            whoFor: [
                'School counsellors, college counsellors, psychologists, educators, and professionals who work closely with students and want to strengthen their counselling practice.'
            ]
        }
    };

    // Default to event 1 if no ID or invalid ID
    const event = eventsData[id] || eventsData['1'];

    // Smooth Floating Card Effect using GSAP
    useEffect(() => {
        let ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            mm.add("(min-width: 1024px)", () => {
                const container = containerRef.current;
                const card = cardRef.current;

                if (container && card) {
                    // 380 margin-top compensate + flex item padding
                    const maxTranslate = container.offsetHeight - card.offsetHeight + 380;

                    if (maxTranslate > 0) {
                        gsap.to(card, {
                            y: maxTranslate,
                            ease: "none",
                            scrollTrigger: {
                                trigger: container,
                                start: "top top+=128", // Start when top of container hits 128px from top of viewport
                                end: "bottom bottom", // End when bottom of container hits bottom of viewport
                                scrub: 1.5, // 1.5 second lag for smooth floating effect
                                invalidateOnRefresh: true
                            }
                        });
                    }
                }
            });
        });

        return () => ctx.revert();
    }, [event]);

    const reviews = [
        {
            name: 'Ananya R.',
            role: 'Individual Counselling Client',
            text: 'Vriksh provided me with a safe and understanding space to express myself. The sessions helped me manage my anxiety and rebuild my confidence step by step. I truly felt heard and supported throughout my journey.',
            rating: 5,
            date: 'June 2025'
        },
        {
            name: 'Ananya R.',
            role: 'Individual Counselling Client',
            text: 'Vriksh provided me with a safe and understanding space to express myself. The sessions helped me manage my anxiety and rebuild my confidence step by step. I truly felt heard and supported throughout my journey.',
            rating: 5,
            date: 'June 2025'
        },
        {
            name: 'Ananya R.',
            role: 'Individual Counselling Client',
            text: 'Vriksh provided me with a safe and understanding space to express myself. The sessions helped me manage my anxiety and rebuild my confidence step by step. I truly felt heard and supported throughout my journey.',
            rating: 5,
            date: 'June 2025'
        }
    ];

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + itemsVisible) % reviews.length);
    }, [reviews.length, itemsVisible]);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - itemsVisible + reviews.length) % reviews.length);
    };

    const getVisibleReviews = () => {
        const result = [];
        for (let i = 0; i < itemsVisible; i++) {
            result.push(reviews[(currentIndex + i) % reviews.length]);
        }
        return result;
    };
    const handleEnrollNow = () => {
        if (event.enrollLink) {
            window.open(event.enrollLink, '_blank');
        } else {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleWhatsappJoin = () => {
        if (event.whatsappLink) {
            window.open(event.whatsappLink, '_blank');
        }
    };

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <div className="bg-[#520378] pt-28 pb-12 sm:pt-40 sm:pb-20">
                <div className="max-w-[1320px] mx-auto px-6 relative">
                    <div className="lg:w-2/3">
                        <h1 className="text-white text-3xl sm:text-5xl font-bold mb-6 leading-tight font-inter-tight">
                            {event.title}
                        </h1>
                        <p className="text-white/90 text-sm sm:text-lg mb-8 max-w-2xl leading-relaxed">
                            {event.summary}
                        </p>

                        {/* Rating */}
                        <div className="flex items-center gap-2.5 mb-8">
                            <div className="w-6 h-6 flex items-center justify-center">
                                <svg viewBox="0 0 24 24" className="w-full h-full">
                                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.07-3.71 1.07-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                    <path fill="#FBBC05" d="M5.84 14.11c-.22-.67-.35-1.39-.35-2.11s.13-1.44.35-2.11V7.05H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.95l3.66-2.84z" />
                                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.05l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                </svg>
                            </div>
                            <div className="flex items-center gap-1.5 text-orange-400 text-[18px]">
                                <span className="text-white font-bold mr-1">{event.rating || "4.9"}</span>
                                {Array.from({ length: Math.floor(event.rating || 4.9) }).map((_, i) => <span key={i}>★</span>)}
                                {(event.rating || 4.9) % 1 !== 0 && <span>★</span>}
                            </div>
                        </div>

                        {/* Badges - White pill with purple text */}
                        <div className="bg-white rounded-full px-5 py-2.5 w-fit mb-8 shadow-sm">
                            <span className="text-[#520378] text-sm font-bold">{event.createdBy}</span>
                        </div>

                        {/* Meta */}
                        <div className="flex items-center gap-6 text-white text-sm sm:text-base font-medium">
                            <div className="flex items-center gap-2">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                Last updated {event.lastUpdated}
                            </div>
                            <div className="flex items-center gap-2">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                                {event.language}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-[1320px] mx-auto px-6 pt-6 pb-20 relative">
                {/* Flex container that holds everything */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20" ref={containerRef}>
                    {/* Right: Card - Order 1 on mobile, 2 on desktop */}
                    <div className="lg:w-1/3 relative z-20 order-1 lg:order-2">
                        {/* Remove lg:sticky and lg:top-32, replacing with GSAP control */}
                        <div ref={cardRef} className="bg-white rounded-[24px] shadow-2xl border border-gray-100 overflow-hidden lg:-mt-[380px] will-change-transform">
                            {/* Card Image */}
                            <div className="aspect-video relative overflow-hidden">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Card Details */}
                            <div className="p-6">
                                {/* Info Grid */}
                                <div className="grid grid-cols-2 gap-y-6 mb-8">
                                    <div className="flex flex-col gap-1">
                                        <div className="flex items-center gap-2 text-gray-900">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                                            <span className="text-[13px] font-medium text-gray-500">Type</span>
                                        </div>
                                        <span className="text-[15px] font-bold text-[#520378] ml-6.5">{event.type}</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex items-center gap-2 text-gray-900">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M18 20V10"></path><path d="M12 20V4"></path><path d="M6 20v-6"></path></svg>
                                            <span className="text-[13px] font-medium text-gray-500">Level</span>
                                        </div>
                                        <span className="text-[15px] font-bold text-[#520378] ml-6.5">{event.level}</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex items-center gap-2 text-gray-900">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                            <span className="text-[13px] font-medium text-gray-500">Date</span>
                                        </div>
                                        <span className="text-[15px] font-bold text-[#520378] ml-6.5">{event.date}</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex items-center gap-2 text-gray-900">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                            <span className="text-[13px] font-medium text-gray-500">Time</span>
                                        </div>
                                        <span className="text-[15px] font-bold text-[#520378] ml-6.5">{event.time}</span>
                                    </div>
                                </div>

                                <div className="h-px bg-gray-200 mb-6"></div>

                                <div className="text-center mb-6">
                                    <span className="text-2xl font-bold text-gray-950 font-inter-tight">
                                        {event.price}{event.price !== 'FREE' && ' Incl. GST'}
                                    </span>
                                </div>

                                <div className="space-y-3">
                                    <button
                                        onClick={handleEnrollNow}
                                        className="w-full bg-[#520378] text-white py-3.5 rounded-full font-bold text-lg hover:bg-black transition-all active:scale-[0.98] shadow-lg"
                                    >
                                        Enroll Now
                                    </button>
                                    {event.whatsappLink && (
                                        <button
                                            onClick={handleWhatsappJoin}
                                            className="w-full border-2 border-[#520378] text-[#520378] py-3.5 rounded-full font-bold text-lg hover:bg-[#520378] hover:text-white transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                                        >
                                            Register Here
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Left: Description, What you'll learn, Who For, Other Events - Order 2 on mobile, 1 on desktop */}
                    <div className="lg:w-2/3 order-2 lg:order-1">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-950 mb-6 font-inter-tight">Description:</h2>
                        <div className="prose prose-lg text-gray-700 max-w-none font-geist leading-relaxed">
                            {event.description.map((p, i) => (
                                <p key={i} className="mb-4">{p}</p>
                            ))}
                        </div>

                        {/* What you'll learn */}
                        <div className="mt-12 bg-[#FFFDEA] rounded-2xl p-8 sm:p-10 border border-[#F3E6C7]">
                            <h3 className="text-2xl sm:text-2xl font-bold text-gray-950 mb-8 font-inter-tight">What you'll learn:</h3>
                            <ul className="space-y-6">
                                {event.whatYouLearn.map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 group">
                                        <div className="mt-1 bg-black rounded-full p-1 shrink-0">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        </div>
                                        <span className="text-gray-700 text-[15px] sm:text-[17px] leading-relaxed font-geist">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Who this session is for - Moved inside Left Column */}
                        <div className="mt-16">
                            <h3 className="text-2xl font-bold text-gray-950 mb-8 font-inter-tight">Who this session is for:</h3>
                            <div className="flex flex-wrap gap-x-10 gap-y-6 mb-6">
                                {event.whoFor.map((audience, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="bg-black rounded-full p-0.5 shrink-0">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        </div>
                                        <span className="text-gray-700 text-[16px] font-medium font-geist">{audience}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Other Events - Moved inside Left Column */}
                        <div className="mt-20">
                            <h3 className="text-2xl font-bold text-gray-950 mb-10 font-inter-tight">Other Events</h3>
                            <div className="flex overflow-x-auto gap-4 md:gap-5 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden pb-6 -mx-6 px-6 md:mx-0 md:px-0">
                                {Object.values(eventsData)
                                    .filter(ev => ev.title !== event.title) // Exclude current event
                                    .slice(0, 2) // Take only "Self Care" and "Building Trust" if event 1 is active
                                    .map((ev, i) => {
                                        // Find the key/id for this event to use in the link
                                        const evId = Object.keys(eventsData).find(key => eventsData[key].title === ev.title);
                                        return (
                                            <Link
                                                to={`/event-details/${evId}`}
                                                key={i}
                                                className={`shrink-0 w-[85vw] sm:w-[380px] snap-center bg-white hover:bg-[#F3F3F3] rounded-[16px] px-6 py-5 flex flex-row items-center shadow-sm border border-gray-100 transition-all duration-300 group cursor-pointer justify-center min-h-[100px]`}
                                            >
                                                {/* Card Content - Just Title */}
                                                <h3 className={`text-[16px] xl:text-[18px] font-bold text-gray-950 group-hover:text-[#520378] leading-tight font-geist text-center transition-colors m-0`}>
                                                    {ev.title}
                                                </h3>
                                            </Link>
                                        )
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* What our Clients say - Local slider to avoid changing Testimonials.jsx */}
            <section id="testimonials" className="py-12 sm:py-16 bg-[#FEF9E7]">
                <div className="max-w-[1320px] mx-auto px-6">
                    <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end mb-8 sm:mb-12 gap-6 sm:gap-0">
                        <div className="max-w-[550px]">
                            <h2 className="text-2xl md:text-[34px] font-bold text-gray-950 leading-[1.1] text-center sm:text-left font-inter-tight">
                                What our Clients say
                            </h2>
                        </div>
                        <div className="flex gap-3 self-end sm:self-auto">
                            <button
                                onClick={prevSlide}
                                className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-100 hover:shadow-md transition-all active:scale-95 group"
                            >
                                <svg className="w-5 h-5 text-gray-600 group-hover:text-[#2563eb] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path></svg>
                            </button>
                            <button
                                onClick={nextSlide}
                                className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-100 hover:shadow-md transition-all active:scale-95 group"
                            >
                                <svg className="w-5 h-5 text-gray-600 group-hover:text-[#2563eb] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 transition-all duration-700">
                        {getVisibleReviews().map((rev, index) => (
                            <div
                                key={`${rev.name}-${currentIndex}-${index}`}
                                className="bg-white p-6 md:p-10 rounded-[24px] md:rounded-[32px] shadow-sm border border-gray-100 flex flex-col h-full transition-transform hover:scale-[1.01] cursor-default"
                            >
                                <div className="mb-4 sm:mb-5">
                                    <h4 className="text-base sm:text-[18px] font-bold text-black mb-0.5 font-inter-tight">{rev.name}</h4>
                                    <span className="text-xs sm:text-[13px] font-semibold text-[#272727CC] inline-block mb-3 sm:mb-4">{rev.role}</span>
                                    <p className="text-[#4b5563] text-[13px] sm:text-[15px] leading-[1.6] mb-2 flex-grow">
                                        "{rev.text}"
                                    </p>
                                </div>

                                <div className="mt-auto pt-5 border-t border-gray-50 flex items-center justify-between">
                                    <div className="flex items-center gap-2.5">
                                        <div className="w-5 h-5 flex items-center justify-center">
                                            <svg viewBox="0 0 24 24" className="w-full h-full">
                                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.07-3.71 1.07-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                                <path fill="#FBBC05" d="M5.84 14.11c-.22-.67-.35-1.39-.35-2.11s.13-1.44.35-2.11V7.05H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.95l3.66-2.84z" />
                                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.05l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                            </svg>
                                        </div>
                                        <div className="flex gap-0.5">
                                            {[...Array(rev.rating)].map((_, i) => (
                                                <svg key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#fbbf24] fill-current" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                    <span className="text-xs sm:text-[13px] font-medium text-gray-500">{rev.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {reviews.length > itemsVisible && (
                        <div className="flex justify-center gap-1.5">
                            {[...Array(Math.ceil(reviews.length / itemsVisible))].map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index * itemsVisible)}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${Math.floor(currentIndex / itemsVisible) === index
                                        ? 'w-6 bg-[#2563eb]'
                                        : 'w-1.5 bg-gray-300 hover:bg-gray-400'
                                        }`}
                                    aria-label={`Go to page ${index + 1}`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </section>

        </div>
    );
};

export default EventDetails;
