import React from 'react';
import WorkshopsListing from '../components/WorkshopsListing';

const stats = [
    { value: '5000+', label: 'Active Learners', icon: '/icons/Mask group.png' },
    { value: '4.9', label: 'Google Rating', icon: '/icons/Mask group2.png' },
    { value: '300+', label: 'Workshop conducted', icon: '/icons/Mask group3.png' },
];

const Workshop = () => {
    return (
        <section id="workshop" className="bg-white pt-0">

            {/* ── Purple Header Banner + Hero combined ── */}
            <div className="relative  bg-gradient-to-b from-white to-[#FFF9E1] overflow-hidden relative">

                {/* Purple top banner */}
                <div className="bg-[#520378] pt-24 pb-6 sm:pt-32 sm:pb-10 text-center relative z-10">
                    <div className="max-w-[1240px] mx-auto px-6">
                        <h1 className="text-white text-[clamp(26px,4vw,40px)] font-bold tracking-[0.08em] uppercase font-inter-tight">
                            WORKSHOP
                        </h1>
                    </div>
                </div>

                {/* Hero content area — person image overlaps the purple banner */}
                <div className="relative overflow-hidden">
                    {/* Person image — cropped from center to bottom */}
                    <div className="absolute top-[-2%] right-0 sm:right-[4%] lg:right-[8%] bottom-0 w-[120%] sm:w-[45%] lg:w-[40%] max-w-[400px] h-[130%] overflow-hidden pointer-events-none">
                        <img
                            src="/images/hwrkshp.png"
                            alt="Workshop learner"
                            className="w-full h-full object-cover object-top"
                        />
                    </div>

                    {/* Text content */}
                    <div className="max-w-[1240px] mx-auto px-6 sm:px-14 py-12 sm:py-16">
                        <div className="max-w-[100%] sm:max-w-[50%] lg:max-w-[55%] relative z-10">
                            <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-bold text-gray-950 leading-[1.1] mb-5 font-inter-tight tracking-wide">
                                Join 5,000+ learners mastering psychology with confidence
                            </h2>
                            <p className="text-base sm:text-[18px] text-gray-600 leading-[1.7] mb-6 max-w-[750px] font-medium font-geist">
                                Step into a world of learning – practical, engaging, and skill boosting workshops under one roof. Build clarity, competence, and confidence with every session you attend.
                            </p>
                            <button className="bg-[#520378] hover:bg-[#400260] text-white px-7 py-3 rounded-full font-semibold text-[14px] sm:text-[15px] transition-all hover:scale-105 active:scale-95 shadow-md">
                                Explore workshop
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Stats Section ── */}
            <div className="px-4 sm:px-8 pb-8 relative z-20 -mt-2 sm:-mt-4">
                <div
                    className="max-w-[1240px] mx-auto rounded-[16px] pt-12 pb-10 px-6 sm:px-12 shadow-lg"
                    style={{ background: '#520378' }}
                >
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6 lg:gap-10">
                        {stats.map((stat, index) => (
                            <div key={index} className="relative mt-6 sm:mt-4">
                                {/* Icon top-left - absolutely positioned to overlap */}
                                <div className="absolute -top-[26px] left-[-6%] w-[54px] h-[54px] bg-white rounded-[12px] flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.1)] z-10">
                                    <img
                                        src={stat.icon}
                                        alt={stat.label}
                                        className="w-10 h-10 object-contain"
                                    />
                                </div>
                                {/* Content Card */}
                                <div className="bg-[#F8EAFD] shadow-sm rounded-[10px] pt-[40px] pb-6 px-7 h-full w-full">
                                    <div className="text-[36px] sm:text-[38px] font-bold text-gray-950 font-inter-tight leading-tight mb-0.5">
                                        {stat.value}
                                    </div>
                                    <div className="text-[26px] sm:text-[28px] text-gray-700 font-medium">
                                        {stat.label}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── All Workshops at One Place ── */}
            <WorkshopsListing />

            {/* ── What our learners say ── */}
            <WorkshopTestimonials />

            {/* ── Trusted by the Best ── */}
            <TrustedByBest />

            {/* ── FAQ ── */}
            <WorkshopFAQ />

        </section>
    );
};

const faqItems = [
    { q: 'What is this workshop about?', a: 'Our workshops are designed to provide practical, hands-on training on specific psychology topics, bridging the gap between theory and professional practice.' },
    { q: 'Who can attend this workshop?', a: 'Workshops are open to psychology students, professionals, and anyone interested in deepening their understanding of mental health and wellbeing.' },
    { q: 'Do I need prior knowledge in psychology to participate?', a: 'While some advanced workshops may require a background in psychology, many are beginner-friendly and designed to be accessible to all learners.' },
    { q: 'Will the workshop be conducted online or offline?', a: 'To ensure accessibility for participants worldwide, most of our workshops are conducted live via online platforms.' },
    { q: 'Is the session interactive?', a: 'Yes! Interaction is a core part of Vriksh workshops. Sessions include discussions, case studies, and practical tools to ensure engaging learning.' },
    { q: 'Will I receive a certificate of participation?', a: 'Yes, all registered participants who attend the session will receive a certificate of participation from Vriksh E-Academy.' },
];

const WorkshopFAQ = () => {
    const [openIndex, setOpenIndex] = React.useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-white pt-2 pb-12 sm:pt-4 sm:pb-20">
            <div className="max-w-[1320px] mx-auto px-6 flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
                {/* Left: Questions List */}
                <div className="flex-1 w-full">
                    <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold mb-8 text-gray-950 font-inter-tight text-left leading-tight">
                        Frequently asked questions
                    </h2>

                    <div className="space-y-2.5">
                        {faqItems.map((item, index) => (
                            <div key={index} className="flex flex-col">
                                <div
                                    onClick={() => toggleFaq(index)}
                                    className={`py-2 px-8 rounded-[22px] flex items-center justify-between group transition-all duration-300 cursor-pointer shadow-sm border-[1.5px] ${openIndex === index ? 'bg-[#520378] border-[#520378] text-white rounded-b-none' : 'bg-white border-[#520378] text-gray-900 hover:bg-[#520378] hover:text-white'}`}
                                >
                                    <span className="text-base sm:text-lg font-medium pr-6 font-geist transition-colors duration-300">
                                        {index + 1}. {item.q}
                                    </span>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${openIndex === index ? 'bg-white text-[#520378] rotate-180' : 'bg-[#520378] text-white group-hover:bg-white group-hover:text-[#520378]'}`}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M7 10l5 5 5-5z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className={`px-8 pb-6 rounded-b-[20px] text-base leading-relaxed font-medium ${openIndex === index ? 'bg-[#520378] text-white/90 border-x-[1.5px] border-b-[1.5px] border-[#520378]' : ''}`}>
                                        {item.a}
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
                        alt="Workshop learners"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

const workshopReviews = [
    {
        name: 'Ananya R.',
        role: 'Individual Counselling Client',
        text: '"Vriksh provided me with a safe and understanding space to express myself. The sessions helped me manage my anxiety and rebuild my confidence step by step. I truly felt heard and supported throughout my journey."',
        date: 'June 2025',
    },
    {
        name: 'Ananya R.',
        role: 'Individual Counselling Client',
        text: '"Vriksh provided me with a safe and understanding space to express myself. The sessions helped me manage my anxiety and rebuild my confidence step by step. I truly felt heard and supported throughout my journey."',
        date: 'June 2025',
    },
    {
        name: 'Ananya R.',
        role: 'Individual Counselling Client',
        text: '"Vriksh provided me with a safe and understanding space to express myself. The sessions helped me manage my anxiety and rebuild my confidence step by step. I truly felt heard and supported throughout my journey."',
        date: 'June 2025',
    },
    {
        name: 'Ananya R.',
        role: 'Individual Counselling Client',
        text: '"Vriksh provided me with a safe and understanding space to express myself. The sessions helped me manage my anxiety and rebuild my confidence step by step. I truly felt heard and supported throughout my journey."',
        date: 'June 2025',
    },
    {
        name: 'Ananya R.',
        role: 'Individual Counselling Client',
        text: '"Vriksh provided me with a safe and understanding space to express myself. The sessions helped me manage my anxiety and rebuild my confidence step by step. I truly felt heard and supported throughout my journey."',
        date: 'June 2025',
    },
    {
        name: 'Ananya R.',
        role: 'Individual Counselling Client',
        text: '"Vriksh provided me with a safe and understanding space to express myself. The sessions helped me manage my anxiety and rebuild my confidence step by step. I truly felt heard and supported throughout my journey."',
        date: 'June 2025',
    },
];

const WorkshopTestimonials = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [itemsVisible, setItemsVisible] = React.useState(3);

    React.useEffect(() => {
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

    const nextSlide = () => {
        setCurrentIndex((prev) => {
            const nextIndex = prev + 1;
            if (nextIndex > workshopReviews.length - itemsVisible) {
                return 0;
            }
            return nextIndex;
        });
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => {
            const prevIndex = prev - 1;
            if (prevIndex < 0) {
                return workshopReviews.length - itemsVisible;
            }
            return prevIndex;
        });
    };

    React.useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, [itemsVisible]);

    return (
        <div
            className="py-16 sm:py-20 border-t border-black/5"
            style={{ background: 'linear-gradient(180deg, #FFF9E1 0%, #FFFFFF 100%)' }}
        >
            <div className="max-w-[1240px] mx-auto px-6">
                {/* Header with Navigation */}
                <div className="flex justify-between items-end mb-12">
                    <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-black font-inter-tight leading-tight">
                        What our learners say
                    </h2>
                    {/* Carousel Controls */}
                    <div className="flex gap-3 mb-2">
                        <button
                            onClick={prevSlide}
                            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center bg-white text-gray-400 hover:border-[#520378] hover:text-[#520378] transition-all shadow-sm active:scale-95"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 hover:bg-[#520378] hover:text-white transition-all shadow-sm active:scale-95"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Testimonial Slider Container */}
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * (100 / itemsVisible)}%)` }}
                    >
                        {workshopReviews.map((review, index) => (
                            <div key={index} className="w-full md:w-1/2 lg:w-1/3 flex-none px-4">
                                <div className="bg-white rounded-[24px] p-8 sm:p-10 shadow-sm border border-black/5 flex flex-col h-full hover:shadow-md transition-shadow">
                                    <div className="mb-6">
                                        <h4 className="text-lg font-bold text-gray-950 mb-0.5">{review.name}</h4>
                                        <p className="text-sm text-gray-500 font-medium italic">{review.role}</p>
                                    </div>
                                    <p className="text-gray-800 text-[15px] leading-relaxed mb-10 flex-grow font-medium">
                                        {review.text}
                                    </p>
                                    {/* Footer with Google & Stars */}
                                    <div className="flex items-center justify-between pt-6 border-t border-gray-100 mt-auto">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 flex items-center justify-center">
                                                <svg viewBox="0 0 24 24" className="w-6 h-6">
                                                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                                    <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z" />
                                                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                                                </svg>
                                            </div>
                                            <div className="flex">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <svg key={star} className="w-4 h-4 text-[#FCA65B]" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                                    </svg>
                                                ))}
                                            </div>
                                        </div>
                                        <span className="text-sm font-bold text-gray-800">{review.date}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const schoolLogos = [
    '/images/school 1.png',
    '/images/school 2.png',
    '/images/school 3.png',
    '/images/school 4.png',
    '/images/school 5.png',
    '/images/school 6.png',
    '/images/school 7.png',
    '/images/school 8.png',
];

const TrustedByBest = () => (
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
);

export default Workshop;
