import React, { useEffect, useState } from "react";
import { Mail, MapPin, Phone, Trash2, UserRound, GraduationCap } from "lucide-react";
import API_BASE_URL from "../../api/config";

const PaidEnrollmentsAdmin = () => {
    const [enrollments, setEnrollments] = useState([]);

    const fetchEnrollments = async () => {
        try {
            const res = await fetch(`${API_BASE_URL}/event-enrollments`);
            const data = await res.json();
            // Enrollments coming from /event-enrollments are already the paid ones
            setEnrollments(data);
        } catch (error) {
            console.error("Error fetching enrollments:", error);
        }
    };

    useEffect(() => {
        fetchEnrollments();
    }, []);

    const handleDelete = async (id) => {
        try {
            await fetch(`${API_BASE_URL}/event-enrollments/${id}`, {
                method: "DELETE"
            });
            fetchEnrollments();
        } catch (error) {
            console.error("Error deleting enrollment:", error);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#f7f4fb] via-white to-[#f3ecfb] p-3 md:p-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-6 md:mb-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                        <p className="text-xs md:text-sm font-medium text-[#7c3aed] mb-1">
                            Admin Panel / Paid Enrollments
                        </p>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                            Paid Event Enrollments
                        </h2>
                        <p className="text-gray-500 mt-1 md:mt-2 text-xs md:text-base">
                            View details of users who successfully completed payment for events.
                        </p>
                    </div>

                    <div className="bg-white border border-purple-100 shadow-sm rounded-xl md:rounded-2xl px-4 md:px-5 py-3 md:py-4 w-full lg:w-auto">
                        <p className="text-xs md:text-sm text-gray-500">Total Paid Enrollments</p>
                        <h3 className="text-xl md:text-2xl font-bold text-[#6d28d9]">
                            {enrollments.length}
                        </h3>
                    </div>
                </div>

                {enrollments.length === 0 ? (
                    <div className="bg-white border border-purple-100 rounded-2xl md:rounded-3xl p-8 md:p-10 text-center shadow-sm">
                        <h4 className="text-lg md:text-xl font-bold text-gray-900">No paid enrollments found</h4>
                        <p className="text-gray-500 mt-2 text-sm md:text-base">
                            Confirmed paid enrollments will appear here after successful transaction.
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
                        {enrollments.map((item) => (
                            <div
                                key={item._id}
                                className="bg-white border border-purple-100 rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-sm hover:shadow-md transition relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 bg-green-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                                    Payment Verified
                                </div>
                                <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-5 md:mb-6 mt-3">
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-lg md:text-xl font-bold text-gray-900 truncate flex items-center gap-2">
                                            {item.name}
                                        </h3>
                                        <p className="text-xs md:text-sm text-gray-500">
                                            Date: {new Date(item.createdAt).toLocaleString()}
                                        </p>
                                    </div>

                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className="sm:shrink-0 inline-flex items-center justify-center gap-2 rounded-xl md:rounded-2xl bg-red-50 text-red-600 text-sm font-semibold px-4 py-2 hover:bg-red-100 transition w-full sm:w-auto"
                                    >
                                        <Trash2 size={16} />
                                        Delete
                                    </button>
                                </div>

                                <div className="space-y-3.5 md:space-y-4 text-sm text-gray-700">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                                        <div className="flex items-center gap-2.5 bg-gray-50/80 p-2.5 rounded-xl border border-gray-100">
                                            <Mail size={16} className="text-purple-500 shrink-0" />
                                            <span className="truncate">{item.email}</span>
                                        </div>
                                        <div className="flex items-center gap-2.5 bg-gray-50/80 p-2.5 rounded-xl border border-gray-100">
                                            <Phone size={16} className="text-purple-500 shrink-0" />
                                            <span className="truncate">{item.whatsappNumber}</span>
                                        </div>
                                        <div className="flex items-center gap-2.5 bg-gray-50/80 p-2.5 rounded-xl border border-gray-100">
                                            <MapPin size={16} className="text-purple-500 shrink-0" />
                                            <span className="truncate">{item.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2.5 bg-gray-50/80 p-2.5 rounded-xl border border-gray-100">
                                            <GraduationCap size={16} className="text-purple-500 shrink-0" />
                                            <span className="truncate">Designation: {item.designation}</span>
                                        </div>
                                    </div>

                                    <div className="bg-purple-50 p-3.5 md:p-4 rounded-xl border border-purple-100">
                                        <p className="font-bold text-gray-900 mb-1 uppercase text-[10px] tracking-wider text-purple-600">Event Details</p>
                                        <p className="text-gray-800 font-semibold text-sm">
                                            {item.eventId?.title || "N/A"}
                                        </p>
                                    </div>

                                    <div className="bg-green-50/50 p-3.5 md:p-4 rounded-xl border border-green-100">
                                        <p className="font-bold text-green-700 mb-1 uppercase text-[10px] tracking-wider">Payment Information</p>
                                        <p className="text-gray-700 text-sm font-medium">
                                            Razorpay ID: {item.razorpayPaymentId}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default PaidEnrollmentsAdmin;
