import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Events = () => {
    const navigate = useNavigate();
    const events = [
        {
            id: 1,
            image: '/images/uc1.jpeg',
            title: 'ADHD Toolkit – Practical Strategies & Activities',
            date: '20-03-2026',
            time: '5:00PM - 6:30 PM',
            rating: 4.9,
            originalPrice: '₹1500',
            currentPrice: '₹1000'
        },
        {
            id: 2,
            image: '/images/uc2.jpeg',
            title: 'Self-Care: Pause, Recharge & Reconnect',
            date: '04-04-2026',
            time: '6:00PM - 7:00 PM',
            rating: 4.9,
            originalPrice: '₹850',
            currentPrice: 'FREE'
        },
        {
            id: 3,
            image: '/images/uc3.jpeg',
            title: 'Building Trust with Students in Counselling Sessions.',
            date: '23-03-2026',
            time: '6:00PM - 7:00 PM',
            rating: 4.9,
            originalPrice: '₹850',
            currentPrice: 'FREE'
        }
    ];

    const [mobileIndex, setMobileIndex] = useState(0);
    const nextMobile = () => setMobileIndex((i) => (i + 1) % events.length);
    const prevMobile = () => setMobileIndex((i) => (i - 1 + events.length) % events.length);

    return (
        <section id="events" className="pb-12 pt-6 sm:pb-16 sm:pt-8 bg-white">
            <div className="max-w-[1240px] mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start mb-6 md:mb-10 gap-6">
                    <div className="max-w-[950px] text-center md:text-left">
                        <h2 className="text-2xl sm:text-[34px] font-bold mb-3 sm:mb-5 text-gray-900 font-inter-tight">Upcoming Event</h2>
                        <p className="text-sm sm:text-[19px] text-gray-700 leading-relaxed font-normal">
                            We empower aspiring professionals and communities with live, interactive, skill-based mental health learning through trainings, experiential workshops, and certificate courses designed for real-world practice.
                        </p>
                    </div>
                    <div className="flex gap-3 mt-4 md:mt-0 self-end md:self-auto">
                        <button
                            onClick={prevMobile}
                            className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-black text-white flex items-center justify-center hover:bg-black/80 transition-all"
                            aria-label="Previous event"
                        >
                            <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="19" y1="12" x2="5" y2="12"></line>
                                <polyline points="12 19 5 12 12 5"></polyline>
                            </svg>
                        </button>
                        <button
                            onClick={nextMobile}
                            className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-gray-400 text-white flex items-center justify-center hover:bg-gray-500 transition-all"
                            aria-label="Next event"
                        >
                            <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Carousel View (manual buttons, no auto scroll) */}
                <div className="md:hidden">
                    <div className="relative overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${mobileIndex * 100}%)` }}
                        >
                            {events.map((event, index) => (
                                <div key={index} className="w-full flex-shrink-0 flex justify-center pb-4 pt-1">
                                    <div className="flex flex-col w-[300px]">
                                        <div className="h-[180px] rounded-[24px] overflow-hidden mb-5 shadow-md">
                                            <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="px-1">
                                            <h3 className="text-[15px] sm:text-[17px] font-bold mb-2 sm:mb-3 text-gray-950 leading-snug h-[40px] sm:h-[45px] overflow-hidden">
                                                {event.title}
                                            </h3>
                                            <div className="flex items-center gap-1.5 mb-3">
                                                <span className="text-[16px] text-gray-600 font-bold">({event.rating})</span>
                                                <div className="flex text-orange-400 text-[15px]">
                                                    {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
                                                </div>
                                            </div>
                                            {/* Date and Time */}
                                            <div className="flex flex-col gap-1 mb-4 text-[12px] font-bold text-gray-700">
                                                <div className="flex items-center gap-2">
                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900">
                                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                                        <line x1="16" y1="2" x2="16" y2="6"></line>
                                                        <line x1="8" y1="2" x2="8" y2="6"></line>
                                                        <line x1="3" y1="10" x2="21" y2="10"></line>
                                                    </svg>
                                                    {event.date}
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900">
                                                        <circle cx="12" cy="12" r="10"></circle>
                                                        <polyline points="12 6 12 12 16 14"></polyline>
                                                    </svg>
                                                    {event.time}
                                                </div>
                                            </div>
                                            <div className="flex justify-between items-center gap-2">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-gray-400 line-through text-xs sm:text-[14px]">{event.originalPrice}</span>
                                                    <span className="text-gray-950 font-bold text-sm sm:text-[17px]">{event.currentPrice}</span>
                                                </div>
                                                <button
                                                    onClick={() => navigate(`/event-details/${event.id}`)}
                                                    className="bg-[#520378] text-white px-3 py-1.5 sm:py-2 rounded-full font-bold text-[11px] sm:text-[12px] whitespace-nowrap"
                                                >
                                                    Know more
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Desktop Grid View */}
                <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-3 gap-8">
                    {events.map((event, index) => (
                        <div key={index} className="flex flex-col">
                            <div className="h-[220px] rounded-[24px] overflow-hidden mb-5 shadow-sm">
                                <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="px-2">
                                <h3 className="text-[18px] font-bold mb-3 text-gray-950 leading-snug h-[50px] overflow-hidden">
                                    {event.title}
                                </h3>
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-[18px] text-gray-600 font-bold">({event.rating})</span>
                                    <div className="flex text-orange-400 text-[17px]">
                                        {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
                                    </div>
                                </div>
                                {/* Date and Time */}
                                <div className="flex items-center gap-5 mb-5 text-[14px] font-bold text-gray-700">
                                    <div className="flex items-center gap-2">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900">
                                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                            <line x1="16" y1="2" x2="16" y2="6"></line>
                                            <line x1="8" y1="2" x2="8" y2="6"></line>
                                            <line x1="3" y1="10" x2="21" y2="10"></line>
                                        </svg>
                                        {event.date}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <polyline points="12 6 12 12 16 14"></polyline>
                                        </svg>
                                        {event.time}
                                    </div>
                                </div>
                                <div className="flex justify-between items-center gap-6">
                                    <div className="flex items-center gap-3">
                                        <span className="text-gray-400 line-through text-[15px]">{event.originalPrice}</span>
                                        <span className="text-gray-950 font-bold text-[18px]">{event.currentPrice}</span>
                                    </div>
                                    <button
                                        onClick={() => navigate(`/event-details/${event.id}`)}
                                        className="bg-[#520378] text-white px-6 py-2.5 rounded-full font-bold text-[14px] hover:bg-[#520378]/90 transition-all shadow-sm whitespace-nowrap"
                                    >
                                        Know more
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Events;
