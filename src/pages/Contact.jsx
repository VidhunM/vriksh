import React, { useState, useRef, useEffect } from 'react';
import { FaWhatsapp, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
    const [sourceOpen, setSourceOpen] = useState(false);
    const [selectedSource, setSelectedSource] = useState('');
    const sourceRef = useRef(null);

    const sources = [
        "Google Search",
        "Instagram",
        "Facebook",
        "LinkedIn",
        "Friend/Referral",
        "Advertisement",
        "Website",
        "Email",
        "Other"
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sourceRef.current && !sourceRef.current.contains(event.target)) {
                setSourceOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const contactInfo = [
        {
            icon: <FaWhatsapp size={22} />,
            title: "Text us on WhatsApp",
            value: "+91 9880274824",
            link: "https://wa.me/919880274824",
        },
        {
            icon: <FaEnvelope size={20} />,
            title: "Drop us an email",
            value: "vriksh.em@gmail.com",
            link: "mailto:vriksh.em@gmail.com",
        },
        {
            icon: <FaPhoneAlt size={18} />,
            title: "Give us a call",
            value: "+91 9880274824",
            link: "tel:+919880274824",
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* ── Purple Header Banner ── */}
            <div className="bg-[#520378] pt-24 pb-6 sm:pt-32 sm:pb-10 text-center relative z-10">
                <div className="max-w-[1240px] mx-auto px-6">
                    <h1 className="text-white text-[clamp(26px,4vw,40px)] font-bold tracking-[0.08em] uppercase font-inter-tight">
                        CONTACT US
                    </h1>
                </div>
            </div>



            {/* Contact Content Section */}
            <section className="py-16 sm:py-24">
                <div className="max-w-[1240px] mx-auto px-6 lg:px-16">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

                        {/* Left Side: Contact Cards */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-[32px] font-bold text-gray-900 mb-6">Get in <span className="text-[#520378]">Touch</span></h2>
                                <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                                    Reach out to us through any of these channels. We typically respond within 24 hours.
                                </p>
                            </div>

                            <div className="grid gap-6">
                                {contactInfo.map((info, idx) => (
                                    <a
                                        key={idx}
                                        href={info.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-6"
                                    >
                                        <div className="w-12 h-12 bg-[#520378] text-white rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-all shadow-md">
                                            {info.icon}
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">{info.title}</p>
                                            <p className="text-xl font-bold text-gray-900">{info.value}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Right Side: Contact Form */}
                        <div className="bg-white p-8 md:p-10 rounded-[32px] border border-gray-100 shadow-xl shadow-gray-100/50">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h3>

                            <form className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700 ml-1">Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="Enter your name"
                                            className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-[#520378] focus:ring-2 focus:ring-[#520378]/10 outline-none transition-all placeholder:text-gray-400"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-[#520378] focus:ring-2 focus:ring-[#520378]/10 outline-none transition-all placeholder:text-gray-400"
                                        />
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700 ml-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            placeholder="Enter phone number"
                                            className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-[#520378] focus:ring-2 focus:ring-[#520378]/10 outline-none transition-all placeholder:text-gray-400"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700 ml-1">Location</label>
                                        <input
                                            type="text"
                                            placeholder="City, Country"
                                            className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-[#520378] focus:ring-2 focus:ring-[#520378]/10 outline-none transition-all placeholder:text-gray-400"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2 relative" ref={sourceRef}>
                                    <label className="text-sm font-semibold text-gray-700 ml-1">How did you hear about us?</label>
                                    <div
                                        onClick={() => setSourceOpen(!sourceOpen)}
                                        className="w-full px-5 py-3 rounded-xl border border-gray-200 cursor-pointer flex justify-between items-center bg-white hover:border-gray-300 transition-all text-gray-600"
                                    >
                                        <span>{selectedSource || "Select an option"}</span>
                                        <svg className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${sourceOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>

                                    {sourceOpen && (
                                        <div className="absolute top-[calc(100%+4px)] left-0 w-full bg-white border border-gray-100 rounded-xl shadow-xl z-50 overflow-hidden py-1 animate-in fade-in slide-in-from-top-2 duration-200">
                                            <div className="max-h-[240px] overflow-y-auto custom-scrollbar">
                                                {sources.map((source) => (
                                                    <div
                                                        key={source}
                                                        onClick={() => {
                                                            setSelectedSource(source);
                                                            setSourceOpen(false);
                                                        }}
                                                        className="px-5 py-3 hover:bg-[#520378]/5 hover:text-[#520378] cursor-pointer transition-colors text-[15px] font-medium text-gray-700"
                                                    >
                                                        {source}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 ml-1">Your Message</label>
                                    <textarea
                                        placeholder="How can we help you?"
                                        rows="4"
                                        className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-[#520378] focus:ring-2 focus:ring-[#520378]/10 outline-none transition-all placeholder:text-gray-400 resize-none"
                                    ></textarea>
                                </div>

                                <div className="flex items-start gap-3 py-2">
                                    <div className="pt-1">
                                        <input
                                            type="checkbox"
                                            id="authorize"
                                            className="w-5 h-5 rounded-md border-gray-300 text-[#520378] focus:ring-[#520378]/20 cursor-pointer"
                                        />
                                    </div>
                                    <label htmlFor="authorize" className="text-sm text-gray-600 cursor-pointer leading-relaxed">
                                        I authorize Vriksh Psychological Support Services to contact me with updates and notifications
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#520378] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#3d025a] transition-all shadow-lg shadow-[#520378]/20 active:scale-[0.98]"
                                >
                                    Submit Request
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
