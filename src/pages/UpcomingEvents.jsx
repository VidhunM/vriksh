import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const UpcomingEvents = () => {
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
            text: "Very informative and useful seminar on DTLD conducted by Vriksh. I would highly recommend all special educators and counselors to attend their sessions.",
            date: "October 2025"
        },
        {
            name: "Suriyasre",
            role: "Counsellor",
            text: "The workshop on Crisis Intervention was highly informative and interactive — truly worth our time. I sincerely appreciate the effort invested in preparing detailed study material, along with the necessary diagnostic tools relevant to the topic. Thank you for the valuable learning experience.",
            date: "November 2024"
        },
        {
            name: "Pooja",
            role: "Counsellor",
            text: "I have attended a few workshops with Vriksh, and each time I was satisfied with the content and the way the sessions were delivered. The experts are highly interactive and engaging. I look forward to learning more with Vriksh.",
            date: "May 2025"
        },
        {
            name: "Dambar Sensei",
            role: "Counsellor",
            text: "I have attended two workshops conducted by your organization. The material was very crisp, and the delivery was effective with excellent engagement. The sessions were highly interactive as well. Thank you for the enriching experience.",
            date: "January 2025"
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

    const faqs = [
        {
            question: "Do I need prior knowledge in psychology to participate?",
            answer: "Not necessarily. Some workshops are meant for psychology students and professionals, while others are beginner-friendly and open to anyone interested in learning. We clearly mention the eligibility for each workshop so you can choose what suits you best."
        },
        {
            question: "Will the workshop be online or offline?",
            answer: "Most of our workshops are conducted online for easy access from anywhere."
        },
        {
            question: "Are the sessions live or recorded?",
            answer: "Most of our workshops are conducted live for interactive learning. Recordings are provided for registered participants for a limited period (if applicable)."
        },
        {
            question: "Will I receive a certificate?",
            answer: "Yes. Participants who attend the workshop and complete required activities (if any) will receive a certificate of participation."
        },
        {
            question: "What makes Vriksh workshops different?",
            answer: "Vriksh workshops stand out because they offer practical, case-based learning with real-life applications, interactive discussions, a strong focus on ethics and documentation, and ready-to-use tools helping you gain clarity and confidence."
        },
        {
            question: "What if I miss a live session?",
            answer: "If recording access is included, you can watch the session later within the given access period."
        },
        {
            question: "Do you provide practical tools and templates?",
            answer: "Yes. We provide short notes and, depending on the topic, many workshops include formats, templates, assessment frameworks, and intervention planning guides."
        },
        {
            question: "Can institutions collaborate with Vriksh?",
            answer: "Yes. We conduct customized webinars and training programs for schools, colleges, and organizations. You can contact us for collaboration details."
        },
        {
            question: "Is there a refund policy?",
            answer: "As seats are limited, fees are generally non-refundable. However, transfers to future batches may be considered on request."
        }
    ];

    const [testIndex, setTestIndex] = useState(0);
    const [openIndex, setOpenIndex] = useState(null);
    const [activeCardId, setActiveCardId] = useState(null);
    const [itemsVisible, setItemsVisible] = useState(3);
    const [programCard, setProgramCard] = useState(0);
    const programTimerRef = useRef(null);

    const programCards = [
        {
            title: "Workshops",
            description: <>Knowledge enrichment sessions with <span className="whitespace-nowrap">well-curated</span> experiential components on focused topics that support skill advancement</>,
            icon: <img src="/icons/workshop.png" alt="Workshops icon" className="w-8 h-8 object-contain" />
        },
        {
            title: "Training Programs",
            description: "Hands-on, interactive programs led by trained psychologists, designed to build practical skills through reflective & insight-oriented learning",
            icon: <img src="/icons/training program.png" alt="Training Programs icon" className="w-8 h-8 object-contain" />
        },
        {
            title: "Certificate Courses",
            description: "Expert-led online courses designed to help you build new skills, strengthen your expertise, and advance confidently in your career",
            icon: <img src="/icons/certificate course.png" alt="Certificate Courses icon" className="w-8 h-8 object-contain" />
        }
    ];

    useEffect(() => {
        programTimerRef.current = setInterval(() => {
            setProgramCard((prev) => (prev + 1) % 3);
        }, 3000);
        return () => clearInterval(programTimerRef.current);
    }, []);

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

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Auto-slide removed to prevent layout shifting
    /*
    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [totalSlides]);
    */
    // --- Event Slider Logic ---
    const eventsScrollRef = React.useRef(null);

    const scrollEventsLeft = () => {
        if (eventsScrollRef.current) {
            eventsScrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollEventsRight = () => {
        if (eventsScrollRef.current) {
            eventsScrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    // Auto-scroll logic for events slider (mobile only)
    useEffect(() => {
        const slider = eventsScrollRef.current;
        if (!slider) return;

        let interval;
        const startAutoScroll = () => {
            interval = setInterval(() => {
                if (window.innerWidth >= 768) return; // Only auto-scroll on mobile

                if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
                    // Reached the end, scroll back to start
                    slider.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    slider.scrollBy({ left: 300, behavior: 'smooth' });
                }
            }, 3000); // 3 seconds per slide
        };

        startAutoScroll();

        // Pause on touch/interaction
        slider.addEventListener('touchstart', () => clearInterval(interval));
        slider.addEventListener('touchend', startAutoScroll);

        return () => {
            clearInterval(interval);
            if (slider) {
                slider.removeEventListener('touchstart', () => clearInterval(interval));
                slider.removeEventListener('touchend', startAutoScroll);
            }
        };
    }, []);

    return (
        <div className="pt-0">
            {/* Header Banner - Centered alignment requested */}
            <div className="bg-[#520378] pt-24 pb-6 sm:pt-32 sm:pb-10 text-center">
                <div className="max-w-[1320px] mx-auto px-6">
                    <h1 className="text-2xl sm:text-4xl font-bold text-white uppercase tracking-wider font-inter-tight">
                        UPCOMING EVENTS
                    </h1>
                </div>
            </div>

            {/* Main Content */}
            <div
                className="py-8 sm:py-12 overflow-hidden"
                style={{ background: 'linear-gradient(180deg, #FFFAE4 0%, #FFFFFF 100%)' }}
            >
                <div className="max-w-[1320px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-12 xl:gap-20">

                    {/* Left Column: Text Content */}
                    <div className="flex-1 text-left">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 leading-[1.25] mb-8 font-geist tracking-normal shrink-0">
                            Bridging Education to <br className="hidden sm:block" /> Professional Practice
                        </h2>

                        <div className="space-y-3">
                            <p className="text-base sm:text-xl font-bold text-[#520378] italic xl:whitespace-nowrap break-keep">
                                Join 5,000+ learners mastering psychology with confidence
                            </p>

                            <p className="text-base sm:text-[19px] lg:text-base text-gray-700 leading-relaxed max-w-[540px]">
                                Bridging theory and real-world practice to deliver accessible, <br className="hidden xl:block" />
                                lifelong learning through customized workshops, training programs, and certification courses
                            </p>
                        </div>
                    </div>

                    {/* Right Column: New Composite Hero Image */}
                    <div className="flex-1 relative w-full lg:w-auto flex items-center justify-center xl:translate-x-10">
                        <img
                            src="/images/Vriksh upcoming events (1) 1.png"
                            alt="Upcoming Workshop Details"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>
            </div>

            {/* Explore Upcoming Events Section */}
            <div className="bg-white py-4 sm:py-6">
                <div className="max-w-[1320px] mx-auto px-6">
                    {/* Header with Title and Nav Arrows */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-6">
                        <div className="max-w-[800px]">
                            <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-900 font-geist">
                                Explore Upcoming Events
                            </h2>
                            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                                At Vriksh E-Academy, dive into focused, expert-led sessions designed to keep
                                you updated, inspired, and continuously growing.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <button
                                onClick={scrollEventsLeft}
                                className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all md:hidden"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="19" y1="12" x2="5" y2="12"></line>
                                    <polyline points="12 19 5 12 12 5"></polyline>
                                </svg>
                            </button>
                            <button
                                onClick={scrollEventsRight}
                                className="w-12 h-12 rounded-full bg-gray-400 text-white flex items-center justify-center hover:bg-black transition-all md:hidden"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Events Grid / Mobile Slider */}
                    <div
                        ref={eventsScrollRef}
                        className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden pb-6 -mx-6 px-6 md:mx-0 md:px-0"
                    >
                        {[
                            {
                                id: 1,
                                title: "Intervention strategies in school counselling",
                                description: "From theory to practice: Activity-based school counselling tools",
                                date: "20-02-2026",
                                time: "6:00 - 7:30PM",
                                rating: "4.9",
                                price: "Rs.800"
                            },
                            {
                                id: 2,
                                title: "Intervention strategies in school counselling",
                                description: "From theory to practice: Activity-based school counselling tools",
                                date: "20-02-2026",
                                time: "6:00 - 7:30PM",
                                rating: "4.9",
                                price: "Rs.800"
                            },
                            {
                                id: 3,
                                title: "Intervention strategies in school counselling",
                                description: "From theory to practice: Activity-based school counselling tools",
                                date: "20-02-2026",
                                time: "6:00 - 7:30PM",
                                rating: "4.9",
                                price: "Rs.800"
                            },
                            {
                                id: 4,
                                title: "Intervention strategies in school counselling",
                                description: "From theory to practice: Activity-based school counselling tools",
                                date: "20-02-2026",
                                time: "6:00 - 7:30PM",
                                rating: "4.9",
                                price: "Rs.800"
                            }
                        ].map((event) => (
                            <div
                                key={event.id}
                                onClick={() => setActiveCardId(activeCardId === event.id ? null : event.id)}
                                className={`shrink-0 w-[85vw] sm:w-[320px] md:w-auto snap-center ${activeCardId === event.id ? 'bg-[#520378]' : 'bg-[#FFFAE4]'} hover:bg-[#520378] rounded-[32px] p-2 flex flex-col shadow-sm hover:shadow-2xl transition-all duration-300 group cursor-pointer h-full`}
                            >
                                {/* Card Image - Full Bleed with Internal Padding effect */}
                                <div className="h-[240px] rounded-[24px] overflow-hidden mb-3 shrink-0">
                                    <img
                                        src="/images/events.png"
                                        alt={event.title}
                                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>

                                {/* Card Content */}
                                <div className="px-5 pb-5 flex flex-col flex-grow">
                                    <h3 className={`text-[18px] font-bold ${activeCardId === event.id ? 'text-white' : 'text-[#520378]'} group-hover:text-white leading-tight mb-2 font-geist line-clamp-2`}>
                                        {event.title}
                                    </h3>
                                    <p className={`text-[14px] ${activeCardId === event.id ? 'text-white/90' : 'text-gray-600'} group-hover:text-white/90 mb-3 line-clamp-2`}>
                                        {event.description}
                                    </p>

                                    <div className={`h-px ${activeCardId === event.id ? 'bg-white/20' : 'bg-gray-200'} group-hover:bg-white/20 mb-3`}></div>

                                    <p className={`text-[12px] font-bold ${activeCardId === event.id ? 'text-white' : 'text-gray-900'} group-hover:text-white mb-2 flex items-center gap-2`}>
                                        Live | Online | Accessible Worldwide
                                    </p>

                                    {/* Date and Time */}
                                    <div className={`flex flex-wrap gap-x-4 gap-y-1 mb-4 text-[12px] font-bold ${activeCardId === event.id ? 'text-white/90' : 'text-gray-700'} group-hover:text-white/90`}>
                                        <div className="flex items-center gap-2">
                                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`${activeCardId === event.id ? 'text-white' : 'text-gray-900'} group-hover:text-white`}>
                                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                                <line x1="3" y1="10" x2="21" y2="10"></line>
                                            </svg>
                                            {event.date}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`${activeCardId === event.id ? 'text-white' : 'text-gray-900'} group-hover:text-white`}>
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <polyline points="12 6 12 12 16 14"></polyline>
                                            </svg>
                                            {event.time}
                                        </div>
                                    </div>

                                    {/* Bottom Info: Rating and Price Row */}
                                    <div className="flex justify-between items-center mb-3 mt-auto">
                                        <div className="flex items-center gap-1">
                                            <span className={`text-[12px] font-bold ${activeCardId === event.id ? 'text-white/90' : 'text-gray-700'} group-hover:text-white/90`}>({event.rating})</span>
                                            <div className="flex text-orange-400 text-[18px]">
                                                {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
                                            </div>
                                        </div>
                                        <span className={`text-[18px] font-bold ${activeCardId === event.id ? 'text-white' : 'text-gray-900'} group-hover:text-white`}>{event.price}</span>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-2">
                                        <button className={`flex-1 ${activeCardId === event.id ? 'bg-white text-[#520378]' : 'bg-[#520378] text-white'} group-hover:bg-white group-hover:text-[#520378] py-2 rounded-full font-bold text-[13px] transition-colors whitespace-nowrap`}>
                                            Know more
                                        </button>
                                        <button className={`flex-1 border-2 ${activeCardId === event.id ? 'border-white text-white' : 'border-[#520378] text-[#520378]'} group-hover:border-white group-hover:text-white py-2 rounded-full font-bold text-[13px] transition-all whitespace-nowrap`}>
                                            Enroll Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Choose the Right Program Section */}
            <div className="py-12 sm:py-20 relative overflow-hidden bg-white">
                {/* Process Wallpaper Image */}
                <img
                    src="/images/BG.png"
                    alt=""
                    className="absolute bottom-0 left-0 w-full h-auto min-h-[50%] object-contain object-bottom pointer-events-none"
                    style={{ zIndex: 0 }}
                />

                <div className="max-w-[1320px] mx-auto px-6 relative z-10">
                    <div className="text-center max-w-[1100px] mx-auto mb-12">
                        <h2 className="text-[26px] leading-[1.2] sm:text-4xl font-bold mb-4 text-gray-950 font-geist sm:tracking-normal">
                            Choose the Right Program <br className="block sm:hidden" /> for Your Learning Journey
                        </h2>
                        <p className="text-base md:text-sm sm:text-base text-gray-700 leading-relaxed max-w-[1000px] mx-auto">
                            Growth isn't always linear. Whether you're just beginning or looking to deepen your
                            expertise, Vriksh E - Academy offers thoughtfully designed programs tailored to your goals
                            and aspirations - bridging theory with real-world practice every step of the way
                        </p>
                    </div>

                    {/* ── Mobile: Auto-Slide Carousel ── */}
                    <div className="md:hidden relative">
                        <div className="overflow-hidden rounded-[32px]">
                            <div
                                className="flex transition-transform duration-700 ease-in-out"
                                style={{ transform: `translateX(-${programCard * 100}%)` }}
                            >
                                {programCards.map((program, index) => (
                                    <div key={index} className="w-full flex-none">
                                        <div className="bg-[#FFB169] rounded-[32px] p-6 flex flex-col items-start shadow-lg">
                                            <div className="bg-white p-3.5 rounded-2xl text-[#FFB169] mb-6 shadow-sm">
                                                {program.icon}
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-950 mb-4 font-geist">{program.title}</h3>
                                            <p className="text-base text-gray-900 leading-relaxed mb-6">{program.description}</p>
                                            <button className="bg-[#520378] text-white px-7 py-2.5 rounded-full font-bold text-sm hover:bg-[#6b049d] transition-colors">
                                                Know more
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Dot Indicators */}
                        <div className="flex justify-center gap-2 mt-5">
                            {programCards.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => { setProgramCard(i); clearInterval(programTimerRef.current); programTimerRef.current = setInterval(() => setProgramCard(p => (p + 1) % 3), 3000); }}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${programCard === i ? 'w-6 bg-[#520378]' : 'w-1.5 bg-gray-400'}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* ── Desktop: Original 3-column grid (hidden on mobile) ── */}
                    <div className="hidden md:grid md:grid-cols-3 gap-8">
                        {programCards.map((program, index) => (
                            <div key={index} className="bg-[#FFB169] rounded-[32px] p-6 sm:p-7 flex flex-col items-start shadow-lg hover:-translate-y-2 transition-all duration-300">
                                <div className="bg-white p-3.5 rounded-2xl text-[#FFB169] mb-6 shadow-sm">
                                    {program.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-950 mb-4 font-geist">{program.title}</h3>
                                <p className="text-base text-gray-900 leading-relaxed mb-auto pb-6">{program.description}</p>
                                <button className="bg-[#520378] text-white px-7 py-2.5 rounded-full font-bold text-sm hover:bg-[#6b049d] transition-colors">
                                    Know more
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div
                className="py-8 sm:py-16"
                style={{ background: 'linear-gradient(180deg, #FFF9E1 0%, #FFFFFF 100%)' }}
            >
                <div className="max-w-[1320px] mx-auto px-6">
                    {/* Header with Title and Nav Arrows - Desktop */}
                    <div className="hidden md:flex justify-between items-center mb-10 gap-6">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-950 font-geist">
                            What our learners say
                        </h2>
                        <div className="flex gap-4">
                            <button
                                onClick={prevSlide}
                                className="w-12 h-12 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="19" y1="12" x2="5" y2="12"></line>
                                    <polyline points="12 19 5 12 12 5"></polyline>
                                </svg>
                            </button>
                            <button
                                onClick={nextSlide}
                                className="w-12 h-12 rounded-full bg-[#520378] text-white flex items-center justify-center hover:bg-black transition-all"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Header with Title and Nav Arrows - Mobile */}
                    <div className="flex md:hidden flex-col justify-between items-center mb-10 gap-6">
                        <h2 className="text-[24px] font-bold text-gray-900 leading-[1.1] text-center font-geist">
                            What our learners say
                        </h2>
                        <div className="flex gap-3">
                            <button
                                onClick={prevSlide}
                                className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-100 hover:shadow-md transition-all active:scale-95 group"
                            >
                                <svg className="w-5 h-5 text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path></svg>
                            </button>
                            <button
                                onClick={nextSlide}
                                className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-100 hover:shadow-md transition-all active:scale-95 group"
                            >
                                <svg className="w-5 h-5 text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
                            </button>
                        </div>
                    </div>

                    {/* Testimonials Grid (Homepage Style - Swapping with Fade) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.slice(testIndex * itemsVisible, testIndex * itemsVisible + itemsVisible).map((item, index) => (
                            <div
                                key={`${item.name}-${testIndex}-${index}`}
                                className="bg-white rounded-[32px] p-8 flex flex-col shadow-sm border border-gray-100 min-h-[420px] cursor-default"
                            >
                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-gray-950 mb-1 font-geist">{item.name}</h3>
                                    <p className="text-base text-gray-600">{item.role}</p>
                                </div>
                                <p className="text-base text-gray-700 leading-relaxed mb-8 italic flex-grow overflow-y-auto scrollbar-none">
                                    &ldquo;{item.text}&rdquo;
                                </p>
                                <div className="mt-auto pt-6 border-t border-gray-50 flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center gap-2.5">
                                            <div className="w-5 h-5 flex items-center justify-center">
                                                <svg viewBox="0 0 24 24" className="w-full h-full">
                                                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.07-3.71 1.07-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                                    <path fill="#FBBC05" d="M5.84 14.11c-.22-.67-.35-1.39-.35-2.11s.13-1.44.35-2.11V7.05H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.95l3.66-2.84z" />
                                                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.05l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                                </svg>
                                            </div>
                                            <div className="flex text-orange-400 text-[18px]">
                                                {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
                                            </div>
                                        </div>
                                    </div>
                                    <span className="text-base font-bold text-gray-800">{item.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Dot Indicators */}
                    <div className="flex justify-center gap-1.5 mt-10">
                        {Array.from({ length: totalSlides }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setTestIndex(i)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${testIndex === i
                                    ? 'w-6 bg-[#520378]'
                                    : 'w-1.5 bg-gray-300 hover:bg-gray-400'
                                    }`}
                                aria-label={`Go to page ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Our Trusted Partners Section */}
            <div className="bg-white py-8 sm:py-12">
                <div className="max-w-[1240px] mx-auto px-6 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#520378] mb-8 uppercase tracking-wide font-geist">
                        Trusted by the Best
                    </h2>

                    {/* Logos Container Capsule - Exactly matching the image style */}
                    <div className="max-w-[1200px] mx-auto border border-black rounded-full py-4 sm:py-6 overflow-hidden relative">
                        <div className="animate-marquee flex items-center">
                            {/* Duplicate set of logos for seamless loop */}
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                                <div key={num} className="flex-shrink-0 flex items-center justify-center px-6 sm:px-10">
                                    <img
                                        src={`/images/school ${num}.png`}
                                        alt={`Partner Logo ${num}`}
                                        className={`h-14 sm:h-20 w-auto object-contain ${num === 2 ? 'scale-[1.5]' : ''}`}
                                    />
                                </div>
                            ))}
                            {/* Duplicate for seamless loop */}
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                                <div key={`dup-${num}`} className="flex-shrink-0 flex items-center justify-center px-6 sm:px-10">
                                    <img
                                        src={`/images/school ${num}.png`}
                                        alt={`Partner Logo ${num}`}
                                        className="h-14 sm:h-20 w-auto object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white pt-2 pb-12 sm:pt-4 sm:pb-20">
                <div className="max-w-[1320px] mx-auto px-6 flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
                    {/* Left: Questions List */}
                    <div className="flex-1 w-full">
                        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold mb-8 text-gray-950 font-inter-tight text-left leading-tight">
                            Frequently asked questions
                        </h2>

                        <div className="space-y-2.5">
                            {faqs.map((faq, index) => (
                                <div key={index} className="flex flex-col">
                                    <div
                                        onClick={() => toggleFaq(index)}
                                        className={`py-2 px-8 rounded-[22px] flex items-center justify-between group cursor-pointer shadow-sm border-[1.5px] ${openIndex === index ? 'bg-[#520378] border-[#520378] text-white rounded-b-none' : 'bg-white border-[#520378] text-gray-900 hover:bg-[#520378] hover:text-white'}`}
                                    >
                                        <span className="text-base sm:text-lg font-medium pr-6 font-geist">
                                            {index + 1}. {faq.question}
                                        </span>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${openIndex === index ? 'bg-white text-[#520378] rotate-180' : 'bg-[#520378] text-white group-hover:bg-white group-hover:text-[#520378]'}`}>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M7 10l5 5 5-5z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className={`${openIndex === index ? 'block' : 'hidden'}`}>
                                        <div className={`px-8 pb-6 rounded-b-[20px] text-base leading-relaxed font-medium ${openIndex === index ? 'bg-[#520378] text-white/90 border-x-[1.5px] border-b-[1.5px] border-[#520378]' : ''}`}>
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Side Image */}
                    <div className="flex-1 w-full lg:max-w-[480px] h-auto aspect-[3/3.8] rounded-[36px] overflow-hidden shadow-2xl relative">
                        <img
                            src="/images/FAQ.png"
                            alt="Student taking notes"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpcomingEvents;
