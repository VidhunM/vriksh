import React from 'react';

const Events = () => {
    const events = [
        {
            image: '/images/events.png',
            title: 'Neuro Linguistic Programming - Basics ( Direct )',
            rating: 4.9,
            originalPrice: '₹65,000',
            currentPrice: '₹49,999'
        },
        {
            image: '/images/events.png',
            title: 'Neuro Linguistic Programming - Basics ( Direct )',
            rating: 4.9,
            originalPrice: '₹65,000',
            currentPrice: '₹49,999'
        },
        {
            image: '/images/events.png',
            title: 'Neuro Linguistic Programming - Basics ( Direct )',
            rating: 4.9,
            originalPrice: '₹65,000',
            currentPrice: '₹49,999'
        }
    ];

    return (
        <section id="events" className="pb-12 pt-6 sm:pb-16 sm:pt-8 bg-white">
            <div className="max-w-[1240px] mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
                    <div className="max-w-[950px] text-center md:text-left">
                        <h2 className="text-[28px] sm:text-[34px] font-bold mb-5 text-gray-900 font-inter-tight">Upcoming Event</h2>
                        <p className="text-base sm:text-[19px] text-gray-700 leading-relaxed font-normal">
                            We empower aspiring professionals and communities with live, interactive, skill-based mental health learning through trainings, experiential workshops, and certificate courses designed for real-world practice.
                        </p>
                    </div>
                    <div className="flex gap-3 mt-4 md:mt-0">
                        <button className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center hover:bg-black/80 transition-all">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="19" y1="12" x2="5" y2="12"></line>
                                <polyline points="12 19 5 12 12 5"></polyline>
                            </svg>
                        </button>
                        <button className="w-11 h-11 rounded-full bg-gray-400 text-white flex items-center justify-center hover:bg-gray-500 transition-all">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Slider View */}
                <div className="md:hidden relative overflow-hidden">
                    <div className="animate-marquee hover:pause-animation flex gap-6 py-4">
                        {[...events, ...events].map((event, index) => (
                            <div key={index} className="flex flex-col w-[300px] shrink-0">
                                <div className="h-[180px] rounded-[24px] overflow-hidden mb-5 shadow-md">
                                    <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                                </div>
                                <div className="px-1">
                                    <h3 className="text-[17px] font-bold mb-3 text-gray-950 leading-snug h-[45px] overflow-hidden">
                                        {event.title}
                                    </h3>
                                    <div className="flex items-center gap-1.5 mb-6">
                                        <span className="text-[16px] text-gray-600 font-bold">({event.rating})</span>
                                        <div className="flex text-orange-400 text-[15px]">
                                            {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center gap-2">
                                        <div className="flex items-center gap-2">
                                            <span className="text-gray-400 line-through text-[14px]">{event.originalPrice}</span>
                                            <span className="text-gray-950 font-bold text-[17px]">{event.currentPrice}</span>
                                        </div>
                                        <button className="bg-[#520378] text-white px-3 py-2 rounded-full font-bold text-[12px] whitespace-nowrap">
                                            Know more
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
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
                                <div className="flex items-center gap-2 mb-6">
                                    <span className="text-[18px] text-gray-600 font-bold">({event.rating})</span>
                                    <div className="flex text-orange-400 text-[17px]">
                                        {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
                                    </div>
                                </div>
                                <div className="flex justify-between items-center gap-6">
                                    <div className="flex items-center gap-3">
                                        <span className="text-gray-400 line-through text-[15px]">{event.originalPrice}</span>
                                        <span className="text-gray-950 font-bold text-[18px]">{event.currentPrice}</span>
                                    </div>
                                    <button className="bg-[#520378] text-white px-6 py-2.5 rounded-full font-bold text-[14px] hover:bg-[#520378]/90 transition-all shadow-sm whitespace-nowrap">
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
