import React from 'react';

const Training = () => {
    const stats = [
        { value: '3000+', label: 'Active Learners' },
        { value: '4.8', label: 'Google Rating' },
        { value: '150+', label: 'Training Conducted' },
    ];

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
        </div>
    );
};

export default Training;
