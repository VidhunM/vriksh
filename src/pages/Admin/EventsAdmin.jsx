import React, { useEffect, useState } from "react";
import {
    Pencil,
    Trash2,
    PlusCircle,
    CalendarDays,
    Clock3,
    IndianRupee,
    Link as LinkIcon,
    Layers3
} from "lucide-react";

const defaultRegistrationLink =
    "https://docs.google.com/forms/d/e/1FAIpQLScv1Mc0UCKWzHuRPmqcTKOmR7q6tqSrX9qWJQCtGlh7PbNitg/viewform";

const eventTypeOptions = ["Workshop", "Webinar", "Training Program"];
const levelOptions = ["Beginner", "Intermediate", "All Levels"];

const formatDateForSave = (dateValue) => {
    if (!dateValue) return "";
    const [year, month, day] = dateValue.split("-");
    return `${day}-${month}-${year}`;
};

const formatDateForInput = (dateValue) => {
    if (!dateValue) return "";
    if (dateValue.includes("-") && dateValue.split("-")[0].length === 4) {
        return dateValue;
    }
    const parts = dateValue.split("-");
    if (parts.length === 3) {
        const [day, month, year] = parts;
        return `${year}-${month}-${day}`;
    }
    return "";
};

const convert24HourTo12Hour = (time24) => {
    if (!time24) return "";
    const [hourStr, minute] = time24.split(":");
    let hour = parseInt(hourStr, 10);
    const period = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;
    return `${hour}:${minute} ${period}`;
};

const buildTimeRange = (startTime, endTime) => {
    if (!startTime || !endTime) return "";
    return `${convert24HourTo12Hour(startTime)} - ${convert24HourTo12Hour(endTime)}`;
};

const convert12HourTo24Hour = (time12) => {
    if (!time12) return "";
    const [time, period] = time12.trim().split(" ");
    if (!time || !period) return "";
    let [hours, minutes] = time.split(":").map(Number);

    if (period.toUpperCase() === "PM" && hours !== 12) hours += 12;
    if (period.toUpperCase() === "AM" && hours === 12) hours = 0;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
};

const parseTimeRange = (range) => {
    if (!range || !range.includes(" - ")) {
        return { startTime: "", endTime: "" };
    }

    const [start, end] = range.split(" - ");
    return {
        startTime: convert12HourTo24Hour(start),
        endTime: convert12HourTo24Hour(end)
    };
};

