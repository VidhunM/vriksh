import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#520378] text-white pt-12 pb-8 px-6 lg:px-12">
            <div className="max-w-[1240px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 items-start mb-12">

                    {/* Column 1: Counselling & Academy */}
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <h3 className="text-base font-semibold">Counselling</h3>
                            <ul className="space-y-2 opacity-90 text-[14px] font-light">
                                <li><a href="#" className="hover:opacity-100 transition-opacity">For Depression</a></li>
                                <li><a href="#" className="hover:opacity-100 transition-opacity">Stress & Anxiety</a></li>
                                <li><a href="#" className="hover:opacity-100 transition-opacity">Marriage / Relationship</a></li>
                                <li><a href="#" className="hover:opacity-100 transition-opacity">Child / Adolescent</a></li>
                                <li><a href="#" className="hover:opacity-100 transition-opacity">Grief / Loss of loved ones</a></li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-base font-semibold">Vriksh E-Academy</h3>
                            <ul className="space-y-2 opacity-90 text-[14px] font-light">
                                <li><a href="#" className="hover:opacity-100 transition-opacity">Workshop</a></li>
                                <li><a href="#" className="hover:opacity-100 transition-opacity">Training Programs</a></li>
                                <li><a href="#" className="hover:opacity-100 transition-opacity">Certificate Courses</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Column 2: Corporate & Useful Links */}
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <h3 className="text-base font-semibold">Corporate</h3>
                            <ul className="space-y-2 opacity-90 text-[14px] font-light">
                                <li><a href="#" className="hover:opacity-100 transition-opacity">EAP Program</a></li>
                                <li><a href="#" className="hover:opacity-100 transition-opacity">Webinars / Workshops</a></li>
                                <li><a href="#" className="hover:opacity-100 transition-opacity">Training Programs</a></li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-base font-semibold">Useful Links</h3>
                            <div className="grid grid-cols-2 gap-x-4 opacity-90 text-[14px] font-light">
                                <ul className="space-y-2">
                                    <li><a href="#" className="hover:opacity-100 transition-opacity">Blog</a></li>
                                    <li><a href="#" className="hover:opacity-100 transition-opacity">Contact Us</a></li>
                                </ul>
                                <ul className="space-y-2">
                                    <li><a href="#" className="hover:opacity-100 transition-opacity">Ethics</a></li>
                                    <li><a href="#" className="hover:opacity-100 transition-opacity">Refund Policy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Column 3: Institution Wellness Program */}
                    <div className="space-y-4">
                        <h3 className="text-base font-semibold">Institution Wellness Program</h3>
                        <ul className="space-y-2 opacity-90 text-[14px] font-light">
                            <li><a href="#" className="hover:opacity-100 transition-opacity">For Schools</a></li>
                            <li><a href="#" className="hover:opacity-100 transition-opacity">For College</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Logo Section */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="bg-[#EEEAF4] w-[320px] h-[320px] aspect-square flex-shrink-0 rounded-full flex flex-col items-center justify-center p-8 shadow-lg border-2 border-white/5 relative -left-8 top-12">
                            <div className="mb-6 flex flex-col items-center">
                                <img
                                    src="/logo.png"
                                    alt="VRIKSH Logo"
                                    className="h-18 w-auto object-contain mb-2 -translate-x-3"
                                />
                                <div className="w-full h-[2px] bg-black/20 my-4 max-w-[200px]"></div>
                            </div>

                            <div className="flex gap-1.5">
                                <a href="#" className="w-10 h-10 bg-[#520378] text-white rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-md">
                                    <FaFacebookF size={22} className="stroke-[1]" />
                                </a>
                                <a href="#" className="w-10 h-10 bg-[#520378] text-white rounded-lg flex items-center justify-center hover:scale-110 transition-all shadow-md">
                                    <FaInstagram size={24} className="stroke-[1]" />
                                </a>
                                <a href="#" className="w-10 h-10 bg-[#520378] text-white rounded-lg flex items-center justify-center hover:scale-110 transition-all shadow-md">
                                    <FaLinkedinIn size={24} className="stroke-[1]" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border border-white/30 rounded-[25px] px-8 py-4 flex flex-col md:flex-row justify-between items-center text-[12px] font-light opacity-90">
                    <div className="flex gap-10 mb-4 md:mb-0">
                        <a href="#" className="hover:opacity-100 transition-opacity">Terms & Conditions</a>
                        <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
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
