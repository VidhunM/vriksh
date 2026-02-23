import React from 'react';

const ContactFooter = () => {
    return (
        <footer className="footer-area">
            <section id="contact" className="py-24 bg-white">
                <div className="max-w-[1200px] mx-auto px-5">
                    <div className="grid lg:grid-cols-[1fr,1.5fr] gap-20">
                        <div className="contact-info">
                            <h2 className="text-3xl md:text-3xl font-bold mb-5">Get in Touch with Vriksh</h2>
                            <p className="text-gray-600 mb-8 max-w-sm">We are here to help you. Reach out to us for any queries or to schedule a consultation.</p>
                            <div className="flex gap-4">
                                {['FB', 'TW', 'IG', 'LI'].map((social) => (
                                    <a key={social} href="#" className="w-10 h-10 rounded-full bg-brand-purple text-white flex items-center justify-center font-bold text-xs hover:scale-110 transition-transform">
                                        {social}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-50">
                            <form className="space-y-5">
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <input type="text" placeholder="First Name" className="w-full px-5 py-4 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-brand-purple focus:ring-1 focus:ring-brand-purple outline-none transition-all" />
                                    <input type="email" placeholder="Email" className="w-full px-5 py-4 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-brand-purple focus:ring-1 focus:ring-brand-purple outline-none transition-all" />
                                </div>
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <input type="text" placeholder="Phone Number" className="w-full px-5 py-4 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-brand-purple focus:ring-1 focus:ring-brand-purple outline-none transition-all" />
                                    <input type="text" placeholder="Subject" className="w-full px-5 py-4 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-brand-purple focus:ring-1 focus:ring-brand-purple outline-none transition-all" />
                                </div>
                                <textarea placeholder="Your Message" rows="5" className="w-full px-5 py-4 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-brand-purple focus:ring-1 focus:ring-brand-purple outline-none transition-all"></textarea>

                                <div className="flex items-center gap-3 text-sm text-gray-500">
                                    <input type="checkbox" id="terms" className="w-4 h-4 rounded text-brand-purple focus:ring-brand-purple" />
                                    <label htmlFor="terms">I agree to the terms and conditions</label>
                                </div>

                                <button type="submit" className="w-full bg-brand-purple text-white py-4 rounded-full font-bold shadow-lg hover:bg-brand-purple-light hover:-translate-y-1 transition-all">
                                    Send Message
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
