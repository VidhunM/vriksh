import React from 'react';

const WhyVriksh = () => {
    const features = [
        {
            title: 'Qualified Experts',
            icon: '/icons/wk1.png',
            bg: 'bg-brand-purple',
            text: 'text-white'
        },
        {
            title: 'Private & Confidential',
            icon: '/icons/wk2.png',
            bg: 'bg-[#FFAB6F]',
            text: 'text-brand-purple'
        },
        {
            title: 'Access Anywhere',
            icon: '/icons/wk3.png',
            bg: 'bg-brand-purple',
            text: 'text-white'
        },
        {
            title: 'One-One Support',
            icon: '/icons/wk4.png',
            bg: 'bg-[#FFAB6F]',
            text: 'text-brand-purple'
        },
        {
            title: 'Customised Guidance',
            icon: '/icons/wk5.png',
            bg: 'bg-[#FFAB6F]',
            text: 'text-brand-purple'
        },
        {
            title: 'Indepth Analysis',
            icon: '/icons/wk6.png',
            bg: 'bg-brand-purple',
            text: 'text-white'
        },
        {
            title: 'Engaging Sessions',
            icon: '/icons/wk7.png',
            bg: 'bg-[#FFAB6F]',
            text: 'text-brand-purple'
        },
        {
            title: 'Follow-Up Care',
            icon: '/icons/wk8.png',
            bg: 'bg-brand-purple',
            text: 'text-white'
        }
    ];

    return (
        <section className="py-10 sm:py-14 bg-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <h2 className="text-[22px] md:text-[30px] font-bold text-center text-brand-purple mb-12">
                    Why Vriksh?
                </h2>

                <div className="relative overflow-hidden w-full">
                    <div className="animate-marquee hover:pause-animation flex gap-4 lg:gap-6 py-4">
                        {/* Duplicate the features to create a seamless loop */}
                        {[...features, ...features].map((item, index) => (
                            <div
                                key={index}
                                className={`${item.bg} ${item.text} p-4 md:p-6 rounded-[12px] md:rounded-[15px] flex items-center gap-4 transition-transform hover:-translate-y-1 shadow-sm w-[280px] md:w-[320px] shrink-0`}
                            >
                                <img
                                    src={item.icon}
                                    alt={item.title}
                                    className="w-10 h-10 md:w-12 md:h-12 object-contain shrink-0"
                                />
                                <h3 className="font-bold text-[14px] md:text-[17px] leading-snug">
                                    {item.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyVriksh;
