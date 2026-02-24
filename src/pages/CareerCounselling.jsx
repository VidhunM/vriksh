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
        </div>
    );
};

export default CareerCounselling;
