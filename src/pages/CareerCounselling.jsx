import React from 'react';

const CareerCounselling = () => {
    return (
        <div className="pt-20 bg-white">
            {/* Hero Header Banner */}
            <div className="bg-[#520378] py-12 sm:py-20 flex items-center justify-center">
                <h1 className="text-white text-3xl sm:text-5xl lg:text-6xl font-black text-center tracking-tight px-4 uppercase">
                    Career Counselling
                </h1>
            </div>

            {/* Main Content Section */}
            <div className="bg-[#FFFCE4] py-16 sm:py-24 animate-in fade-in duration-700">
                <div className="max-w-[1240px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Left Column: Text Content */}
                    <div className="flex-1 order-2 lg:order-1 slide-in-from-left-4 duration-700">
                        <h2 className="text-3xl sm:text-[44px] font-black text-gray-900 leading-tight mb-8">
                            Not sure what career is <br /> right for you?
                        </h2>

                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 max-w-[540px]">
                            Let's explore your strengths, interests, and natural abilities to uncover a career path that truly fits you. Through guided assessments and personalised counselling, we help you gain clarity, confidence, and direction for your future. Whether you're a student choosing your first path or someone considering a change, we're here to support you at every step.
                        </p>

                        <button className="bg-[#520378] text-white px-10 py-4 rounded-full font-black text-lg hover:bg-[#6b049d] transition-all transform hover:scale-105 shadow-lg active:scale-95">
                            Discover your path
                        </button>
                    </div>

                    {/* Right Column: Image */}
                    <div className="flex-1 order-1 lg:order-2 w-full max-w-[640px]">
                        <div className="rounded-[40px] overflow-hidden shadow-2xl">
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
            <div className="bg-white py-16 sm:py-24 relative overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-x-0 bottom-0 w-full h-auto -z-10">
                    <img
                        src="/images/career guidance background.png"
                        alt="Background Decor"
                        className="w-full h-auto object-cover opacity-60"
                    />
                </div>

                <div className="max-w-[1240px] mx-auto px-6">
                    <h2 className="text-3xl sm:text-5xl font-black text-[#00382D] text-center mb-16 px-4">
                        Signs You Might Need Career Guidance
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
                                className={`${item.color} p-8 sm:p-10 rounded-[28px] shadow-sm hover:shadow-md transition-shadow flex flex-col h-full`}
                            >
                                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center mb-8 shrink-0">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                <p className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center">
                        <button className="bg-[#520378] text-white px-12 py-4 rounded-full font-black text-lg hover:bg-[#6b049d] transition-all transform hover:scale-105 shadow-xl active:scale-95">
                            Talk to an Expert
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareerCounselling;
