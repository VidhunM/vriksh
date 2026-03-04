import React, { useState } from 'react';

const InstitutionalContact = ({ programType }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        workEmail: '',
        phoneNumber: '',
        institutionName: '',
        designation: '',
        board: '',
        location: '',
        interestedIn: '',
        message: '',
        authorized: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    return (
        <section className="w-full py-16 sm:py-24" style={{ background: 'linear-gradient(180deg, #FFFAE4 0%, #FFFFFF 100%)' }}>
            <div className="max-w-[1240px] mx-auto px-6 sm:px-12">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 justify-between items-start">

                    {/* Left Side: Content */}
                    <div className="w-full lg:w-[45%] space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start pt-4">
                        <h2 className="text-[32px] sm:text-[42px] font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-4">
                            Get in Touch with <br /> Vriksh
                        </h2>
                        <div className="space-y-6">
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-[550px]">
                                Looking for trusted counselling, impactful wellbeing programs, or practical mental health learning? Vriksh partners with individuals, institutions, and organisations to create real emotional growth and lasting change.
                            </p>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-[550px]">
                                From professional counselling and Vriksh E-Academy online courses to institutional wellness programs and corporate EAP solutions, we provide practical, evidence-based support that truly makes a difference.
                            </p>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="w-full lg:w-[50%] flex flex-col pt-2">
                        <h3 className="text-[20px] sm:text-[24px] font-bold text-[#520378] mb-8 leading-snug">
                            Partner With Us: {programType} Mental Health Program
                        </h3>

                        <form className="space-y-5 w-full">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Full Name"
                                    className="w-full px-4 py-3 rounded-[8px] border border-gray-300 focus:border-[#520378] focus:ring-1 focus:ring-[#520378] transition-all outline-none text-[15px]"
                                />
                                <input
                                    type="email"
                                    name="workEmail"
                                    placeholder="Work Email"
                                    className="w-full px-4 py-3 rounded-[8px] border border-gray-300 focus:border-[#520378] focus:ring-1 focus:ring-[#520378] transition-all outline-none text-[15px]"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="phoneNumber"
                                    placeholder="Phone Number"
                                    className="w-full px-4 py-3 rounded-[8px] border border-gray-300 focus:border-[#520378] focus:ring-1 focus:ring-[#520378] transition-all outline-none text-[15px]"
                                />
                                <input
                                    type="text"
                                    name="institutionName"
                                    placeholder="Institution Name"
                                    className="w-full px-4 py-3 rounded-[8px] border border-gray-300 focus:border-[#520378] focus:ring-1 focus:ring-[#520378] transition-all outline-none text-[15px]"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <select name="designation" className="w-full px-4 py-3 rounded-[8px] border border-gray-300 focus:border-[#520378] focus:ring-1 focus:ring-[#520378] transition-all outline-none text-[15px] bg-white text-gray-500">
                                    <option value="">Designation</option>
                                    <option value="principal">Principal</option>
                                    <option value="director">Director</option>
                                    <option value="dean">Dean</option>
                                    <option value="coordinator">Coordinator</option>
                                    <option value="teacher">Teacher</option>
                                    <option value="management">Management</option>
                                    <option value="other">Other</option>
                                </select>
                                <select name="board" className="w-full px-4 py-3 rounded-[8px] border border-gray-300 focus:border-[#520378] focus:ring-1 focus:ring-[#520378] transition-all outline-none text-[15px] bg-white text-gray-500">
                                    <option value="">Board</option>
                                    <option value="cbse">CBSE</option>
                                    <option value="icse">ICSE</option>
                                    <option value="igcse">IGCSE</option>
                                    <option value="ib">IB</option>
                                    <option value="state">State Board</option>
                                    <option value="university">University Affiliated</option>
                                    <option value="autonomous">Autonomous</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <select name="location" className="w-full px-4 py-3 rounded-[8px] border border-gray-300 focus:border-[#520378] focus:ring-1 focus:ring-[#520378] transition-all outline-none text-[15px] bg-white text-gray-500">
                                    <option value="">Location</option>
                                    <option value="bangalore">Bangalore</option>
                                    <option value="chennai">Chennai</option>
                                    <option value="mumbai">Mumbai</option>
                                    <option value="delhi">Delhi</option>
                                    <option value="hyderabad">Hyderabad</option>
                                    <option value="other">Other</option>
                                </select>
                                <select name="interestedIn" className="w-full px-4 py-3 rounded-[8px] border border-gray-300 focus:border-[#520378] focus:ring-1 focus:ring-[#520378] transition-all outline-none text-[15px] bg-white text-gray-500">
                                    <option value="">Interested In</option>
                                    <option value="wellness-program">Institutional Wellness Program</option>
                                    <option value="workshops">Workshops</option>
                                    <option value="faculty-training">Faculty Training</option>
                                    <option value="parenting-sessions">Parenting Sessions</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <textarea
                                name="message"
                                placeholder="Message"
                                rows="4"
                                className="w-full px-4 py-3 rounded-[8px] border border-gray-300 focus:border-[#520378] focus:ring-1 focus:ring-[#520378] transition-all outline-none text-[15px] resize-none"
                            ></textarea>

                            <div className="flex items-start gap-3">
                                <input
                                    type="checkbox"
                                    id="authorize_inst"
                                    className="mt-1 w-5 h-5 rounded border-gray-300 text-[#520378] focus:ring-0 focus:ring-offset-0 cursor-pointer"
                                />
                                <label htmlFor="authorize_inst" className="text-[13px] sm:text-[14px] text-gray-600 leading-tight cursor-pointer">
                                    I authorize Vriksh Psychological Support Services to contact me with updates and notifications
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="bg-[#520378] text-white px-10 py-3 rounded-full font-bold text-[16px] hover:bg-[#400260] transition-all shadow-md active:scale-95"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InstitutionalContact;
