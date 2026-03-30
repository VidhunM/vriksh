import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ALL_SERVICES = [
    "Counselling",
    "Online Workshop",
    "Online Training Programs",
    "Online Certificate Courses",
    "Career Guidance",
    "Corporate Programs",
    "Institution Wellness Program - School",
    "Institution Wellness Program - College"
];

const ACADEMY_SERVICES = [
    "Online Workshop",
    "Online Training Programs",
    "Online Certificate Courses"
];

const BACKGROUND_OPTIONS = [
    "School Student",
    "College Student",
    "Psychology Student",
    "Educator / Teacher",
    "Professional",
    "Parent",
    "Others"
];

const HOME_SERVICES = [
    "Counselling",
    "Workshop",
    "Training program",
    "Certificate Course",
    "Institutional Wellness Program - School",
    "Institutional Wellness Program - College",
    "EAP - Corporate",
    "Career Guidance"
];

const SOURCES = [
    "Google Search",
    "Instagram",
    "Facebook",
    "LinkedIn",
    "Friend/Referral",
    "Advertisement",
    "Website",
    "Email",
    "Newsletter",
    "Other"
];

const ContactFooter = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        location: '',
        topic: '',
        source: '',
        message: '',
        authorize: false
    });
    const [serviceOpen, setServiceOpen] = useState(false);
    const [sourceOpen, setSourceOpen] = useState(false);
    const [backgroundOpen, setBackgroundOpen] = useState(false);
    const [selectedService, setSelectedService] = useState('');
    const [selectedSource, setSelectedSource] = useState('');
    const [selectedBackground, setSelectedBackground] = useState('');

    const [submitting, setSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const serviceRef = useRef(null);
    const sourceRef = useRef(null);
    const backgroundRef = useRef(null);

    const location = useLocation();
    const pathname = location?.pathname || '';
    const isAcademyPage = ['/about', '/workshop', '/training', '/certificate', '/upcoming-events', '/event-details'].some(path => pathname.startsWith(path));
    const isHomePage = pathname === '/';

    // Determine sheet name based on path
    const getSheetName = () => {
        if (pathname === '/') return 'home';
        if (pathname.startsWith('/about')) return 'about';
        if (pathname.startsWith('/workshop')) return 'workshop';
        if (pathname.startsWith('/training')) return 'training';
        if (pathname.startsWith('/certificate')) return 'certificate';
        if (pathname.startsWith('/upcoming-events')) return 'upcoming-events';
        if (pathname.startsWith('/event-details')) return 'event-details';
        return 'general_contact';
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setSubmitStatus(null);

        const dataToSend = {
            ...formData,
            topic: isAcademyPage ? formData.topic : (selectedService || formData.topic),
            background: selectedBackground,
            authorized: formData.authorize,
            sheetName: getSheetName()
        };

        try {
            // Updated to the user's provided Apps Script URL
            const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby7m7iW7zW8OmRTRg4tVCAM2zeouPtJcX_svLmj8cG5OZRKAsBSJMGGPXd1xfSqbhJy/exec';
            // Only use local log if no URL is provided or it's still the placeholder
            if (!APPS_SCRIPT_URL || APPS_SCRIPT_URL === 'YOUR_APPS_SCRIPT_URL') {
                console.log('Form submission data (local test):', dataToSend);
                alert('Success! (Local test mode)');
            } else {
                await fetch(APPS_SCRIPT_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dataToSend),
                });

                alert('Thank you! Your message has been sent.');
            }

            setSubmitStatus('success');
            setFormData({
                fullName: '',
                email: '',
                phoneNumber: '',
                location: '',
                topic: '',
                source: '',
                message: '',
                authorize: false
            });
            setSelectedService('');
            setSelectedSource('');
            setSelectedBackground('');
        } catch (error) {
            console.error('Submission error:', error);
            setSubmitStatus('error');
            alert('Oops! Something went wrong. Please try again later.');
        } finally {
            setSubmitting(false);
        }
    };

    const services = isHomePage ? HOME_SERVICES : (isAcademyPage ? ACADEMY_SERVICES : ALL_SERVICES);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (serviceRef.current && !serviceRef.current.contains(event.target)) {
                setServiceOpen(false);
            }
            if (sourceRef.current && !sourceRef.current.contains(event.target)) {
                setSourceOpen(false);
            }
            if (backgroundRef.current && !backgroundRef.current.contains(event.target)) {
                setBackgroundOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <footer className="footer-area">
            <section id="contact" className="pt-8 pb-10 lg:pt-10 lg:pb-16 overflow-hidden" style={{ background: 'linear-gradient(180deg, #FFFAE4 0%, #FFFFFF 100%)' }}>
                <div className="max-w-[1200px] mx-auto px-6 sm:px-12">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 justify-between items-start">
                        {/* Left Side: Content */}
                        <div className="w-full lg:w-[45%] space-y-4 lg:space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">
                            <h2 className="text-[24px] sm:text-[34px] font-extrabold text-gray-900 leading-[1.1] tracking-wide">
                                {isAcademyPage ? (
                                    <>Get in Touch with <br className="hidden lg:block" /> Vriksh <br /> E-Academy</>
                                ) : (
                                    <>Get in Touch with <br className="hidden lg:block" /> Vriksh</>
                                )}
                            </h2>
                            <div className="space-y-3 lg:space-y-6">
                                {isAcademyPage ? (
                                    <>
                                        <p className="text-gray-950 text-sm lg:text-[18px] leading-relaxed max-w-[500px]">
                                            Interested in our courses, workshops, or training programs? Connect with Vriksh Psychological Support Services | Vriksh E-Academy to learn more about our psychology, counselling, and special education learning opportunities.
                                        </p>
                                        <p className="text-gray-950 text-sm lg:text-[18px] leading-relaxed max-w-[500px]">
                                            Our team will be happy to guide you on course details, registrations, and upcoming programs. Reach out to us and take the next step in your learning journey.
                                        </p>
                                    </>
                                ) : (
                                    <>
                                        <p className="text-gray-950 text-sm lg:text-[18px] leading-relaxed max-w-[500px]">
                                            Looking for trusted counselling, impactful wellbeing programs, or practical mental health learning? Vriksh partners with individuals, institutions, and organisations to create real emotional growth and lasting change.
                                        </p>
                                        <p className="text-gray-950 text-sm lg:text-[18px] leading-relaxed max-w-[500px]">
                                            From Counselling and Vriksh E-Academy Online Courses to Institutional Wellness Programs and Corporate EAP Solutions, we provide evidence-based support that truly makes a difference.
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Right Side: Form */}
                        <div className="w-full lg:w-[50%] flex flex-col items-center lg:items-start mt-4 lg:mt-0">
                            <h3 className="text-[18px] lg:text-[22px] font-bold text-[#520378] mb-4 lg:mb-8 leading-snug text-center lg:text-left">
                                Start your journey with us! <br className="sm:hidden" />Enriching Minds.
                            </h3>
                            <form onSubmit={handleSubmit} className="space-y-4 w-full">
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        placeholder="Full Name"
                                        required
                                        className="w-full px-4 py-2.5 rounded-[6px] border border-[#94a3b8] focus:border-brand-purple focus:ring-0 focus:outline-none transition-all placeholder:text-gray-950 text-gray-950 text-sm lg:text-base"
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email"
                                        required
                                        className="w-full px-4 py-2.5 rounded-[6px] border border-[#94a3b8] focus:border-brand-purple focus:ring-0 focus:outline-none transition-all placeholder:text-gray-950 text-gray-950 text-sm lg:text-base"
                                    />
                                </div>
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <input
                                        type="text"
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        placeholder="Phone Number"
                                        required
                                        className="w-full px-4 py-2.5 rounded-[6px] border border-[#94a3b8] focus:border-brand-purple focus:ring-0 focus:outline-none transition-all placeholder:text-gray-950 text-gray-950 text-sm lg:text-base"
                                    />
                                    <input
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        placeholder="Location"
                                        required
                                        className="w-full px-4 py-2.5 rounded-[6px] border border-[#94a3b8] focus:border-brand-purple focus:ring-0 focus:outline-none transition-all placeholder:text-gray-950 text-gray-950 text-sm lg:text-base"
                                    />
                                </div>

                                {isAcademyPage && (
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <input
                                            type="text"
                                            name="topic"
                                            value={formData.topic}
                                            onChange={handleChange}
                                            placeholder="Topic interested in"
                                            className="w-full px-4 py-2.5 rounded-[6px] border border-[#94a3b8] focus:border-brand-purple focus:ring-0 focus:outline-none transition-all placeholder:text-gray-950 text-gray-950 text-sm lg:text-base"
                                        />
                                        {/* Your Background Dropdown */}
                                        <div className="relative" ref={backgroundRef}>
                                            <div
                                                onClick={() => setBackgroundOpen(!backgroundOpen)}
                                                className="w-full px-4 py-2.5 rounded-[6px] bg-gradient-[#FFF9E1] border border-[#94a3b8] cursor-pointer flex justify-between items-center text-gray-950 text-sm lg:text-base"
                                            >
                                                <span className="text-gray-950">
                                                    {selectedBackground || "Your Background"}
                                                </span>
                                                <svg className={`w-4 h-4 text-[#94a3b8] transition-transform duration-200 ${backgroundOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                                </svg>
                                            </div>
                                            {backgroundOpen && (
                                                <div className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-200 rounded-[12px] shadow-2xl z-50 overflow-hidden animate-slide-up-fade origin-top">
                                                    <div className="max-h-[300px] overflow-y-auto py-2">
                                                        {BACKGROUND_OPTIONS.map((option) => (
                                                            <div
                                                                key={option}
                                                                onClick={() => {
                                                                    setSelectedBackground(option);
                                                                    setBackgroundOpen(false);
                                                                }}
                                                                className="px-5 py-3.5 hover:bg-[#520378] hover:text-white transition-colors cursor-pointer text-[15px] text-gray-800 font-medium"
                                                            >
                                                                {option}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}

                                <div className={`grid ${isAcademyPage ? 'sm:grid-cols-1' : 'sm:grid-cols-2'} gap-5 relative z-20`}>
                                    {/* Custom Service Dropdown */}
                                    {!isAcademyPage && (
                                        <div className="relative" ref={serviceRef}>
                                            <div
                                                onClick={() => setServiceOpen(!serviceOpen)}
                                                className="w-full px-4 py-2.5 rounded-[6px] bg-gradient-[#FFF9E1] border border-[#94a3b8] cursor-pointer flex justify-between items-center text-gray-950 text-sm lg:text-base"
                                            >
                                                <span className="text-gray-950 font-medium">
                                                    {selectedService || "Services interested in"}
                                                </span>
                                                <svg className={`w-4 h-4 text-[#94a3b8] transition-transform duration-200 ${serviceOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                                </svg>
                                            </div>
                                            {serviceOpen && (
                                                <div className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-200 rounded-[12px] shadow-2xl z-50 overflow-hidden animate-slide-up-fade origin-top">
                                                    <div className="max-h-[300px] overflow-y-auto py-2">
                                                        {services.map((option) => (
                                                            <div
                                                                key={option}
                                                                onClick={() => {
                                                                    setSelectedService(option);
                                                                    setServiceOpen(false);
                                                                }}
                                                                className="px-5 py-3.5 hover:bg-[#520378] hover:text-white transition-colors cursor-pointer text-[15px] text-gray-800 font-medium"
                                                            >
                                                                {option}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {/* Custom Source Dropdown */}
                                    <div className="relative w-full" ref={sourceRef} style={{ zIndex: 30 }}>
                                        <div
                                            onClick={() => setSourceOpen(!sourceOpen)}
                                            className="w-full px-4 py-2.5 rounded-[6px] border border-[#94a3b8] bg-gradient-[#FFF9E1] cursor-pointer flex justify-between items-center text-gray-950 text-sm lg:text-base"
                                        >
                                            <span className="text-gray-950 font-medium">
                                                {selectedSource || "How did you hear about us?"}
                                            </span>
                                            <svg className={`w-4 h-4 text-[#94a3b8] transition-transform duration-200 ${sourceOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                            </svg>
                                        </div>
                                        {sourceOpen && (
                                            <div className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-200 rounded-[12px] shadow-2xl z-50 overflow-hidden animate-slide-up-fade origin-top">
                                                <div className="max-h-[300px] overflow-y-auto py-2">
                                                    {SOURCES.map((option) => (
                                                        <div
                                                            key={option}
                                                            onClick={() => {
                                                                setSelectedSource(option);
                                                                setFormData(prev => ({ ...prev, source: option }));
                                                                setSourceOpen(false);
                                                            }}
                                                            className="px-5 py-3.5 hover:bg-[#520378] hover:text-white transition-colors cursor-pointer text-[15px] text-gray-800 font-medium"
                                                        >
                                                            {option}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your message"
                                    rows="4"
                                    required
                                    className="w-full px-4 py-2.5 rounded-[6px] border border-[#94a3b8] focus:border-brand-purple focus:ring-0 focus:outline-none transition-all placeholder:text-gray-950 text-gray-950 text-sm lg:text-base resize-none font-sans"
                                ></textarea>

                                <div className="flex items-start gap-4 py-1">
                                    <div className="pt-0.5">
                                        <input
                                            type="checkbox"
                                            id="authorize"
                                            name="authorize"
                                            checked={formData.authorize}
                                            onChange={handleChange}
                                            required
                                            className="w-5 h-5 rounded border-[#94a3b8] text-brand-purple focus:ring-0 cursor-pointer"
                                        />
                                    </div>
                                    <label htmlFor="authorize" className="text-[14px] text-gray-950 cursor-pointer leading-snug font-medium">
                                        I authorize Vriksh Psychological Support Services to contact me with <br className="hidden sm:block" /> updates and notifications
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="bg-[#520378] text-white px-12 py-3 rounded-full font-bold text-[16px] hover:bg-brand-purple-dark transition-all shadow-md mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {submitting ? 'Sending...' : 'Submit'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </footer>

    );
};

export default ContactFooter;
