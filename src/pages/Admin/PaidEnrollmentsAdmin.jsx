import React, { useEffect, useState } from "react";
import { Mail, MapPin, Phone, Trash2, GraduationCap, Download, PlusCircle, CheckCircle2, AlertTriangle, Save, X } from "lucide-react";
import API_BASE_URL, { getHeaders } from "../../api/config";

const PaidEnrollmentsAdmin = () => {
    const [enrollments, setEnrollments] = useState([]);
    const [deleteModal, setDeleteModal] = useState({ isOpen: false, id: null, title: "" });
    const [popupModal, setPopupModal] = useState({ isOpen: false, type: "success", title: "", message: "" });
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const [form, setForm] = useState({
        name: "",
        email: "",
        whatsappNumber: "",
        location: "",
        designation: "Participant",
        razorpayPaymentId: "",
        eventTitle: ""
    });

    const fetchEnrollments = async () => {
        try {
            const res = await fetch(`${API_BASE_URL}/event-enrollments`, {
                headers: getHeaders()
            });
            const data = await res.json();
            setEnrollments(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error("Error fetching enrollments:", error);
            setEnrollments([]);
        }
    };

    useEffect(() => {
        fetchEnrollments();
    }, []);

    const handleExportCSV = () => {
        if (enrollments.length === 0) return;
        const headers = ["Name", "Email", "WhatsApp Number", "Location", "Designation", "Event Title", "Payment ID", "Date"];
        const csvRows = [headers.join(",")];

        enrollments.forEach(item => {
            const row = [
                `"${(item.name || "").replace(/"/g, '""')}"`,
                `"${(item.email || "").replace(/"/g, '""')}"`,
                `"${(item.whatsappNumber || "").replace(/"/g, '""')}"`,
                `"${(item.location || "").replace(/"/g, '""')}"`,
                `"${(item.designation || "").replace(/"/g, '""')}"`,
                `"${(item.eventId?.title || item.eventTitle || "").replace(/"/g, '""')}"`,
                `"${(item.razorpayPaymentId || "").replace(/"/g, '""')}"`,
                `"${new Date(item.createdAt || Date.now()).toLocaleString()}"`
            ];
            csvRows.push(row.join(","));
        });

        const csvContent = "data:text/csv;charset=utf-8," + csvRows.join("\n");
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", `Paid_Enrollments_${new Date().toISOString().slice(0, 10)}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleSaveEnrollment = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`${API_BASE_URL}/event-enrollments`, {
                method: "POST",
                headers: getHeaders({ "Content-Type": "application/json" }),
                body: JSON.stringify(form)
            });
            if (!res.ok) throw new Error("Failed to save enrollment data");

            setIsAddModalOpen(false);
            setForm({
                name: "",
                email: "",
                whatsappNumber: "",
                location: "",
                designation: "Participant",
                razorpayPaymentId: "",
                eventTitle: ""
            });
            fetchEnrollments();
            setPopupModal({
                isOpen: true,
                type: "success",
                title: "Data Saved Successfully!",
                message: "Paid enrollment entry has been recorded."
            });
        } catch (error) {
            console.error("Error saving enrollment:", error);
            setPopupModal({
                isOpen: true,
                type: "error",
                title: "Save Failed",
                message: error.message || "Failed to save enrollment data."
            });
        }
    };

    const openDeleteModal = (item) => {
        setDeleteModal({
            isOpen: true,
            id: item._id,
            title: item.name || "this enrollment"
        });
    };

    const executeDelete = async () => {
        if (!deleteModal.id) return;
        const targetId = deleteModal.id;
        const targetTitle = deleteModal.title;
        setDeleteModal({ isOpen: false, id: null, title: "" });

        try {
            const res = await fetch(`${API_BASE_URL}/event-enrollments/${targetId}`, {
                method: "DELETE",
                headers: getHeaders()
            });

            if (!res.ok) throw new Error("Failed to delete");

            fetchEnrollments();
            setPopupModal({
                isOpen: true,
                type: "success",
                title: "Deleted Successfully",
                message: `Enrollment for "${targetTitle}" has been removed.`
            });
        } catch (error) {
            console.error("Error deleting enrollment:", error);
            setPopupModal({
                isOpen: true,
                type: "error",
                title: "Delete Failed",
                message: "Unable to delete enrollment record."
            });
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

                    <div className="flex flex-wrap items-center gap-3">
                        <button
                            onClick={() => setIsAddModalOpen(true)}
                            className="inline-flex items-center gap-2 bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-semibold px-4 py-3 rounded-xl md:rounded-2xl shadow-md transition text-sm"
                        >
                            <PlusCircle size={18} />
                            Add Enrollment Data
                        </button>

                        <button
                            onClick={handleExportCSV}
                            disabled={enrollments.length === 0}
                            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-semibold px-4 py-3 rounded-xl md:rounded-2xl shadow-md transition text-sm"
                        >
                            <Download size={18} />
                            Save Data (CSV)
                        </button>

                        <div className="bg-white border border-purple-100 shadow-sm rounded-xl md:rounded-2xl px-4 py-2.5">
                            <p className="text-xs text-gray-500">Total Paid Enrollments</p>
                            <h3 className="text-xl font-bold text-[#6d28d9]">
                                {enrollments.length}
                            </h3>
                        </div>
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
                                            Date: {new Date(item.createdAt || Date.now()).toLocaleString()}
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
                                            {item.eventId?.title || item.eventTitle || "N/A"}
                                        </p>
                                    </div>

                                    <div className="bg-green-50/50 p-3.5 md:p-4 rounded-xl border border-green-100">
                                        <p className="font-bold text-green-700 mb-1 uppercase text-[10px] tracking-wider">Payment Information</p>
                                        <p className="text-gray-700 text-sm font-medium">
                                            Razorpay ID: {item.razorpayPaymentId || "Manual Entry"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Add Enrollment Modal */}
            {isAddModalOpen && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-2xl border border-gray-100 relative">
                        <button
                            onClick={() => setIsAddModalOpen(false)}
                            className="absolute top-5 right-5 text-gray-400 hover:text-gray-600"
                        >
                            <X size={20} />
                        </button>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Add Paid Enrollment Data</h3>
                        <form onSubmit={handleSaveEnrollment} className="space-y-4">
                            <div>
                                <label className="block text-xs font-semibold text-gray-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    required
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    className="w-full p-3 border rounded-xl text-sm focus:outline-purple-600"
                                    placeholder="Jane Doe"
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
                                        placeholder="jane@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-gray-700 mb-1">WhatsApp Number</label>
                                    <input
                                        type="text"
                                        required
                                        value={form.whatsappNumber}
                                        onChange={(e) => setForm({ ...form, whatsappNumber: e.target.value })}
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
                                    <label className="block text-xs font-semibold text-gray-700 mb-1">Designation</label>
                                    <input
                                        type="text"
                                        value={form.designation}
                                        onChange={(e) => setForm({ ...form, designation: e.target.value })}
                                        className="w-full p-3 border rounded-xl text-sm focus:outline-purple-600"
                                        placeholder="Student / Teacher / Other"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-semibold text-gray-700 mb-1">Event Title</label>
                                    <input
                                        type="text"
                                        value={form.eventTitle}
                                        onChange={(e) => setForm({ ...form, eventTitle: e.target.value })}
                                        className="w-full p-3 border rounded-xl text-sm focus:outline-purple-600"
                                        placeholder="Name of Event"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-gray-700 mb-1">Razorpay Payment ID</label>
                                    <input
                                        type="text"
                                        value={form.razorpayPaymentId}
                                        onChange={(e) => setForm({ ...form, razorpayPaymentId: e.target.value })}
                                        className="w-full p-3 border rounded-xl text-sm focus:outline-purple-600"
                                        placeholder="pay_P12345678"
                                    />
                                </div>
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
                            Are you sure you want to delete enrollment of <span className="font-semibold text-gray-900">"{deleteModal.title}"</span>?
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

export default PaidEnrollmentsAdmin;
