import React from 'react';

const WhyVriksh = () => {
    const features = [
        {
            title: 'Qualified Experts',
            icon: (
                <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6-2c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm12-3c0-1.66-1.34-3-3-3-.35 0-.67.06-1 .17 1.24 1.16 2 2.8 2 4.63s-.76 3.47-2 4.63c.33.11.65.17 1 .17 1.66 0 3-1.34 3-3zm-1 5c1.34 0 4 .67 4 2v2h-3v-2c0-.57-.38-1.57-1-2zM4.5 14c-.62 0-1 .43-1 1v2h-3v-2c0-1.33 2.67-2 4-2 .35 0 .67.06 1 .17-.62 1-1 2-1 2.83z" />
                </svg>
            ),
            bg: 'bg-brand-purple',
            text: 'text-white'
        },
        {
            title: 'Private & Confidential',
            icon: (
                <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                </svg>
            ),
            bg: 'bg-[#FFAB6F]',
            text: 'text-brand-purple'
        },
        {
            title: 'Access Anywhere',
            icon: (
                <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
            ),
            bg: 'bg-brand-purple',
            text: 'text-[#FFFDEA]'
        },
        {
            title: 'One-One Support',
            icon: (
                <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 1.34 5 3s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5zM15 15h-2v-1.5h2v1.5zm0-2h-2v-1.5h2v1.5zm0-2h-2v-1.5h2v1.5z" />
                    <path d="M13.5 14h1v1.5h-1zm2 0h1v1.5h-1zm-4-1h5v1h-5z" />
                    <path d="M9 13.75l1.5 1.5 1.5-1.5v-1l-1.5 1.5-1.5-1.5v1z" />
                </svg>
            ),
            bg: 'bg-[#FFAB6F]',
            text: 'text-brand-purple'
        },
        {
            title: 'Impactful Results',
            icon: (
                <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 17.08l1.5 1.41zM2 5h2v14H2V5zm4 0h2v14H6V5zm4 0h2v14h-2V5zm4 0h2v14h-2V5zm4 0h2v14h-2V5z" />
                </svg>
            ),
            bg: 'bg-brand-purple',
            text: 'text-[#FFFDEA]'
        }
    ];

    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <h2 className="text-[22px] md:text-[30px] font-bold text-center text-brand-purple mb-12">
                    Why Vriksh?
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className={`${item.bg} ${item.text} p-6 md:p-8 rounded-[12px] md:rounded-[15px] flex flex-col md:flex-row items-center gap-4 text-center md:text-left h-full transition-transform hover:-translate-y-1 shadow-sm`}
                        >
                            <div className="shrink-0">
                                {item.icon}
                            </div>
                            <span className="font-bold text-[14px] md:text-[17px] leading-snug">
                                {item.title}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyVriksh;
