import React from 'react';

const Wellness = () => {
    return (
        <section id="wellness" className="py-8 bg-white">
            <div className="max-w-[1240px] mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Left Column: Image */}
                    <div className="lg:w-1/2">
                        <div className="rounded-[20px] overflow-hidden shadow-sm">
                            <img
                                src="/images/wellness.png"
                                alt="Students in Classroom"
                                className="w-full h-full object-cover aspect-[4/3] lg:aspect-square"
                            />
                        </div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="lg:w-1/2">
                        <div className="max-w-[550px]">
                            <h2 className="text-[32px] sm:text-[40px] font-bold mb-6 text-gray-950 leading-tight">
                                Vriksh Institution Wellness Program
                            </h2>

                            <p className="text-[15px] text-gray-800 leading-relaxed font-normal mb-8">
                                We partner with schools and colleges to strengthen student communities through counselling, career guidance, life skills training, personality development, and more - nurturing confident, resilient young individuals.
                            </p>

                            <div className="mb-10">
                                <h4 className="text-[17px] font-bold text-gray-900 mb-5">Choose Your Institution</h4>
                                <div className="flex gap-3 sm:gap-4">
                                    <button className="bg-[#520378] text-white px-7 sm:px-9 py-2 rounded-full font-semibold text-[13px] sm:text-[14px] shadow-sm transform transition-all hover:scale-105 active:scale-95">
                                        School
                                    </button>
                                    <button className="bg-white text-[#520378] border border-[#520378]/30 px-7 sm:px-9 py-2 rounded-full font-semibold text-[13px] sm:text-[14px] hover:bg-gray-50 transition-all transform hover:scale-105 active:scale-95">
                                        College
                                    </button>
                                </div>
                            </div>

                            {/* Existing Card Design with Internal Marquee */}
                            <div className="border border-gray-200 rounded-[20px] p-4 sm:p-6 bg-white shadow-sm max-w-[500px] mx-auto lg:mx-0 overflow-hidden">
                                <div className="animate-marquee hover:pause-animation flex items-center gap-10">
                                    {[
                                        { icon: '/icons/w icon1.png', label: 'Counselling' },
                                        { icon: '/icons/w icon2.png', label: 'Career Guidance' },
                                        { icon: '/icons/w icon3.png', label: 'Life Skills Training' },
                                        { icon: '/icons/w icon4.png', label: 'Personality Development' },
                                        { icon: '/icons/w icon5.png', label: 'Mental Health Orientation' },
                                        { icon: '/icons/w icon6.png', label: 'Teacher Training' },
                                        { icon: '/icons/w icon7.png', label: 'Parenting Sessions' },
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex flex-col items-center gap-2 shrink-0 group min-w-[60px]">
                                            <div className="h-[35px] sm:h-[50px] w-auto transition-transform duration-300 group-hover:scale-110">
                                                <img src={item.icon} alt={item.label} className="h-full w-auto object-contain" />
                                            </div>
                                            <span className="text-[10px] font-bold text-gray-700 whitespace-nowrap">
                                                {item.label}
                                            </span>
                                        </div>
                                    ))}
                                    {/* Duplicate for seamless loop */}
                                    {[
                                        { icon: '/icons/w icon1.png', label: 'Counselling' },
                                        { icon: '/icons/w icon2.png', label: 'Career Guidance' },
                                        { icon: '/icons/w icon3.png', label: 'Life Skills Training' },
                                        { icon: '/icons/w icon4.png', label: 'Personality Development' },
                                        { icon: '/icons/w icon5.png', label: 'Mental Health Orientation' },
                                        { icon: '/icons/w icon6.png', label: 'Teacher Training' },
                                        { icon: '/icons/w icon7.png', label: 'Parenting Sessions' },
                                    ].map((item, idx) => (
                                        <div key={`dup-${idx}`} className="flex flex-col items-center gap-2 shrink-0 group min-w-[60px]">
                                            <div className="h-[35px] sm:h-[50px] w-auto transition-transform duration-300 group-hover:scale-110">
                                                <img src={item.icon} alt={item.label} className="h-full w-auto object-contain" />
                                            </div>
                                            <span className="text-[10px] font-bold text-gray-700 whitespace-nowrap">
                                                {item.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Wellness;
