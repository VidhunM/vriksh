import React from 'react';

const About = () => {
    return (
        <section id="about" className="bg-white pt-16 sm:pt-20">
            {/* Header Banner */}
            <div className="bg-[#520378] py-20 sm:py-32 flex items-center justify-center">
                <h1 className="text-white text-[clamp(44px,7vw,80px)] font-bold tracking-[0.05em] uppercase">
                    ABOUT US
                </h1>
            </div>

            {/* Content Section */}
            <div className="relative max-w-[1240px] mx-auto px-6 py-24 sm:py-32 overflow-hidden">
                {/* Decorative background element (leaf-like pattern) */}
                <div className="absolute top-[10%] left-0 w-[40%] h-[80%] pointer-events-none opacity-[0.03]">
                    <img
                        src="/images/hero.png"
                        alt=""
                        className="w-full h-full object-contain object-left transform -translate-x-1/2 scale-150 rotate-[-10deg] grayscale"
                    />
                </div>

                <div className="relative z-10 max-w-[950px] mx-auto text-center">
                    <h2 className="text-[clamp(34px,4vw,52px)] font-bold text-[#520378] mb-14 tracking-tight">
                        Who We Are ?
                    </h2>

                    <div className="space-y-10 text-gray-800 text-[clamp(17px,1.1vw,20px)] leading-[1.8] font-normal text-justify sm:text-center">
                        <p className="px-4">
                            Vriksh Psychological Support Services was established to strengthen emotional wellbeing across individuals, institutions, and organisations. We are committed to delivering compassionate, ethical, and evidence-based care, ensuring that the wellbeing and privacy of our clients remain our highest priority.
                        </p>
                        <p className="px-4">
                            From individual wellbeing and student development to campus-wide initiatives and corporate resilience programs, we design structured interventions that enhance emotional agility, strengthen performance, and promote sustainable growth.
                        </p>
                        <p className="font-medium text-gray-950 px-4">
                            At Vriksh, our focus extends beyond addressing concerns — we are dedicated to building resilient individuals and thriving communities.
                        </p>
                    </div>
                </div>
            </div>

            {/* Mission & Vision Section */}
            <div className="bg-gradient-to-b from-white via-[#FFFDEA] to-white py-20 relative overflow-hidden">
                <div className="max-w-[1240px] mx-auto px-6">
                    <h2 className="text-[clamp(32px,4vw,48px)] font-bold text-gray-950 text-center mb-20 tracking-tight">
                        Mission & vision
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 items-stretch relative px-4">
                        {/* Vision Card */}
                        <div className="bg-white rounded-[24px] p-8 sm:p-10 shadow-sm border border-gray-100 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-8">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-6 text-gray-900">Vision</h3>
                            <p className="text-[15px] leading-relaxed text-gray-700">
                                To create a future where accessible, ethical, and evidence-based mental healthcare becomes an integral part of everyday life, empowering emotionally resilient individuals and building thriving communities
                            </p>
                        </div>

                        {/* Mission Card (Highlighted) */}
                        <div className="bg-[#520378] rounded-[24px] p-8 sm:p-10 shadow-2xl flex flex-col items-center text-center md:-translate-y-4 relative z-10 text-white">
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-8">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fb923c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-6">Mission</h3>
                            <p className="text-[15px] leading-relaxed opacity-90">
                                To deliver accessible, ethical, and evidence-based mental health services that create meaningful impact across individuals and institutions. Through structured interventions, professional excellence, and collaborative outreach, we strengthen emotional resilience and contribute to a responsive mental health ecosystem.
                            </p>
                        </div>

                        {/* Our Values Card */}
                        <div className="bg-white rounded-[24px] p-8 sm:p-10 shadow-sm border border-gray-100 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-8">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" /><path d="M12 12h.01" /><path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" /></svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-6 text-gray-900">Our values</h3>
                            <p className="text-[15px] leading-relaxed text-gray-700">
                                To create a future where accessible, ethical, and evidence-based mental healthcare becomes an integral part of everyday life, empowering emotionally resilient individuals and building thriving communities
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Founder Section */}
            <div className="max-w-[1240px] mx-auto px-6 py-20 pb-24 relative">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                    {/* Founder Image Area */}
                    <div className="lg:w-1/2 relative flex justify-center">
                        {/* Blob Backgrounds */}
                        <div className="absolute top-0 right-10 w-[80%] h-[80%] bg-[#f97316] rounded-full opacity-10 blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-10 left-10 w-[60%] h-[60%] bg-[#520378] rounded-full opacity-10 blur-3xl"></div>

                        <div className="relative w-full max-w-[450px] aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl border-8 border-white">
                            <img
                                src="/images/banupriya.png"
                                alt="Banu Priya - Founder & CEO"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                                }}
                            />
                            {/* Decorative Orange/Purple accents like in the image */}
                            <div className="absolute top-0 right-0 w-[40%] h-[30%] bg-[#f97316] opacity-90 rounded-bl-[100px]"></div>
                            <div className="absolute bottom-0 left-0 w-[100%] h-[40%] bg-[#520378] opacity-90 rounded-tr-[100px] z-[-1]"></div>
                        </div>
                    </div>

                    {/* Founder Content */}
                    <div className="lg:w-1/2">
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-[48px] font-bold text-gray-950 mb-1">Banu priya</h2>
                                <p className="text-[20px] text-[#520378] font-semibold">Founder and CEO</p>
                            </div>

                            <div className="space-y-6 text-[17px] leading-relaxed text-gray-800">
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
            <div className="max-w-[1240px] mx-auto px-6 py-24 border-t border-gray-100">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Left Column: Heading */}
                    <div>
                        <h2 className="text-[clamp(40px,5vw,60px)] font-bold text-gray-950 leading-[1.1] mb-8">
                            Enriching <br /> Minds
                        </h2>
                        <p className="text-[18px] text-gray-700 max-w-[400px] leading-relaxed">
                            Where people feel heard, supported and empowered
                        </p>
                    </div>

                    {/* Right Column: Stats Grid */}
                    <div className="grid grid-cols-2 gap-x-12 gap-y-16">
                        <div>
                            <div className="text-[40px] font-bold text-[#520378] mb-1">50,000+</div>
                            <div className="text-[16px] text-gray-600 font-medium">Lives Impacted</div>
                        </div>
                        <div>
                            <div className="text-[40px] font-bold text-[#520378] mb-1">4.8/5</div>
                            <div className="text-[16px] text-gray-600 font-medium">Client Ratings</div>
                        </div>
                        <div>
                            <div className="text-[40px] font-bold text-[#520378] mb-1">5,000+</div>
                            <div className="text-[16px] text-gray-600 font-medium">Active Learners</div>
                        </div>
                        <div>
                            <div className="text-[40px] font-bold text-[#520378] mb-1">300+</div>
                            <div className="text-[16px] text-gray-600 font-medium">Sessions conducted</div>
                        </div>
                    </div>
                </div>

                {/* Banner Section */}
                <div className="mt-24 relative rounded-[32px] overflow-hidden h-[450px] sm:h-[500px] group">
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                        alt="Community engagement"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Overlay with Text and Button */}
                    <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-6">
                        <h3 className="text-white text-[clamp(28px,4vw,48px)] font-bold mb-10 max-w-[600px] leading-tight">
                            Rooted in care, <br className="hidden sm:block" /> growing with you
                        </h3>
                        <button className="bg-[#520378] hover:bg-[#400260] text-white px-10 py-4 rounded-full font-bold text-[16px] transition-all transform hover:scale-105 shadow-lg">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
