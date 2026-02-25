import React from 'react';
import { Link } from 'react-router-dom';

const UpcomingEvents = () => {
    return (
        <div className="pt-0">
            {/* Header Banner - Centered alignment requested */}
            <div className="bg-[#520378] pt-24 pb-6 sm:pt-32 sm:pb-10 text-center">
                <div className="max-w-[1320px] mx-auto px-6">
                    <h1 className="text-2xl sm:text-4xl font-bold text-white uppercase tracking-wider font-inter-tight">
                        UPCOMING WORKSHOP
                    </h1>
                </div>
            </div>

            {/* Main Content */}
            <div
                className="py-8 sm:py-12"
                style={{ background: 'linear-gradient(180deg, #FFFAE4 0%, #FFFFFF 100%)' }}
            >
                <div className="max-w-[1320px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Column: Text Content */}
                    <div className="flex-1 text-left">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 leading-[1.25] mb-8 font-geist tracking-normal">
                            Bridging Education to <br /> Professional Practice
                        </h2>

                        <div className="space-y-3">
                            <p className="text-lg sm:text-xl font-bold text-[#520378] italic whitespace-nowrap break-keep">
                                Join 5,000+ learners mastering psychology with confidence
                            </p>

                            <p className="text-base text-gray-700 leading-relaxed max-w-[540px]">
                                Bridging theory and real-world practice to deliver accessible, <br />
                                lifelong learning through customized workshops, training programs, and certification courses
                            </p>
                        </div>
                    </div>

                    {/* Right Column: New Composite Hero Image */}
                    <div className="flex-1 relative w-full lg:w-auto flex items-center justify-center lg:translate-x-10">
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
                            <p className="text-lg text-gray-700 leading-relaxed">
                                At Vriksh E-Academy, dive into focused, expert-led sessions designed to keep
                                you updated, inspired, and continuously growing.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <button className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="19" y1="12" x2="5" y2="12"></line>
                                    <polyline points="12 19 5 12 12 5"></polyline>
                                </svg>
                            </button>
                            <button className="w-12 h-12 rounded-full bg-gray-400 text-white flex items-center justify-center hover:bg-black transition-all">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Events Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
                            <div key={event.id} className="bg-[#FFFAE4] rounded-[32px] p-2 flex flex-col shadow-sm hover:shadow-2xl transition-all duration-300 w-full group">
                                {/* Card Image - Full Bleed with Internal Padding effect */}
                                <div className="h-[240px] rounded-[24px] overflow-hidden mb-3">
                                    <img
                                        src="/images/events.png"
                                        alt={event.title}
                                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>

                                {/* Card Content */}
                                <div className="px-5 pb-5 flex flex-col">
                                    <h3 className="text-[18px] font-bold text-[#520378] leading-tight mb-2 font-geist line-clamp-2">
                                        {event.title}
                                    </h3>
                                    <p className="text-[14px] text-gray-600 mb-3 line-clamp-2">
                                        {event.description}
                                    </p>

                                    <div className="h-px bg-gray-200 mb-3"></div>

                                    <p className="text-[12px] font-bold text-gray-900 mb-2 flex items-center gap-2">
                                        Live | Online | Accessible Worldwide
                                    </p>

                                    {/* Date and Time */}
                                    <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4 text-[12px] font-bold text-gray-700">
                                        <div className="flex items-center gap-2">
                                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900">
                                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                                <line x1="3" y1="10" x2="21" y2="10"></line>
                                            </svg>
                                            {event.date}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900">
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <polyline points="12 6 12 12 16 14"></polyline>
                                            </svg>
                                            {event.time}
                                        </div>
                                    </div>

                                    {/* Bottom Info: Rating and Price Row */}
                                    <div className="flex justify-between items-center mb-3 mt-auto">
                                        <div className="flex items-center gap-1">
                                            <span className="text-[12px] font-bold text-gray-700">({event.rating})</span>
                                            <div className="flex text-orange-400 text-[18px]">
                                                {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
                                            </div>
                                        </div>
                                        <span className="text-[18px] font-bold text-gray-900">{event.price}</span>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-2">
                                        <button className="flex-1 bg-[#520378] text-white py-2 rounded-full font-bold text-[13px] hover:bg-[#6b049d] transition-colors whitespace-nowrap">
                                            Know more
                                        </button>
                                        <button className="flex-1 border-2 border-[#520378] text-[#520378] py-2 rounded-full font-bold text-[13px] hover:bg-[#520378] hover:text-white transition-all whitespace-nowrap">
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
                    src="/images/wallpaper.png"
                    alt=""
                    className="absolute bottom-0 left-0 w-full h-auto min-h-[50%] object-contain object-bottom pointer-events-none"
                    style={{ zIndex: 0 }}
                />

                <div className="max-w-[1320px] mx-auto px-6 relative z-10">
                    <div className="text-center max-w-[1100px] mx-auto mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-950 font-geist">
                            Choose the Right Program for Your Learning Journey
                        </h2>
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-[1000px] mx-auto">
                            Growth isn't always linear. Whether you're just beginning or looking to deepen your
                            expertise, Vriksh E - Academy offers thoughtfully designed programs tailored to your goals
                            and aspirations - bridging theory with real-world practice every step of the way
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
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
                        ].map((program, index) => (
                            <div key={index} className="bg-[#FFB169] rounded-[32px] p-6 sm:p-7 flex flex-col items-start shadow-lg hover:-translate-y-2 transition-all duration-300">
                                <div className="bg-white p-3.5 rounded-2xl text-[#FFB169] mb-6 shadow-sm">
                                    {program.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-950 mb-4 font-geist">
                                    {program.title}
                                </h3>
                                <p className="text-base text-gray-900 leading-relaxed mb-auto pb-6">
                                    {program.description}
                                </p>
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
                    {/* Header with Title and Nav Arrows */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-950 font-geist">
                            What our learners say
                        </h2>
                        <div className="flex gap-4">
                            <button className="w-12 h-12 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-purple">
                                    <line x1="19" y1="12" x2="5" y2="12"></line>
                                    <polyline points="12 19 5 12 12 5"></polyline>
                                </svg>
                            </button>
                            <button className="w-12 h-12 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center hover:bg-black hover:text-white transition-all">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Testimonials Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
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
                        ].map((item, index) => (
                            <div key={index} className="bg-white rounded-[32px] p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow h-full">
                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-gray-950 mb-1 font-geist">{item.name}</h3>
                                    <p className="text-base text-gray-600">{item.role}</p>
                                </div>
                                <p className="text-base text-gray-700 leading-relaxed mb-8 italic">
                                    "{item.text}"
                                </p>
                                <div className="mt-auto flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <svg width="24" height="24" viewBox="0 0 24 24">
                                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                            <path d="M5.84 14.09c-.22-.67-.35-1.39-.35-2.09s.13-1.42.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                        </svg>
                                        <div className="flex text-orange-400 text-[18px]">
                                            {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
                                        </div>
                                    </div>
                                    <span className="text-base font-bold text-gray-800">{item.date}</span>
                                </div>
                            </div>
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
                                        className="h-14 sm:h-20 w-auto object-contain"
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

            {/* FAQ Section */}
            <div className="bg-white py-6 sm:py-12">
                <div className="max-w-[1320px] mx-auto px-6 flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
                    {/* Left: Questions List */}
                    <div className="flex-1 w-full">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900 leading-[1.1] tracking-tight font-inter-tight text-left">
                            Frequently asked questions
                        </h2>

                        <div className="space-y-3">
                            {[
                                "What is this workshop about?",
                                "Who can attend this workshop?",
                                "Do I need prior knowledge in psychology to participate?",
                                "Will the workshop be conducted online or offline?",
                                "Is the session interactive?",
                                "Will I receive a certificate of participation?"
                            ].map((question, index) => (
                                <div key={index} className="bg-[#FFFCE4] hover:bg-[#FFF9CC] py-3.5 px-7 rounded-[22px] flex items-center justify-between group transition-all cursor-pointer shadow-sm border border-transparent hover:border-orange-100">
                                    <span className="text-base sm:text-lg font-bold text-gray-900 pr-6">
                                        {index + 1}. {question}
                                    </span>
                                    <div className="text-gray-900 transition-colors shrink-0">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M7 10l5 5 5-5z" />
                                        </svg>
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
