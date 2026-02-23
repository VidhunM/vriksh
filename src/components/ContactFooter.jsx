import React from 'react';

const ContactFooter = () => {
    return (
        <footer className="footer-area">
            <section id="contact" className="py-24 bg-white overflow-hidden">
                <div className="max-w-[1340px] mx-auto px-6 sm:px-12">
                    <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 justify-between items-start">
                        {/* Left Side: Content */}
                        <div className="w-full lg:w-[45%] space-y-12">
                            <h2 className="text-[52px] md:text-[64px] font-extrabold text-gray-900 leading-[1.05] tracking-tight">
                                Get in Touch with <br /> Vriksh
                            </h2>
                            <div className="space-y-10">
                                <p className="text-[#64748b] text-[18px] md:text-[20px] leading-relaxed max-w-[540px]">
                                    Looking for trusted counselling, impactful wellbeing programs, or practical mental health learning? Vriksh partners with individuals, institutions, and organisations to create real emotional growth and lasting change.
                                </p>
                                <p className="text-[#64748b] text-[18px] md:text-[20px] leading-relaxed max-w-[540px]">
                                    From professional counselling and Vriksh E-Academy online courses to institutional wellness programs and corporate EAP solutions, we provide practical, evidence-based support that truly makes a difference.
                                </p>
                            </div>
                        </div>

                        {/* Right Side: Form */}
                        <div className="w-full lg:w-[50%]">
                            <h3 className="text-[24px] font-bold text-gray-900 mb-10 leading-snug">
                                Start your journey with us Enriching Minds.
                            </h3>
                            <form className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full px-4 py-3.5 rounded-[6px] border border-[#94a3b8] focus:border-brand-purple focus:ring-0 focus:outline-none transition-all placeholder:text-[#94a3b8] text-gray-800"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full px-4 py-3.5 rounded-[6px] border border-[#94a3b8] focus:border-brand-purple focus:ring-0 focus:outline-none transition-all placeholder:text-[#94a3b8] text-gray-800"
                                    />
                                </div>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <input
                                        type="text"
                                        placeholder="Phone Number"
                                        className="w-full px-4 py-3.5 rounded-[6px] border border-[#94a3b8] focus:border-brand-purple focus:ring-0 focus:outline-none transition-all placeholder:text-[#94a3b8] text-gray-800"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Location"
                                        className="w-full px-4 py-3.5 rounded-[6px] border border-[#94a3b8] focus:border-brand-purple focus:ring-0 focus:outline-none transition-all placeholder:text-[#94a3b8] text-gray-800"
                                    />
                                </div>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="relative">
                                        <select className="w-full px-4 py-3.5 rounded-[6px] border border-[#94a3b8] focus:border-brand-purple focus:ring-0 focus:outline-none transition-all bg-white appearance-none text-[#94a3b8]">
                                            <option value="">Services interested in</option>
                                            <option value="counselling">Counselling</option>
                                            <option value="wellness">Wellness Programs</option>
                                            <option value="academy">E-Academy</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                            <svg className="w-4 h-4 text-[#94a3b8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <select className="w-full px-4 py-3.5 rounded-[6px] border border-[#94a3b8] focus:border-brand-purple focus:ring-0 focus:outline-none transition-all bg-white appearance-none text-[#94a3b8]">
                                            <option value="">How did you hear about us?</option>
                                            <option value="social">Social Media</option>
                                            <option value="referral">Referral</option>
                                            <option value="search">Search Engine</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                            <svg className="w-4 h-4 text-[#94a3b8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </div>
                                    </div>
                                </div>
                                <textarea
                                    placeholder="Your message"
                                    rows="5"
                                    className="w-full px-4 py-3.5 rounded-[6px] border border-[#94a3b8] focus:border-brand-purple focus:ring-0 focus:outline-none transition-all placeholder:text-[#94a3b8] text-gray-800 resize-none font-sans"
                                ></textarea>

                                <div className="flex items-start gap-4 py-2">
                                    <div className="pt-0.5">
                                        <input
                                            type="checkbox"
                                            id="authorize"
                                            className="w-6 h-6 rounded border-[#94a3b8] text-brand-purple focus:ring-0 cursor-pointer"
                                        />
                                    </div>
                                    <label htmlFor="authorize" className="text-[15px] text-[#64748b] cursor-pointer leading-snug font-medium">
                                        I authorize Vriksh Psychological Support Services to contact me with <br className="hidden sm:block" /> updates and notifications
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    className="bg-brand-purple text-white px-16 py-4 rounded-full font-bold text-[18px] hover:bg-brand-purple-dark transition-all shadow-md mt-4"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <div className="py-20 bg-gray-50 border-t border-gray-100">
                <div className="max-w-[1200px] mx-auto px-5">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
                        <div className="space-y-5">
                            <h3 className="text-lg font-bold text-brand-purple uppercase tracking-widest text-xs">Counselling</h3>
                            <ul className="space-y-3">
                                {['Personal Therapy', 'Group therapy', 'Workshops'].map((item) => (
                                    <li key={item}><a href="#" className="text-gray-500 hover:text-brand-purple transition-colors">{item}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-5">
                            <h3 className="text-lg font-bold text-brand-purple uppercase tracking-widest text-xs">Programs</h3>
                            <ul className="space-y-3">
                                {['E-Academy', 'Skill Dev', 'Events'].map((item) => (
                                    <li key={item}><a href="#" className="text-gray-500 hover:text-brand-purple transition-colors">{item}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-5">
                            <h3 className="text-lg font-bold text-brand-purple uppercase tracking-widest text-xs">Quick Links</h3>
                            <ul className="space-y-3">
                                {['About Us', 'Careers', 'Contact'].map((item) => (
                                    <li key={item}><a href="#" className="text-gray-500 hover:text-brand-purple transition-colors">{item}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div className="lg:text-right space-y-5">
                            <div className="inline-flex items-center gap-2.5 font-extrabold text-2xl text-brand-purple tracking-wider">
                                <span>🌿</span>
                                <span>VRIKSH</span>
                            </div>
                            <p className="text-sm text-gray-400">© 2026 Vriksh. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default ContactFooter;