const EventsAdmin = () => {
    const [events, setEvents] = useState([]);
    const [editId, setEditId] = useState(null);

    const [form, setForm] = useState({
        image: "",
        type: eventTypeOptions[0],
        level: levelOptions[0],
        date: "",
        startTime: "",
        endTime: "",
        price: "",
        title: "",
        description: "",
        registrationLink: defaultRegistrationLink
    });

    const fetchEvents = async () => {
        try {
            const res = await fetch("http://localhost:5000/events");
            const data = await res.json();
            setEvents(data);
        } catch (error) {
            console.error("Error fetching events:", error);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const resetForm = () => {
        setForm({
            image: "",
            type: eventTypeOptions[0],
            level: levelOptions[0],
            date: "",
            startTime: "",
            endTime: "",
            price: "",
            title: "",
            description: "",
            registrationLink: defaultRegistrationLink
        });
        setEditId(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const method = editId ? "PUT" : "POST";
            const url = editId
                ? `http://localhost:5000/events/${editId}`
                : "http://localhost:5000/events";

            const payload = {
                image: form.image,
                type: form.type,
                level: form.level,
                date: formatDateForSave(form.date),
                time: buildTimeRange(form.startTime, form.endTime),
                price: form.price,
                title: form.title,
                description: form.description,
                registrationLink: form.registrationLink?.trim() || defaultRegistrationLink
            };

            await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            resetForm();
            fetchEvents();
        } catch (error) {
            console.error("Error saving event:", error);
        }
    };

    const handleEdit = (event) => {
        const parsedTime = parseTimeRange(event.time || "");

        setForm({
            image: event.image || "",
            type: event.type || eventTypeOptions[0],
            level: event.level || levelOptions[0],
            date: formatDateForInput(event.date || ""),
            startTime: parsedTime.startTime,
            endTime: parsedTime.endTime,
            price: event.price || "",
            title: event.title || "",
            description: event.description || "",
            registrationLink: event.registrationLink || defaultRegistrationLink
        });

        setEditId(event._id);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleDelete = async (id) => {
        try {
            await fetch(`http://localhost:5000/events/${id}`, {
                method: "DELETE"
            });
            fetchEvents();
        } catch (error) {
            console.error("Error deleting event:", error);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#f7f4fb] via-white to-[#f3ecfb] p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                        <p className="text-sm font-medium text-[#7c3aed] mb-2">
                            Admin Panel / Event Management
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            {editId ? "Edit Event" : "Manage Events"}
                        </h2>
                        <p className="text-gray-500 mt-2 text-sm md:text-base">
                            Create, update, and organize upcoming events.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 w-full lg:w-auto">
                        <div className="bg-white border border-purple-100 shadow-sm rounded-2xl px-5 py-4 min-w-[160px]">
                            <p className="text-sm text-gray-500">Total Events</p>
                            <h3 className="text-2xl font-bold text-[#6d28d9]">
                                {events.length}
                            </h3>
                        </div>
                        <div className="bg-white border border-purple-100 shadow-sm rounded-2xl px-5 py-4 min-w-[160px]">
                            <p className="text-sm text-gray-500">Status</p>
                            <h3 className="text-lg font-semibold text-green-600">
                                Active
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="bg-white/90 backdrop-blur-sm border border-purple-100 shadow-xl rounded-3xl p-5 md:p-8 mb-10">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-fuchsia-500 flex items-center justify-center text-white shadow-md">
                            <CalendarDays size={22} />
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                                {editId ? "Update Event Details" : "Create New Event"}
                            </h3>
                            <p className="text-sm text-gray-500">
                                Fill in the event information below.
                            </p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="text-sm font-semibold text-gray-700 mb-2 block">
                                    Image URL
                                </label>
                                <input
                                    type="text"
                                    name="image"
                                    value={form.image}
                                    onChange={handleChange}
                                    placeholder="Paste event image URL"
                                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none px-4 py-3.5 text-gray-800 transition"
                                    required
                                />
                            </div>

                            <div>
                                <label className="text-sm font-semibold text-gray-700 mb-2 block">
                                    Event Type
                                </label>
                                <select
                                    name="type"
                                    value={form.type}
                                    onChange={handleChange}
                                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none px-4 py-3.5 text-gray-800 transition"
                                    required
                                >
                                    {eventTypeOptions.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="text-sm font-semibold text-gray-700 mb-2 block">
                                    Level
                                </label>
                                <select
                                    name="level"
                                    value={form.level}
                                    onChange={handleChange}
                                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none px-4 py-3.5 text-gray-800 transition"
                                    required
                                >
                                    {levelOptions.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="text-sm font-semibold text-gray-700 mb-2 block">
                                    Date
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    value={form.date}
                                    onChange={handleChange}
                                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none px-4 py-3.5 text-gray-800 transition"
                                    required
                                />
                            </div>

                            <div>
                                <label className="text-sm font-semibold text-gray-700 mb-2 block">
                                    Start Time
                                </label>
                                <input
                                    type="time"
                                    name="startTime"
                                    value={form.startTime}
                                    onChange={handleChange}
                                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none px-4 py-3.5 text-gray-800 transition"
                                    required
                                />
                            </div>

                            <div>
                                <label className="text-sm font-semibold text-gray-700 mb-2 block">
                                    End Time
                                </label>
                                <input
                                    type="time"
                                    name="endTime"
                                    value={form.endTime}
                                    onChange={handleChange}
                                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none px-4 py-3.5 text-gray-800 transition"
                                    required
                                />
                            </div>

                            <div>
                                <label className="text-sm font-semibold text-gray-700 mb-2 block">
                                    Price
                                </label>
                                <input
                                    type="text"
                                    name="price"
                                    value={form.price}
                                    onChange={handleChange}
                                    placeholder="₹499 / FREE"
                                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none px-4 py-3.5 text-gray-800 transition"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="text-sm font-semibold text-gray-700 mb-2 block">
                                Title
                            </label>
                            <input
                                type="text"
                                name="title"
                                value={form.title}
                                onChange={handleChange}
                                placeholder="Enter event title"
                                className="w-full rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none px-4 py-3.5 text-gray-800 transition"
                                required
                            />
                        </div>

                        <div>
                            <label className="text-sm font-semibold text-gray-700 mb-2 block">
                                Description
                            </label>
                            <textarea
                                name="description"
                                value={form.description}
                                onChange={handleChange}
                                rows={6}
                                placeholder="Write the full event description here..."
                                className="w-full rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none px-4 py-4 text-gray-800 transition resize-none"
                                required
                            />
                        </div>

                        <div>
                            <label className="text-sm font-semibold text-gray-700 mb-2 block">
                                Registration Link
                            </label>
                            <input
                                type="text"
                                name="registrationLink"
                                value={form.registrationLink}
                                onChange={handleChange}
                                placeholder="Paste registration link"
                                className="w-full rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none px-4 py-3.5 text-gray-800 transition"
                            />
                        </div>

                        {form.image && (
                            <div className="rounded-2xl border border-dashed border-purple-200 bg-purple-50/50 p-4">
                                <p className="text-sm font-medium text-gray-700 mb-3">
                                    Image Preview
                                </p>
                                <img
                                    src={form.image}
                                    alt="Preview"
                                    className="w-full max-w-md h-56 object-cover rounded-2xl shadow-sm border border-white"
                                    onError={(e) => {
                                        e.target.style.display = "none";
                                    }}
                                />
                            </div>
                        )}

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-purple-700 to-fuchsia-600 px-6 py-3.5 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all"
                            >
                                <PlusCircle size={18} />
                                {editId ? "Update Event" : "Add Event"}
                            </button>

                            {editId && (
                                <button
                                    type="button"
                                    onClick={resetForm}
                                    className="rounded-2xl border border-gray-200 bg-white px-6 py-3.5 text-gray-700 font-semibold hover:bg-gray-50 transition"
                                >
                                    Cancel Edit
                                </button>
                            )}
                        </div>
                    </form>
                </div>

                <div>
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900">
                                Created Events
                            </h3>
                            <p className="text-sm text-gray-500 mt-1">
                                Manage all upcoming events added from the admin panel.
                            </p>
                        </div>
                    </div>

                    {events.length === 0 ? (
                        <div className="bg-white border border-purple-100 rounded-3xl p-10 text-center shadow-sm">
                            <div className="w-16 h-16 mx-auto rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center mb-4">
                                <CalendarDays size={28} />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900">
                                No events found
                            </h4>
                            <p className="text-gray-500 mt-2">
                                Start by adding your first event from the form above.
                            </p>
                        </div>
                    ) : (
                        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                            {events.map((event) => (
                                <div
                                    key={event._id}
                                    className="group bg-white border border-purple-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                >
                                    <div className="relative">
                                        <img
                                            src={event.image}
                                            alt={event.title}
                                            className="h-52 w-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-80" />
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <span className="inline-block text-xs font-semibold bg-white/90 text-purple-700 px-3 py-1 rounded-full">
                                                {event.type || "Event"}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-5">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                                            {event.title}
                                        </h3>

                                        <div className="space-y-2 mb-4 text-sm text-gray-500">
                                            <p className="flex items-center gap-2">
                                                <CalendarDays size={15} className="text-purple-500" />
                                                {event.date || "No date"}
                                            </p>
                                            <p className="flex items-center gap-2">
                                                <Clock3 size={15} className="text-purple-500" />
                                                {event.time || "No time"}
                                            </p>
                                            <p className="flex items-center gap-2">
                                                <Layers3 size={15} className="text-purple-500" />
                                                {event.level || "All Levels"}
                                            </p>
                                            <p className="flex items-center gap-2">
                                                <IndianRupee size={15} className="text-purple-500" />
                                                {event.price || "Free"}
                                            </p>
                                            <p className="flex items-center gap-2 truncate">
                                                <LinkIcon size={15} className="text-purple-500" />
                                                {event.registrationLink || defaultRegistrationLink}
                                            </p>
                                        </div>

                                        <p className="text-sm text-gray-600 line-clamp-3 min-h-[60px]">
                                            {event.description || "No description available for this event."}
                                        </p>

                                        <div className="flex gap-3 mt-5">
                                            <button
                                                onClick={() => handleEdit(event)}
                                                className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-50 text-blue-700 font-semibold py-3 hover:bg-blue-100 transition"
                                            >
                                                <Pencil size={16} />
                                                Edit
                                            </button>

                                            <button
                                                onClick={() => handleDelete(event._id)}
                                                className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-red-50 text-red-600 font-semibold py-3 hover:bg-red-100 transition"
                                            >
                                                <Trash2 size={16} />
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EventsAdmin;