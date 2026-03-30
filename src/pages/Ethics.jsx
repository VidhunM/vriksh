import React from 'react';

const Ethics = () => {
    return (
        <section className="bg-white min-h-screen">
            <div className="bg-[#520378] pt-20 pb-4 sm:pt-32 sm:pb-10 flex items-center justify-center">
                <h1 className="text-white text-[clamp(24px,4vw,36px)] font-bold tracking-[0.05em] uppercase font-inter-tight text-center px-4">
                    Ethics
                </h1>
            </div>
            <div className="max-w-[1000px] mx-auto px-6 py-12 sm:py-20 text-gray-800 text-[16px] leading-[1.8]">
                <div className="space-y-8 text-justify">
                    <div>
                        <p className="mb-4 text-lg font-medium text-[#520378]">Vriksh Psychological Support Services is committed to upholding the highest ethical standards in the delivery of counselling and therapy services.</p>
                        <p>The following principles guide our practice:</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-[#520378] mb-4">1. Professional Conduct</h2>
                        <ul className="list-disc ml-6 mt-2 space-y-2">
                            <li>All therapists and counsellors affiliated with Vriksh Psychological Support Services are trained, qualified, and adhere to professional ethical guidelines</li>
                            <li>Professionals conduct themselves with respect, empathy, and a non-judgmental attitude</li>
                            <li>Clear professional boundaries are maintained at all times to ensure the therapeutic relationship remains focused on the user’s well-being</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-[#520378] mb-4">2. Informed Consent</h2>
                        <p>Users are provided with clear information about:</p>
                        <ul className="list-disc ml-6 mt-2 space-y-2 font-medium text-gray-700">
                            <li>Nature of services</li>
                            <li>Potential risks and benefits</li>
                            <li>Confidentiality and its limitations</li>
                        </ul>
                        <p className="mt-4">Participation in counselling or therapy is based on informed and voluntary consent. Users have the right to:</p>
                        <ul className="list-disc ml-6 mt-2 space-y-2">
                            <li>Ask questions</li>
                            <li>Seek clarification</li>
                            <li>Make informed decisions about their care</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-[#520378] mb-4">3. Confidentiality</h2>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>All user information and therapy sessions are treated as strictly confidential</li>
                            <li>Therapists adhere to professional and legal confidentiality standards</li>
                            <li>Confidentiality may be limited in situations where:
                                <ul className="list-circle ml-6 mt-2 space-y-1 italic text-gray-700">
                                    <li>There is risk of harm to self or others</li>
                                    <li>Disclosure is required by law</li>
                                </ul>
                            </li>
                        </ul>
                        <p className="mt-4 italic text-[#520378]">(Refer to our Privacy Policy for detailed information)</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-[#520378] mb-4">4. Client Welfare & Safety</h2>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>The well-being and safety of clients is our top priority</li>
                            <li>Therapists take appropriate steps to support emotional safety during sessions</li>
                            <li>In situations involving risk, necessary actions may be taken to ensure safety</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-[#520378] mb-4">5. Cultural Sensitivity & Inclusivity</h2>
                        <ul className="list-disc ml-6 space-y-2 font-medium">
                            <li>We respect and value diversity in culture, identity, and lived experiences</li>
                            <li>Services are provided in a culturally sensitive, inclusive, and non-discriminatory manner</li>
                            <li>Each individual is treated with dignity and respect</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-[#520378] mb-4">6. Professional Boundaries</h2>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>Therapists maintain ethical boundaries and avoid dual relationships that may affect objectivity</li>
                            <li>Any conflict of interest is managed in accordance with ethical standards</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-[#520378] mb-4">7. Complaints & Grievances</h2>
                        <ul className="list-disc ml-6 space-y-2 font-medium">
                            <li>Users have the right to raise concerns or complaints regarding services</li>
                            <li>Vriksh provides a fair and transparent process to:
                                <ul className="list-circle ml-6 mt-2 space-y-1 font-normal text-gray-700">
                                    <li>Review concerns</li>
                                    <li>Address issues promptly</li>
                                </ul>
                            </li>
                            <li className="text-[#520378]">Users may contact us through the details provided on the website</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-[#520378] mb-4">8. Compliance with Laws & Ethical Standards</h2>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>Vriksh Psychological Support Services operates in accordance with applicable laws and regulations in India</li>
                            <li>Therapists adhere to ethical guidelines set by relevant professional and licensing bodies</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-[#520378] mb-4">9. Continuous Improvement</h2>
                        <p>We are committed to maintaining quality through:</p>
                        <ul className="list-disc ml-6 mt-2 space-y-2">
                            <li>Ongoing professional development</li>
                            <li>Ethical review practices</li>
                            <li>Feedback-based improvements</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-[#520378] mb-4">10. Policy Updates</h2>
                        <p>We reserve the right to update this Ethics Policy at any time. Changes will be posted on this page. We encourage users to review this page periodically.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-[#520378] mb-4">11. Acceptance</h2>
                        <p className="font-medium">By using our services, you acknowledge that you have read and understood this Ethics Policy.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ethics;
