import React from 'react';

const Academy = () => {
    const categories = [
        {
            title: 'Webinars',
            desc: 'Our experts conduct curated webinars to provide the most engaging and effective learning experience',
            btnText: 'Start Learning Today'
        },
        {
            title: 'Training Programs',
            desc: 'Interactive, activity-based programs designed by our in-house experts to equip you with practical skills for real-world application.',
            btnText: 'Explore Programs'
        },
        {
            title: 'Certificate Courses',
            desc: 'Learn from our experienced psychologists to develop new skills and advance your career in mental health related',
            btnText: 'Discover Courses'
        }
    ];

    return (
        <section id="academy" className="py-20 bg-[#FFFBEB] overflow-hidden">
            <div className="max-w-[1240px] mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12 lg:items-center justify-center">
                    {/* Left: Image */}
                    <div className="lg:w-[40%] flex justify-center lg:justify-end">
                        <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] lg:aspect-square max-w-[400px]">
                            <img
                                src="/images/Academy.png"
                                alt="Student waves at laptop"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Right: Content & Cards */}
                    <div className="lg:w-[60%]">
                        <div className="mb-10 text-left">
                            <h2 className="text-3xl sm:text-[42px] font-bold mb-6 text-gray-950 leading-tight">Vriksh E-Academy</h2>
                            <p className="text-[17px] text-gray-800 max-w-[620px] leading-[1.6] font-normal text-left">
                                We empower aspiring professionals and communities with live, interactive, skill-based mental health training, bridging theory and real-world practice
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-3 gap-4">
                            {categories.map((cat, index) => (
                                <div key={index} className="bg-[#FCA65B] p-5 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg border border-black/5 hover:scale-[1.02] transition-transform">
                                    <h3 className="text-base font-bold mb-3 text-gray-950 uppercase tracking-tight w-full">{cat.title}</h3>
                                    <p className="text-[12.5px] text-gray-950/90 mb-5 leading-[1.5] flex-grow font-medium w-full text-center">
                                        {cat.desc}
                                    </p>
                                    <button className="w-full bg-[#520378] text-white py-2.5 rounded-full font-bold text-[11px] hover:bg-[#520378]/90 transition-all shadow-md mt-auto uppercase tracking-wider">
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
