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
                <div className="md:hidden flex flex-col items-center text-center space-y-8 mb-8">
                    {/* Logo & Socials Section */}
                    <div className="bg-[#EEEAF4] w-[240px] h-[240px] rounded-full flex flex-col items-center justify-center p-6 shadow-lg border-2 border-white/5 aspect-square">
                        <div className="mb-4 flex flex-col items-center">
                            <Link to="/">
                                <img
                                    src="/logo.png"
                                    alt="VRIKSH Logo"
                                    className="h-10 w-auto object-contain mb-2 mr-5 lg:mr-8 lg:translate-x-4"
                                />
                            </Link>
                            <div className="w-20 h-[1px] bg-black/20 my-3"></div>
                        </div>
                        <div className="flex gap-3">
                            <a href="https://www.facebook.com/vriksh.em?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-[#520378] text-white rounded-full flex items-center justify-center shadow-md">
                                <FaFacebookF size={12} />
                            </a>
                            <a href="https://instagram.com/vriksh.enrichingminds?igshid=o5ntlej5pwea" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-[#520378] text-white rounded-full flex items-center justify-center shadow-md">
                                <FaInstagram size={12} />
                            </a>
                            <a href="https://www.linkedin.com/company/vriksh-psychological-support-services/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-[#520378] text-white rounded-full flex items-center justify-center shadow-md">
                                <FaLinkedinIn size={12} />
                            </a>
                        </div>
                    </div>

                    {/* Links Grid for Mobile */}
                    <div className="grid grid-cols-2 gap-x-4 gap-y-8 w-full px-4 text-left">
                        <div className="space-y-3">
                            <h3 className="text-base font-bold">Counselling</h3>
                            <ul className="space-y-2 opacity-90 text-[13px] font-light">
                                <li><Link to="/counselling#services">Individual Counselling</Link></li>
                                <li><Link to="/counselling#services">Children and Adolescent</Link></li>
                                <li><Link to="/counselling#services">Academic and Career Counselling</Link></li>
                                <li><Link to="/counselling#services">others</Link></li>
                            </ul>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-base font-bold">Vriksh E-Academy</h3>
                            <ul className="space-y-2 opacity-90 text-[13px] font-light">
                                <li><Link to="/upcoming-events">Upcoming Events</Link></li>
                                <li><Link to="/workshop">Workshop</Link></li>
                                <li><Link to="/training">Training Programs</Link></li>
                                <li><Link to="/certificate">Certificate Courses</Link></li>
                            </ul>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-base font-bold">Corporate</h3>
                            <ul className="space-y-2 opacity-90 text-[13px] font-light">
                                <li><Link to="/corporate-eap">EAP Program</Link></li>
                                <li><Link to="/workshop">Workshops</Link></li>
                                <li><Link to="/training">Training Programs</Link></li>
                            </ul>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-base font-bold">Institutional Wellness Program</h3>
                            <ul className="space-y-2 opacity-90 text-[13px] font-light">
                                <li><Link to="/school">For Schools</Link></li>
                                <li><Link to="/college">For College</Link></li>
                            </ul>
                        </div>

                        <div className="space-y-3 col-span-2 text-center pt-2">
                            <h3 className="text-base font-bold">Useful Links</h3>
                            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 opacity-90 text-[13px] font-light">
                                <li><Link to="/blogs">Blog</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
                                <li><Link to="#">Ethics</Link></li>
                                <li><Link to="#">Refund Policy</Link></li>
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
