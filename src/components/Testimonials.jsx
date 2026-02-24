import React, { useState } from 'react';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const reviews = [
        {
            name: 'Ananya R.',
            role: 'Individual Counselling Client',
            text: 'Vriksh provided me with a safe and understanding space to express myself. The sessions helped me manage my anxiety and rebuild my confidence step by step. I truly felt heard and supported throughout my journey.',
            rating: 5,
            date: 'January 2026'
        },
        {
            name: 'Geetha',
            role: 'School Coordinator',
            text: 'Vriksh’s school-based mental health program has made a meaningful difference in our school. With dedicated counselors and special educators assigned specifically to us, students feel comfortable opening up and learning important life skills. The program has helped build resilience and increased mental health awareness among students.',
            rating: 5,
            date: 'October 2025'
        },
        {
            name: 'Pragya Bhatnagar',
            role: 'Counselling Psychologist',
            text: 'It was an interactive and informative course. Most importantly, the trainers have effervescent personalities and are very encouraging and non-judgmental. There is a saying, “Practice what you preach,” and they justified it through the environment they created during the sessions.',
            rating: 5,
            date: 'June 2024'
        },
        {
            name: 'Ram.K',
            role: 'Corporate HR Manager',
            text: 'The interactive workshop conducted by Vriksh was very impactful. The psychologist led an engaging online session on work-life balance with activities that helped employees understand and apply the concepts better.',
            rating: 5,
            date: 'November 2024'
        },
        {
            name: 'Ramesh',
            role: 'Career Counselling Client',
            text: 'The career guidance session provided valuable insights and helped me identify a suitable career path. I strongly recommend your services to anyone who needs direction and confidence in their career decisions.',
            rating: 5,
            date: 'January 2025'
        },
        {
            name: 'Tanisha',
            role: 'Special Educator',
            text: 'The content was simple to understand yet comprehensive. The course and curriculum offered by Vriksh sparked intellectual curiosity. Overall, it was an incredible journey with the mentors and mentees.',
            rating: 5,
            date: 'December 2023'
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    // Helper to get visible reviews (handling loop)
    const getVisibleReviews = () => {
        return [
            reviews[currentIndex % reviews.length],
            reviews[(currentIndex + 1) % reviews.length],
            reviews[(currentIndex + 2) % reviews.length]
        ];
    };

    return (
        <section id="testimonials" className="py-10 sm:py-14 bg-[#FEF9E7]">
            <div className="max-w-[1240px] mx-auto px-6 sm:px-12">
                <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end mb-12 gap-6 sm:gap-0">
                    <h2 className="text-[24px] md:text-[32px] font-bold text-gray-900 leading-[1.2] max-w-[500px] text-center sm:text-left font-inter-tight">
                        Trusted by Individuals, Institutions & Professionals
                    </h2>
                    <div className="flex gap-3 mb-1">
                        <button
                            onClick={prevSlide}
                            className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-100 hover:shadow-md transition-all active:scale-90"
                        >
                            <svg className="w-5 h-5 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path></svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-100 hover:shadow-md transition-all active:scale-90"
                        >
                            <svg className="w-5 h-5 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500">
                    {getVisibleReviews().map((rev, index) => (
                        <div
                            key={`${rev.name}-${currentIndex}-${index}`}
                            className="bg-white p-6 md:p-8 rounded-[32px] shadow-sm flex flex-col h-full animate-fadeIn"
                        >
                            <div className="mb-4">
                                <h4 className="text-[18px] font-bold text-gray-900 mb-0.5 font-inter-tight">{rev.name}</h4>
                                <span className="text-[14px] font-medium text-gray-500 block mb-6">{rev.role}</span>
                                <p className="text-[#4b5563] text-[15px] leading-[1.6] mb-2 flex-grow">
                                    "{rev.text}"
                                </p>
                            </div>

                            <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
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
                                            <svg key={i} className="w-3.5 h-3.5 text-[#fbbf24] fill-current" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                                <span className="text-[13px] font-medium text-gray-800">{rev.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
