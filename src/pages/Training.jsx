import React, { useState } from 'react';

const categories = ['Counsellors', 'Special Educator', 'Parents', 'Teachers', 'Students', 'Corporate'];

const trainingCards = [
    {
        title: 'CBT for Children & Adolescents',
        rating: '4.9',
        duration: '1.5 Hours',
        image: '/images/hwrkshp.png',
        category: 'Counsellors'
    },
    {
        title: 'CBT for Children & Adolescents',
        rating: '4.9',
        duration: '1.5 Hours',
        image: '/images/hwrkshp.png',
        category: 'Counsellors'
    },
    {
        title: 'CBT for Children & Adolescents',
        rating: '4.9',
        duration: '1.5 Hours',
        image: '/images/hwrkshp.png',
        category: 'Counsellors'
    }
];

const testimonials = [
    {
        name: "Ananya R.",
        role: "Individual Counselling Client",
        text: "Vriksh provided me with a safe and understanding space to express myself. The sessions helped me manage my anxiety and rebuild my confidence step by step. I truly felt heard and supported throughout my journey.",
        date: "June 2025"
    },
    {
        name: "Ananya R.",
        role: "Individual Counselling Client",
        text: "Vriksh provided me with a safe and understanding space to express myself. The sessions helped me manage my anxiety and rebuild my confidence step by step. I truly felt heard and supported throughout my journey.",
        date: "June 2025"
    },
    {
        name: "Ananya R.",
        role: "Individual Counselling Client",
        text: "Vriksh provided me with a safe and understanding space to express myself. The sessions helped me manage my anxiety and rebuild my confidence step by step. I truly felt heard and supported throughout my journey.",
        date: "June 2025"
    },
    {
        name: "Ananya R.",
        role: "Individual Counselling Client",
        text: "Vriksh provided me with a safe and understanding space to express myself. The sessions helped me manage my anxiety and rebuild my confidence step by step. I truly felt heard and supported throughout my journey.",
        date: "June 2025"
    }
];

