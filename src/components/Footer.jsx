import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#520378] text-white pt-12 pb-8 px-6 lg:px-12">
            <div className="max-w-[1240px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 items-start mb-12">

                    {/* Column 1: Counselling & Academy */}
                    <div className="space-y-10 lg:pl-12 md:pl-8">
                        <div className="space-y-4">
                            <h3 className="text-base font-semibold">Counselling</h3>
                            <ul className="space-y-2 opacity-90 text-[14px] font-light">
                                <li><Link to="/counselling" className="hover:opacity-100 transition-opacity">For Depression</Link></li>
                                <li><Link to="/counselling" className="hover:opacity-100 transition-opacity">Stress & Anxiety</Link></li>
                                <li><Link to="/counselling" className="hover:opacity-100 transition-opacity">Marriage / Relationship</Link></li>
                                <li><Link to="/counselling" className="hover:opacity-100 transition-opacity">Child / Adolescent</Link></li>
                                <li><Link to="/counselling" className="hover:opacity-100 transition-opacity">Grief / Loss of loved ones</Link></li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-base font-semibold">Vriksh E-Academy</h3>
                            <ul className="space-y-2 opacity-90 text-[14px] font-light">
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
                    <div className="flex justify-center lg:justify-end lg:pl-8">
                        <div className="bg-[#EEEAF4] w-[300px] h-[300px] sm:w-[320px] sm:h-[320px] flex-shrink-0 rounded-full flex flex-col items-center justify-center p-8 shadow-lg border-2 border-white/5 relative lg:-left-8 lg:top-12 aspect-square">
                            <div className="mb-6 flex flex-col items-center">
                                <Link to="/">
                                    <img
                                        src="/logo.png"
                                        alt="VRIKSH Logo"
                                        className="h-14 w-auto object-contain mb-2 mr-5 lg:mr-8 lg:translate-x-2"
                                    />
                                </Link>
                                <div className="w-full h-[2px] bg-black/20 my-4 max-w-[160px]"></div>
                            </div>

                            <div className="flex gap-4">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#520378] text-white rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-md">
                                    <FaFacebookF size={16} className="stroke-[1]" />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#520378] text-white rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-md">
                                    <FaInstagram size={16} className="stroke-[1]" />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#520378] text-white rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-md">
                                    <FaLinkedinIn size={16} className="stroke-[1]" />
                                </a>
                            </div>
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
