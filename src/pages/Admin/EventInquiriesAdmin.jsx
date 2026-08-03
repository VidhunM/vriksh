import React, { useEffect, useState } from "react";
import { Mail, MapPin, Phone, Trash2, UserRound, Download, PlusCircle, CheckCircle2, AlertTriangle, Save, X } from "lucide-react";
import API_BASE_URL, { getHeaders } from "../../api/config";

const EventInquiriesAdmin = () => {
    const [inquiries, setInquiries] = useState([]);
    const [deleteModal, setDeleteModal] = useState({ isOpen: false, id: null, title: "" });
    const [popupModal, setPopupModal] = useState({ isOpen: false, type: "success", title: "", message: "" });
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const [form, setForm] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        location: "",
        topicInterestedIn: "General",
        background: "Student / Professional",
        heardAboutUs: "Website",
        consent: true,
        message: ""
    });

    const fetchInquiries = async () => {
        try {
            const res = await fetch(`${API_BASE_URL}/event-inquiries`, {
                headers: getHeaders()
            });
            const data = await res.json();
            const generalInquiries = Array.isArray(data)
                ? data.filter(item => !item.topicInterestedIn?.startsWith("PAID ENROLLMENT"))
                : [];
            setInquiries(generalInquiries);
        } catch (error) {
            console.error("Error fetching inquiries:", error);
            setInquiries([]);
        }
    };

    useEffect(() => {
        fetchInquiries();
    }, []);

    const handleExportCSV = () => {
        if (inquiries.length === 0) return;
        const headers = ["Full Name", "Email", "Phone Number", "Location", "Topic Interested In", "Background", "Heard About Us", "Message", "Date"];
        const csvRows = [headers.join(",")];

        inquiries.forEach(item => {
            const row = [
                `"${(item.fullName || "").replace(/"/g, '""')}"`,
                `"${(item.email || "").replace(/"/g, '""')}"`,
                `"${(item.phoneNumber || "").replace(/"/g, '""')}"`,
                `"${(item.location || "").replace(/"/g, '""')}"`,
                `"${(item.topicInterestedIn || "").replace(/"/g, '""')}"`,
                `"${(item.background || "").replace(/"/g, '""')}"`,
                `"${(item.heardAboutUs || "").replace(/"/g, '""')}"`,
                `"${(item.message || "").replace(/"/g, '""')}"`,
                `"${new Date(item.createdAt || Date.now()).toLocaleString()}"`
            ];
            csvRows.push(row.join(","));
        });

        const csvContent = "data:text/csv;charset=utf-8," + csvRows.join("\n");
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", `Event_Inquiries_${new Date().toISOString().slice(0, 10)}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleSaveInquiry = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`${API_BASE_URL}/event-inquiries`, {
                method: "POST",
                headers: getHeaders({ "Content-Type": "application/json" }),
                body: JSON.stringify(form)
            });
            if (!res.ok) throw new Error("Failed to save inquiry data");

            setIsAddModalOpen(false);
            setForm({
                fullName: "",
                email: "",
                phoneNumber: "",
                location: "",
                topicInterestedIn: "General",
                background: "Student / Professional",
                heardAboutUs: "Website",
                consent: true,
                message: ""
            });
            fetchInquiries();
            setPopupModal({
                isOpen: true,
                type: "success",
                title: "Data Saved Successfully!",
                message: "Event inquiry entry has been recorded."
            });
        } catch (error) {
            console.error("Error saving inquiry:", error);
            setPopupModal({
                isOpen: true,
                type: "error",
                title: "Save Failed",
                message: error.message || "Failed to save inquiry data."
            });
        }
    };

    const openDeleteModal = (item) => {
        setDeleteModal({
            isOpen: true,
            id: item._id,
            title: item.fullName || "this submission"
        });
    };

    const executeDelete = async () => {
        if (!deleteModal.id) return;
        const targetId = deleteModal.id;
        const targetTitle = deleteModal.title;
        setDeleteModal({ isOpen: false, id: null, title: "" });

        try {
            const res = await fetch(`${API_BASE_URL}/event-inquiries/${targetId}`, {
                method: "DELETE",
                headers: getHeaders()
            });

            if (!res.ok) throw new Error("Failed to delete");

            fetchInquiries();
            setPopupModal({
                isOpen: true,
                type: "success",
                title: "Deleted Successfully",
                message: `Inquiry from "${targetTitle}" has been removed.`
            });
        } catch (error) {
            console.error("Error deleting inquiry:", error);
            setPopupModal({
                isOpen: true,
                type: "error",
                title: "Delete Failed",
                message: "Unable to delete inquiry record."
            });
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#f7f4fb] via-white to-[#f3ecfb] p-3 md:p-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-6 md:mb-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                        <p className="text-xs md:text-sm font-medium text-[#7c3aed] mb-1">
                            Admin Panel / Event Inquiries
                        </p>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                            User Event Form Submissions
                        </h2>
                        <p className="text-gray-500 mt-1 md:mt-2 text-xs md:text-base">
                            View all submissions from the Upcoming Events page form.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                        <button
                            onClick={() => setIsAddModalOpen(true)}
                            className="inline-flex items-center gap-2 bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-semibold px-4 py-3 rounded-xl md:rounded-2xl shadow-md transition text-sm"
                        >
                            <PlusCircle size={18} />
                            Add Inquiry Data
                        </button>
                        
                        <button
                            onClick={handleExportCSV}
                            disabled={inquiries.length === 0}
                            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-semibold px-4 py-3 rounded-xl md:rounded-2xl shadow-md transition text-sm"
                        >
                            <Download size={18} />
                            Save Data (CSV)
                        </button>

                        <div className="bg-white border border-purple-100 shadow-sm rounded-xl md:rounded-2xl px-4 py-2.5">
                            <p className="text-xs text-gray-500">Total Submissions</p>
                            <h3 className="text-xl font-bold text-[#6d28d9]">
                                {inquiries.length}
                            </h3>
                        </div>
                    </div>
                </div>

                {inquiries.length === 0 ? (
                    <div className="bg-white border border-purple-100 rounded-2xl md:rounded-3xl p-8 md:p-10 text-center shadow-sm">
                        <h4 className="text-lg md:text-xl font-bold text-gray-900">No submissions found</h4>
                        <p className="text-gray-500 mt-2 text-sm md:text-base">
                            User form entries from Upcoming Events will appear here.
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
                        {inquiries.map((item) => (
                            <div
                                key={item._id}
                                className="bg-white border border-purple-100 rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-sm hover:shadow-md transition"
                            >
                                <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-5 md:mb-6">
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-lg md:text-xl font-bold text-gray-900 truncate">
                                            {item.fullName}
                                        </h3>
                                        <p className="text-xs md:text-sm text-gray-500">
                                            {new Date(item.createdAt || Date.now()).toLocaleString()}
                                        </p>
                                    </div>

                                    <button
                                        onClick={() => openDeleteModal(item)}
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
                                            <span className="truncate">{item.phoneNumber}</span>
                                        </div>
                                        <div className="flex items-center gap-2.5 bg-gray-50/80 p-2.5 rounded-xl border border-gray-100">
                                            <MapPin size={16} className="text-purple-500 shrink-0" />
                                            <span className="truncate">{item.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2.5 bg-gray-50/80 p-2.5 rounded-xl border border-gray-100 cursor-default">
                                            <UserRound size={16} className="text-purple-500 shrink-0" />
                                            <span className="truncate text-xs">Topic: {item.topicInterestedIn}</span>
                                        </div>
                                    </div>

                                    <div className="bg-purple-50/40 p-3.5 md:p-4 rounded-xl space-y-2 text-xs md:text-sm">
                                        <p><span className="font-bold text-purple-700">Background:</span> {item.background}</p>
                                        <p><span className="font-bold text-purple-700">Heard About Us:</span> {item.heardAboutUs}</p>
                                        <p><span className="font-bold text-purple-700">Consent:</span> {item.consent ? "Yes" : "No"}</p>
                                    </div>

                                    <div className="p-3.5 md:p-4 bg-gray-50 rounded-xl border border-gray-100">
                                        <p className="font-bold text-gray-900 mb-2 uppercase text-[10px] tracking-wider">User Message</p>
                                        <p className="text-gray-600 whitespace-pre-line text-sm leading-relaxed">
                                            {item.message || "No message provided."}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Add Inquiry Modal */}
            {isAddModalOpen && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-2xl border border-gray-100 relative">
                        <button
                            onClick={() => setIsAddModalOpen(false)}
                            className="absolute top-5 right-5 text-gray-400 hover:text-gray-600"
                        >
                            <X size={20} />
                        </button>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Add Event Inquiry Data</h3>
                        <form onSubmit={handleSaveInquiry} className="space-y-4">
                            <div>
                                <label className="block text-xs font-semibold text-gray-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    required
                                    value={form.fullName}
                                    onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                                    className="w-full p-3 border rounded-xl text-sm focus:outline-purple-600"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-semibold text-gray-700 mb-1">Email</label>
                                    <input
                                        type="email"
                                        required
                                        value={form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                        className="w-full p-3 border rounded-xl text-sm focus:outline-purple-600"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-gray-700 mb-1">Phone Number</label>
                                    <input
                                        type="text"
                                        required
                                        value={form.phoneNumber}
                                        onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
                                        className="w-full p-3 border rounded-xl text-sm focus:outline-purple-600"
                                        placeholder="+91 9876543210"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-semibold text-gray-700 mb-1">Location</label>
                                    <input
                                        type="text"
                                        value={form.location}
                                        onChange={(e) => setForm({ ...form, location: e.target.value })}
                                        className="w-full p-3 border rounded-xl text-sm focus:outline-purple-600"
                                        placeholder="City, Country"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-gray-700 mb-1">Topic Interested In</label>
                                    <input
                                        type="text"
                                        value={form.topicInterestedIn}
                                        onChange={(e) => setForm({ ...form, topicInterestedIn: e.target.value })}
                                        className="w-full p-3 border rounded-xl text-sm focus:outline-purple-600"
                                        placeholder="Webinar / Counselling"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-gray-700 mb-1">Message</label>
                                <textarea
                                    rows={3}
                                    value={form.message}
                                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                                    className="w-full p-3 border rounded-xl text-sm focus:outline-purple-600"
                                    placeholder="User comments or notes..."
                                />
                            </div>
                            <div className="flex gap-3 pt-2">
                                <button
                                    type="button"
                                    onClick={() => setIsAddModalOpen(false)}
                                    className="flex-1 py-3 rounded-xl border border-gray-300 font-semibold text-gray-700 hover:bg-gray-50 transition"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 py-3 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-semibold shadow-lg shadow-purple-200 transition flex items-center justify-center gap-2"
                                >
                                    <Save size={18} />
                                    Save Entry
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Delete Confirmation Modal */}
            {deleteModal.isOpen && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl border border-gray-100 transform transition-all">
                        <div className="w-14 h-14 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Trash2 size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 text-center mb-2">Confirm Deletion</h3>
                        <p className="text-sm text-gray-600 text-center mb-6">
                            Are you sure you want to delete inquiry from <span className="font-semibold text-gray-900">"{deleteModal.title}"</span>?
                        </p>
                        <div className="flex gap-3">
                            <button
                                onClick={() => setDeleteModal({ isOpen: false, id: null, title: "" })}
                                className="flex-1 py-3 px-4 rounded-xl border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={executeDelete}
                                className="flex-1 py-3 px-4 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700 transition shadow-lg shadow-red-200"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Status Popup Modal */}
            {popupModal.isOpen && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl border border-gray-100 text-center transform transition-all">
                        {popupModal.type === "success" ? (
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle2 size={36} />
                            </div>
                        ) : (
                            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <AlertTriangle size={36} />
                            </div>
                        )}
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{popupModal.title}</h3>
                        <p className="text-sm text-gray-600 mb-6">{popupModal.message}</p>
                        <button
                            onClick={() => setPopupModal({ isOpen: false, type: "success", title: "", message: "" })}
                            className="w-full py-3 px-4 rounded-xl font-semibold text-white bg-purple-600 hover:bg-purple-700 transition shadow-lg shadow-purple-200"
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EventInquiriesAdmin;