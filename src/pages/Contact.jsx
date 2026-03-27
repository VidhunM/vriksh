//import React, { useState, useRef, useEffect } from 'react';
//import { FaWhatsapp, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

//const Contact = () => {
//    const [sourceOpen, setSourceOpen] = useState(false);
//    const [selectedSource, setSelectedSource] = useState('');
//    const sourceRef = useRef(null);

//    const sources = [
//        "Google Search",
//        "Instagram",
//        "Facebook",
//        "LinkedIn",
//        "Friend/Referral",
//        "Advertisement",
//        "Website",
//        "Email",
//        "Other"
//    ];

//    useEffect(() => {
//        const handleClickOutside = (event) => {
//            if (sourceRef.current && !sourceRef.current.contains(event.target)) {
//                setSourceOpen(false);
//            }
//        };
//        document.addEventListener('mousedown', handleClickOutside);
//        return () => document.removeEventListener('mousedown', handleClickOutside);
//    }, []);

//    const contactInfo = [
//        {
//            icon: <FaPhoneAlt size={18} />,
//            title: "Give us a call",
//            value: "+91 9880274824",
//            link: "tel:+919880274824",
//        },
//        {
//            icon: <FaEnvelope size={20} />,
//            title: "Email",
//            value: "vriksh.em@gmail.com",
//            link: "mailto:vriksh.em@gmail.com",
//        },
//        {
//            icon: <FaWhatsapp size={22} />,
//            title: "WhatsApp",
//            value: "+91 9880274824",
//            link: "https://wa.me/919880274824",
//        }

//    ];

//    return (
//        <div className="min-h-screen bg-white pt-20 sm:pt-28 pb-10 sm:pb-20">
//            {/* Contact Content Section */}
//            <section className="pb-6 sm:pb-16 pt-0 sm:pt-0">
//                <div className="max-w-[1240px] mx-auto px-6 lg:px-16">
//                    <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20">

//                        {/* Left Side: Contact Info Grouped Card */}
//                        <div className="lg:col-span-5 space-y-8 sm:space-y-12">
//                            <h2 className="text-2xl sm:text-[32px] font-bold text-gray-950 font-inter-tight tracking-wide">Get in Touch with <span className="text-[#520378]">Vriksh</span></h2>

//                            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
//                                {contactInfo.map((info, idx) => (
//                                    <div
//                                        key={idx}
//                                        className="p-5 sm:p-8 flex items-start gap-4 sm:gap-6 border-b border-gray-50 last:border-b-0 hover:bg-gray-50/50 transition-colors"
//                                    >
//                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#520378] text-white rounded-full flex items-center justify-center shrink-0 shadow-md">
//                                            {info.icon}
//                                        </div>
//                                        <div className="space-y-1 pt-1 sm:pt-0">
//                                            <p className="text-base sm:text-[17px] font-bold text-gray-950 font-inter-tight">{info.title}</p>
//                                            <a
//                                                href={info.link}
//                                                className="text-sm sm:text-[15px] font-medium text-gray-700 hover:text-[#520378] transition-colors block font-geist"
//                                            >
//                                                {info.value}
//                                            </a>
//                                        </div>
//                                    </div>
//                                ))}
//                            </div>
//                        </div>

//                        {/* Right Side: Contact Form */}
//                        <div className="lg:col-span-7">
//                            <h3 className="text-2xl sm:text-[32px] font-bold text-gray-950 mb-6 sm:mb-10 font-inter-tight">Let’s Connect</h3>

//                            <form className="space-y-6">
//                                <div className="grid sm:grid-cols-2 gap-6">
//                                    <input
//                                        type="text"
//                                        placeholder="Full Name"
//                                        className="w-full px-4 sm:px-5 py-3 sm:py-3.5 text-sm sm:text-base rounded-lg border border-gray-400 focus:border-[#520378] focus:ring-0 outline-none transition-all placeholder:text-gray-400 text-gray-900 font-geist"
//                                    />
//                                    <input
//                                        type="email"
//                                        placeholder="Email"
//                                        className="w-full px-4 sm:px-5 py-3 sm:py-3.5 text-sm sm:text-base rounded-lg border border-gray-400 focus:border-[#520378] focus:ring-0 outline-none transition-all placeholder:text-gray-400 text-gray-900 font-geist"
//                                    />
//                                </div>

//                                <div className="grid sm:grid-cols-2 gap-6">
//                                    <input
//                                        type="tel"
//                                        placeholder="Phone Number (10 digits)"
//                                        className="w-full px-4 sm:px-5 py-3 sm:py-3.5 text-sm sm:text-base rounded-lg border border-gray-400 focus:border-[#520378] focus:ring-0 outline-none transition-all placeholder:text-gray-400 text-gray-900 font-geist"
//                                    />
//                                    <input
//                                        type="text"
//                                        placeholder="Location"
//                                        className="w-full px-4 sm:px-5 py-3 sm:py-3.5 text-sm sm:text-base rounded-lg border border-gray-400 focus:border-[#520378] focus:ring-0 outline-none transition-all placeholder:text-gray-400 text-gray-900 font-geist"
//                                    />
//                                </div>

