import React from 'react';

const Corporate = () => {
    const cards = [
        {
            number: '01',
            title: 'Webinars',
            desc: 'Led by experienced psychologists, our curated and highly interactive sessions foster insight, reflection, and practical workplace application',
            buttonText: 'Elevate Your Workforce'
        },
        {
            number: '02',
            title: 'Training Programs',
            desc: 'Expert-led, experiential programs designed to foster insight, enhance capabilities, and drive workplace excellence',
            buttonText: 'Strengthen Your Team'
        },
        {
            number: '03',
            title: 'Employee Assistance Program (EAP)',
            desc: 'Expert-designed, tailored wellbeing solutions that strengthen employee resilience, improve performance, and support a healthier workplace culture',
            buttonText: 'Build a Resilient Workforce'
        }
    ];

    return (
        <section id="corporate" className="py-10 sm:py-14 bg-[#4A148C] relative overflow-hidden text-white">
            {/* Background Pattern/Overlay */}
            <div className="absolute inset-0 z-0 opacity-40">
                <img
                    src="/icons/copbg.png"
                    alt="Corporate Background"
                    className="w-full h-full object-cover mix-blend-overlay"
                />
            </div>

            <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="text-center lg:text-left">
                        <h2 className="text-[30px] md:text-[40px] font-bold mb-6 leading-tight">Corporate Institutions</h2>
                        <p className="text-[16px] md:text-[17px] opacity-90 mb-8 leading-relaxed max-w-[500px] mx-auto lg:mx-0">
                            At Vriksh, we help organisations build emotionally strong, focused, and future-ready teams. Our structured workplace wellbeing solutions enhance productivity, engagement, and overall performance. We design personalised programs that align with your organisational goals - because when your people thrive, your business grows.
                        </p>
                        <button className="bg-white text-[#4A148C] px-8 py-2.5 rounded-full font-bold text-base hover:bg-brand-cream hover:-translate-y-1 transition-all shadow-lg active:scale-95">
                            Enquire Now
                        </button>
                    </div>

                    <div className="h-[350px] md:h-[450px] overflow-hidden relative">
                        <div className="animate-marquee-vertical hover:pause-animation flex flex-col gap-6 py-4">
                            {/* Duplicate the cards to create a seamless loop */}
                            {[...cards, ...cards].map((card, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-6 md:p-8 rounded-[32px] text-[#222] shadow-xl relative shrink-0"
                                >
                                    <div className="flex justify-between items-start mb-5">
                                        <h3 className="text-[20px] md:text-[24px] font-bold text-[#111]">{card.title}</h3>
                                        <span className="text-lg md:text-xl font-bold text-[#111] opacity-90">{card.number}</span>
                                    </div>
                                    <p className="text-[14px] md:text-[15px] text-gray-600 mb-6 leading-relaxed">
                                        {card.desc}
                                    </p>
                                    <button className="bg-[#4A148C] text-white px-6 py-2.5 rounded-full font-semibold text-[14px] hover:bg-[#6A1B9A] transition-all hover:-translate-y-0.5 shadow-md active:scale-95">
                                        {card.buttonText}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Corporate;
