import React from 'react';

const ContactFooter = () => {
    return (
        <footer className="footer-area">
            <section id="contact" className="py-16 bg-white overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-6 sm:px-12">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 justify-between items-start">
                        {/* Left Side: Content */}
                        <div className="w-full lg:w-[45%] space-y-8">
                            <h2 className="text-[40px] md:text-[48px] font-extrabold text-gray-900 leading-[1.1] tracking-tight">
                                Get in Touch with <br /> Vriksh
                            </h2>
                            <div className="space-y-6">
                                <p className="text-gray-950 text-base md:text-[18px] leading-relaxed max-w-[500px]">
                                    Looking for trusted counselling, impactful wellbeing programs, or practical mental health learning? Vriksh partners with individuals, institutions, and organisations to create real emotional growth and lasting change.
                                </p>
                                <p className="text-gray-950 text-base md:text-[18px] leading-relaxed max-w-[500px]">
                                    From professional counselling and Vriksh E-Academy online courses to institutional wellness programs and corporate EAP solutions, we provide practical, evidence-based support that truly makes a difference.
                                </p>
                            </div>
                        </div>

                        {/* Right Side: Form */}
                        <div className="w-full lg:w-[50%]">
                            <h3 className="text-[20px] font-bold text-gray-900 mb-8 leading-snug">
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
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div className="relative">
                                        <select className="w-full px-4 py-2.5 rounded-[6px] border border-[#94a3b8] focus:border-brand-purple focus:ring-0 focus:outline-none transition-all bg-white appearance-none text-gray-950">
                                            <option value="">Services interested in</option>
                                            <option value="counselling">Counselling</option>
                                            <option value="online-workshop">Online Workshop</option>
                                            <option value="online-training">Online Training Programs</option>
                                            <option value="online-certificate">Online Certificate Courses</option>
                                            <option value="career-guidance">Career Guidance</option>
                                            <option value="corporate">Corporate Programs</option>
                                            <option value="institution-school">Institution Wellness Program - School</option>
                                            <option value="institution-college">Institution Wellness Program - College</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                            <svg className="w-4 h-4 text-[#94a3b8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <select className="w-full px-4 py-2.5 rounded-[6px] border border-[#94a3b8] focus:border-brand-purple focus:ring-0 focus:outline-none transition-all bg-white appearance-none text-gray-950">
                                            <option value="">How did you hear about us?</option>
                                            <option value="google">Google Search</option>
                                            <option value="instagram">Instagram</option>
                                            <option value="facebook">Facebook</option>
                                            <option value="linkedin">LinkedIn</option>
                                            <option value="referral">Friend/Referral</option>
                                            <option value="advertisement">Advertisement</option>
                                            <option value="website">Website</option>
                                            <option value="email">Email</option>
                                            <option value="newsletter">Newsletter</option>
                                            <option value="other">Other</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                            <svg className="w-4 h-4 text-[#94a3b8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </div>
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
