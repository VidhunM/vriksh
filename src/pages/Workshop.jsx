import React from 'react';

const stats = [
    { value: '5K+', label: 'Active Learners' },
    { value: '4.9', label: 'Google Rating' },
    { value: '300+', label: 'Workshop conducted' },
];

const Workshop = () => {
    return (
        <section id="workshop" className="bg-white pt-0">

            {/* ── Purple Header Banner + Hero combined ── */}
            <div className="relative bg-[#FEF9E7] overflow-hidden">

                {/* Purple top banner */}
                <div className="bg-[#520378] flex items-center justify-center pt-16 pb-8 sm:pt-24 sm:pb-10 relative z-10">
                    <h1 className="text-white text-[clamp(24px,4vw,36px)] font-bold tracking-[0.08em] uppercase font-inter-tight">
                        WORKSHOP
                    </h1>
                </div>

                {/* Hero content area — person image overlaps the purple banner */}
                <div className="relative overflow-hidden">
                    {/* Person image — cropped from center to bottom */}
                    <div className="absolute top-10 right-0 sm:right-[4%] lg:right-[8%] bottom-0 w-[42%] sm:w-[38%] lg:w-[32%] max-w-[320px] h-[70%] overflow-hidden pointer-events-none">
                        <img
                            src="/images/hwrkshp.png"
                            alt="Workshop learner"
                            className="w-full h-full object-cover object-top"
                        />
                    </div>

                    {/* Text content */}
                    <div className="max-w-[1240px] mx-auto px-6 sm:px-14 py-10 sm:py-14">
                        <div className="max-w-[52%] sm:max-w-[50%]">
                            <h2 className="text-[clamp(22px,3vw,34px)] font-bold text-gray-950 leading-[1.2] mb-4 font-inter-tight">
                                Join 5,000+ learners mastering psychology with confidence
                            </h2>
                            <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed mb-6 max-w-[380px]">
                                Step into a world of learning – practical, engaging, and skill boosting workshops under one roof. Build clarity, competence, and confidence with every session you attend.
                            </p>
                            <button className="bg-[#520378] hover:bg-[#400260] text-white px-6 py-2.5 rounded-full font-semibold text-[13px] sm:text-[14px] transition-all hover:scale-105 active:scale-95 shadow-md">
                                Explore workshop
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Stats Section ── */}
            <div className="px-4 sm:px-8 pb-8 relative z-20 -mt-2 sm:-mt-4">
                <div
                    className="max-w-[1240px] mx-auto rounded-[22px] py-7 px-6 sm:px-10 shadow-md"
                    style={{ background: 'linear-gradient(to right, #EDD9F7, #FDE8C8)' }}
                >
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-[18px] p-5 sm:p-6 flex flex-col gap-3 shadow-sm"
                            >
                                {/* Icon top-left */}
                                <div className="w-11 h-11 bg-orange-50 rounded-[11px] flex items-center justify-center">
                                    <img
                                        src="/icons/workshop.png"
                                        alt="Workshop icon"
                                        className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
                                    />
                                </div>
                                {/* Number */}
                                <div className="text-[24px] sm:text-[26px] font-bold text-gray-950 font-inter-tight leading-tight">
                                    {stat.value}
                                </div>
                                {/* Label */}
                                <div className="text-[13px] sm:text-[14px] text-gray-500 font-medium -mt-1">
                                    {stat.label}
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
    { q: 'What is this workshop about?' },
    { q: 'Who can attend this workshop?' },
    { q: 'Do I need prior knowledge in psychology to participate?' },
    { q: 'Will the workshop be conducted online or offline?' },
    { q: 'Is the session interactive?' },
    { q: 'Will I receive a certificate of participation?' },
];

