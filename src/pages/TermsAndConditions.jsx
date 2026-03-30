import React from 'react';

const TermsAndConditions = () => {
    return (
        <section className="bg-white min-h-screen">
            <div className="bg-[#520378] pt-20 pb-4 sm:pt-32 sm:pb-10 flex items-center justify-center">
                <h1 className="text-white text-[clamp(24px,4vw,36px)] font-bold tracking-[0.05em] uppercase font-inter-tight text-center px-4">
                    Terms & Conditions
                </h1>
            </div>
            <div className="max-w-[1000px] mx-auto px-6 py-12 sm:py-20 text-gray-800 text-[18px] leading-[1.8]">
                <div className="border-b border-gray-200 pb-3 mb-8">
                    <p>
                        <span className="font-bold">Last Updated:</span>
                        <span className="ml-2">30-03-2026</span>
                    </p>
                </div>
                <div className="space-y-8 text-justify">
                    <div>
                        <p className="font-semibold mb-4 text-[18px]">Welcome to Vriksh Psychological Support Services (“we”, “our”, “us”).</p>
                        <p className="mb-4">By accessing or using our website <a href="https://vrikshenrichingminds.com/" className="hover:underline font-medium">https://vrikshenrichingminds.com/</a>, you agree to comply with and be bound by the following Terms & Conditions. If you do not agree, please do not use our website or services.</p>
                    </div>

                    <div>
                        <h2 className="text-[26px] font-bold mb-6">1. Use of Website</h2>
                        <p>This website is intended to provide information about our psychological services, counselling support, programs, and resources.</p>
                        <p className="mt-2">By using this website, you agree to:</p>
                        <ul className="list-disc ml-6 mt-2 space-y-2">
                            <li>Use it only for lawful purposes</li>
                            <li>Not engage in activities that violate any applicable laws or regulations</li>
                            <li>Not disrupt or interfere with the website’s functioning</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-[26px] font-bold mb-6">2. Eligibility</h2>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>Users must be 18 years or older to independently access services</li>
                            <li>Minors may use services only with parental or legal guardian consent</li>
                            <li>We are not responsible for unauthorized use by minors</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-[26px] font-bold mb-6">3. Nature of Services</h2>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>Vriksh Psychological Support Services acts as a facilitator connecting users with counsellors and therapists</li>
                            <li>Services provided are informational and supportive in nature</li>
                            <li>They are not a substitute for medical or psychiatric treatment</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-[26px] font-bold mb-6">4. Intellectual Property</h2>
                        <p>All content on this website, including text, images, videos, logos, graphics, course materials, and branding, is the exclusive property of Vriksh Psychological Support Services. Unauthorized use, reproduction, or distribution is strictly prohibited without prior written permission.</p>
                    </div>

                    <div>
                        <h2 className="text-[26px] font-bold mb-6">5. User Responsibilities</h2>
                        <p>Users agree not to:</p>
                        <ul className="list-disc ml-6 mt-2 space-y-2">
                            <li>Provide false or misleading information</li>
                            <li>Attempt unauthorized access to systems</li>
                            <li>Upload harmful, abusive, or inappropriate content</li>
                            <li>Disrupt website functionality</li>
                        </ul>
                        <p className="mt-2">Users are solely responsible for their actions while using the website.</p>
                    </div>

                    <div>
                        <h2 className="text-[26px] font-bold mb-6">6. Acceptable Use & Security</h2>
                        <p>Users are prohibited from:</p>
                        <ul className="list-disc ml-6 mt-2 space-y-2">
                            <li>Accessing data or accounts without authorization</li>
                            <li>Attempting to breach website security or test vulnerabilities</li>
                            <li>Introducing viruses, malware, or harmful code</li>
                            <li>Overloading, flooding, or disrupting website services</li>
                            <li>Sending unsolicited promotions or spam</li>
                        </ul>
                        <p className="mt-2 font-medium italic">Violations may result in civil or criminal liability, and we reserve the right to take appropriate legal action.</p>
                    </div>

                    <div>
                        <h2 className="text-[26px] font-bold mb-6">7. Code of Conduct for Sessions</h2>
                        <p>Users agree to:</p>
                        <ul className="list-disc ml-6 mt-2 space-y-2">
                            <li>Attend sessions in a sober and mentally stable state</li>
                            <li>Maintain respectful and appropriate behaviour with counsellors</li>
                            <li>Avoid disruptive or offensive conduct</li>
                        </ul>
                        <p className="mt-2">We reserve the right to refuse or terminate sessions if these guidelines are violated.</p>
                    </div>

                    <div>
                        <h2 className="text-[26px] font-bold mb-6">8. Disclaimer</h2>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>Information and guidance provided through the platform are for support purposes only</li>
                            <li>We do not provide medical diagnosis or emergency care</li>
                            <li>Users are advised to seek qualified medical or mental health professionals when required</li>
                        </ul>
                    </div>

                    <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                        <h2 className="text-xl font-bold mb-4 uppercase tracking-wide">9. Emergency Disclaimer</h2>
                        <p className="mb-2 font-medium">This platform is not intended for emergencies or crisis situations. If you:</p>
                        <ul className="list-disc ml-6 mt-2 space-y-2 font-medium">
                            <li>Feel at risk of harm</li>
                            <li>Are experiencing a mental health emergency</li>
                        </ul>
                        <p className="mt-4 font-bold text-lg">Please contact: Emergency services | Nearest hospital | A suicide prevention helpline</p>
                    </div>

                    <div>
                        <h2 className="text-[26px] font-bold mb-6">10. External Links</h2>
                        <p>Our website may include links to third-party websites. We are not responsible for their content, policies, or practices.</p>
                    </div>

                    <div>
                        <h2 className="text-[26px] font-bold mb-6">11. Limitation of Liability</h2>
                        <p>Vriksh Psychological Support Services shall not be liable for any:</p>
                        <ul className="list-disc ml-6 mt-2 space-y-2">
                            <li>Direct or indirect damages</li>
                            <li>Loss arising from reliance on services or information</li>
                        </ul>
                        <p className="mt-2">Use of the website and services is at your own risk.</p>
                    </div>

                    <div>
                        <h2 className="text-[26px] font-bold mb-6">12. Indemnity</h2>
                        <p>Users agree to indemnify and hold harmless the Company, its team, and affiliates from any claims, damages, or liabilities arising from misuse of the website or services.</p>
                    </div>

                    <div>
                        <h2 className="text-[26px] font-bold mb-6">13. Legal Action</h2>
                        <p>Any attempt to defame the organization, spread false information or harm reputation may result in strict legal action.</p>
                    </div>

                    <div>
                        <h2 className="text-[26px] font-bold mb-6">14. Governing Law & Jurisdiction</h2>
                        <p>These Terms shall be governed by the laws of India. Any disputes shall fall under the jurisdiction of courts in Chennai, Tamil Nadu.</p>
                    </div>

                    <div>
                        <h2 className="text-[26px] font-bold mb-6">15. Changes to Terms</h2>
                        <p>We reserve the right to modify these Terms at any time. Continued use of the website indicates acceptance of updated Terms.</p>
                    </div>

                    <div>
                        <h2 className="text-[26px] font-bold mb-6">16. Acceptance of Terms</h2>
                        <p className="font-medium">By using this website, you confirm that you have read, understood, and agreed to these Terms & Conditions.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TermsAndConditions;
