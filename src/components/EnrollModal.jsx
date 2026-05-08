import React, { useState } from 'react';
import { X, Send, CreditCard } from 'lucide-react';
import API_BASE_URL from '../api/config';

const EnrollModal = ({ isOpen, onClose, event }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsapp: '',
        designation: '',
        location: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    if (!isOpen || !event) return null;

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const extractAmount = (priceStr) => {
        if (!priceStr) return 0;
        const matches = priceStr.match(/\d+/g);
        if (matches && matches.length > 0) {
            return parseInt(matches.join(''), 10);
        }
        return 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            // Optional: submit to backend
            await fetch(`${API_BASE_URL}/event-inquiries`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    fullName: formData.name,
                    email: formData.email,
                    phoneNumber: formData.whatsapp,
                    location: formData.location,
                    background: formData.designation,
                    topicInterestedIn: `Enrollment for: ${event.title}`,
                    message: "Direct Enrollment Request"
                })
            }).catch(err => console.error("Could not save inquiry:", err));

            const amountInRupees = extractAmount(event.price);

            if (amountInRupees > 0 && window.Razorpay) {
                const options = {
                    key: "rzp_live_SmYUJygoIkXFXD",
                    amount: amountInRupees * 100, // paise
                    currency: "INR",
                    name: "Vriksh Psychological Support Services",
                    description: "Enrollment: " + event.title,
                    image: "/images/logo2.png",
                    handler: function (response) {
                        setStatus({ type: 'success', message: 'Payment successful! Payment ID: ' + response.razorpay_payment_id });
                        setTimeout(() => {
                            onClose();
                            setStatus({ type: '', message: '' });
                        }, 4000);
                    },
                    prefill: {
                        name: formData.name,
                        email: formData.email,
                        contact: formData.whatsapp
                    },
                    theme: {
                        color: "#520378"
                    }
                };
                const rzp1 = new window.Razorpay(options);
                rzp1.on('payment.failed', function (response){
                    setStatus({ type: 'error', message: 'Payment failed: ' + response.error.description });
                });
                rzp1.open();
            } else {
                setStatus({ type: 'error', message: 'Could not initiate payment gateway or invalid amount.' });
                setTimeout(() => {
                    onClose();
                    setStatus({ type: '', message: '' });
                }, 3000);
            }
        } catch (error) {
            console.error("Enrollment error:", error);
            setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
            <div className="relative bg-white rounded-[32px] w-full max-w-md shadow-2xl overflow-hidden animate-fade-in-up">
                <div className="p-6 md:p-8">
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 p-2 rounded-full transition-colors"
                    >
                        <X size={20} />
                    </button>
                    
                    <h3 className="text-2xl font-bold text-[#520378] mb-1 pr-10 leading-tight">
                        Enroll in Event
                    </h3>
                    <p className="text-sm text-gray-500 mb-6 truncate">{event.title}</p>

                    {status.message && (
                        <div className={`mb-6 p-4 rounded-2xl text-sm font-semibold flex items-center gap-3 ${status.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                            {status.type === 'success' ? <Send size={16} /> : <X size={16} />}
                            {status.message}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Full Name *"
                                required
                                className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none focus:border-[#520378] focus:ring-4 focus:ring-[#520378]/10 transition-all"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email ID *"
                                required
                                className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none focus:border-[#520378] focus:ring-4 focus:ring-[#520378]/10 transition-all"
                            />
                        </div>
                        <div>
                            <input
                                type="tel"
                                name="whatsapp"
                                value={formData.whatsapp}
                                onChange={handleChange}
                                placeholder="WhatsApp Number *"
                                required
                                className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none focus:border-[#520378] focus:ring-4 focus:ring-[#520378]/10 transition-all"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                name="designation"
                                value={formData.designation}
                                onChange={handleChange}
                                placeholder="Designation (e.g., Student, Professional) *"
                                required
                                className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none focus:border-[#520378] focus:ring-4 focus:ring-[#520378]/10 transition-all"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                placeholder="Location (City) *"
                                required
                                className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none focus:border-[#520378] focus:ring-4 focus:ring-[#520378]/10 transition-all"
                            />
                        </div>

                        <div className="pt-2">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full flex items-center justify-center gap-2 rounded-2xl bg-[#520378] py-4 text-white font-semibold hover:bg-[#6c049e] active:scale-[0.98] transition-all disabled:opacity-70 disabled:active:scale-100"
                            >
                                {isSubmitting ? 'Processing...' : (
                                    <>Proceed to Payment <CreditCard size={18} /></>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EnrollModal;