const WorkshopFAQ = () => {
    const [open, setOpen] = React.useState(0);

    return (
        <div className="bg-white py-14 sm:py-20 px-6 sm:px-12">
            <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

                {/* Left: FAQ */}
                <div className="lg:w-[55%] w-full">
                    <h2 className="text-[clamp(26px,3vw,40px)] font-bold text-gray-950 leading-[1.2] mb-6 font-inter-tight">
                        Frequently asked<br />questions
                    </h2>

                    {/* Blue T icon */}
                    <div className="w-9 h-9 bg-blue-500 rounded-lg flex items-center justify-center mb-5">
                        <span className="text-white font-bold text-[16px]">T</span>
                    </div>

                    {/* Accordion */}
                    <div className="flex flex-col divide-y divide-gray-100 border border-gray-100 rounded-[16px] overflow-hidden">
                        {faqItems.map((item, i) => (
                            <button
                                key={i}
                                onClick={() => setOpen(open === i ? -1 : i)}
                                className={`flex items-center justify-between w-full text-left px-5 py-4 transition-colors ${open === i ? 'bg-[#FEF9C3]' : 'bg-white hover:bg-gray-50'
                                    }`}
                            >
                                <span className={`text-[14px] sm:text-[15px] ${open === i ? 'font-semibold text-gray-950' : 'text-gray-700'}`}>
                                    {i + 1}. {item.q}
                                </span>
                                {/* Purple arrow button */}
                                <span className="w-7 h-7 flex-shrink-0 ml-4 rounded-full bg-[#520378] flex items-center justify-center">
                                    <svg
                                        width="12" height="12" viewBox="0 0 24 24" fill="none"
                                        stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                                        className={`transition-transform duration-200 ${open === i ? 'rotate-0' : 'rotate-180'}`}
                                    >
                                        <polyline points="18 15 12 9 6 15" />
                                    </svg>
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right: Image */}
                <div className="lg:w-[45%] w-full">
                    <div className="rounded-[24px] overflow-hidden h-[380px] sm:h-[460px] lg:h-full min-h-[380px]">
                        <img
                            src="/images/career hero.png"
                            alt="Workshop student"
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
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
                            className="bg-white rounded-[20px] p-6 flex flex-col border border-gray-100 shadow-sm animate-fadeIn"
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

const categories = ['Counselling', 'Special Education', 'Corporate', 'Teachers', 'Students', 'Parents'];

const workshopCards = [
    { title: 'Counselling Skills 101', duration: '1.5 Hours', rating: '4.9 Google review', image: '/images/hwrkshp.png' },
    { title: 'Counselling Skills 101', duration: '1.5 Hours', rating: '4.9 Google review', image: '/images/hwrkshp.png' },
    { title: 'Counselling Skills 101', duration: '1.5 Hours', rating: '4.9 Google review', image: '/images/hwrkshp.png' },
    { title: 'Counselling Skills 101', duration: '1.5 Hours', rating: '4.9 Google review', image: '/images/hwrkshp.png' },
];

const WorkshopsListing = () => {
    const [activeCategory, setActiveCategory] = React.useState('Counselling');

    return (
        <div className="bg-white py-14 sm:py-20 px-6 sm:px-12">
            <div className="max-w-[1240px] mx-auto">

                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-[clamp(26px,3vw,40px)] font-bold text-gray-950 font-inter-tight mb-3">
                        All Workshops at One Place
                    </h2>
                    <p className="text-[14px] sm:text-[15px] text-gray-500 max-w-[520px] mx-auto leading-relaxed mb-3">
                        Led by experienced psychologists, our curated and highly interactive sessions encourage deep insight, meaningful reflection, and practical real-world application.
                    </p>
                    <p className="text-[13px] text-gray-400 font-medium tracking-wide">
                        Live • Online • Accessible Worldwide
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap gap-2 sm:gap-3 justify-start mb-10">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-5 py-2 rounded-full text-[13px] sm:text-[14px] font-medium border transition-all ${activeCategory === cat
                                ? 'bg-gray-950 text-white border-gray-950'
                                : 'bg-white text-gray-700 border-gray-300 hover:border-gray-500'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Workshop Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
                    {workshopCards.map((card, index) => (
                        <div
                            key={index}
                            className="rounded-[18px] overflow-hidden border border-[#520378]/20 shadow-sm hover:shadow-md transition-shadow bg-white"
                        >
                            {/* Card Image */}
                            <div className="h-[160px] overflow-hidden">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>

                            {/* Purple Card Info */}
                            <div className="bg-[#520378] p-4">
                                <h3 className="text-white font-bold text-[15px] leading-tight mb-3 font-inter-tight">
                                    {card.title}
                                </h3>
                                <div className="border-t border-white/20 pt-3 flex flex-col gap-1.5 mb-4">
                                    <div className="flex items-center gap-2 text-white/80 text-[12px]">
                                        {/* Clock icon */}
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                                        </svg>
                                        Duration: {card.duration}
                                    </div>
                                    <div className="flex items-center gap-2 text-white/80 text-[12px]">
                                        {/* Star icon */}
                                        <svg width="13" height="13" viewBox="0 0 20 20" fill="#fbbf24">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        Rating: {card.rating}
                                    </div>
                                </div>
                                <button className="bg-white text-[#520378] px-4 py-1.5 rounded-full text-[12px] font-semibold hover:bg-gray-100 transition-all active:scale-95">
                                    Know more
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More */}
                <div className="flex justify-center">
                    <button className="bg-[#520378] hover:bg-[#400260] text-white px-10 py-3 rounded-full font-semibold text-[15px] transition-all hover:scale-105 active:scale-95 shadow-md">
                        Load more
                    </button>
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