const Training = () => {
    const [activeCategory, setActiveCategory] = useState('Counsellors');
    const [testIndex, setTestIndex] = useState(0);

    const stats = [
        { value: '3000+', label: 'Active Learners' },
        { value: '4.8', label: 'Google Rating' },
        { value: '150+', label: 'Training Conducted' },
    ];

    const itemsVisible = 3;
    const totalSlides = Math.ceil(testimonials.length / itemsVisible);

    const prevSlide = () => {
        setTestIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const nextSlide = () => {
        setTestIndex((prev) => (prev + 1) % totalSlides);
    };

    return (
        <div className="bg-white pt-0">
            {/* ── Purple Header Banner ── */}
            <div className="bg-[#520378] pt-24 pb-6 sm:pt-32 sm:pb-10 text-center">
                <div className="max-w-[1240px] mx-auto px-6">
                    <h1 className="text-2xl sm:text-4xl font-bold text-white uppercase tracking-wider font-inter-tight">
                        TRAINING
                    </h1>
                </div>
            </div>

            {/* ── Hero Content Section ── */}
            <div
                className="relative overflow-hidden bg-white"
                style={{
                    background: 'radial-gradient(circle at 100% 50%, #FFF9E1 0%, rgba(255, 255, 255, 0) 60%)'
                }}
            >
                <div className="max-w-[1240px] mx-auto px-6 sm:px-14 pt-2 pb-2 sm:pt-4 sm:pb-4 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Left Side: Text content */}
                    <div className="flex-1 order-2 lg:order-1 max-w-[800px]">
                        <h2 className="text-[clamp(28px,4vw,38px)] font-extrabold text-[#062623] leading-[1.1] mb-8 font-inter-tight tracking-tight">
                            Hands-on, interactive programs <br />
                            led by expert psychologists
                        </h2>
                        <p className="text-base sm:text-[19px] text-gray-700 leading-[1.6] mb-12 font-medium max-w-[580px]">
                            Engage in introspective activities and real-life case <br className="hidden sm:block" />
                            discussions, using practical tools to gain deeper insights <br className="hidden sm:block" />
                            into every topic and strengthen your professional skills.
                        </p>
                        <button className="bg-[#520378] hover:bg-[#400260] text-white px-12 py-4.5 rounded-full font-bold text-base transition-all hover:scale-105 active:scale-95 shadow-lg">
                            Explore Training Programs
                        </button>
                    </div>

                    {/* Right Side: Image */}
                    <div className="flex-1 order-1 lg:order-2 w-full max-w-[320px] lg:max-w-[380px]">
                        <div className="relative">
                            <img
                                src="/images/hwrkshp.png"
                                alt="Training Expert"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Stats Section ── */}
            <div className="max-w-[1240px] mx-auto px-6 pb-20">
                <div className="bg-[#520378] rounded-[40px] p-6 sm:p-8 lg:p-10 shadow-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="bg-[#F5E6FC] rounded-[20px] px-6 pt-8 pb-6 flex flex-col gap-2 shadow-sm relative transition-all group mt-4"
                            >
                                {/* Icon top-left - White Square (Half-offset) */}
                                <div className="absolute -top-5 left-5 w-14 h-14 bg-white rounded-[12px] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                                    <img
                                        src="/icons/workshop.png"
                                        alt="Stat icon"
                                        className="w-9 h-9 object-contain"
                                    />
                                </div>
                                <div className="flex flex-col mt-1">
                                    <div className="text-[36px] sm:text-[42px] font-black text-gray-950 font-inter-tight leading-none tracking-tight">
                                        {stat.value}
                                    </div>
                                    <div className="text-[15px] sm:text-[17px] text-gray-600 font-bold mt-1.5">
                                        {stat.label}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── All Training Listing Section ── */}
            <div className="bg-white py-14 sm:py-20 px-6 sm:px-12">
                <div className="max-w-[1240px] mx-auto">
                    {/* Header */}
                    <div className="text-center mb-10">
                        <h2 className="text-[clamp(26px,3vw,42px)] font-bold text-gray-950 font-inter-tight mb-4">
                            All Training at One Place
                        </h2>
                        <p className="text-[14px] sm:text-[15px] text-gray-500 max-w-[680px] mx-auto leading-relaxed mb-4">
                            Led by experienced psychologists, our curated and highly interactive training programs encourage deep insight, meaningful reflection, and practical real-world application.
                        </p>
                        <p className="text-[14px] text-gray-600 font-medium tracking-wide">
                            Live • Online • Accessible Worldwide
                        </p>
                    </div>

                    {/* Category Tabs */}
                    <div className="flex flex-wrap gap-2 sm:gap-4 justify-center mb-14">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2.5 rounded-full text-[14px] sm:text-[15px] font-semibold border-2 transition-all ${activeCategory === cat
                                    ? 'bg-[#520378] text-white border-[#520378]'
                                    : 'bg-white text-gray-600 border-gray-400 hover:border-[#520378] hover:text-[#520378]'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Training Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {trainingCards.map((card, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-[24px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
                            >
                                {/* Card Image */}
                                <div className="h-[200px] sm:h-[240px] overflow-hidden p-3">
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="w-full h-full object-cover rounded-[18px] group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                {/* Card Content */}
                                <div className="p-6 pt-2">
                                    <h3 className="text-[18px] sm:text-[20px] font-bold text-gray-900 mb-4 font-inter-tight leading-tight">
                                        {card.title}
                                    </h3>

                                    <div className="flex items-center gap-2 text-gray-600 text-[14px] mb-6">
                                        <span className="font-bold">({card.rating})</span>
                                        <div className="flex text-orange-400 text-[16px]">
                                            {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
                                        </div>
                                        <span className="mx-2 text-gray-300">|</span>
                                        <span>Duration: {card.duration}</span>
                                    </div>

                                    <button className="bg-[#520378] text-white px-8 py-2.5 rounded-full text-[14px] font-bold hover:bg-[#400260] transition-colors shadow-md">
                                        Know more
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Load More */}
                    <div className="flex justify-center">
                        <button className="border-2 border-[#520378] text-[#520378] px-12 py-3 rounded-full font-bold text-[15px] hover:bg-[#520378] hover:text-white transition-all shadow-sm active:scale-95">
                            Load more
                        </button>
                    </div>
                </div>
            </div>

            {/* ── Testimonials Section ── */}
            <div
                className="py-16 sm:py-20"
                style={{ background: 'linear-gradient(180deg, #FFF9E1 0%, #FFFFFF 100%)' }}
            >
                <div className="max-w-[1240px] mx-auto px-6">
                    {/* Header with Navigation */}
                    <div className="flex justify-between items-center mb-12">
                        <h2 className="text-[clamp(26px,3.5vw,42px)] font-bold text-gray-950 font-geist">
                            What our leaners say
                        </h2>
                        <div className="flex gap-4">
                            <button
                                onClick={prevSlide}
                                className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-[#520378] hover:bg-gray-50 transition-all shadow-sm active:scale-95"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="15 18 9 12 15 6"></polyline>
                                </svg>
                            </button>
                            <button
                                onClick={nextSlide}
                                className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-400 transition-all shadow-sm active:scale-95"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Testimonials Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.slice(testIndex * itemsVisible, testIndex * itemsVisible + itemsVisible).map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-[32px] p-8 flex flex-col shadow-sm border border-gray-50 min-h-[400px]"
                            >
                                <div className="mb-8">
                                    <h3 className="text-xl font-bold text-gray-950 mb-1 font-geist">{item.name}</h3>
                                    <p className="text-base text-gray-500">{item.role}</p>
                                </div>
                                <p className="text-[15px] sm:text-[16px] text-gray-700 leading-relaxed mb-10 flex-grow italic">
                                    "{item.text}"
                                </p>
                                <div className="mt-auto pt-6 border-t border-gray-50 flex justify-between items-center">
                                    <div className="flex items-center gap-2.5">
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
                                    <span className="text-base font-bold text-gray-800">{item.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Training;
