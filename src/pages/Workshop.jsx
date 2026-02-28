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
                    {/* Person image — cropped from center to bottom (Desktop/Tablet) */}
                    <div className="hidden sm:block absolute top-[-2%] right-0 sm:right-[4%] lg:right-[8%] bottom-0 sm:w-[50%] lg:w-[45%] max-w-[450px] h-[130%] overflow-hidden pointer-events-none">
                        <img
                            src="/images/hwrkshp.png"
                            alt="Workshop learner"
                            className="w-full h-full object-cover object-top"
                        />
                    </div>

                    {/* Text content */}
                    <div className="max-w-[1240px] mx-auto px-6 sm:px-14 pt-10 sm:py-16 pb-0">
                        <div className="max-w-[100%] sm:max-w-[50%] lg:max-w-[55%] relative z-10">
                            <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-bold text-gray-950 leading-[1.1] mb-5 font-inter-tight tracking-wide">
                                Join 5,000+ learners mastering psychology with confidence
                            </h2>
                            <p className="text-[19px] md:text-base sm:text-[18px] text-gray-600 leading-[1.7] mb-6 max-w-[750px] font-medium font-geist">
                                Step into a world of learning – practical, engaging, and skill boosting workshops under one roof. Build clarity, competence, and confidence with every session you attend.
                            </p>
                            <button className="bg-[#520378] hover:bg-[#400260] text-white px-7 py-3 rounded-full font-semibold text-[14px] sm:text-[15px] transition-all hover:scale-105 active:scale-95 shadow-md">
                                Explore workshop
                            </button>
                        </div>
                    </div>

                    {/* Mobile Image - touching the stats card below */}
                    <div className="block sm:hidden w-full h-[360px] mt-8 overflow-hidden relative z-10 flex justify-end">
                        <img
                            src="/images/hwrkshp.png"
                            alt="Workshop learner Mobile"
                            className="w-[115%] max-w-[115%] h-full object-cover object-top relative right-[-5%]"
                        />
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
    { q: 'What if I miss a live session?', a: 'If recording access is included, you can watch the session later within the given access period.' },
    { q: 'Can institutions collaborate with Vriksh?', a: 'Yes. We conduct customized workshops, training programs and certificate courses for schools, colleges, and organizations. You can contact us for collaboration details.' },
    { q: 'Is there a refund policy?', a: 'As seats are limited, fees are generally non-refundable. However, transfers to future batches may be considered on request.' }
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

const testimonials = [
    {
        name: "Madhavi",
        role: "Counsellor",
        text: "Vriksh training webinars are crisp and clearly explained. I thoroughly enjoyed all the sessions. The trainers are highly knowledgeable and experienced. Thank you for such insightful learning experiences.",
        date: "February 2025"
    },
    {
        name: "Dr. Ashwini Kamath",
        role: "Special Educator",
        text: "Very informative and useful seminar on DTLD conducted by Vriksh. I would highly recommend all special educators and counselors to attend their sessions.",
        date: "October 2025"
    },
    {
        name: "Suriyasre",
        role: "Counsellor",
        text: "The workshop on Crisis Intervention was highly informative and interactive — truly worth our time. I sincerely appreciate the effort invested in preparing detailed study material, along with the necessary diagnostic tools relevant to the topic. Thank you for the valuable learning experience.",
        date: "November 2024"
    },
    {
        name: "Pooja",
        role: "Counsellor",
        text: "I have attended a few workshops with Vriksh, and each time I was satisfied with the content and the way the sessions were delivered. The experts are highly interactive and engaging. I look forward to learning more with Vriksh.",
        date: "May 2025"
    },
    {
        name: "Dambar Sensei",
        role: "Counsellor",
        text: "I have attended two workshops conducted by your organization. The material was very crisp, and the delivery was effective with excellent engagement. The sessions were highly interactive as well. Thank you for the enriching experience.",
        date: "January 2025"
    },
    {
        name: "Veena Padmanabha",
        role: "Counsellor",
        text: "An excellent initiative with a professional and well-structured approach. One can truly rely on the information provided. Superb coordination among the team. Highly commendable!",
        date: "July 2025"
    },
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
];

const WorkshopTestimonials = () => {
    const [testIndex, setTestIndex] = React.useState(0);
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

    const totalSlides = Math.ceil(testimonials.length / itemsVisible);

    const prevSlide = () => {
        setTestIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const nextSlide = () => {
        setTestIndex((prev) => (prev + 1) % totalSlides);
    };

    React.useEffect(() => {
        let interval;
        const startAutoScroll = () => {
            interval = setInterval(() => {
                if (window.innerWidth >= 768) return; // Only auto-scroll on mobile
                nextSlide();
            }, 3000);
        };

        startAutoScroll();

        return () => {
            clearInterval(interval);
        };
    }, [totalSlides]);

    return (
        <div
            className="py-8 sm:py-16 border-t border-black/5"
            style={{ background: 'linear-gradient(180deg, #FFF9E1 0%, #FFFFFF 100%)' }}
        >
            <div className="max-w-[1320px] mx-auto px-6">
                {/* Header with Title and Nav Arrows */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-950 font-geist">
                        What our learners say
                    </h2>
                    <div className="flex gap-4">
                        <button
                            onClick={prevSlide}
                            className="w-12 h-12 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="19" y1="12" x2="5" y2="12"></line>
                                <polyline points="12 19 5 12 12 5"></polyline>
                            </svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-12 h-12 rounded-full bg-[#520378] text-white flex items-center justify-center hover:bg-black transition-all"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Testimonials Grid (Homepage Style - Swapping with Fade) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.slice(testIndex * itemsVisible, testIndex * itemsVisible + itemsVisible).map((item, index) => (
                        <div
                            key={`${item.name}-${testIndex}-${index}`}
                            className="bg-white rounded-[32px] p-8 flex flex-col shadow-sm border border-gray-100 min-h-[420px] cursor-default"
                        >
                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-gray-950 mb-1 font-geist">{item.name}</h3>
                                <p className="text-base text-gray-600">{item.role}</p>
                            </div>
                            <p className="text-gray-700 text-[19px] sm:text-base leading-relaxed mb-8 italic flex-grow overflow-y-auto scrollbar-none">
                                &ldquo;{item.text}&rdquo;
                            </p>
                            <div className="mt-auto pt-6 border-t border-gray-50 flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center gap-2.5">
                                        <div className="w-5 h-5 flex items-center justify-center">
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
                                </div>
                                <span className="text-base font-bold text-gray-800">{item.date}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Dot Indicators */}
                <div className="flex justify-center gap-1.5 mt-10">
                    {Array.from({ length: totalSlides }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setTestIndex(i)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${testIndex === i
                                ? 'w-6 bg-[#520378]'
                                : 'w-1.5 bg-gray-300 hover:bg-gray-400'
                                }`}
                            aria-label={`Go to page ${i + 1}`}
                        />
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
