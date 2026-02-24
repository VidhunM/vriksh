import React from 'react';

const CareerCounselling = () => {
    return (
        <div className="pt-0 bg-white">
            {/* Hero Header Banner - Precisely matching reference image */}
            <div className="bg-[#520378] pt-20 pb-6 sm:pt-28 sm:pb-8 flex items-center justify-center">
                <h1 className="text-white text-2xl sm:text-3xl lg:text-5xl font-bold text-center tracking-tight px-4 uppercase font-inter-tight">
                    CAREER COUNSELLING
                </h1>
            </div>

            {/* Main Content Section - Standardized width and layout */}
            <div
                className="py-8 sm:py-12 animate-in fade-in duration-700"
                style={{ background: 'linear-gradient(180deg, #FFFAE4 0%, #FFFFFF 100%)' }}
            >
                <div className="max-w-[1320px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                    {/* Left Column: Text Content */}
                    <div className="flex-1 order-2 lg:order-1 slide-in-from-left-4 duration-700">
                        <h2 className="text-2xl sm:text-[38px] font-bold text-gray-950 leading-[1.1] mb-8 font-inter-tight">
                            Not sure what career is <br /> right for you?
                        </h2>

                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 max-w-[540px]">
                            Let's explore your strengths, interests, and natural abilities to uncover a career path that truly fits you. Through guided assessments and personalised counselling, we help you gain clarity, confidence, and direction for your future. Whether you're a student choosing your first path or someone considering a change, we're here to support you at every step.
                        </p>

                        <button className="bg-[#520378] text-white px-10 py-3.5 rounded-full font-bold text-base hover:bg-[#6b049d] transition-all transform hover:scale-105 shadow-md active:scale-95">
                            Discover your path
                        </button>
                    </div>

                    {/* Right Column: Image */}
                    <div className="flex-1 order-1 lg:order-2 w-full">
                        <div className="rounded-[24px] overflow-hidden shadow-xl transition-transform hover:scale-[1.01] duration-500">
                            <img
                                src="/images/counselling 2.png"
                                alt="Professional career counsellor with student"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Signs You Might Need Career Guidance Section - Exact match to reference image */}
            <div className="relative py-6 sm:py-10 overflow-hidden bg-white">
                {/* Background Image - More prominent as per reference */}
                <div className="absolute inset-0 w-full h-full pointer-events-none">
                    <img
                        src="/images/career guidance background.png"
                        alt=""
                        className="w-full h-full object-cover opacity-100"
                    />
                </div>

                <div className="relative z-10 max-w-[1320px] mx-auto px-6">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#00382D] text-center mb-8 px-4 font-inter-tight">
                        Signs You Might Need Career Guidance
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                        {[
                            {
                                text: "You've Completed High School Or Are Unsure About Your Next Step",
                                color: "bg-[#FEF8E4]"
                            },
                            {
                                text: "You're Exploring Your Strengths, Interests, And Career Preferences",
                                color: "bg-[#FCA65B]"
                            },
                            {
                                text: "You Have Multiple Interests And Can't Decide Between Them",
                                color: "bg-[#FEF8E4]"
                            },
                            {
                                text: "You're Unsure Which Career Path Suits You Best",
                                color: "bg-[#FEF8E4]"
                            },
                            {
                                text: "You're Confused About Educational Or Professional Options",
                                color: "bg-[#FCA65B]"
                            },
                            {
                                text: "You Want Guidance On Skill Development And Long-Term Career Growth",
                                color: "bg-[#FEF8E4]"
                            }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className={`${item.color} p-6 sm:p-8 rounded-[16px] shadow-sm hover:shadow-md transition-shadow flex flex-col h-full items-start min-h-[160px] lg:min-h-[200px]`}
                            >
                                <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center mb-5 shrink-0 shadow-sm">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="mb-[1px] mr-[0.5px]">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                <p className="text-lg sm:text-[21px] font-bold text-gray-950 leading-[1.1] font-inter-tight max-w-[280px]">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center">
                        <button className="bg-[#4C0070] text-white px-10 py-3 rounded-full font-bold text-base hover:bg-[#520378] transition-all transform hover:scale-105 shadow-lg active:scale-95">
                            Talk to an Expert
                        </button>
                    </div>
                </div>
            </div>

            {/* Stats Section - New section exactly matching reference image */}
            <div className="bg-white py-12 border-t border-gray-100">
                <div className="max-w-[1240px] mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
                        {/* Stat Item 1 */}
                        <div className="flex-1 flex flex-col items-center text-center">
                            <h3 className="text-[32px] sm:text-[38px] font-bold text-[#520378] mb-1 font-inter-tight">20,000+</h3>
                            <p className="text-[14px] sm:text-[16px] text-gray-600 font-medium">Lives Impacted</p>
                        </div>

                        {/* Divider */}
                        <div className="hidden md:block w-[1px] h-16 bg-black/10"></div>

                        {/* Stat Item 2 */}
                        <div className="flex-1 flex flex-col items-center text-center">
                            <h3 className="text-[32px] sm:text-[38px] font-bold text-[#520378] mb-1 font-inter-tight">4.8/5</h3>
                            <p className="text-[14px] sm:text-[16px] text-gray-600 font-medium">Client Ratings</p>
                        </div>

                        {/* Divider */}
                        <div className="hidden md:block w-[1px] h-16 bg-black/10"></div>

                        {/* Stat Item 3 */}
                        <div className="flex-1 flex flex-col items-center text-center">
                            <h3 className="text-[32px] sm:text-[38px] font-bold text-[#520378] mb-1 font-inter-tight">5,000+</h3>
                            <p className="text-[14px] sm:text-[16px] text-gray-600 font-medium">Active Learners</p>
                        </div>

                        {/* Divider */}
                        <div className="hidden md:block w-[1px] h-16 bg-black/10"></div>

                        {/* Stat Item 4 */}
                        <div className="flex-1 flex flex-col items-center text-center">
                            <h3 className="text-[32px] sm:text-[38px] font-bold text-[#520378] mb-1 font-inter-tight">300+</h3>
                            <p className="text-[14px] sm:text-[16px] text-gray-600 font-medium">Sessions conducted</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Make Better Decisions Section - Moved down as requested */}
            <div className="relative bg-[#520378] pt-10 pb-6 sm:pt-12 sm:pb-8 overflow-hidden">
                {/* Wavy Top Divider - Matching About page style but for top */}
                <div className="absolute top-0 left-0 w-full leading-[0] transform rotate-180 -translate-y-[1px]">
                    <svg
                        viewBox="0 0 1440 120"
                        preserveAspectRatio="none"
                        className="relative block w-full h-[30px] sm:h-[45px]"
                    >
                        <path
                            d="M0,120 C180,120 180,90 360,90 C540,90 540,120 720,120 C900,120 900,90 1080,90 C1260,90 1260,120 1440,120 V120 H0 Z"
                            fill="white"
                        />
                    </svg>
                </div>

                {/* Background Image Line Art */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                    <img
                        src="/images/mbd.png"
                        alt=""
                        className="w-full h-full object-contain object-center scale-150 sm:scale-110"
                    />
                </div>

                <div className="relative z-10 max-w-[1320px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-8 lg:gap-14">
                    {/* Left Side: Text Content */}
                    <div className="flex-1 space-y-4">
                        <h2 className="text-[28px] sm:text-[34px] font-bold leading-[1.05] tracking-tight font-inter-tight">
                            <span className="bg-white text-black px-3 py-1 inline-block mb-2 rounded-sm">Make Better</span>
                            <br />
                            <span className="bg-white text-black px-3 py-1 inline-block rounded-sm">Decisions</span>
                        </h2>
                        <p className="text-white/90 text-[15px] sm:text-[16px] leading-relaxed max-w-[450px]">
                            Discover Yourself To Understand What Truly Drives You, And Choose A Career Path That Fits Your Strengths, Interests, And Aspirations.
                        </p>
                    </div>

                    {/* Right Side: Overlapping Circular Process Steps */}
                    <div className="flex-1 relative w-full max-w-[450px] aspect-[1.1/1] mx-auto lg:mx-0">
                        {/* Step 01 - Outlined (Top Left) */}
                        <div className="absolute top-0 left-0 w-[52%] aspect-square rounded-full border border-white/30 flex flex-col justify-center p-4 sm:p-6 text-white text-left z-0">
                            <span className="text-xl sm:text-3xl font-bold mb-1 sm:mb-2">01</span>
                            <p className="text-[11px] sm:text-[14px] font-medium leading-tight">
                                Know your interest, personality and aptitude
                            </p>
                        </div>

                        {/* Step 02 - Solid White (Top Right) */}
                        <div className="absolute top-[8%] left-[42%] w-[52%] aspect-square rounded-full bg-white flex flex-col justify-center p-4 sm:p-6 text-[#520378] text-left z-20 shadow-xl">
                            <span className="text-xl sm:text-3xl font-bold mb-1 sm:mb-2">02</span>
                            <p className="text-[11px] sm:text-[14px] font-bold leading-tight">
                                Identify your career path
                            </p>
                        </div>

                        {/* Step 03 - Solid White (Bottom Left) */}
                        <div className="absolute top-[40%] left-[8%] w-[52%] aspect-square rounded-full bg-white flex flex-col justify-center p-4 sm:p-6 text-[#520378] text-left z-30 shadow-xl">
                            <span className="text-xl sm:text-3xl font-bold mb-1 sm:mb-2">03</span>
                            <p className="text-[11px] sm:text-[14px] font-bold leading-tight">
                                Know your strength and weaknesses
                            </p>
                        </div>

                        {/* Step 04 - Outlined (Bottom Right) */}
                        <div className="absolute top-[48%] left-[48%] w-[52%] aspect-square rounded-full border border-white/30 flex flex-col justify-center p-4 sm:p-6 text-white text-left z-10">
                            <span className="text-xl sm:text-3xl font-bold mb-1 sm:mb-2">04</span>
                            <p className="text-[11px] sm:text-[14px] font-medium leading-tight">
                                Ease your career confusion
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareerCounselling;
