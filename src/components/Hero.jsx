import React, { useState, useEffect } from 'react';

const Hero = () => {
    const banners = [
        {
            image: '/images/hero.png',
            title: <span>Enriching Minds.<br />Strengthening Future</span>,
            description: 'Confidential, evidence-based mental health and wellbeing solutions for individuals, institutions, and organisations',
            buttonText: "Let's Talk"
        },
        {
            image: '/images/banner 2.png',
            title: "Learn real-world mental heath skills with Vriksh E- Academy",
            description: "",
            buttonText: "Explore Courses"
        },
        {
            image: '/images/banner 3.png',
            title: "Safe and confidential counselling where your voice truly matters.",
            description: "",
            buttonText: "Start Your Healing Journey"
        },
        {
            image: '/images/banner 4.png',
            title: "Empowering Campuses Transforming Young Minds",
            description: "",
            buttonText: "Get in Touch"
        },
        {
            image: '/images/banner 5.png',
            title: "Partnering with colleges to shape confident, resilient students",
            description: "",
            buttonText: "Partner with us"
        },
        {
            image: '/images/banner 6.png',
            title: <span>Stronger employees. Resilient teams.<br className="hidden sm:block" />Powered by Vriksh EAP</span>,
            description: "",
            buttonText: "Get Started"
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % banners.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 7000); // 7 seconds per slide
        return () => clearInterval(interval);
    }, [currentSlide]);

    return (
        <section className="relative h-[400px] sm:h-[500px] lg:h-[600px] flex items-end justify-center overflow-hidden pb-8 sm:pb-10">
            {/* Multi-Banner Slider */}
            <div className="absolute inset-0 z-0">
                {banners.map((banner, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-[2500ms] ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <img
                            src={banner.image}
                            alt={`Banner ${index + 1}`}
                            className={`w-full h-full object-cover ${index === 1 ? 'object-center' : 'object-top'
                                } ${index === currentSlide ? (index % 2 === 0 ? 'animate-zoom-left' : 'animate-zoom-right') : ''}`}
                        />
                        {/* Overlays */}
                        <div className="absolute inset-0 bg-black/40"></div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <div className="absolute inset-0 z-20 flex items-center justify-between px-4 sm:px-8 lg:px-12 pointer-events-none">
                <button
                    onClick={prevSlide}
                    className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white transition-all pointer-events-auto group cursor-pointer"
                    aria-label="Previous slide"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover:opacity-100 transition-opacity">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>
                <button
                    onClick={nextSlide}
                    className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white transition-all pointer-events-auto group cursor-pointer"
                    aria-label="Next slide"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover:opacity-100 transition-opacity">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>
            </div>

            <div className="relative z-10 max-w-[1240px] w-full px-6 flex flex-col items-start sm:items-center justify-center text-left sm:text-center text-white py-8 sm:py-12">
                <div className="max-w-[900px] animate-fade-in-up flex flex-col items-start sm:items-center">
                    {/* Animated Text Content */}
                    <div className="relative w-full flex flex-col items-center justify-center min-h-[180px] sm:min-h-[220px]">
                        {banners.map((banner, index) => (
                            <div
                                key={index}
                                className={`transition-all duration-700 w-full flex flex-col items-start sm:items-center ${index === currentSlide
                                    ? 'opacity-100 translate-y-0 relative'
                                    : 'opacity-0 translate-y-8 absolute pointer-events-none'
                                    }`}
                            >
                                <h1
                                    key={`title-${index}`}
                                    className={`text-[clamp(32px,7vw,54px)] font-bold leading-[1.1] tracking-tight mb-6 drop-shadow-xl text-left sm:text-center max-w-[1240px] ${index === currentSlide ? 'animate-slide-up-fade opacity-100' : 'opacity-0'
                                        }`}
                                >
                                    {banner.title}
                                </h1>

                                {banner.description && (
                                    <p
                                        key={`desc-${currentSlide}`}
                                        className={`text-[clamp(15px,2vw,18px)] mb-10 max-w-[650px] opacity-90 leading-relaxed font-normal text-justify sm:text-center mx-auto px-4 drop-shadow-md ${index === currentSlide ? 'animate-slide-up-fade opacity-0 delay-200' : ''
                                            }`}
                                    >
                                        {banner.description}
                                    </p>
                                )}

                                <div
                                    key={`btn-${currentSlide}`}
                                    className={`flex justify-start sm:justify-center ${index === currentSlide ? 'animate-slide-up-fade opacity-0 delay-400' : ''
                                        }`}
                                >
                                    <button className="bg-white text-brand-purple px-10 py-3 rounded-full font-bold text-sm sm:text-base hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-2xl">
                                        {banner.buttonText}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
