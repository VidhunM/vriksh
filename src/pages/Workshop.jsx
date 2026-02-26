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
            <div className="relative bg-[#FEF9E7] overflow-hidden">

                {/* Purple top banner */}
                <div className="bg-[#520378] flex items-center justify-center pt-26 pb-10 sm:pt-32 sm:pb-12 relative z-10">
                    <h1 className="text-white text-[clamp(26px,4vw,40px)] font-bold tracking-[0.08em] uppercase font-inter-tight">
                        WORKSHOP
                    </h1>
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
                            <h2 className="text-[clamp(24px,3vw,38px)] font-bold text-gray-950 leading-[1.2] mb-4 font-inter-tight tracking-tight">
                                Join 5,000+ learners mastering psychology with confidence
                            </h2>
                            <p className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed mb-6 max-w-[420px] font-medium">
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
                                <div className="bg-[#F8EAFD] shadow-sm rounded-[12px] pt-[44px] pb-6 px-7 h-full w-full">
                                    <div className="text-[26px] sm:text-[28px] font-bold text-gray-950 font-inter-tight leading-tight mb-0.5">
                                        {stat.value}
                                    </div>
                                    <div className="text-[13px] sm:text-[14px] text-gray-700 font-medium">
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
        <div className="bg-white py-14 sm:py-20 px-6 sm:px-12">
            <div className="max-w-[1320px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

                {/* Left: FAQ */}
                <div className="flex-1 w-full text-left">
                    <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold mb-10 text-gray-950 font-inter-tight leading-tight">
                        Frequently asked questions
                    </h2>

                    <div className="space-y-3">
                        {faqItems.map((item, index) => (
                            <div key={index} className="flex flex-col">
                                <div
                                    onClick={() => toggleFaq(index)}
                                    className={`py-2 px-8 rounded-[22px] flex items-center justify-between group cursor-pointer shadow-sm border-[1.5px] ${openIndex === index ? 'bg-[#520378] border-[#520378] text-white rounded-b-none' : 'bg-white border-[#520378] text-gray-900 hover:bg-[#520378] hover:text-white'}`}
                                >
                                    <span className="text-base sm:text-lg font-medium pr-6 font-geist">
                                        {index + 1}. {item.q}
                                    </span>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${openIndex === index ? 'bg-white text-[#520378] rotate-180' : 'bg-[#520378] text-white group-hover:bg-white group-hover:text-[#520378]'}`}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M7 10l5 5 5-5z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className={`${openIndex === index ? 'block' : 'hidden'}`}>
                                    <div className={`px-8 pb-6 rounded-b-[20px] text-base leading-relaxed font-medium ${openIndex === index ? 'bg-[#520378] text-white/90 border-x-[1.5px] border-b-[1.5px] border-[#520378]' : ''}`}>
                                        {item.a}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Side Image */}
                <div className="flex-1 w-full lg:max-w-[480px] h-auto aspect-[3/3.4] rounded-[36px] overflow-hidden shadow-2xl relative">
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
    const [page, setPage] = React.useState(0);
    const perPage = 3;
    const totalPages = Math.ceil(workshopReviews.length / perPage);
    const visible = workshopReviews.slice(page * perPage, page * perPage + perPage);

    return (
        <div className="bg-[#FEFCE8] py-14 sm:py-16 px-6 sm:px-12">
            <div className="max-w-[1240px] mx-auto">

                {/* Header Row */}
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-[clamp(22px,2.8vw,36px)] font-bold text-gray-950 font-inter-tight">
                        What our learners say
                    </h2>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setPage((p) => (p - 1 + totalPages) % totalPages)}
                            className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-gray-500 hover:bg-gray-50 transition-all"
                            aria-label="Previous"
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="15 18 9 12 15 6" />
                            </svg>
                        </button>
                        <button
                            onClick={() => setPage((p) => (p + 1) % totalPages)}
                            className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-gray-500 hover:bg-gray-50 transition-all"
                            aria-label="Next"
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Testimonial Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {visible.map((review, index) => (
                        <div
                            key={`${page}-${index}`}
                            className="bg-white rounded-[20px] p-6 flex flex-col border border-gray-100 shadow-sm"
                        >
                            {/* Name + Role */}
                            <div className="mb-4">
                                <p className="text-[15px] font-bold text-gray-950 font-inter-tight">{review.name}</p>
                                <p className="text-[13px] text-gray-500 mt-0.5">{review.role}</p>
                            </div>

                            {/* Divider */}
                            <div className="border-t border-gray-100 mb-4" />

                            {/* Quote */}
                            <p className="text-[13px] sm:text-[14px] text-gray-700 leading-relaxed flex-grow">
                                {review.text}
                            </p>

                            {/* Footer: Google + Stars + Date */}
                            <div className="mt-6 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    {/* Google G */}
                                    <svg width="18" height="18" viewBox="0 0 24 24">
                                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.07-3.71 1.07-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                        <path fill="#FBBC05" d="M5.84 14.11c-.22-.67-.35-1.39-.35-2.11s.13-1.44.35-2.11V7.05H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.95l3.66-2.84z" />
                                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.05l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                    </svg>
                                    <span className="text-orange-400 text-[15px] tracking-tight">★★★★★</span>
                                </div>
                                <span className="text-[13px] font-semibold text-gray-700">{review.date}</span>
                            </div>
                        </div>
                    ))}
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
    <div className="bg-white py-10 sm:py-14 px-6 sm:px-12">
        <div className="max-w-[1240px] mx-auto">
            {/* Title */}
            <h2 className="text-[clamp(20px,2.5vw,32px)] font-bold text-[#520378] text-center mb-8 font-inter-tight">
                Trusted by the Best
            </h2>

            {/* Logo strip */}
            <div className="border border-gray-200 rounded-[20px] py-5 px-8 flex items-center justify-between gap-6 overflow-x-auto scrollbar-none">
                {schoolLogos.map((src, i) => (
                    <div key={i} className="flex-shrink-0 flex items-center justify-center h-12">
                        <img
                            src={src}
                            alt={`School logo ${i + 1}`}
                            className={`max-h-full w-auto object-contain ${src.includes('school 2') ? 'scale-[1.5]' : ''}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default Workshop;
