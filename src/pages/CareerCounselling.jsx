import React from 'react';

const CareerCounselling = () => {
    return (
        <div className="pt-20 bg-white">
            {/* Hero Header Banner */}
            <div className="bg-[#520378] py-8 sm:py-12 flex items-center justify-center">
                <h1 className="text-white text-2xl sm:text-4xl lg:text-5xl font-black text-center tracking-tight px-4 uppercase">
                    Career Counselling
                </h1>
            </div>

            {/* Main Content Section */}
            <div className="bg-[#FFFCE4] py-12 sm:py-16 animate-in fade-in duration-700">
                <div className="max-w-[1100px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                    {/* Left Column: Text Content */}
                    <div className="flex-1 order-2 lg:order-1 slide-in-from-left-4 duration-700">
                        <h2 className="text-2xl sm:text-[36px] font-black text-gray-900 leading-tight mb-6">
                            Not sure what career is <br /> right for you?
                        </h2>

                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-8 max-w-[480px]">
                            Let's explore your strengths, interests, and natural abilities to uncover a career path that truly fits you. Through guided assessments and personalised counselling, we help you gain clarity, confidence, and direction for your future. Whether you're a student choosing your first path or someone considering a change, we're here to support you at every step.
                        </p>

                        <button className="bg-[#520378] text-white px-8 py-3 rounded-full font-black text-base hover:bg-[#6b049d] transition-all transform hover:scale-105 shadow-lg active:scale-95">
                            Discover your path
                        </button>
                    </div>

                    {/* Right Column: Image */}
                    <div className="flex-1 order-1 lg:order-2 w-full max-w-[540px]">
                        <div className="rounded-[32px] overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-500">
                            <img
                                src="/images/counselling 2.png"
                                alt="Professional career counsellor with student"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Signs You Might Need Career Guidance Section */}
            <div className="relative py-8 sm:py-12 overflow-hidden">
                {/* Background Image */}
                <img
                    src="/images/career guidance background.png"
                    alt="Background Decor"
                    className="absolute inset-0 w-full h-full object-cover opacity-30 select-none pointer-events-none"
                />

                <div className="relative z-10 max-w-[1000px] mx-auto px-6">
                    <h2 className="text-2xl sm:text-3xl font-black text-[#00382D] text-center mb-10 px-4">
                        Signs You Might Need Career Guidance
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                        {[
                            {
                                text: "You've Completed High School Or Are Unsure About Your Next Step",
                                color: "bg-[#FFF9E5]"
                            },
                            {
                                text: "You're Exploring Your Strengths, Interests, And Career Preferences",
                                color: "bg-[#FFB169]"
                            },
                            {
                                text: "You Have Multiple Interests And Can't Decide Between Them",
                                color: "bg-[#FFF9E5]"
                            },
                            {
                                text: "You're Unsure Which Career Path Suits You Best",
                                color: "bg-[#FFF9E5]"
                            },
                            {
                                text: "You're Confused About Educational Or Professional Options",
                                color: "bg-[#FFB169]"
                            },
                            {
                                text: "You Want Guidance On Skill Development And Long-Term Career Growth",
                                color: "bg-[#FFF9E5]"
                            }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className={`${item.color} p-5 sm:p-7 rounded-[22px] shadow-sm hover:shadow-md transition-shadow flex flex-col h-full items-start`}
                            >
                                <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center mb-5 shrink-0">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                <p className="text-sm sm:text-base font-bold text-gray-900 leading-tight">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center">
                        <button className="bg-[#520378] text-white px-10 py-3 rounded-full font-black text-sm hover:bg-[#6b049d] transition-all transform hover:scale-105 shadow-xl active:scale-95">
                            Talk to an Expert
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareerCounselling;
