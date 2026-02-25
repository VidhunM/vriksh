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
                                className="w-full h-full object-cover aspect-[4/3] lg:aspect-square animate-breathe"
                            />
                        </div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <div className="max-w-[550px] mx-auto lg:mx-0">
                            <h2 className="text-[28px] sm:text-[34px] font-bold mb-6 text-gray-950 leading-tight font-inter-tight">
                                Vriksh Institution Wellness Program
                            </h2>

                            <p className="text-[15px] text-gray-800 leading-relaxed font-normal mb-8">
                                Want to build a supportive ecosystem that empowers your students to thrive emotionally and academically?
                                We partner with schools and colleges to strengthen student communities through counselling, career guidance, life skills training, personality development, and more - nurturing confident, resilient young individuals.                             </p>

                            <div className="mb-10">
                                <h4 className="text-[17px] font-bold text-gray-900 mb-5">Choose Your Institution</h4>
                                <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start">
                                    <button className="bg-white text-[#520378] border border-[#520378]/30 px-7 sm:px-9 py-2 rounded-full font-semibold text-[13px] sm:text-[14px] transition-all transform hover:bg-[#520378] hover:text-white hover:scale-105 active:scale-95 shadow-sm">
                                        School
                                    </button>
                                    <button className="bg-white text-[#520378] border border-[#520378]/30 px-7 sm:px-9 py-2 rounded-full font-semibold text-[13px] sm:text-[14px] transition-all transform hover:bg-[#520378] hover:text-white hover:scale-105 active:scale-95 shadow-sm">
                                        College
                                    </button>
                                </div>
                            </div>

                            {/* Logo Card with Internal Marquee */}
                            <div className="border border-gray-200 rounded-[20px] py-1.5 sm:py-2.5 bg-white shadow-sm max-w-[1000px] mx-auto lg:mx-0 overflow-hidden">
                                <div className="animate-marquee hover:pause-animation flex items-center">
                                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                                        <div key={num} className="flex flex-col items-center justify-center shrink-0 px-4 sm:px-8">
                                            <div className={`${num === 2 ? 'h-[75px] sm:h-[95px]' : 'h-[55px] sm:h-[75px]'} w-auto transition-all duration-300 hover:scale-110`}>
                                                <img src={`/images/school ${num}.png`} alt={`School Logo ${num}`} className="h-full w-auto object-contain" />
                                            </div>
                                        </div>
                                    ))}
                                    {/* Duplicate for seamless loop */}
                                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                                        <div key={`dup-${num}`} className="flex flex-col items-center justify-center shrink-0 px-4 sm:px-8">
                                            <div className={`${num === 2 ? 'h-[75px] sm:h-[95px]' : 'h-[55px] sm:h-[75px]'} w-auto transition-all duration-300 hover:scale-110`}>
                                                <img src={`/images/school ${num}.png`} alt={`School Logo ${num}`} className="h-full w-auto object-contain" />
                                            </div>
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
