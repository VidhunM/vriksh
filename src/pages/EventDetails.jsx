import React, { useState, useEffect, useCallback } from 'react';

const EventDetails = () => {
    // Testimonials State
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsVisible, setItemsVisible] = useState(3);

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
        // Since it's a new page, it might not have the contact section yet, 
        // but typically we'd scroll to a form or navigate to a contact page.
        // For now, let's assume we want to scroll to a contact section if present.
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <div className="bg-[#520378] pt-28 pb-6 sm:pt-40 sm:pb-12">
                <div className="max-w-[1320px] mx-auto px-6 relative">
                    <div className="lg:w-2/3">
                        <h1 className="text-white text-3xl sm:text-5xl font-bold mb-6 leading-tight font-inter-tight">
                            ADHD Toolkit – Practical <br className="hidden sm:block" /> Strategies & Activities
                        </h1>
                        <p className="text-white/90 text-sm sm:text-lg mb-8 max-w-2xl leading-relaxed">
                            Learn practical strategies and explore 20+ engaging activities to support children and teens with Attention Deficit Hyperactivity Disorder. Gain tools to improve attention, sitting tolerance, impulse control, and focus
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
                            <div className="flex text-orange-400 text-[18px]">
                                {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
                            </div>
                        </div>

                        {/* Badges - White pill with purple text */}
                        <div className="bg-white rounded-full px-5 py-2.5 w-fit mb-8 shadow-sm">
                            <span className="text-[#520378] text-sm font-bold">Created by Vriksh Psychological Support Services | Vriksh E-Academy</span>
                        </div>

                        {/* Meta */}
                        <div className="flex items-center gap-6 text-white text-sm sm:text-base font-medium">
                            <div className="flex items-center gap-2">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                Last updated 2026
                            </div>
                            <div className="flex items-center gap-2">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                                English
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-[1320px] mx-auto px-6 pt-6 pb-20 relative">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                    {/* Left: Description */}
                    <div className="lg:w-2/3">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-950 mb-6 font-inter-tight">Description:</h2>
                        <div className="prose prose-lg text-gray-700 max-w-none font-geist leading-relaxed">
                            <p>
                                Want to better support children and teens with Attention Deficit Hyperactivity Disorder (ADHD)?
                                In this session, you’ll gain practical, hands-on strategies to understand ADHD and effectively
                                support attention, behaviour regulation, and focus in everyday settings like home and school.
                            </p>
                        </div>

                        {/* What you'll learn */}
                        <div className="mt-12 bg-[#FFFDEA] rounded-2xl p-8 sm:p-10 border border-[#F3E6C7]">
                            <h3 className="text-2xl sm:text-2xl font-bold text-gray-950 mb-8 font-inter-tight">What you'll learn:</h3>
                            <ul className="space-y-6">
                                {[
                                    "Understand the overview and key challenges of Attention Deficit Hyperactivity Disorder (ADHD) in children and teens",
                                    "Learn 20+ practical activities to improve attention, sitting tolerance, impulse control, and focus",
                                    "Explore effective strategies for parents and teachers, including ready-to-use templates and homework ideas",
                                    "Access activity materials and an E-Certificate to support practical implementation"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 group">
                                        <div className="mt-1 bg-black rounded-full p-1 shrink-0">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        </div>
                                        <span className="text-gray-700 text-[15px] sm:text-[17px] leading-relaxed font-geist">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="lg:w-1/3 relative z-20">
                        <div className="bg-white rounded-[24px] shadow-2xl border border-gray-100 overflow-hidden lg:sticky lg:top-32 lg:-mt-[480px]">
                            {/* Card Image */}
                            <div className="aspect-video relative overflow-hidden">
                                <img
                                    src="/images/counselling 2.png"
                                    alt="ADHD Toolkit Session"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Card Details */}
                            <div className="p-6">
                                <div className="text-3xl font-bold text-gray-950 mb-7 font-inter-tight">
                                    ₹850 + GST
                                </div>

                                <div className="space-y-4 mb-10">
                                    <div className="flex items-center gap-4 text-gray-700">
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                        <span className="text-[15px] font-medium text-gray-600">Last updated 2026</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-gray-700">
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                        <span className="text-[15px] font-medium text-gray-600">6:00PM - 7:30PM</span>
                                    </div>
                                    <div className="flex items-start gap-4 text-gray-700">
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                        <span className="text-[15px] font-medium text-gray-600">20+ practical activities for real world application</span>
                                    </div>
                                    <div className="flex items-start gap-4 text-gray-700">
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                                        <span className="text-[15px] font-medium text-gray-600 leading-tight">E-Certificate from Vriksh Psychological Support Services</span>
                                    </div>
                                </div>

                                <button
                                    onClick={handleEnrollNow}
                                    className="w-full bg-[#3D005C] text-white py-3 rounded-full font-bold text-lg hover:bg-black transition-all active:scale-[0.98] shadow-lg"
                                >
                                    Enroll Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Who this session is for - Outside flex row, inside main container */}
                <div className="mt-16">
                    <h3 className="text-2xl font-bold text-gray-950 mb-8 font-inter-tight">Who this session is for:</h3>
                    <div className="flex flex-wrap gap-x-10 gap-y-6 mb-6">
                        {["Parents", "Teachers", "Psychology students", "Counsellors"].map((audience, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="bg-black rounded-full p-0.5 shrink-0">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </div>
                                <span className="text-gray-700 text-[16px] font-medium font-geist">{audience}</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="bg-black rounded-full p-0.5 shrink-0">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <span className="text-gray-700 text-[16px] font-medium font-geist">Anyone interested in understanding and supporting children with ADHD</span>
                    </div>
                </div>

                {/* Other Advanced Diploma Programs - Outside flex row, inside main container */}
                <div className="mt-20">
                    <h3 className="text-2xl font-bold text-gray-950 mb-10 font-inter-tight">Other Advanced Diploma Programs</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Advanced Diploma in Counselling and Organizational Psychology",
                                icon: "/icons/ADHD1.png"
                            },
                            {
                                title: "Advanced Diploma in Counselling and Forensic Psychology",
                                icon: "/icons/ADHD2.png"
                            },
                            {
                                title: "Advanced Diploma in Art Therapy",
                                icon: "/icons/ADHD3.png"
                            }
                        ].map((prog, i) => (
                            <div key={i} className="bg-[#F3F3F3] rounded-[22px] p-6 flex flex-row items-center gap-4 hover:shadow-md transition-shadow cursor-pointer">
                                <div className="w-14 h-14 bg-[#520378] rounded-full flex items-center justify-center text-white shrink-0 overflow-hidden p-3.5 shadow-sm">
                                    <img src={prog.icon} alt={prog.title} className="w-full h-full object-contain brightness-0 invert" />
                                </div>
                                <span className="text-gray-900 text-[16px] font-bold leading-tight font-geist">{prog.title}</span>
                            </div>
                        ))}
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
            {/* Contact Section */}
            <div id="contact" className="bg-white py-12 sm:py-24">
                <div className="max-w-[1320px] mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-start">
                        {/* Left: Heading & Description */}
                        <div>
                            <h2 className="text-[32px] sm:text-[48px] font-bold text-gray-950 leading-[1.1] mb-6 font-inter-tight">
                                We'll help you get <br /> started
                            </h2>
                            <p className="text-sm sm:text-lg text-gray-600 leading-relaxed font-geist max-w-[480px]">
                                Connect with our experts to explore employee wellness solutions and discover how Vriksh can help you build a healthier, high-performing workplace
                            </p>
                        </div>

                        {/* Right: Contact Form */}
                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-[#520378] mb-1 font-inter-tight">
                                Contact Us
                            </h3>
                            <p className="text-sm sm:text-lg text-gray-600 mb-8 font-geist">
                                Reach out for support. We're here to listen.
                            </p>
                            <form className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div className="relative group">
                                        <input
                                            type="text"
                                            className="w-full border border-gray-300 rounded-xl px-4 py-3.5 text-sm sm:text-base outline-none focus:ring-1 focus:ring-[#520378]/40 focus:border-[#520378] transition-all"
                                            placeholder="Full Name"
                                        />
                                    </div>
                                    <div className="relative group">
                                        <input
                                            type="email"
                                            className="w-full border border-gray-300 rounded-xl px-4 py-3.5 text-sm sm:text-base outline-none focus:ring-1 focus:ring-[#520378]/40 focus:border-[#520378] transition-all"
                                            placeholder="Email Address"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div className="relative group">
                                        <input
                                            type="tel"
                                            className="w-full border border-gray-300 rounded-xl px-4 py-3.5 text-sm sm:text-base outline-none focus:ring-1 focus:ring-[#520378]/40 focus:border-[#520378] transition-all"
                                            placeholder="Phone Number"
                                        />
                                    </div>
                                    <div className="relative group">
                                        <select
                                            defaultValue=""
                                            className="w-full border border-gray-300 rounded-xl px-4 py-3.5 text-sm sm:text-base outline-none focus:ring-1 focus:ring-[#520378]/40 focus:border-[#520378] bg-white appearance-none cursor-pointer text-gray-500"
                                            style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.25rem' }}
                                        >
                                            <option value="" disabled hidden>Age</option>
                                            {Array.from({ length: 80 }, (_, i) => i + 5).map((age) => (
                                                <option key={age} value={age}>{age}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div className="relative group">
                                        <select
                                            defaultValue=""
                                            className="w-full border border-gray-300 rounded-xl px-4 py-3.5 text-sm sm:text-base outline-none focus:ring-1 focus:ring-[#520378]/40 focus:border-[#520378] bg-white appearance-none cursor-pointer text-gray-500"
                                            style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.25rem' }}
                                        >
                                            <option value="" disabled hidden>Type of Support Needed</option>
                                            <option value="adhd">ADHD Toolkit Support</option>
                                            <option value="counselling">Professional Counselling</option>
                                            <option value="training">Academy Training</option>
                                        </select>
                                    </div>
                                    <div className="relative group">
                                        <select
                                            defaultValue=""
                                            className="w-full border border-gray-300 rounded-xl px-4 py-3.5 text-sm sm:text-base outline-none focus:ring-1 focus:ring-[#520378]/40 focus:border-[#520378] bg-white appearance-none cursor-pointer text-gray-500"
                                            style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.25rem' }}
                                        >
                                            <option value="" disabled hidden>Preferred Time for Session</option>
                                            <option value="morning">Morning (9 AM - 12 PM)</option>
                                            <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                                            <option value="evening">Evening (4 PM - 8 PM)</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="relative group">
                                    <textarea
                                        rows="4"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-3.5 text-sm sm:text-base outline-none focus:ring-1 focus:ring-[#520378]/40 focus:border-[#520378] resize-none transition-all"
                                        placeholder="Message"
                                    />
                                </div>
                                <button
                                    type="button"
                                    className="px-10 py-3.5 bg-[#520378] hover:bg-[#400260] text-white font-bold rounded-full shadow-lg transition-all active:scale-95 group flex items-center gap-2"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;
