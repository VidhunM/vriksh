import React, { useState, useRef, useEffect } from 'react';

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
        numberOfEmployees: '',
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

    const isEAP = programType === "Corporate-EAP";
    const isSchool = programType === "School-Based";
    const isCollege = programType === "College-Based";
    const isCareer = programType === "Career-Counselling";

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const eapOptions = [
        { value: "full-program", label: "Full Program" },
        { value: "counselling", label: "Counselling" },
        { value: "training", label: "Training" },
        { value: "workshop", label: "Workshop" },
        { value: "assessments", label: "Assessments" },
        { value: "corporate-wellness", label: "Corporate Wellness Events" },
        { value: "awareness-campaigns", label: "Awareness Campaigns" },
        { value: "maternity-support", label: "Maternity Support Programme" },
        { value: "peer-support-champions", label: "Peer Support Champions" },
        { value: "emotional-intelligence", label: "4-Week Emotional Intelligence Program" },
        { value: "other", label: "Other" }
    ];

    return (
        <section id="contact" className="w-full py-12 sm:py-18 scroll-mt-20" style={{ background: isEAP ? '#FFFFFF' : 'linear-gradient(180deg, #FFFAE4 0%, #FFFFFF 100%)' }}>
            <div className="max-w-[1240px] mx-auto px-6 sm:px-12">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 justify-between items-start -mt-10">

                    {/* Left Side: Content */}
                    <div className="w-full lg:w-[45%] space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start pt-2">
                        <h2 className="text-[20px] sm:text-[42px] font-extrabold text-gray-900 leading-[1.1] tracking-wide mb-4">
                            {isEAP ? "We’ll help you get started." : "Get in Touch with Vriksh"}
                        </h2>
                        <div className="space-y-6">
                            <p className="text-gray-700 text-[14px] sm:text-lg leading-relaxed max-w-[550px]">
                                {isEAP
                                    ? "Connect with our experts to explore employee wellness solutions and discover how Vriksh can help you build a healthier, high-performing workplace."
                                    : isCareer
                                        ? "Confused about the right career path? Connect with us to explore your strengths, interests, and future opportunities through structured career counselling and psychometric assessments."
                                        : isCollege
                                            ? "Looking for trusted college-based mental health support? Vriksh partners with colleges to promote students’ emotional well-being through counselling services, wellbeing programs, and mental health awareness initiatives."
                                            : "Looking for trusted school-based mental health support? Vriksh partners with schools to nurture students’ emotional well-being and resilience through counselling services, special education support, student wellbeing programs, and mental health awareness initiatives - helping create healthier and more supportive learning environments."}
                            </p>
                            {isCollege && (
                                <p className="text-gray-700 text-[14px] sm:text-lg leading-relaxed max-w-[550px]">
                                    Through student counselling, resilience-building workshops, and campus wellbeing programs, we support young adults in managing stress, building healthy relationships, and thriving academically and personally.
                                </p>
                            )}
                            {/* {!isEAP && (
                                // <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-[550px]">
                                //     From professional counselling and Vriksh E-Academy online courses to institutional wellness programs and corporate EAP solutions, we provide practical, evidence-based support that truly makes a difference.
                                // </p>
                            )} */}
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="w-full lg:w-[50%] flex flex-col pt-2">
                        <h3 className="text-[18px] sm:text-[28px] font-bold text-[#520378] mb-1 leading-snug">
                            {isEAP ? "New Business Enquiry" : `Partner With Us: ${programType} Mental Health Program`}
                        </h3>
                        {isEAP && (
                            <p className="text-[#475467] text-[13px] sm:text-[16px] mb-8 font-geist">
                                Share your details here, and partnerships team will get in touch with you
                            </p>
                        )}
                        {!isEAP && <div className="mb-8" />}

                        <form className="space-y-4 sm:space-y-5 w-full">
                            {/* Row 1: Name & Email */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="Full Name"
                                    className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-[8px] border border-gray-300 focus:border-[#520378] focus:ring-1 focus:ring-[#520378] transition-all outline-none text-[13px] sm:text-[15px]"
                                />
                                <input
                                    type="email"
                                    name="workEmail"
                                    value={formData.workEmail}
                                    onChange={handleChange}
                                    placeholder="Work Email"
                                    className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-[8px] border border-gray-300 focus:border-[#520378] focus:ring-1 focus:ring-[#520378] transition-all outline-none text-[13px] sm:text-[15px]"
                                />
                            </div>

                            {/* Row 2: Phone Number & Designation */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                <input
                                    type="text"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    placeholder="Phone Number"
                                    className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-[8px] border border-gray-300 focus:border-[#520378] focus:ring-1 focus:ring-[#520378] transition-all outline-none text-[13px] sm:text-[15px]"
                                />
                                {isEAP ? (
                                    <input
                                        type="text"
                                        name="designation"
                                        value={formData.designation}
                                        onChange={handleChange}
                                        placeholder="Designation"
                                        className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-[8px] border border-gray-300 focus:border-[#520378] focus:ring-1 focus:ring-[#520378] transition-all outline-none text-[13px] sm:text-[15px]"
                                    />
                                ) : (
                                    <input
                                        type="text"
                                        name="institutionName"
                                        value={formData.institutionName}
                                        onChange={handleChange}
                                        placeholder="Institution Name"
                                        className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-[8px] border border-gray-300 focus:border-[#520378] focus:ring-1 focus:ring-[#520378] transition-all outline-none text-[13px] sm:text-[15px]"
                                    />
                                )}
                            </div>

                            {/* Row 3 and beyond: Conditional Content */}
                            {isEAP ? (
                                <>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                        <input
                                            type="text"
                                            name="institutionName"
                                            value={formData.institutionName}
                                            onChange={handleChange}
                                            placeholder="Name of Organization"
                                            className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-[8px] border border-gray-300 focus:border-[#520378] focus:ring-1 focus:ring-[#520378] transition-all outline-none text-[13px] sm:text-[15px]"
                                        />
                                        <input
                                            type="text"
                                            name="numberOfEmployees"
                                            value={formData.numberOfEmployees}
                                            onChange={handleChange}
                                            placeholder="Number of employees"
                                            className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-[8px] border border-gray-300 focus:border-[#520378] focus:ring-1 focus:ring-[#520378] transition-all outline-none text-[13px] sm:text-[15px]"
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 gap-4 relative" ref={dropdownRef}>
                                        <div
                                            onClick={() => setDropdownOpen(!dropdownOpen)}
                                            className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-[8px] border border-gray-300 cursor-pointer flex justify-between items-center bg-white transition-all outline-none text-[13px] sm:text-[15px] focus:border-[#520378] focus:ring-1 focus:ring-[#520378]"
                                        >
                                            <span className={formData.interestedIn ? "text-gray-900" : "text-gray-900 line-clamp-1"}>
                                                {formData.interestedIn ? eapOptions.find(o => o.value === formData.interestedIn)?.label || formData.interestedIn : "Interested In"}
                                            </span>
                                            <svg className={`w-5 h-5 text-[#4A5568] transition-transform duration-200 shrink-0 ml-2 ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                            </svg>
                                        </div>
                                        {dropdownOpen && (
                                            <div className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-200 rounded-[12px] shadow-2xl z-50 overflow-hidden animate-slide-up-fade origin-top">
                                                <div className="max-h-[250px] overflow-y-auto py-2">
                                                    {eapOptions.map((option) => (
                                                        <div
                                                            key={option.value}
                                                            onClick={() => {
                                                                setFormData(prev => ({ ...prev, interestedIn: option.value }));
                                                                setDropdownOpen(false);
                                                            }}
                                                            className="px-4 py-3 hover:bg-[#520378] hover:text-white transition-colors cursor-pointer text-[13px] sm:text-[15px] text-gray-800 font-medium"
                                                        >
                                                            {option.label}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </>
                            ) : isSchool ? (
                                <>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                        <input
                                            type="text"
                                            name="designation"
                                            value={formData.designation}
                                            onChange={handleChange}
                                            placeholder="Designation"
                                            className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-[8px] border border-gray-300 focus:border-[#520378] focus:ring-1 focus:ring-[#520378] transition-all outline-none text-[13px] sm:text-[15px] bg-[#FFFAE44D] text-gray-900"
                                        />
                                        <select
                                            name="board"
                                            value={formData.board}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 sm:px-4 sm:py-3 pr-12 rounded-[8px] border border-gray-300 focus:border-[#520378] focus:ring-1 focus:ring-[#520378] transition-all outline-none text-[13px] sm:text-[15px] bg-[#FFFAE44D] text-gray-900 appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22%234A5568%22%3E%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%222%22%20d%3D%22M19%209l-7%207-7-7%22%2F%3E%3C%2Fsvg%3E')] bg-[position:right_1.25rem_center] bg-no-repeat bg-[size:1.25em]"
                                        >
                                            <option value="">Board</option>
                                            <option value="cbse">CBSE</option>
                                            <option value="icse">ICSE</option>
                                            <option value="state">State</option>
                                            <option value="ib">IB</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                        <input
                                            type="text"
                                            name="location"
                                            value={formData.location}
                                            onChange={handleChange}
                                            placeholder="Location"
                                            className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-[8px] border border-gray-300 focus:border-[#520378] focus:ring-1 focus:ring-[#520378] transition-all outline-none text-[13px] sm:text-[15px] bg-[#FFFAE44D] text-gray-900"
                                        />
                                        <select
                                            name="interestedIn"
                                            value={formData.interestedIn}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 sm:px-4 sm:py-3 pr-12 rounded-[8px] border border-gray-300 focus:border-[#520378] focus:ring-1 focus:ring-[#520378] transition-all outline-none text-[13px] sm:text-[15px] bg-[#FFFAE44D] text-gray-900 appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22%234A5568%22%3E%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%222%22%20d%3D%22M19%209l-7%207-7-7%22%2F%3E%3C%2Fsvg%3E')] bg-[position:right_1.25rem_center] bg-no-repeat bg-[size:1.25em]"
                                        >
                                            <option value="" disabled hidden>Interested In</option>
                                            <option value="counselling">Counselling</option>
                                            <option value="special-education">Special Education</option>
                                            <option value="workshop">Workshop</option>
                                            <option value="career-guidance">Career guidance</option>
                                            <option value="full-program">Full Program</option>
                                            <option value="invite-as-guest">Invite as guest</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </>
                            ) : isCareer ? (
                                <>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                        <input
                                            type="text"
                                            name="designation"
                                            value={formData.designation}
                                            onChange={handleChange}
                                            placeholder="Designation"
                                            className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-[8px] border border-gray-300 focus:border-[#520378] focus:ring-1 focus:ring-[#520378] transition-all outline-none text-[13px] sm:text-[15px]"
                                        />
                                        <input
                                            type="text"
                                            name="location"
                                            value={formData.location}
                                            onChange={handleChange}
                                            placeholder="Location"
                                            className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-[8px] border border-gray-300 focus:border-[#520378] focus:ring-1 focus:ring-[#520378] transition-all outline-none text-[13px] sm:text-[15px] bg-[#FFFAE44D] text-gray-900"
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 gap-4">
                                        <select
                                            name="interestedIn"
                                            value={formData.interestedIn}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 sm:px-4 sm:py-3 pr-12 rounded-[8px] border border-gray-300 focus:border-[#520378] focus:ring-1 focus:ring-[#520378] transition-all outline-none text-[13px] sm:text-[15px] bg-[#FFFAE44D] text-gray-900 appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22%234A5568%22%3E%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%222%22%20d%3D%22M19%209l-7%207-7-7%22%2F%3E%3C%2Fsvg%3E')] bg-[position:right_1.25rem_center] bg-no-repeat bg-[size:1.25em]"
                                        >
                                            <option value="" disabled hidden>Interested In</option>
                                            <option value="Career Guidance">Career Guidance</option>
                                            <option value="Career Awareness Talk - School">Career Awareness Talk - School</option>
                                        </select>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                        <input
                                            type="text"
                                            name="designation"
                                            value={formData.designation}
                                            onChange={handleChange}
                                            placeholder="Designation"
                                            className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-[8px] border border-gray-300 focus:border-[#520378] focus:ring-1 focus:ring-[#520378] transition-all outline-none text-[13px] sm:text-[15px]"
                                        />
                                        <input
                                            type="text"
                                            name="location"
                                            value={formData.location}
                                            onChange={handleChange}
                                            placeholder="Location"
                                            className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-[8px] border border-gray-300 focus:border-[#520378] focus:ring-1 focus:ring-[#520378] transition-all outline-none text-[13px] sm:text-[15px] bg-[#FFFAE44D] text-gray-900"
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 gap-4">
                                        <select
                                            name="interestedIn"
                                            value={formData.interestedIn}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 sm:px-4 sm:py-3 pr-12 rounded-[8px] border border-gray-300 focus:border-[#520378] focus:ring-1 focus:ring-[#520378] transition-all outline-none text-[13px] sm:text-[15px] bg-[#FFFAE44D] text-gray-900 appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22%234A5568%22%3E%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%222%22%20d%3D%22M19%209l-7%207-7-7%22%2F%3E%3C%2Fsvg%3E')] bg-[position:right_1.25rem_center] bg-no-repeat bg-[size:1.25em]"
                                        >
                                            <option value="" disabled hidden>Interested In</option>
                                            <option value="counselling">Counselling</option>
                                            <option value="soft-life-skills">Soft & Life Skills Classes</option>
                                            <option value="workshop">Workshop</option>
                                            <option value="career-guidance">Career guidance</option>
                                            <option value="full-program">Full Program</option>
                                            <option value="invite-as-guest">Invite as guest</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </>
                            )}

                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Message"
                                rows="4"
                                className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-[8px] border border-gray-300 focus:border-[#520378] focus:ring-1 focus:ring-[#520378] transition-all outline-none text-[13px] sm:text-[15px] resize-none"
                            ></textarea>

                            <div className="flex items-start gap-3">
                                <input
                                    type="checkbox"
                                    id="authorize_inst"
                                    name="authorized"
                                    checked={formData.authorized}
                                    onChange={handleChange}
                                    className="mt-1 w-4 h-4 sm:w-5 sm:h-5 rounded border-gray-300 text-[#520378] focus:ring-0 focus:ring-offset-0 cursor-pointer"
                                />
                                <label htmlFor="authorize_inst" className="text-[13px] sm:text-[14px] text-gray-600 leading-tight cursor-pointer">
                                    I authorize Vriksh Psychological Support Services to contact me with updates and notifications
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="bg-[#520378] text-white px-7 py-2 sm:px-10 sm:py-3 rounded-full font-bold text-[14px] sm:text-[16px] hover:bg-[#400260] transition-all shadow-md active:scale-95"
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
