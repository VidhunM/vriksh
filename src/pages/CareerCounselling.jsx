import React, { useState, useEffect } from 'react';

const CareerCounselling = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsVisible, setItemsVisible] = useState(3);
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What is career counselling?",
            answer: "Career counselling is a process where a trained counsellor helps you understand your interests, strengths, and values, and guides you in making informed career choices."
        },
        {
            question: "Who can benefit from career counselling?",
            answer: "Career counselling can help students choosing streams after 10th or 12th, college students exploring career options, professionals considering a career switch, and anyone feeling unsure about their career path."
        },
        {
            question: "How is the counselling conducted?",
            answer: "Sessions are conducted online at a mutually convenient time. First, we provide an assessment, followed by a one-on-one session that’s interactive and personalized, helping you understand your strengths and make career choices that truly fit you."
        },
        {
            question: "How long is a career counselling session?",
            answer: "Sessions typically range from 40–60 minutes, depending on your needs. Some may need multiple sessions for deeper guidance."
        },
        {
            question: "Will I get clarity on my career path?",
            answer: "Yes. Our counselors help you explore your interests, strengths, personality, and values, guiding you toward career paths that align with you."
        },
        {
            question: "How do I book a session?",
            answer: "You can book a session via our website, WhatsApp, or contact number. Once booked, you’ll receive session details."
        },
        {
            question: "Can parents be involved in the counselling process?",
            answer: "Yes. Parents can join sessions, especially for younger students, to support informed decision-making."
        },
        {
            question: "Can I switch career paths after the sessions?",
            answer: "Yes, Career counselling helps you explore your options and gain clarity, so you can confidently decide to switch or choose a career path that truly fits your interests and strengths"
        }
    ];

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const testimonials = [
        {
            name: "Roopa",
            role: "Student",
            content: "After 12th, I felt overwhelmed and unsure about my future. Banupriya ma’am guided me step by step, helped me understand my interests and strengths, and gave me the clarity I needed to make an informed decision. The career counselling session was truly helpful and reassuring.",
            date: "April 2025"
        },
        {
            name: "Ram",
            role: "IT Professional",
            content: "I wanted to switch my career but felt unsure about the right direction. The career counselling session helped me understand myself better—my interests and strengths—and gave me much-needed clarity. I was feeling uninterested in my current job, and this guidance helped me explore options that truly align with me.",
            date: "August 2025"
        },
        {
            name: "Kalyan",
            role: "Student",
            content: "Career counselling gave me much-needed clarity. I was very confused about which stream to choose after 10th, but I explored my options with Bhanupriya ma’am’s guidance. I understood myself better and gained clarity that truly aligned with my interests.",
            date: "March 2025"
        },
        {
            name: "Rahul S",
            role: "Engineering Graduate",
            content: "I was unsure whether to pursue higher studies or switch fields. The session gave me structured clarity and helped me evaluate my options realistically. It was extremely helpful.",
            date: "June 2025"
        },
        {
            name: "Megha Krishnan",
            role: "Commerce Student",
            content: "I had too many career options in mind and couldn’t decide. The counselling process helped me narrow down choices based on my aptitude and interests. It gave me direction.",
            date: "January 2024"
        },
        {
            name: "Arjun Nair",
            role: "Working Professional",
            content: "I felt stuck in my career and didn’t know my next step. The guidance helped me reflect on my skills and long-term goals. I now have a clear action plan.",
            date: "September 2025"
        }
    ];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsVisible(1);
            } else if (window.innerWidth < 1024) {
                setItemsVisible(2);
            } else {
                setItemsVisible(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) => {
            const nextIndex = prev + 1;
            if (nextIndex > testimonials.length - itemsVisible) {
                return 0;
            }
            return nextIndex;
        });
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => {
            const prevIndex = prev - 1;
            if (prevIndex < 0) {
                return testimonials.length - itemsVisible;
            }
            return prevIndex;
        });
    };

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, [itemsVisible]); // Re-run when itemsVisible changes to ensure correct nextSlide closure

    return (
        <div className="pt-0 bg-white">
            {/* Hero Header Banner - Precisely matching Upcoming Workshops page banner size and text */}
            <div className="bg-[#520378] pt-24 pb-6 sm:pt-32 sm:pb-10 text-center">
                <div className="max-w-[1240px] mx-auto px-6">
                    <h1 className="text-2xl sm:text-4xl font-bold text-white uppercase tracking-wider font-inter-tight">
                        CAREER COUNSELLING
                    </h1>
                </div>
            </div>

            {/* Main Content Section - Standardized width and layout */}
            <div
                className="pt-12 pb-6 sm:pt-16 sm:pb-8 animate-in fade-in duration-700"
                style={{ background: 'linear-gradient(180deg, #FFFAE4 0%, #FFFFFF 100%)' }}
            >
                <div className="max-w-[1240px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Left Column: Text Content */}
                    <div className="flex-1 order-2 lg:order-1 slide-in-from-left-4 duration-700">
                        <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-bold text-[#062623] leading-[1.1] mb-5 font-inter-tight tracking-tight">
                            Not sure what career is <br /> right for you?
                        </h2>

                        <p className="text-base sm:text-[17px] text-gray-700 leading-[1.7] mb-6 max-w-[750px] font-medium">
                            Let's explore your strengths, interests, and natural abilities to <br className="hidden lg:block" />
                            uncover a career path that truly fits you. Through guided <br className="hidden lg:block" />
                            assessments and personalised counselling, we help you gain <br className="hidden lg:block" />
                            clarity, confidence, and direction for your future. Whether you're <br className="hidden lg:block" />
                            a student choosing your first path or someone considering a <br className="hidden lg:block" />
                            change, we're here to support you at every step.
                        </p>

                        <button className="bg-[#520378] text-white px-10 py-4 rounded-full font-bold text-base hover:bg-[#6b049d] transition-all transform hover:scale-105 shadow-md active:scale-95">
                            Discover your path
                        </button>
                    </div>

                    {/* Right Column: Image */}
                    <div className="flex-1 order-1 lg:order-2 w-full">
                        <div className="rounded-[24px] overflow-hidden shadow-xl transition-transform hover:scale-[1.01] duration-500">
                            <img
                                src="/images/career hero.png"
                                alt="Professional career counsellor with student"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>


            {/* Signs You Might Need Career Guidance Section - Precisely matching reference image */}
            <div className="relative py-12 sm:py-20 overflow-hidden bg-white">
                {/* Background Image - Precisely aligned as per reference */}
                <div className="absolute inset-0 w-full h-[100%] -translate-y-12 pointer-events-none">
                    <img
                        src="/images/career guidance background.png"
                        alt=""
                        className="w-full h-full object-fill object-bottom opacity-100"
                    />
                </div>

                <div className="relative z-10 max-w-[1240px] mx-auto px-6">
                    <h2 className="text-2xl sm:text-[34px] font-bold text-[#062623] text-center mb-12 px-4 font-inter-tight">
                        Signs You Might Need Career Guidance
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-[1100px] mx-auto">
                        {[
                            {
                                text: "You've Completed High School Or Are Unsure About Your Next Step",
                                color: "bg-[#FEF8E4]"
                            },
                            {
                                text: "You're Exploring Your Strengths, Interests, And Career Preferences",
                                color: "bg-[#FCA65B]"
                            },
                            {
                                text: "You Have Multiple Interests And Can't Decide Between Them",
                                color: "bg-[#FEF8E4]"
                            },
                            {
                                text: "You're Unsure Which Career Path Suits You Best",
                                color: "bg-[#FEF8E4]"
                            },
                            {
                                text: "You're Confused About Educational Or Professional Options",
                                color: "bg-[#FCA65B]"
                            },
                            {
                                text: "You Want Guidance On Skill Development And Long-Term Career Growth",
                                color: "bg-[#FEF8E4]"
                            }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className={`${item.color} p-8 sm:p-10 rounded-[12px] shadow-sm hover:shadow-md transition-shadow flex flex-col h-full items-start min-h-[160px] lg:min-h-[200px]`}
                            >
                                <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center mb-7 shrink-0 shadow-sm">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="mb-[1px] mr-[0.5px]">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                <p className="text-base sm:text-[18px] font-bold text-gray-950 leading-[1.1] font-inter-tight max-w-[280px]">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center relative z-20">
                        <button className="bg-[#520378] text-white px-12 py-3.5 rounded-full font-bold text-base hover:bg-[#4C0070] transition-all transform hover:scale-105 shadow-xl active:scale-95">
                            Talk to an Expert
                        </button>
                    </div>
                </div>
            </div>

            {/* Stats Section - Standardized width for "straight even" layout */}
            <div className="bg-white py-10 border-t border-gray-100">
                <div className="max-w-[1240px] mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
                        {/* Stat Item 1 */}
                        <div className="flex-1 flex flex-col items-center text-center">
                            <h3 className="text-[32px] sm:text-[38px] font-bold text-[#520378] mb-1 font-inter-tight">20,000+</h3>
                            <p className="text-[14px] sm:text-[16px] text-gray-600 font-medium">Lives Impacted</p>
                        </div>

                        {/* Divider */}
                        <div className="hidden md:block w-[1px] h-16 bg-black/10"></div>

                        {/* Stat Item 2 */}
                        <div className="flex-1 flex flex-col items-center text-center">
                            <h3 className="text-[32px] sm:text-[38px] font-bold text-[#520378] mb-1 font-inter-tight">4.8/5</h3>
                            <p className="text-[14px] sm:text-[16px] text-gray-600 font-medium">Client Ratings</p>
                        </div>

                        {/* Divider */}
                        <div className="hidden md:block w-[1px] h-16 bg-black/10"></div>

                        {/* Stat Item 3 */}
                        <div className="flex-1 flex flex-col items-center text-center">
                            <h3 className="text-[32px] sm:text-[38px] font-bold text-[#520378] mb-1 font-inter-tight">5,000+</h3>
                            <p className="text-[14px] sm:text-[16px] text-gray-600 font-medium">Active Learners</p>
                        </div>

                        {/* Divider */}
                        <div className="hidden md:block w-[1px] h-16 bg-black/10"></div>

                        {/* Stat Item 4 */}
                        <div className="flex-1 flex flex-col items-center text-center">
                            <h3 className="text-[32px] sm:text-[38px] font-bold text-[#520378] mb-1 font-inter-tight">300+</h3>
                            <p className="text-[14px] sm:text-[16px] text-gray-600 font-medium">Sessions conducted</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Make Better Decisions Section - More compact sizing */}
            <div className="relative pt-8 pb-4 sm:pt-14 sm:pb-8 overflow-hidden">
                {/* Background Image - Precisely aligned to top curve */}
                <div className="absolute inset-0 w-full h-full pointer-events-none">
                    <img
                        src="/images/make decision.png"
                        alt=""
                        className="w-full h-full object-cover object-top"
                    />
                </div>

                {/* Background Image Line Art */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-80">
                    <img
                        src="/images/mbd.png"
                        alt=""
                        className="w-full h-full object-contain object-center scale-150 sm:scale-100 lg:-translate-x-16 brightness-125 contrast-125"
                    />
                </div>

                <div className="relative z-10 max-w-[1240px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
                    {/* Left Side: Text Content */}
                    <div className="flex-1 space-y-2 lg:translate-x-16">
                        <h2 className="text-[32px] sm:text-[42px] font-bold leading-[1.05] tracking-tight font-inter-tight">
                            <span className="bg-white text-[#000000] px-4 py-1.5 sm:px-5 sm:py-2 inline-block mb-1 rounded-none shadow-sm">Make Better</span>
                            <br />
                            <span className="bg-white text-[#000000] px-4 py-1.5 sm:px-5 sm:py-2 inline-block rounded-none shadow-sm">Decisions</span>
                        </h2>
                        <p className="text-white text-[18px] sm:text-[20px] leading-relaxed max-w-[480px] font-medium pt-1">
                            Discover Yourself To Understand What Truly Drives You, And Choose A Career Path That Fits Your Strengths, Interests, And Aspirations.
                        </p>
                    </div>

                    {/* Right Side: Overlapping Circular Process Steps */}
                    <div className="flex-1 relative w-full max-w-[420px] mx-auto lg:mx-0 flex items-center justify-center lg:-translate-x-18">
                        <img
                            src="/images/circle image.png"
                            alt="Professional career counselling process cycles"
                            className="w-full h-auto object-contain drop-shadow-2xl"
                        />
                    </div>
                </div>
            </div>

            {/* Our Career Guidance Services Includes Section - Precisely matching reference image */}
            <div className="bg-[#FEF8E4] py-12 sm:py-16">
                <div className="max-w-[1240px] mx-auto px-6">
                    <h2 className="text-3xl sm:text-4xl font-bold text-black text-center mb-12 font-inter-tight">
                        Our career guidance services includes
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {[
                            {
                                title: <>Career<br />Assessments</>,
                                text: "Evaluate your strengths, skills, interests, and personality to gain a clear understanding of which career paths suit you best",
                                iconSrc: "/icons/career assement.png"
                            },
                            {
                                title: <>Career<br />Counselling</>,
                                text: "Get expert guidance and insights to understand your options and make informed decisions for a successful career journey",
                                iconSrc: "/icons/career counselling.png"
                            },
                            {
                                title: <>Career<br />Recommendations</>,
                                text: "Receive personalised recommendations based on your strengths, interests, and potential to help you take the next steps toward a successful career",
                                iconSrc: "/icons/career recommentations.png"
                            },
                            {
                                title: <>Career<br />Updates</>,
                                text: "Stay informed with the latest career-related news, opportunities, and trends to make timely and informed decisions",
                                iconSrc: "/icons/career updates.png"
                            }
                        ].map((service, index) => (
                            <div
                                key={index}
                                className="bg-[#FCA65B] px-5 py-8 rounded-[20px] flex flex-col min-h-[340px] shadow-sm hover:shadow-md transition-all group relative overflow-hidden"
                            >
                                <h3 className="text-[#520378] text-xl font-bold mb-3 font-inter-tight leading-tight">
                                    {service.title}
                                </h3>
                                <p className="text-gray-900 text-[clamp(15px,1.1vw,17px)] leading-[1.7] mb-4 font-medium text-left tracking-tight">
                                    {service.text}
                                </p>
                                <div className="absolute bottom-2 right-2 w-28 h-28 transform group-hover:scale-110 transition-transform duration-500">
                                    <img
                                        src={service.iconSrc}
                                        alt={service.title}
                                        className="w-full h-full object-contain opacity-90"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center">
                        <button className="bg-[#520378] text-white px-10 py-3 rounded-full font-bold text-base hover:bg-[#4C0070] transition-all transform hover:scale-105 shadow-lg active:scale-95">
                            Discover your path
                        </button>
                    </div>
                </div>
            </div>

            {/* What do we assure? Section - Precisely matching reference image */}
            <div className="bg-white py-12 sm:py-16">
                <div className="max-w-[1240px] mx-auto px-6">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#520378] text-center mb-16 font-inter-tight">
                        What do we assure?
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-4 lg:gap-6">
                        {[
                            {
                                title: "Personalized Guidance",
                                text: "Tailored Support for You",
                                icon: "/icons/Guidance.png"
                            },
                            {
                                title: "Confidentiality",
                                text: "Secure and Private Sessions",
                                icon: "/icons/confidential.png"
                            },
                            {
                                title: "Convenience",
                                text: "Online sessions from the comfort of the your home",
                                icon: "/icons/convenices.png"
                            },
                            {
                                title: "Expert Support",
                                text: "Guided by qualified professionals",
                                icon: "/icons/export support.png"
                            },
                            {
                                title: "Clear Direction",
                                text: "Make confident career choices.",
                                icon: "/icons/clear direction.png"
                            }
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col items-center">
                                {/* Icon Container */}
                                <div className="w-32 h-32 mb-3 flex items-center justify-center">
                                    <img
                                        src={item.icon}
                                        alt={item.title}
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>
                                {/* Purple Card */}
                                <div className="bg-[#520378] rounded-[12px] p-5 w-full text-center flex flex-col items-center min-h-[120px] justify-center shadow-lg transform transition-all hover:-translate-y-1">
                                    <h3 className="text-white text-[15px] sm:text-[17px] font-bold mb-2 font-inter-tight leading-tight px-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/80 text-[clamp(13px,0.9vw,15px)] leading-[1.6] font-medium">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Testimonials Section - What our Clients say */}
            <div
                className="py-16 sm:py-20 border-t border-black/5"
                style={{ background: 'linear-gradient(180deg, #FFF9E1 0%, #FFFFFF 100%)' }}
            >
                <div className="max-w-[1240px] mx-auto px-6">
                    {/* Header with Navigation */}
                    <div className="flex justify-between items-end mb-12">
                        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-black font-inter-tight leading-tight">
                            What our Clients say
                        </h2>
                        {/* Carousel Controls */}
                        <div className="flex gap-3 mb-2">
                            <button
                                onClick={prevSlide}
                                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center bg-white text-gray-400 hover:border-[#520378] hover:text-[#520378] transition-all shadow-sm active:scale-95"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="15 18 9 12 15 6"></polyline>
                                </svg>
                            </button>
                            <button
                                onClick={nextSlide}
                                className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 hover:bg-[#520378] hover:text-white transition-all shadow-sm active:scale-95"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Testimonial Slider Container */}
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * (100 / itemsVisible)}%)` }}
                        >
                            {/* Each Group of 3 (or the whole line in flex) */}
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="w-full md:w-1/2 lg:w-1/3 flex-none px-4">
                                    <div className="bg-white rounded-[24px] p-8 sm:p-10 shadow-sm border border-black/5 flex flex-col h-full hover:shadow-md transition-shadow">
                                        <div className="mb-6">
                                            <h4 className="text-lg font-bold text-gray-950 mb-0.5">{testimonial.name}</h4>
                                            <p className="text-sm text-gray-500 font-medium italic">{testimonial.role}</p>
                                        </div>
                                        <p className="text-gray-800 text-[15px] leading-relaxed mb-10 flex-grow font-medium">
                                            "{testimonial.content}"
                                        </p>
                                        {/* Footer with Google & Stars */}
                                        <div className="flex items-center justify-between pt-6 border-t border-gray-100 mt-auto">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 flex items-center justify-center">
                                                    <svg viewBox="0 0 24 24" className="w-6 h-6">
                                                        <path
                                                            fill="#4285F4"
                                                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                                        />
                                                        <path
                                                            fill="#34A853"
                                                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                                        />
                                                        <path
                                                            fill="#FBBC05"
                                                            d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z"
                                                        />
                                                        <path
                                                            fill="#EA4335"
                                                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                                                        />
                                                    </svg>
                                                </div>
                                                <div className="flex">
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <svg key={star} className="w-4 h-4 text-[#FCA65B]" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                                        </svg>
                                                    ))}
                                                </div>
                                            </div>
                                            <span className="text-sm font-bold text-gray-800">{testimonial.date}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white py-12 sm:py-20">
                <div className="max-w-[1240px] mx-auto px-6 flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
                    {/* Left: Questions List */}
                    <div className="flex-1 w-full">
                        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold mb-6 text-gray-950 font-inter-tight text-left leading-tight">
                            Frequently asked questions
                        </h2>

                        <div className="space-y-2.5">
                            {faqs.map((faq, index) => (
                                <div key={index} className="flex flex-col">
                                    <div
                                        onClick={() => toggleFaq(index)}
                                        className={`py-3 px-8 rounded-[22px] flex items-center justify-between group transition-all duration-300 cursor-pointer shadow-sm border-[1.5px] ${openIndex === index ? 'bg-[#520378] border-[#520378] text-white rounded-b-none' : 'bg-white border-[#520378] text-gray-900 hover:bg-[#520378] hover:text-white'}`}
                                    >
                                        <span className="text-base sm:text-lg font-bold pr-6 font-inter-tight transition-colors duration-300">
                                            {index + 1}. {faq.question}
                                        </span>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${openIndex === index ? 'bg-white text-[#520378] rotate-180' : 'bg-[#520378] text-white group-hover:bg-white group-hover:text-[#520378]'}`}>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M7 10l5 5 5-5z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <div className={`px-8 pb-6 rounded-b-[22px] text-base leading-relaxed font-medium ${openIndex === index ? 'bg-[#520378] text-white/90 border-x-[1.5px] border-b-[1.5px] border-[#520378]' : ''}`}>
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Side Image */}
                    <div className="flex-1 w-full lg:max-w-[500px] h-auto aspect-[3/3.8] rounded-[36px] overflow-hidden shadow-2xl relative">
                        <img
                            src="/images/FAQ.png"
                            alt="Student taking notes"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareerCounselling;
