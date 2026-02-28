import React, { useState, useEffect, useRef } from 'react';

const missionCards = [
    {
        icon: '/icons/v1.png',
        iconAlt: 'Vision Icon',
        title: 'Vision',
        text: 'To create a future where accessible, ethical, and evidence-based mental healthcare becomes an integral part of everyday life, empowering emotionally resilient individuals and building thriving communities',
        highlighted: false,
    },
    {
        icon: '/icons/v2.png',
        iconAlt: 'Mission Icon',
        title: 'Mission',
        text: 'To deliver accessible, ethical, and evidence-based mental health services that create meaningful impact across individuals and institutions. Through structured interventions, professional excellence, and collaborative outreach, we strengthen emotional resilience and contribute to a responsive mental health ecosystem.',
        highlighted: true,
    },
    {
        icon: '/icons/v3.png',
        iconAlt: 'Values Icon',
        title: 'Our values',
        text: 'To create a future where accessible, ethical, and evidence-based mental healthcare becomes an integral part of everyday life, empowering emotionally resilient individuals and building thriving communities',
        highlighted: false,
    },
];

const About = () => {
    const [activeCard, setActiveCard] = useState(0);
    const timerRef = useRef(null);

    useEffect(() => {
        timerRef.current = setInterval(() => {
            setActiveCard((prev) => (prev + 1) % missionCards.length);
        }, 3000);
        return () => clearInterval(timerRef.current);
    }, []);

    return (
        <section id="about" className="bg-white">
            {/* Header Banner */}
            <div className="bg-[#520378] pt-24 pb-8 sm:pt-32 sm:pb-10 flex items-center justify-center">
                <h1 className="text-white text-[clamp(28px,4vw,44px)] font-bold tracking-[0.05em] uppercase font-inter-tight">
                    ABOUT US
                </h1>
            </div>

            {/* Content Section */}
            <div className="relative max-w-[1440px] mx-auto px-6 py-6 sm:py-14 overflow-hidden">
                {/* Decorative background element - Positioned significantly higher with slide-up animation */}
                <div
                    className="absolute top-[-145px] left-[15%] sm:left-[22%] w-full sm:w-[70%] h-full pointer-events-none opacity-[0.4] z-20 "
                >
                    <img
                        src="/images/abt.png"
                        alt=""
                        className="w-full h-full object-contain object-left scale-[7.5] sm:scale-170 mix-blend-multiply brightness-[0.4] contrast-[0.4] drop-shadow-[0_25px_25px_rgba(0,0,0,0.15)]"
                    />
                </div>

                <div className="relative z-10 max-w-[1435px] mx-auto text-center">
                    <h2 className="text-[24px] sm:text-[34px] font-bold text-[#520378] mb-6 sm:mb-10 tracking-tight font-inter-tight">
                        Who We Are ?
                    </h2>

                    <div className="space-y-5 sm:space-y-8 text-gray-800 max-w-[1100px] mx-auto text-[17px] sm:text-[clamp(19px,1.4vw,22px)] leading-[1.6] sm:leading-[1.8] font-normal text-justify sm:text-center">
                        <p className="">
                            Vriksh Psychological Support Services was established to strengthen emotional wellbeing across individuals, institutions, and organisations. We are committed to delivering compassionate, ethical, and evidence-based care, ensuring that the wellbeing and privacy of our clients remain our highest priority.
                        </p>
                        <p className="">
                            Through clinical counseling, institutional mental health programs, and high-impact training, we provide accessible and inclusive mental health support. Our goal is to create a nurturing environment where everyone feels heard, valued, and empowered to navigate life's challenges with resilience.
                        </p>
                        <p className="font-semibold text-gray-950 text-[17px] sm:text-[clamp(19px,1.4vw,22px)] px-4">
                            At Vriksh, our focus extends beyond addressing concerns — we are dedicated to building resilient individuals and thriving communities.
                        </p>
                    </div>
                </div>
            </div>

            {/* Mission & Vision Section */}
            <div className="bg-gradient-to-b from-white via-[#FEFCE8] to-[#FEFCE8] py-12 sm:py-16 relative overflow-hidden">
                <div className="max-w-[1240px] mx-auto px-6 relative z-10">
                    <h2 className="text-[28px] sm:text-[34px] font-bold text-gray-950 text-center mb-10 tracking-tight font-inter-tight">
                        Mission & vision
                    </h2>


                    {/* ── Mobile: Auto-Slide Carousel (hidden on md+) ── */}
                    <div className="md:hidden relative px-4">
                        <div className="overflow-hidden rounded-[24px]">
                            <div
                                className="flex transition-transform duration-700 ease-in-out"
                                style={{ transform: `translateX(-${activeCard * 100}%)` }}
                            >
                                {missionCards.map((card, i) => (
                                    <div key={i} className="w-full flex-none">
                                        <div className="bg-white rounded-[24px] p-8 flex flex-col items-center text-center border border-gray-100 shadow-sm">
                                            <div className="w-16 h-16 mb-6">
                                                <img src={card.icon} alt={card.iconAlt} className="w-full h-full object-contain" />
                                            </div>
                                            <h3 className="text-2xl font-bold mb-4 text-gray-900 font-inter-tight">{card.title}</h3>
                                            <p className="text-[15px] leading-relaxed text-gray-700">{card.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Dot Indicators */}
                        <div className="flex justify-center gap-2 mt-5">
                            {missionCards.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => { setActiveCard(i); clearInterval(timerRef.current); timerRef.current = setInterval(() => setActiveCard(p => (p + 1) % missionCards.length), 3000); }}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${activeCard === i ? 'w-6 bg-[#520378]' : 'w-1.5 bg-gray-300'}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* ── Desktop: Original 3-column grid (hidden on mobile) ── */}
                    <div className="hidden md:grid md:grid-cols-3 gap-8 items-stretch relative px-4">
                        {/* Vision Card */}
                        <div className="group bg-white hover:bg-[#520378] rounded-[24px] p-8 sm:p-10 border border-white/50 flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.02]">
                            <div className="w-16 h-16 mb-8 transition-transform duration-300 group-hover:scale-110">
                                <img src="/icons/v1.png" alt="Vision Icon" className="w-full h-full object-contain" />
                            </div>
                            <h3 className="text-2xl font-bold mb-6 text-gray-900 group-hover:text-white transition-colors duration-300 font-inter-tight">Vision</h3>
                            <p className="text-[15px] leading-relaxed text-gray-700 group-hover:text-white/90 transition-colors duration-300">
                                To create a future where accessible, ethical, and evidence-based mental healthcare becomes an integral part of everyday life, empowering emotionally resilient individuals and building thriving communities
                            </p>
                        </div>

                        {/* Mission Card (Highlighted) */}
                        <div className="group bg-white hover:bg-[#520378] rounded-[24px] p-8 sm:p-10 flex flex-col items-center text-center md:-translate-y-6 relative z-10 transition-all duration-300 hover:scale-[1.05]">
                            <div className="w-16 h-16 mb-8 transition-transform duration-300 group-hover:scale-110">
                                <img src="/icons/v2.png" alt="Mission Icon" className="w-full h-full object-contain" />
                            </div>
                            <h3 className="text-2xl font-bold mb-6 text-gray-900 group-hover:text-white transition-colors duration-300 font-inter-tight">Mission</h3>
                            <p className="text-[15px] leading-relaxed text-gray-700 group-hover:text-white/90 transition-colors duration-300">
                                To deliver accessible, ethical, and evidence-based mental health services that create meaningful impact across individuals and institutions. Through structured interventions, professional excellence, and collaborative outreach, we strengthen emotional resilience and contribute to a responsive mental health ecosystem.
                            </p>
                        </div>

                        {/* Our Values Card */}
                        <div className="group bg-white hover:bg-[#520378] rounded-[24px] p-8 sm:p-10 border border-white/50 flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.02]">
                            <div className="w-16 h-16 mb-8 transition-transform duration-300 group-hover:scale-110">
                                <img src="/icons/v3.png" alt="Values Icon" className="w-full h-full object-contain" />
                            </div>
                            <h3 className="text-2xl font-bold mb-6 text-gray-900 group-hover:text-white transition-colors duration-300 font-inter-tight">Our values</h3>
                            <p className="text-[15px] leading-relaxed text-gray-700 group-hover:text-white/90 transition-colors duration-300">
                                To create a future where accessible, ethical, and evidence-based mental healthcare becomes an integral part of everyday life, empowering emotionally resilient individuals and building thriving communities
                            </p>
                        </div>
                    </div>
                </div>

                {/* Curvy Bottom Edge (Subtle M-Shape) */}
                <div className="absolute bottom-0 left-0 w-full leading-[0] transform translate-y-[1px]">
                    <svg
                        viewBox="0 0 1440 120"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="relative block w-full h-[40px] sm:h-[50px]"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,120 C180,120 180,90 360,90 C540,90 540,120 720,120 C900,120 900,90 1080,90 C1260,90 1260,120 1440,120 V120 H0 Z"
                            fill="white"
                        />
                    </svg>
                </div>
            </div>

            {/* Founder Section */}
            <div className="max-w-[1240px] mx-auto px-6 py-8 sm:py-12 relative">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center">
                    {/* Founder Image Area */}
                    <div className="lg:w-1/2 relative flex justify-center animate-slide-up-fade">
                        <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-[32px] overflow-hidden bg-[#520378]">
                            {/* Orange Blobs */}
                            <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#FB8A27] rounded-full opacity-90"></div>
                            <div className="absolute top-24 -left-24 w-72 h-72 bg-[#FB8A27] rounded-full opacity-90"></div>
                            <div className="absolute -bottom-16 -right-16 w-52 h-52 bg-[#FB8A27] rounded-full opacity-90"></div>

                            <img
                                src="/images/banu 1.png"
                                alt="Banu Priya - Founder & CEO"
                                className="relative z-10 w-full h-full object-contain object-top scale-[2.25] origin-top -translate-x-15 -translate-y-55 brightness-110 saturate-150"
                                onError={(e) => {
                                    e.target.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib2=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                                }}
                            />
                            {/* Colorful brightness overlay */}
                            <div className="absolute inset-0 z-20 bg-gradient-to-br from-[#a855f7]/30 via-[#f97316]/20 to-[#ec4899]/25 mix-blend-screen pointer-events-none" />
                        </div>
                    </div>

                    {/* Founder Content */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <div className="space-y-4">
                            <div>
                                <h2 className="text-[32px] sm:text-[36px] font-bold text-gray-950 mb-1 leading-tight font-inter-tight">Banu priya</h2>
                                <p className="text-[17px] text-[#520378] font-semibold">Founder and CEO</p>
                            </div>

                            <div className="space-y-4 text-[15px] sm:text-[16px] leading-relaxed text-gray-800">
                                <p className="font-bold">
                                    Hi, I'm Banupriya, founder of Vriksh Psychological Support Services. I'm a Psychologist, Certified Emotional Intelligence Coach Practitioner, and Career Coach.
                                </p>
                                <p>
                                    I've always believed that behind the smile of every person facing mental health challenges, there is hope - and behind that hope, there is life. This belief inspired me to start Vriksh in 2020, with the goal of reaching as many people as possible and making a positive difference in their lives.
                                </p>
                                <p>
                                    As founder, I am deeply committed to fostering a culture of empathy, professionalism, and continuous learning at Vriksh. Together with our dedicated team, we strive to make mental health support accessible, practical, and impactful for everyone we serve.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Enriching Minds & Stats Section */}
            <div className="max-w-[1240px] mx-auto px-6 py-8 sm:py-10">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:ml-[10%]">
                    {/* Left Column: Heading */}
                    <div className="lg:pt-2">
                        <h2 className="text-[clamp(36px,5vw,48px)] font-bold text-gray-950 leading-[1.2] mb-4 lg:mb-6 text-center lg:text-left font-inter-tight">
                            Enriching <br className="hidden lg:block" /> Minds
                        </h2>
                        <p className="text-[18px] sm:text-[20px] text-gray-700 leading-relaxed mx-auto lg:mx-0 text-center lg:text-left">
                            Where people feel heard, supported and empowered
                        </p>
                    </div>

                    {/* Right Column: Stats Grid */}
                    <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-10 sm:gap-y-12">
                        <div className="text-center lg:text-left">
                            <div className="text-[24px] sm:text-[32px] font-bold text-[#520378] mb-1 font-inter-tight">50,000+</div>
                            <div className="text-[12px] sm:text-[13px] text-gray-600 font-medium uppercase tracking-wider">Lives Impacted</div>
                        </div>
                        <div className="text-center lg:text-left">
                            <div className="text-[24px] sm:text-[32px] font-bold text-[#520378] mb-1 font-inter-tight">4.8/5</div>
                            <div className="text-[12px] sm:text-[13px] text-gray-600 font-medium uppercase tracking-wider">Client Ratings</div>
                        </div>
                        <div className="text-center lg:text-left">
                            <div className="text-[24px] sm:text-[32px] font-bold text-[#520378] mb-1 font-inter-tight">5,000+</div>
                            <div className="text-[12px] sm:text-[13px] text-gray-600 font-medium uppercase tracking-wider">Active Learners</div>
                        </div>
                        <div className="text-center lg:text-left">
                            <div className="text-[24px] sm:text-[32px] font-bold text-[#520378] mb-1 font-inter-tight">300+</div>
                            <div className="text-[12px] sm:text-[13px] text-gray-600 font-medium uppercase tracking-wider">Sessions conducted</div>
                        </div>
                    </div>
                </div>

                {/* Banner Section */}
                <div className="mt-12 sm:mt-14 relative rounded-[20px] overflow-hidden h-[250px] sm:h-[320px] group">
                    <img
                        src="/images/dabt.png"
                        alt="Community engagement"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Overlay with Text and Button */}
                    <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-6">
                        <h3 className="text-white text-[clamp(24px,5vw,34px)] font-bold mb-4 max-w-[600px] leading-tight font-inter-tight">
                            Rooted in care, <br className="hidden sm:block" />  Growing with you
                        </h3>
                        <button className="bg-[#520378] hover:bg-[#400260] text-white px-6 py-3 rounded-full font-bold text-[20px] transition-all transform hover:scale-115">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