//                                <div className="relative" ref={sourceRef}>
//                                    <div
//                                        onClick={() => setSourceOpen(!sourceOpen)}
//                                        className="w-full px-4 sm:px-5 py-3 sm:py-3.5 text-sm sm:text-base rounded-lg border border-gray-400 cursor-pointer flex justify-between items-center bg-white hover:border-gray-500 transition-all text-gray-400 font-geist"
//                                    >
//                                        <span className={selectedSource ? "text-gray-900" : ""}>
//                                            {selectedSource || "How did you hear about us?"}
//                                        </span>
//                                        <svg className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${sourceOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//                                        </svg>
//                                    </div>

//                                    {sourceOpen && (
//                                        <div className="absolute top-[calc(100%+4px)] left-0 w-full bg-white border border-gray-200 rounded-lg shadow-xl z-50 overflow-hidden py-1">
//                                            <div className="max-h-[240px] overflow-y-auto custom-scrollbar">
//                                                {sources.map((source) => (
//                                                    <div
//                                                        key={source}
//                                                        onClick={() => {
//                                                            setSelectedSource(source);
//                                                            setSourceOpen(false);
//                                                        }}
//                                                        className="px-4 sm:px-5 py-2.5 sm:py-3 hover:bg-[#520378]/5 hover:text-[#520378] cursor-pointer transition-colors text-sm sm:text-[15px] font-medium text-gray-700 font-geist"
//                                                    >
//                                                        {source}
//                                                    </div>
//                                                ))}
//                                            </div>
//                                        </div>
//                                    )}
//                                </div>

//                                <textarea
//                                    placeholder="Your Message"
//                                    rows="5"
//                                    className="w-full px-4 sm:px-5 py-3 sm:py-3.5 text-sm sm:text-base rounded-lg border border-gray-400 focus:border-[#520378] focus:ring-0 outline-none transition-all placeholder:text-gray-400 text-gray-900 resize-none font-geist"
//                                ></textarea>

//                                <div className="flex items-start gap-3 py-2">
//                                    <div className="pt-1">
//                                        <input
//                                            type="checkbox"
//                                            id="authorize"
//                                            className="w-5 h-5 rounded border-gray-300 text-[#520378] focus:ring-0 cursor-pointer"
//                                        />
//                                    </div>
//                                    <label htmlFor="authorize" className="text-xs sm:text-[14px] text-gray-600 cursor-pointer leading-relaxed font-geist">
//                                        I authorize Vriksh Psychological Support Services to contact me with updates and notifications
//                                    </label>
//                                </div>

//                                <button
//                                    type="submit"
//                                    className="px-10 py-3 sm:px-14 sm:py-4 bg-[#520378] text-white rounded-full font-bold text-base sm:text-lg hover:bg-[#0f063d] transition-all shadow-md active:scale-95 font-geist"
//                                >
//                                    Submit
//                                </button>
//                            </form>
//                        </div>

//                    </div>
//                </div>
//            </section>
//        </div>
//    );
//};

