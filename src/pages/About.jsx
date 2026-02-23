import React from 'react';

const About = () => {
    return (
        <section id="about" className="bg-white pt-16 sm:pt-20">
            {/* Header Banner */}
            <div className="bg-[#520378] py-8 sm:py-10 flex items-center justify-center">
                <h1 className="text-white text-[clamp(28px,4vw,44px)] font-bold tracking-[0.05em] uppercase">
                    ABOUT US
                </h1>
            </div>

            {/* Content Section */}
            <div className="relative max-w-[1240px] mx-auto px-6 py-12 sm:py-16 overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute top-0 left-0 w-full sm:w-[50%] h-full pointer-events-none opacity-[0.15] sm:opacity-[0.1]">
                    <img
                        src="/images/who we are background.png"
                        alt=""
                        className="w-full h-full object-contain object-left scale-150 sm:scale-100"
                    />
                </div>

                <div className="relative z-10 max-w-[950px] mx-auto text-center">
                    <h2 className="text-[clamp(28px,4vw,38px)] font-bold text-[#520378] mb-10 tracking-tight">
                        Who We Are ?
                    </h2>

                    <div className="space-y-6 text-gray-800 text-[clamp(15px,1.1vw,17px)] leading-[1.8] font-normal text-left sm:text-center">
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
            <div className="bg-gradient-to-b from-white via-[#FFFDEA] to-white py-10 sm:py-12 relative overflow-hidden">
                <div className="max-w-[1240px] mx-auto px-6">
                    <h2 className="text-[clamp(26px,3vw,36px)] font-bold text-gray-950 text-center mb-10 tracking-tight">
                        Mission & vision
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 items-stretch relative px-4">
                        {/* Vision Card */}
                        <div className="bg-white rounded-[24px] p-8 sm:p-10 shadow-sm border border-gray-100 flex flex-col items-center text-center">
                            <div className="w-16 h-16 mb-8">
                                <img src="/icons/v1.png" alt="Vision Icon" className="w-full h-full object-contain" />
                            </div>
                            <h3 className="text-2xl font-bold mb-6 text-gray-900">Vision</h3>
                            <p className="text-[15px] leading-relaxed text-gray-700">
                                To create a future where accessible, ethical, and evidence-based mental healthcare becomes an integral part of everyday life, empowering emotionally resilient individuals and building thriving communities
                            </p>
                        </div>

                        {/* Mission Card (Highlighted) */}
                        <div className="bg-[#520378] rounded-[24px] p-8 sm:p-10 shadow-2xl flex flex-col items-center text-center md:-translate-y-4 relative z-10 text-white">
                            <div className="w-16 h-16 mb-8">
                                <img src="/icons/v2.png" alt="Mission Icon" className="w-full h-full object-contain" />
                            </div>
                            <h3 className="text-2xl font-bold mb-6">Mission</h3>
                            <p className="text-[15px] leading-relaxed opacity-90">
                                To deliver accessible, ethical, and evidence-based mental health services that create meaningful impact across individuals and institutions. Through structured interventions, professional excellence, and collaborative outreach, we strengthen emotional resilience and contribute to a responsive mental health ecosystem.
                            </p>
                        </div>

                        {/* Our Values Card */}
                        <div className="bg-white rounded-[24px] p-8 sm:p-10 shadow-sm border border-gray-100 flex flex-col items-center text-center">
                            <div className="w-16 h-16 mb-8">
                                <img src="/icons/v3.png" alt="Values Icon" className="w-full h-full object-contain" />
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
            <div className="max-w-[1240px] mx-auto px-6 py-12 sm:py-16 relative">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                    {/* Founder Image Area */}
                    <div className="lg:w-1/2 relative flex justify-center">
                        <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl bg-[#520378]">
                            {/* Orange Blobs */}
                            <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#FCA65B] rounded-full opacity-90"></div>
                            <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-[#FCA65B] rounded-full opacity-90"></div>

                            <img
                                src="/images/banu.png"
                                alt="Banu Priya - Founder & CEO"
                                className="relative z-10 w-full h-full object-contain object-bottom scale-110"
                                onError={(e) => {
                                    e.target.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                                }}
                            />
                        </div>
                    </div>

                    {/* Founder Content */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <div className="space-y-4">
                            <div>
                                <h2 className="text-[32px] sm:text-[36px] font-bold text-gray-950 mb-1 leading-tight">Banu priya</h2>
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
            <div className="max-w-[1240px] mx-auto px-6 py-12 sm:py-16 border-t border-gray-100">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                    {/* Left Column: Heading */}
                    <div>
                        <h2 className="text-[clamp(32px,5vw,40px)] font-bold text-gray-950 leading-[1.2] mb-6 lg:mb-8 text-center lg:text-left">
                            Enriching <br className="hidden lg:block" /> Minds
                        </h2>
                        <p className="text-[16px] sm:text-[18px] text-gray-700 max-w-[400px] leading-relaxed mx-auto lg:mx-0 text-center lg:text-left">
                            Where people feel heard, supported and empowered
                        </p>
                    </div>

                    {/* Right Column: Stats Grid */}
                    <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:gap-x-12 sm:gap-y-16">
                        <div className="text-center lg:text-left">
                            <div className="text-[28px] sm:text-[40px] font-bold text-[#520378] mb-1">50,000+</div>
                            <div className="text-[14px] sm:text-[16px] text-gray-600 font-medium uppercase tracking-wider">Lives Impacted</div>
                        </div>
                        <div className="text-center lg:text-left">
                            <div className="text-[28px] sm:text-[40px] font-bold text-[#520378] mb-1">4.8/5</div>
                            <div className="text-[14px] sm:text-[16px] text-gray-600 font-medium uppercase tracking-wider">Client Ratings</div>
                        </div>
                        <div className="text-center lg:text-left">
                            <div className="text-[28px] sm:text-[40px] font-bold text-[#520378] mb-1">5,000+</div>
                            <div className="text-[14px] sm:text-[16px] text-gray-600 font-medium uppercase tracking-wider">Active Learners</div>
                        </div>
                        <div className="text-center lg:text-left">
                            <div className="text-[28px] sm:text-[40px] font-bold text-[#520378] mb-1">300+</div>
                            <div className="text-[14px] sm:text-[16px] text-gray-600 font-medium uppercase tracking-wider">Sessions conducted</div>
                        </div>
                    </div>
                </div>

                {/* Banner Section */}
                <div className="mt-12 sm:mt-14 relative rounded-[20px] overflow-hidden h-[250px] sm:h-[320px] group">
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                        alt="Community engagement"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Overlay with Text and Button */}
                    <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-6">
                        <h3 className="text-white text-[clamp(20px,3vw,30px)] font-bold mb-4 max-w-[600px] leading-tight">
                            Rooted in care, <br className="hidden sm:block" /> growing with you
                        </h3>
                        <button className="bg-[#520378] hover:bg-[#400260] text-white px-6 py-3 rounded-full font-bold text-[14px] transition-all transform hover:scale-105 shadow-lg">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
