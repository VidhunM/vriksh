import React, { useState, useRef, useEffect } from 'react';

const ContactFooter = () => {
    const [serviceOpen, setServiceOpen] = useState(false);
    const [sourceOpen, setSourceOpen] = useState(false);
    const [selectedService, setSelectedService] = useState('');
    const [selectedSource, setSelectedSource] = useState('');

    const serviceRef = useRef(null);
    const sourceRef = useRef(null);

    const services = [
        "Counselling",
        "Online Workshop",
        "Online Training Programs",
        "Online Certificate Courses",
        "Career Guidance",
        "Corporate Programs",
        "Institution Wellness Program - School",
        "Institution Wellness Program - College"
    ];

    const sources = [
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

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (serviceRef.current && !serviceRef.current.contains(event.target)) {
                setServiceOpen(false);
            }
            if (sourceRef.current && !sourceRef.current.contains(event.target)) {
                setSourceOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <footer className="footer-area">
            <section id="contact" className="pt-6 pb-16 overflow-hidden" style={{ background: 'linear-gradient(180deg, #FFFAE4 0%, #FFFFFF 100%)' }}>
                <div className="max-w-[1200px] mx-auto px-6 sm:px-12">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 justify-between items-start">
                        {/* Left Side: Content */}
                        <div className="w-full lg:w-[45%] space-y-8">
                            <h2 className="text-[28px] sm:text-[34px] font-extrabold text-gray-900 leading-[1.1] tracking-tight">
                                Get in Touch with <br /> Vriksh
                            </h2>
                            <div className="space-y-6">
                                <p className="text-gray-950 text-base md:text-[18px] leading-relaxed max-w-[500px]">
                                    Looking for trusted counselling, impactful wellbeing programs, or practical mental health learning? Vriksh partners with individuals, institutions, and organisations to create real emotional growth and lasting change.
                                </p>
                                <p className="text-gray-950 text-base md:text-[18px] leading-relaxed max-w-[500px]">
                                    From professional counselling and Vriksh E-Academy online courses to institutional wellness programs and corporate EAP solutions, we provide evidence-based support that truly makes a difference.
                                </p>
                            </div>
                        </div>

                        {/* Right Side: Form */}
                        <div className="w-full lg:w-[50%]">
                            <h3 className="text-[20px] font-bold text-[#520378] mb-8 leading-snug">
                                Start your journey with us Enriching Minds.
                            </h3>
                            <form className="space-y-5">
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full px-4 py-2.5 rounded-[6px] border border-[#94a3b8] focus:border-brand-purple focus:ring-0 focus:outline-none transition-all placeholder:text-gray-950 text-gray-950"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full px-4 py-2.5 rounded-[6px] border border-[#94a3b8] focus:border-brand-purple focus:ring-0 focus:outline-none transition-all placeholder:text-gray-950 text-gray-950"
                                    />
                                </div>
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <input
                                        type="text"
                                        placeholder="Phone Number"
                                        className="w-full px-4 py-2.5 rounded-[6px] border border-[#94a3b8] focus:border-brand-purple focus:ring-0 focus:outline-none transition-all placeholder:text-gray-950 text-gray-950"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Location"
                                        className="w-full px-4 py-2.5 rounded-[6px] border border-[#94a3b8] focus:border-brand-purple focus:ring-0 focus:outline-none transition-all placeholder:text-gray-950 text-gray-950"
                                    />
                                </div>
                                <div className="grid sm:grid-cols-2 gap-5 relative z-20">
                                    {/* Custom Service Dropdown */}
                                    <div className="relative" ref={serviceRef}>
                                        <div
                                            onClick={() => setServiceOpen(!serviceOpen)}
                                            className="w-full px-4 py-2.5 rounded-[6px] border border-[#94a3b8] bg-white cursor-pointer flex justify-between items-center text-gray-950"
                                        >
                                            <span className={selectedService ? "text-gray-950" : "text-gray-950"}>
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

                                    {/* Custom Source Dropdown */}
                                    <div className="relative" ref={sourceRef}>
                                        <div
                                            onClick={() => setSourceOpen(!sourceOpen)}
                                            className="w-full px-4 py-2.5 rounded-[6px] border border-[#94a3b8] bg-white cursor-pointer flex justify-between items-center text-gray-950"
                                        >
                                            <span className={selectedSource ? "text-gray-950" : "text-gray-950"}>
                                                {selectedSource || "How did you hear about us?"}
                                            </span>
                                            <svg className={`w-4 h-4 text-[#94a3b8] transition-transform duration-200 ${sourceOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                            </svg>
                                        </div>
                                        {sourceOpen && (
                                            <div className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-200 rounded-[12px] shadow-2xl z-50 overflow-hidden animate-slide-up-fade origin-top">
                                                <div className="max-h-[300px] overflow-y-auto py-2">
                                                    {sources.map((option) => (
                                                        <div
                                                            key={option}
                                                            onClick={() => {
                                                                setSelectedSource(option);
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
                                    placeholder="Your message"
                                    rows="4"
                                    className="w-full px-4 py-2.5 rounded-[6px] border border-[#94a3b8] focus:border-brand-purple focus:ring-0 focus:outline-none transition-all placeholder:text-gray-950 text-gray-950 resize-none font-sans"
                                ></textarea>

                                <div className="flex items-start gap-4 py-1">
                                    <div className="pt-0.5">
                                        <input
                                            type="checkbox"
                                            id="authorize"
                                            className="w-5 h-5 rounded border-[#94a3b8] text-brand-purple focus:ring-0 cursor-pointer"
                                        />
                                    </div>
                                    <label htmlFor="authorize" className="text-[14px] text-gray-950 cursor-pointer leading-snug font-medium">
                                        I authorize Vriksh Psychological Support Services to contact me with <br className="hidden sm:block" /> updates and notifications
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    className="bg-[#520378] text-white px-12 py-3 rounded-full font-bold text-[16px] hover:bg-brand-purple-dark transition-all shadow-md mt-2"
                                >
                                    Submit
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
