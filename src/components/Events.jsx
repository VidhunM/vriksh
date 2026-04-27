import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API_BASE_URL from '../api/config';

const slugify = (text) => {
    if (!text) return "";
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-');
};

const Events = () => {
    const navigate = useNavigate();
    const [apiEvents, setApiEvents] = useState([]);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        fetch(`${API_BASE_URL}/events`)
            .then(res => res.json())
            .then(data => {
                const formattedData = data.map(event => ({
                    id: event._id,
                    image: event.image,
                    title: event.title,
                    date: event.date,
                    time: event.time,
                    type: event.type || "Workshop",
                    rating: event.rating ?? 4.9,
                    price: event.price || 'FREE',
                    ...event
                }));
                setApiEvents(formattedData);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching events:", err);
                setLoading(false);
            });
    }, []);

    const events = apiEvents;

    const [mobileIndex, setMobileIndex] = useState(0);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth >= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Calculate max index to prevent scrolling into empty space
    const itemsToShow = isDesktop ? 3 : 1;
    const maxIndex = Math.max(0, events.length - itemsToShow);
    
    const nextMobile = () => {
        if (mobileIndex < maxIndex) {
            setMobileIndex(mobileIndex + 1);
        } else {
            setMobileIndex(0); // Wrap around
        }
    };

    const prevMobile = () => {
        if (mobileIndex > 0) {
            setMobileIndex(mobileIndex - 1);
        } else {
            setMobileIndex(maxIndex); // Wrap around to end
        }
    };

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
                            className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-gray-400 text-white flex items-center justify-center hover:bg-black transition-all"
                            aria-label="Next event"
                        >
                            <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </button>
                    </div>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#520378]"></div>
                    </div>
                ) : events.length === 0 ? (
                    <div className="text-center py-20 bg-[#f9f9f9] rounded-3xl border-2 border-dashed border-gray-200">
                        <p className="text-gray-500 text-lg font-medium">No upcoming events found at the moment.</p>
                        <p className="text-gray-400 text-sm mt-1">Check back later or follow us on social media for updates!</p>
                    </div>
                ) : (
                    <>
                        {/* Mobile Carousel View (manual buttons, no auto scroll) */}
                        <div className="md:block">
                            <div className="relative overflow-hidden">
                                <div
                                    className="flex transition-transform duration-500 ease-in-out gap-8"
                                    style={{
                                        transform: `translateX(-${mobileIndex * (isDesktop ? (100 / 3) : 100)}%)`,
                                        width: '100%'
                                    }}
                                >
                                    {events.map((event, index) => (
                                        <div key={index} className="w-full md:w-[calc(33.333%-22px)] flex-shrink-0 flex justify-center pb-4 pt-1">
                                            <div className="flex flex-col w-full md:max-w-none">
                                                <div className="h-[180px] md:h-[220px] rounded-[24px] overflow-hidden mb-5 shadow-md">
                                                    <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                                                </div>
                                                <div className="px-1">
                                                    <h3 className="text-[15px] sm:text-[18px] font-bold mb-2 sm:mb-3 text-gray-950 leading-snug h-[40px] sm:h-[50px] overflow-hidden">
                                                        {event.title}
                                                    </h3>
                                                    <div className="flex items-center gap-1.5 mb-3">
                                                        <span className="text-[16px] md:text-[18px] text-gray-600 font-bold">({event.rating})</span>
                                                        <div className="flex text-orange-400 text-[15px] md:text-[17px]">
                                                            {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col gap-1 md:gap-2 mb-4 md:mb-5 text-[12px] md:text-[14px] font-bold text-gray-700">
                                                        <div className="flex items-center gap-2 md:gap-5">
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
                                                        <div className="flex items-center gap-2 text-[#520378] mt-1">
                                                            <div className="w-1 h-1 rounded-full bg-[#520378]"></div>
                                                            Live | Online | {event.type}
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between items-center gap-2 md:gap-4">
                                                        <div className="flex items-center gap-2 leading-none">
                                                            {event.originalPrice && (
                                                                <span className="text-gray-400 line-through text-xs sm:text-[14px] font-medium">{event.originalPrice}</span>
                                                            )}
                                                            <span className="text-gray-950 font-bold text-sm sm:text-[16px] xl:text-[18px]">{event.price}</span>
                                                        </div>
                                                        <div className="flex gap-2">
                                                            <button
                                                                onClick={() => navigate(`/event-details/${slugify(event.title)}`)}
                                                                className="bg-[#520378] text-white px-2 py-1.5 sm:px-4 sm:py-2 rounded-full font-bold text-[10px] sm:text-[13px] whitespace-nowrap shadow-sm"
                                                            >
                                                                Know more
                                                            </button>
                                                            <a
                                                                href={event.registrationLink || "https://docs.google.com/forms/d/e/1FAIpQLSdmvnXpWL7qR9I6SEuPb7sY7JgKxZ1Fuaymn01rxthd43_vMQ/viewform"}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                <button
                                                                    type="button"
                                                                    className="border-2 border-[#520378] text-[#520378] px-2 py-1.5 sm:px-4 sm:py-2 rounded-full font-bold text-[10px] sm:text-[13px] whitespace-nowrap bg-white"
                                                                >
                                                                    Enroll Now
                                                                </button>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default Events;
