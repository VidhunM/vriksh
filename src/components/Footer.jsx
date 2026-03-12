import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#520378] text-white pt-12 pb-8 px-6 lg:px-12">
            <div className="max-w-[1240px] mx-auto">
                {/* Desktop View (md and above) */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 items-start mb-12">
                    {/* Column 1: Counselling & Academy */}
                    <div className="space-y-10 lg:pl-12 md:pl-8">
                        <div className="space-y-4">
                            <h3 className="text-base font-semibold">Counselling</h3>
                            <ul className="space-y-2 opacity-90 text-[14px] font-light">
                                <li><Link to="/counselling#services" className="hover:opacity-100 transition-opacity">Individual Counselling</Link></li>
                                <li><Link to="/counselling#services" className="hover:opacity-100 transition-opacity">Children and Adolescent</Link></li>
                                <li><Link to="/counselling#services" className="hover:opacity-100 transition-opacity">Counselling</Link></li>
                                <li><Link to="/counselling#services" className="hover:opacity-100 transition-opacity">Academic and Career Counselling</Link></li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-base font-semibold">Vriksh E-Academy</h3>
                            <ul className="space-y-2 opacity-90 text-[14px] font-light">
                                <li><Link to="/upcoming-events" className="hover:opacity-100 transition-opacity">Upcoming Events</Link></li>
                                <li><Link to="/workshop" className="hover:opacity-100 transition-opacity">Workshop</Link></li>
                                <li><Link to="/training" className="hover:opacity-100 transition-opacity">Training Programs</Link></li>
                                <li><Link to="/certificate" className="hover:opacity-100 transition-opacity">Certificate Courses</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Column 2: Corporate & Useful Links */}
                    <div className="space-y-10 lg:pl-8 md:pl-4">
                        <div className="space-y-4">
                            <h3 className="text-base font-semibold">Corporate</h3>
                            <ul className="space-y-2 opacity-90 text-[14px] font-light">
                                <li><Link to="/corporate-eap" className="hover:opacity-100 transition-opacity">EAP Program</Link></li>
                                <li><Link to="/workshop" className="hover:opacity-100 transition-opacity">Webinars / Workshops</Link></li>
                                <li><Link to="/training" className="hover:opacity-100 transition-opacity">Training Programs</Link></li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-base font-semibold">Useful Links</h3>
                            <div className="grid grid-cols-2 gap-x-4 opacity-90 text-[14px] font-light">
                                <ul className="space-y-2">
                                    <li><Link to="/blogs" className="hover:opacity-100 transition-opacity">Blog</Link></li>
                                    <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contact Us</Link></li>
                                </ul>
                                <ul className="space-y-2">
                                    <li><Link to="#" className="hover:opacity-100 transition-opacity">Ethics</Link></li>
                                    <li><Link to="#" className="hover:opacity-100 transition-opacity">Refund Policy</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Column 3: Institution Wellness Program */}
                    <div className="space-y-4 lg:pl-4">
                        <h3 className="text-base font-semibold">Institution Wellness Program</h3>
                        <ul className="space-y-2 opacity-90 text-[14px] font-light">
                            <li><Link to="/school" className="hover:opacity-100 transition-opacity">For Schools</Link></li>
                            <li><Link to="/college" className="hover:opacity-100 transition-opacity">For College</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Logo Section */}
                    <div className="flex justify-end lg:pl-8">
                        <div className="bg-[#EEEAF4] w-[320px] h-[320px] flex-shrink-0 rounded-full flex flex-col items-center justify-center p-8 shadow-lg border-2 border-white/5 relative lg:-left-8 lg:top-12 aspect-square">
                            <div className="mb-6 flex flex-col items-center">
                                <Link to="/">
                                    <img
                                        src="/logo.png"
                                        alt="VRIKSH Logo"
                                        className="h-14 w-auto object-contain mb-2 mr-5 lg:mr-8 lg:translate-x-[-4px]"
                                    />
                                </Link>
                                <div className="w-full h-[2px] bg-black/20 my-4 max-w-[160px]"></div>
                            </div>

                            <div className="flex gap-4">
                                <a href="https://www.facebook.com/vriksh.em?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#520378] text-white rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-md">
                                    <FaFacebookF size={16} className="stroke-[1]" />
                                </a>
                                <a href="https://instagram.com/vriksh.enrichingminds?igshid=o5ntlej5pwea" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#520378] text-white rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-md">
                                    <FaInstagram size={16} className="stroke-[1]" />
                                </a>
                                <a href="https://www.linkedin.com/company/vriksh-psychological-support-services/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#520378] text-white rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-md">
                                    <FaLinkedinIn size={16} className="stroke-[1]" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile View (below md) */}
                <div className="md:hidden flex flex-col items-center space-y-12 mb-12">
                    {/* Logo & Socials Section */}
                    <div className="bg-[#EEEAF4] w-[220px] h-[220px] rounded-full flex flex-col items-center justify-center p-6 shadow-xl border-4 border-white/10 aspect-square relative overflow-hidden">
                        <div className="mb-4 flex flex-col items-center relative z-10">
                            <Link to="/">
                                <img
                                    src="/logo.png"
                                    alt="VRIKSH Logo"
                                    className="h-10 w-auto object-contain mb-1"
                                />
                            </Link>
                            <div className="w-16 h-[1px] bg-[#520378]/20 my-3"></div>
                        </div>
                        <div className="flex gap-4 relative z-10">
                            <a href="https://www.facebook.com/vriksh.em?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-[#520378] text-white rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-all">
                                <FaFacebookF size={14} />
                            </a>
                            <a href="https://instagram.com/vriksh.enrichingminds?igshid=o5ntlej5pwea" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-[#520378] text-white rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-all">
                                <FaInstagram size={14} />
                            </a>
                            <a href="https://www.linkedin.com/company/vriksh-psychological-support-services/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-[#520378] text-white rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-all">
                                <FaLinkedinIn size={14} />
                            </a>
                        </div>
                    </div>

                    {/* Links Grid for Mobile */}
                    <div className="grid grid-cols-2 gap-x-6 gap-y-10 w-full px-2">
                        <div className="space-y-4">
                            <h3 className="text-[15px] font-bold tracking-wide uppercase text-white/90 border-b border-white/10 pb-2">Counselling</h3>
                            <ul className="space-y-2.5 text-white/70 text-[13px] font-light">
                                <li><Link to="/counselling#services" className="active:text-white transition-colors">Individual Counselling</Link></li>
                                <li><Link to="/counselling#services" className="active:text-white transition-colors">Children and Adolescent</Link></li>
                                <li><Link to="/counselling#services" className="active:text-white transition-colors">Academic and Career Counselling</Link></li>
                                <li><Link to="/counselling#services" className="active:text-white transition-colors">Others</Link></li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-[15px] font-bold tracking-wide uppercase text-white/90 border-b border-white/10 pb-2">Vriksh E-Academy</h3>
                            <ul className="space-y-2.5 text-white/70 text-[13px] font-light">
                                <li><Link to="/upcoming-events" className="active:text-white transition-colors">Upcoming Events</Link></li>
                                <li><Link to="/workshop" className="active:text-white transition-colors">Workshop</Link></li>
                                <li><Link to="/training" className="active:text-white transition-colors">Training Programs</Link></li>
                                <li><Link to="/certificate" className="active:text-white transition-colors">Certificate Courses</Link></li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-[15px] font-bold tracking-wide uppercase text-white/90 border-b border-white/10 pb-2">Corporate</h3>
                            <ul className="space-y-2.5 text-white/70 text-[13px] font-light">
                                <li><Link to="/corporate-eap" className="active:text-white transition-colors">EAP Program</Link></li>
                                <li><Link to="/workshop" className="active:text-white transition-colors">Workshops</Link></li>
                                <li><Link to="/training" className="active:text-white transition-colors">Training Programs</Link></li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-[15px] font-bold tracking-wide uppercase text-white/90 border-b border-white/10 pb-2">Institutional Wellness Program</h3>
                            <ul className="space-y-2.5 text-white/70 text-[13px] font-light">
                                <li><Link to="/school" className="active:text-white transition-colors">For Schools</Link></li>
                                <li><Link to="/college" className="active:text-white transition-colors">For College</Link></li>
                            </ul>
                        </div>

                        <div className="space-y-4 col-span-2 text-center pt-4">
                            <h3 className="text-[15px] font-bold tracking-wide uppercase text-white/90">Useful Links</h3>
                            <div className="w-12 h-[2px] bg-white/20 mx-auto mb-4"></div>
                            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-white/70 text-[13px] font-light">
                                <li><Link to="/blogs" className="active:text-white transition-colors">Blog</Link></li>
                                <li><Link to="/contact" className="active:text-white transition-colors">Contact Us</Link></li>
                                <li><Link to="#" className="active:text-white transition-colors">Ethics</Link></li>
                                <li><Link to="#" className="active:text-white transition-colors">Refund Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border border-white/30 rounded-[25px] px-8 py-4 flex flex-col md:flex-row justify-between items-center text-[12px] font-light opacity-90">
                    <div className="flex gap-10 mb-4 md:mb-0">
                        <Link to="#" className="hover:opacity-100 transition-opacity">Terms & Conditions</Link>
                        <Link to="#" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
                    </div>
                    <div className="text-center md:text-right">
                        Copyright © 2026 vriksh. All rights reserved
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
