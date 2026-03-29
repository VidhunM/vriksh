import React from 'react';
import { useNavigate } from 'react-router-dom';

const Academy = () => {
    const navigate = useNavigate();
    const categories = [
        {
            title: 'Workshop',
            desc: 'Our experts conduct curated webinars to provide the most engaging and effective learning experience.',
            btnText: 'browse topics',
            link: '/workshop'
        },
        {
            title: 'Training Programs',
            desc: <span>Interactive, activity-based programs designed by our in-house experts to equip you with practical skills for <br className="sm:hidden" /> real-world application.</span>,
            btnText: 'Explore Programs',
            link: '/training'
        },
        {
            title: 'Certificate Courses',
            desc: 'Learn from experienced experts and gain the practical skills needed to advance your career.',
            btnText: 'Discover Courses',
            link: '/certificate'
        }
    ];

    const handleButtonClick = (link) => {
        navigate(link);
    };

    return (
        <section id="academy" className="py-12 sm:py-16 bg-gradient-to-b from-[#FFF9E1] to-white overflow-hidden relative">
            {/* Decorative background element - Top Left */}
            <div
                className="absolute top-[-170px] left-[-90px] w-[600px] h-[600px] pointer-events-none opacity-[0.3] rotate-12"
            >
                <img
                    src="/images/abt.png"
                    alt=""
                    className="w-full h-full object-contain mix-blend-multiply brightness-[0.3] contrast-[0.3]"
                />
            </div>

            {/* Decorative background element - Bottom Right */}
            <div
                className="absolute bottom-[30px] right-[-10px] w-[450px] h-[450px] pointer-events-none opacity-[0.2]"
            >

                <img
                    src="/images/hml.png"
                    alt=""
                    className="w-full h-full object-contain mix-blend-multiply brightness-[0.2] contrast-[0.2]"
                />
            </div>

            <div className="max-w-[1240px] mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-8 lg:items-center justify-center relative z-10">
                    {/* Left: Image */}
                    <div className="lg:w-[40%] flex justify-center lg:justify-end">
                        <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3.2] lg:aspect-[4.4/4.5] max-w-[500px]">
                            <img
                                src="/images/Academy.png"
                                alt="Student waves at laptop"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/10 rounded-2xl" />
                        </div>
                    </div>

                    {/* Right: Content & Cards */}
                    <div className="lg:w-[60%]">
                        <div className="mb-8 lg:mb-10 text-center lg:text-left">
                            <h2 className="text-2xl sm:text-[34px] font-bold mb-4 sm:mb-6 text-gray-950 leading-tight font-inter-tight">Vriksh E-Academy</h2>
                            <p className="text-sm sm:text-[19px] text-gray-800 max-w-[660px] leading-[1.8] font-normal mx-auto lg:mx-0">
                                We empower aspiring professionals and <br className="sm:hidden" />communities with live, interactive, skill based <br className="sm:hidden" />mental health programs, bridging theory and real-world practice.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 h-full">
                            {categories.map((cat, index) => (
                                <div key={index} className={`bg-[#FCA65B] p-5 ${index === 0 ? 'pt-9' : ''} rounded-2xl flex flex-col items-center text-center shadow-lg border border-black/5 hover:scale-[1.02] transition-transform h-full`}>
                                    <h3 className="text-[16px] font-bold mb-3 text-gray-950 uppercase tracking-[0.05em] [word-spacing:0.15em] w-full font-inter-tight leading-tight">{cat.title}</h3>
                                    <p className="text-[13.5px] text-gray-950/90 mb-4 leading-[1.6] font-medium w-full text-center flex-grow flex items-center justify-center">
                                        {cat.desc}
                                    </p>
                                    <button
                                        onClick={() => handleButtonClick(cat.link)}
                                        className="w-auto sm:w-full px-4 sm:px-0 bg-[#520378] text-white py-2.5 rounded-full font-bold text-[11px] hover:bg-[#520378]/90 transition-all shadow-md uppercase tracking-wider mt-auto mx-auto"
                                    >
                                        {cat.btnText}
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

export default Academy;
