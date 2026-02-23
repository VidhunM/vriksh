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

                            <div className="mb-8">
                                <h4 className="text-[17px] font-bold text-gray-900 mb-5">Choose Your Institution</h4>
                                <div className="flex gap-3 sm:gap-4">
                                    <button className="bg-[#520378] text-white px-7 sm:px-9 py-2 rounded-full font-semibold text-[13px] sm:text-[14px] shadow-sm">
                                        School
                                    </button>
                                    <button className="bg-white text-[#520378] border border-[#520378]/30 px-7 sm:px-9 py-2 rounded-full font-semibold text-[13px] sm:text-[14px] hover:bg-gray-50 transition-all">
                                        College
                                    </button>
                                </div>
                            </div>

                            {/* Icon Box */}
                            <div className="border border-gray-200 rounded-[20px] p-5 sm:p-8 flex items-center justify-between gap-1 sm:gap-4 bg-white shadow-sm max-w-[500px] mx-auto lg:mx-0">
                                <img src="/icons/w icon1.png" alt="Icon 1" className="h-[35px] sm:h-[55px] object-contain transition-all" />
                                <img src="/icons/w icon2.png" alt="Icon 2" className="h-[35px] sm:h-[55px] object-contain transition-all" />
                                <img src="/icons/w icon3.png" alt="Icon 3" className="h-[35px] sm:h-[55px] object-contain transition-all" />
                                <img src="/icons/w icon4.png" alt="Icon 4" className="h-[45px] sm:h-[65px] object-contain transition-all" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Wellness;