//export default Contact;
import React, { useState, useRef, useEffect } from 'react';
import { FaWhatsapp, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
    const [sourceOpen, setSourceOpen] = useState(false);
    const [selectedSource, setSelectedSource] = useState('');
    const sourceRef = useRef(null);

    // ✅ NEW: form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        location: '',
        source: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);

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

    // ✅ NEW
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // ✅ NEW
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.phone) {
            alert("Please fill required fields");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("https://script.google.com/macros/s/AKfycbxD6_0H3uVy6xhF2wJwoO49T2laqlVoT4wcWNjVunGTJvsFhs7VeBIH6y8kae4ZKTbCQA/exec", {
                method: "POST",
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (result.status === "success") {
                alert("Form submitted successfully!");

                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    location: '',
                    source: '',
                    message: ''
                });

                setSelectedSource('');
            }
        } catch (error) {
            console.error(error);
            alert("Error submitting form");
        }

        setLoading(false);
    };

    const contactInfo = [
        {
            icon: <FaPhoneAlt size={18} />,
            title: "Give us a call",
            value: "+91 9880274824",
            link: "tel:+919880274824",
        },
        {
            icon: <FaEnvelope size={20} />,
            title: "Email",
            value: "vriksh.em@gmail.com",
            link: "mailto:vriksh.em@gmail.com",
        },
        {
            icon: <FaWhatsapp size={22} />,
            title: "WhatsApp",
            value: "+91 9880274824",
            link: "https://wa.me/919880274824",
        }
    ];

    return (
        <div className="min-h-screen bg-white pt-20 sm:pt-28 pb-10 sm:pb-20">
            <section className="pb-6 sm:pb-16 pt-0 sm:pt-0">
                <div className="max-w-[1240px] mx-auto px-6 lg:px-16">
                    <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20">

                        {/* Left Side */}
                        <div className="lg:col-span-5 space-y-8 sm:space-y-12">
                            <h2 className="text-2xl sm:text-[32px] font-bold text-gray-950 font-inter-tight tracking-wide">
                                Get in Touch with <span className="text-[#520378]">Vriksh</span>
                            </h2>

                            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                                {contactInfo.map((info, idx) => (
                                    <div
                                        key={idx}
                                        className="p-5 sm:p-8 flex items-start gap-4 sm:gap-6 border-b border-gray-50 last:border-b-0 hover:bg-gray-50/50 transition-colors"
                                    >
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#520378] text-white rounded-full flex items-center justify-center shrink-0 shadow-md">
                                            {info.icon}
                                        </div>
                                        <div className="space-y-1 pt-1 sm:pt-0">
                                            <p className="text-base sm:text-[17px] font-bold text-gray-950 font-inter-tight">
                                                {info.title}
                                            </p>
                                            <a
                                                href={info.link}
                                                className="text-sm sm:text-[15px] font-medium text-gray-700 hover:text-[#520378] transition-colors block font-geist"
                                            >
                                                {info.value}
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className="lg:col-span-7">
                            <h3 className="text-2xl sm:text-[32px] font-bold text-gray-950 mb-6 sm:mb-10 font-inter-tight">
                                Let’s Connect
                            </h3>

                            {/* ✅ ONLY CHANGE: onSubmit added */}
                            <form className="space-y-6" onSubmit={handleSubmit}>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Full Name"
                                        className="w-full px-4 sm:px-5 py-3 sm:py-3.5 text-sm sm:text-base rounded-lg border border-gray-400 focus:border-[#520378] focus:ring-0 outline-none transition-all placeholder:text-gray-400 text-gray-900 font-geist"
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email"
                                        className="w-full px-4 sm:px-5 py-3 sm:py-3.5 text-sm sm:text-base rounded-lg border border-gray-400 focus:border-[#520378] focus:ring-0 outline-none transition-all placeholder:text-gray-400 text-gray-900 font-geist"
                                    />
                                </div>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Phone Number (10 digits)"
                                        className="w-full px-4 sm:px-5 py-3 sm:py-3.5 text-sm sm:text-base rounded-lg border border-gray-400 focus:border-[#520378] focus:ring-0 outline-none transition-all placeholder:text-gray-400 text-gray-900 font-geist"
                                    />
                                    <input
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        placeholder="Location"
                                        className="w-full px-4 sm:px-5 py-3 sm:py-3.5 text-sm sm:text-base rounded-lg border border-gray-400 focus:border-[#520378] focus:ring-0 outline-none transition-all placeholder:text-gray-400 text-gray-900 font-geist"
                                    />
                                </div>

                                {/* DROPDOWN */}
                                <div className="relative" ref={sourceRef}>
                                    <div
                                        onClick={() => setSourceOpen(!sourceOpen)}
                                        className="w-full px-4 sm:px-5 py-3 sm:py-3.5 text-sm sm:text-base rounded-lg border border-gray-400 cursor-pointer flex justify-between items-center bg-white hover:border-gray-500 transition-all text-gray-400 font-geist"
                                    >
                                        <span className={selectedSource ? "text-gray-900" : ""}>
                                            {selectedSource || "How did you hear about us?"}
                                        </span>
                                        <svg className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${sourceOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>

                                    {sourceOpen && (
                                        <div className="absolute top-[calc(100%+4px)] left-0 w-full bg-white border border-gray-200 rounded-lg shadow-xl z-50 overflow-hidden py-1">
                                            <div className="max-h-[240px] overflow-y-auto custom-scrollbar">
                                                {sources.map((source) => (
                                                    <div
                                                        key={source}
                                                        onClick={() => {
                                                            setSelectedSource(source);
                                                            setFormData({ ...formData, source }); // ✅ added only this
                                                            setSourceOpen(false);
                                                        }}
                                                        className="px-4 sm:px-5 py-2.5 sm:py-3 hover:bg-[#520378]/5 hover:text-[#520378] cursor-pointer transition-colors text-sm sm:text-[15px] font-medium text-gray-700 font-geist"
                                                    >
                                                        {source}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    rows="5"
                                    className="w-full px-4 sm:px-5 py-3 sm:py-3.5 text-sm sm:text-base rounded-lg border border-gray-400 focus:border-[#520378] focus:ring-0 outline-none transition-all placeholder:text-gray-400 text-gray-900 resize-none font-geist"
                                ></textarea>

                                <div className="flex items-start gap-3 py-2">
                                    <div className="pt-1">
                                        <input
                                            type="checkbox"
                                            id="authorize"
                                            className="w-5 h-5 rounded border-gray-300 text-[#520378] focus:ring-0 cursor-pointer"
                                        />
                                    </div>
                                    <label htmlFor="authorize" className="text-xs sm:text-[14px] text-gray-600 cursor-pointer leading-relaxed font-geist">
                                        I authorize Vriksh Psychological Support Services to contact me with updates and notifications
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    className="px-10 py-3 sm:px-14 sm:py-4 bg-[#520378] text-white rounded-full font-bold text-base sm:text-lg hover:bg-[#0f063d] transition-all shadow-md active:scale-95 font-geist"
                                >
                                    {loading ? "Submitting..." : "Submit"}
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