import React from 'react';

const RefundPolicy = () => {
    return (
        <section className="bg-white min-h-screen">
            <div className="bg-[#520378] pt-20 pb-4 sm:pt-32 sm:pb-10 flex items-center justify-center">
                <h1 className="text-white text-[clamp(24px,4vw,36px)] font-bold tracking-[0.05em] uppercase font-inter-tight text-center px-4">
                    Payment & Refund Policy
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
                    <p className="mb-4 font-medium">This policy outlines the terms related to payments, cancellations, rescheduling, and refunds for services provided by Vriksh Psychological Support Services.</p>

                    <div>
                        <h2 className="text-[26px] font-bold mb-6">1. Appointment Booking</h2>
                        <ul className="list-disc ml-6 mt-2 space-y-2">
                            <li>Counselling sessions must be scheduled at least 3 days in advance</li>
                            <li>Vriksh will attempt to contact the user twice for confirmation</li>
                            <li>If the user fails to respond within the given time, the session will be considered confirmed and consumed, and no refund will be provided</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-[26px] font-bold mb-6">2. Payment Terms</h2>
                        <p>All counselling sessions are paid services. Full payment must be made prior to the session.</p>
                        <p className="mt-2 font-semibold">Payments can be made via:</p>
                        <ul className="list-disc ml-6 mt-1 space-y-1">
                            <li>Internet Banking</li>
                            <li>Debit/Credit Cards</li>
                            <li>UPI</li>
                            <li>Payment Wallets</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-[26px] font-bold mb-6">3. No-Show Policy</h2>
                        <ul className="list-disc ml-6 mt-2 space-y-2">
                            <li>The therapist will wait for up to 15 minutes from the scheduled start time</li>
                            <li>If the user does not join within this time:
                                <ul className="list-circle ml-6 mt-2 space-y-1 italic">
                                    <li>It will be considered a no-show</li>
                                    <li>The session will be marked as consumed</li>
                                    <li>No refund or reschedule will be provided</li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-[26px] font-bold mb-6">4. Rescheduling Policy</h2>
                        <ul className="list-disc ml-6 mt-2 space-y-2">
                            <li>Users may reschedule a session by informing Vriksh at least 24 hours in advance</li>
                            <li>Requests made within 24 hours of the session may not be accommodated</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-[26px] font-bold mb-6">5. Cancellation & Refund Policy</h2>
                        <ul className="list-disc ml-6 mt-2 space-y-2">
                            <li>Refunds are allowed only if cancellation is made at least 24 hours before the scheduled session</li>
                            <li>Cancellations made within 24 hours:
                                <ul className="list-circle ml-6 mt-2 space-y-1 italic text-gray-700">
                                    <li>Will be treated as consumed sessions</li>
                                    <li>No refund will be issued</li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-[26px] font-bold mb-6">6. Courses, Webinars & Workshops</h2>
                        <ul className="list-disc ml-6 mt-2 space-y-2">
                            <li>No refunds will be provided for any online courses, webinars, or workshops under any circumstances</li>
                            <li>Registration is non-transferable</li>
                            <li>If unauthorized participants are found attending:
                                <ul className="list-circle ml-6 mt-2 space-y-1">
                                    <li>Registration will be cancelled immediately</li>
                                    <li>No refund will be issued</li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-[26px] font-bold mb-6">7. Payment Liability Disclaimer</h2>
                        <p>All payments made via online modes (“Virtual Payment Modes”) are subject to the terms between the user and their respective banks/payment providers.</p>
                        <p className="mt-2 italic">Vriksh Psychological Support Services is not responsible for Failed transactions, Payment gateway errors, or Fraudulent transactions.</p>
                    </div>

                    <div>
                        <h2 className="text-[26px] font-bold mb-6">8. Pricing Changes</h2>
                        <ul className="list-disc ml-6 mt-2 space-y-2">
                            <li>Vriksh Psychological Support Services reserves the right to modify service charges at any time</li>
                            <li>Updated pricing will be effective immediately and applicable to future bookings</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-[26px] font-bold mb-6">9. User Responsibility</h2>
                        <p>Users are responsible for:</p>
                        <ul className="list-disc ml-6 mt-2 space-y-2">
                            <li>Providing accurate payment details</li>
                            <li>Ensuring timely payment before sessions</li>
                            <li>Joining sessions on time</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-[26px] font-bold mb-6">10. Policy Updates</h2>
                        <p>Vriksh Psychological Support Services reserves the right to update this policy at any time. Changes will be posted on this page.</p>
                    </div>

                    <div>
                        <h2 className="text-[26px] font-bold mb-6">11. Acceptance</h2>
                        <p className="font-medium">By booking a session or making a payment, you acknowledge that you have read, understood, and agreed to this Payment & Refund Policy.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RefundPolicy;
