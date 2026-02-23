import React from 'react';

const Counselling = () => {
    const categories = [
        'Stress & Anxiety',
        'Depression',
        'Love & Relationship',
        'Grief/Loss of loved ones',
        'Academics & Career',
        'Child/ Adolescence'
    ];

    return (
        <section id="counselling" className="relative pt-24 pb-16 bg-[#520378] text-white">
            {/* Wavy top border */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
                <svg className="relative block w-[calc(118%+1.3px)] h-[84px] fill-[#FFFBEB]" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
                </svg>
            </div>

            <div className="max-w-[1240px] mx-auto px-6">
                <h2 className="text-4xl sm:text-5xl font-bold mb-10 text-center">Counselling</h2>

                <div className="flex overflow-x-auto pb-6 scrollbar-hide gap-3 justify-start lg:justify-center mb-16 no-scrollbar">
                    {categories.map((cat, index) => (
                        <button
                            key={index}
                            className={`whitespace-nowrap px-8 py-3 rounded-full text-[14px] font-medium transition-all flex-shrink-0 ${index === 0
                                ? 'bg-white text-[#520378] shadow-lg'
                                : 'bg-transparent text-white border border-white/40 hover:bg-white/10'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:items-center">
                    <div className="lg:w-1/2">
                        <div className="rounded-[24px] overflow-hidden shadow-2xl aspect-[4/3] sm:aspect-video lg:aspect-square max-w-[550px] mx-auto">
                            <img
                                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Counselling Session"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <div className="max-w-[500px] lg:ml-8">
                            <h3 className="text-[28px] sm:text-[34px] font-bold mb-6 leading-tight">Counselling for Stress and Anxiety</h3>
                            <p className="text-[17px] mb-10 opacity-90 leading-relaxed font-normal">
                                Nothing diminishes anxiety faster than action. Of course, it is easier said than done. But if you've come this far, we want you to know that you are one step closer to taking control of your health and well-being.
                            </p>
                            <button className="bg-white text-[#520378] px-10 py-3.5 rounded-full font-bold text-[16px] hover:bg-gray-100 transition-all shadow-xl">
                                Book an Appointment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Counselling;
