import React, { useEffect, useState } from "react";
import { Mail, MapPin, Phone, Trash2, UserRound } from "lucide-react";

const EventInquiriesAdmin = () => {
    const [inquiries, setInquiries] = useState([]);

    const fetchInquiries = async () => {
        try {
            const res = await fetch("http://localhost:5000/event-inquiries");
            const data = await res.json();
            setInquiries(data);
        } catch (error) {
            console.error("Error fetching inquiries:", error);
        }
    };

    useEffect(() => {
        fetchInquiries();
    }, []);

    const handleDelete = async (id) => {
        try {
            await fetch(`http://localhost:5000/event-inquiries/${id}`, {
                method: "DELETE"
            });
            fetchInquiries();
        } catch (error) {
            console.error("Error deleting inquiry:", error);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#f7f4fb] via-white to-[#f3ecfb] p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                        <p className="text-sm font-medium text-[#7c3aed] mb-2">
                            Admin Panel / Event Inquiries
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            User Event Form Submissions
                        </h2>
                        <p className="text-gray-500 mt-2 text-sm md:text-base">
                            View all submissions from the Upcoming Events page form.
                        </p>
                    </div>

                    <div className="bg-white border border-purple-100 shadow-sm rounded-2xl px-5 py-4 min-w-[160px]">
                        <p className="text-sm text-gray-500">Total Submissions</p>
                        <h3 className="text-2xl font-bold text-[#6d28d9]">
                            {inquiries.length}
                        </h3>
                    </div>
                </div>

                {inquiries.length === 0 ? (
                    <div className="bg-white border border-purple-100 rounded-3xl p-10 text-center shadow-sm">
                        <h4 className="text-xl font-bold text-gray-900">No submissions found</h4>
                        <p className="text-gray-500 mt-2">
                            User form entries from Upcoming Events will appear here.
                        </p>
                    </div>
                ) : (
                    <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
                        {inquiries.map((item) => (
                            <div
                                key={item._id}
                                className="bg-white border border-purple-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition"
                            >
                                <div className="flex items-start justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">{item.fullName}</h3>
                                        <p className="text-sm text-gray-500">
                                            {new Date(item.createdAt).toLocaleString()}
                                        </p>
                                    </div>

                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-red-50 text-red-600 font-semibold px-4 py-2 hover:bg-red-100 transition"
                                    >
                                        <Trash2 size={16} />
                                        Delete
                                    </button>
                                </div>

                                <div className="space-y-3 text-sm text-gray-700">
                                    <p className="flex items-center gap-2">
                                        <Mail size={16} className="text-purple-500" />
                                        {item.email}
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <Phone size={16} className="text-purple-500" />
                                        {item.phoneNumber}
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <MapPin size={16} className="text-purple-500" />
                                        {item.location}
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <UserRound size={16} className="text-purple-500" />
                                        Topic: {item.topicInterestedIn}
                                    </p>
                                    <p><span className="font-semibold">Background:</span> {item.background}</p>
                                    <p><span className="font-semibold">Heard About Us:</span> {item.heardAboutUs}</p>
                                    <p><span className="font-semibold">Consent:</span> {item.consent ? "Yes" : "No"}</p>
                                    <div>
                                        <p className="font-semibold mb-1">Message:</p>
                                        <p className="text-gray-600 whitespace-pre-line">{item.message}</p>
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

export default EventInquiriesAdmin;