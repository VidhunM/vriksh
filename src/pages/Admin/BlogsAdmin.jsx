import React, { useEffect, useState } from "react";
import { Pencil, Trash2, PlusCircle, FileText, CalendarDays, User, Image as ImageIcon, Link as LinkIcon, Upload, Layers as Layers3 } from "lucide-react";
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

const BlogsAdmin = () => {
    const formatDateForDisplay = (dateStr) => {
        if (!dateStr) return "";
        // If it's already in a readable format, return it
        if (isNaN(Date.parse(dateStr))) return dateStr;
        
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', {
            month: 'long',
            day: '2-digit',
            year: 'numeric'
        }).toUpperCase();
    };

    const formatDateForInput = (dateStr) => {
        if (!dateStr) return "";
        const date = new Date(dateStr);
        if (isNaN(date.getTime())) return "";
        return date.toISOString().split('T')[0];
    };

    const [blogs, setBlogs] = useState([]);
    const [form, setForm] = useState({
        title: "",
        author: "",
        date: "",
        category: "Counselling",
        image: "",
        slug: "",
        content: ""
    });
    const [editId, setEditId] = useState(null);

    const quillModules = {
        toolbar: [
            [{ 'header': [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link', 'image'],
            ['clean']
        ],
    };

    const quillFormats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet',
        'link', 'image'
    ];

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setForm({ ...form, image: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const fetchBlogs = async () => {
        try {
            const res = await fetch("http://localhost:5000/blogs");
            const data = await res.json();
            setBlogs(data);
        } catch (error) {
            console.error("Error fetching blogs:", error);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const method = editId ? "PUT" : "POST";
            const url = editId
                ? `http://localhost:5000/blogs/${editId}`
                : "http://localhost:5000/blogs";

            const payload = {
                ...form,
                date: formatDateForDisplay(form.date)
            };

            await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            setForm({
                title: "",
                author: "",
                date: "",
                category: "Counselling",
                image: "",
                slug: "",
                content: ""
            });
            setEditId(null);
            fetchBlogs();
        } catch (error) {
            console.error("Error saving blog:", error);
        }
    };

    const deleteBlog = async (id) => {
        try {
            await fetch(`http://localhost:5000/blogs/${id}`, {
                method: "DELETE"
            });
            fetchBlogs();
        } catch (error) {
            console.error("Error deleting blog:", error);
        }
    };

    const editBlog = (blog) => {
        setForm({
            title: blog.title || "",
            author: blog.author || "",
            date: blog.date || "",
            category: blog.category || "Counselling",
            image: blog.image || "",
            slug: blog.slug || "",
            content: blog.content || ""
        });
        setEditId(blog._id);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#f7f4fb] via-white to-[#f3ecfb] p-3 md:p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-6 md:mb-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                        <p className="text-xs md:text-sm font-medium text-[#7c3aed] mb-1">Admin Panel / Blog Management</p>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                            {editId ? "Edit Blog" : "Manage Blogs"}
                        </h2>
                        <p className="text-gray-500 mt-1 md:mt-2 text-xs md:text-base">
                            Add, update, and organize blog content from the admin dashboard.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 md:gap-4 w-full lg:w-auto">
                        <div className="bg-white border border-purple-100 shadow-sm rounded-xl md:rounded-2xl px-4 md:px-5 py-3 md:py-4">
                            <p className="text-xs md:text-sm text-gray-500">Total Blogs</p>
                            <h3 className="text-xl md:text-2xl font-bold text-[#6d28d9]">{blogs.length}</h3>
                        </div>
                        <div className="bg-white border border-purple-100 shadow-sm rounded-xl md:rounded-2xl px-4 md:px-5 py-3 md:py-4">
                            <p className="text-xs md:text-sm text-gray-500">Status</p>
                            <h3 className="text-base md:text-lg font-semibold text-green-600">Active</h3>
                        </div>
                    </div>
                </div>

                {/* Form Section */}
                <div className="bg-white/90 backdrop-blur-sm border border-purple-100 shadow-xl rounded-2xl md:rounded-3xl p-4 md:p-8 mb-8 md:mb-10">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gradient-to-br from-purple-600 to-fuchsia-500 flex items-center justify-center text-white shadow-md">
                            <FileText size={20} className="md:w-6 md:h-6" />
                        </div>
                        <div>
                            <h3 className="text-lg md:text-2xl font-bold text-gray-900">
                                {editId ? "Update Blog Details" : "Create New Blog"}
                            </h3>
                            <p className="text-xs md:text-sm text-gray-500">
                                Fill in the blog information below.
                            </p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                            <div>
                                <label className="text-xs md:text-sm font-semibold text-gray-700 mb-1.5 block">Title</label>
                                <div className="relative">
                                    <input
                                        placeholder="Enter blog title"
                                        value={form.title}
                                        onChange={(e) => setForm({ ...form, title: e.target.value })}
                                        className="w-full rounded-xl md:rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none px-3.5 md:px-4 py-3 md:py-3.5 text-sm md:text-gray-800 transition"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-xs md:text-sm font-semibold text-gray-700 mb-1.5 block">Author</label>
                                <div className="relative">
                                    <input
                                        placeholder="Enter author name"
                                        value={form.author}
                                        onChange={(e) => setForm({ ...form, author: e.target.value })}
                                        className="w-full rounded-xl md:rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none px-3.5 md:px-4 py-3 md:py-3.5 text-sm md:text-gray-800 transition"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-xs md:text-sm font-semibold text-gray-700 mb-1.5 block">Date</label>
                                <div className="relative">
                                    <input
                                        type="date"
                                        value={formatDateForInput(form.date)}
                                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                                        className="w-full rounded-xl md:rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none px-3.5 md:px-4 py-3 md:py-3.5 text-sm md:text-gray-800 transition"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-xs md:text-sm font-semibold text-gray-700 mb-1.5 block">Blog Image</label>
                                <div className="relative group">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        className="hidden"
                                        id="blog-image-upload"
                                    />
                                    <label
                                        htmlFor="blog-image-upload"
                                        className="flex items-center gap-2 w-full rounded-xl md:rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 hover:bg-white hover:border-purple-500 cursor-pointer px-3.5 md:px-4 py-2.5 md:py-3 text-sm text-gray-600 transition"
                                    >
                                        <Upload size={18} className="text-purple-500" />
                                        <span className="truncate">{form.image ? "Change Image" : "Upload Blog Image"}</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="text-sm font-semibold text-gray-700 mb-2 block">Slug</label>
                                <input
                                    placeholder="Enter blog slug"
                                    value={form.slug}
                                    onChange={(e) => setForm({ ...form, slug: e.target.value })}
                                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none px-4 py-3.5 text-gray-800 transition"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-semibold text-gray-700 mb-2 block">Category</label>
                                <select
                                    value={form.category}
                                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none px-4 py-3.5 text-gray-800 transition"
                                >
                                    <option value="Counselling">Counselling</option>
                                    <option value="Institutional">Institutional</option>
                                    <option value="Workshop">Workshop</option>
                                </select>
                            </div>
                        </div>

                        <div className="quill-editor-container">
                            <label className="text-xs md:text-sm font-semibold text-gray-700 mb-1.5 block">Content</label>
                            <div className="bg-white rounded-xl md:rounded-2xl overflow-hidden border border-gray-200 focus-within:border-purple-500 focus-within:ring-4 focus-within:ring-purple-100 transition">
                                <ReactQuill 
                                    theme="snow"
                                    value={form.content}
                                    onChange={(content) => setForm({ ...form, content })}
                                    modules={quillModules}
                                    formats={quillFormats}
                                    placeholder="Write the full blog content here..."
                                    className="h-48 md:h-64"
                                />
                            </div>
                            <style>{`
                                .quill-editor-container .ql-container {
                                    border-bottom-left-radius: 12px;
                                    border-bottom-right-radius: 12px;
                                    font-family: inherit;
                                }
                                .quill-editor-container .ql-toolbar {
                                    border-top-left-radius: 12px;
                                    border-top-right-radius: 12px;
                                    background: #f9fafb;
                                    border-color: transparent !important;
                                    border-bottom: 1px solid #e5e7eb !important;
                                    padding: 8px !important;
                                }
                                .quill-editor-container .ql-container {
                                    border-color: transparent !important;
                                    font-size: 0.95rem;
                                }
                                @media (max-width: 640px) {
                                    .quill-editor-container .ql-editor {
                                        min-height: 150px;
                                    }
                                    .quill-editor-container .ql-toolbar .ql-formats {
                                        margin-right: 8px !important;
                                    }
                                }
                                .quill-editor-container .ql-editor {
                                    min-height: 200px;
                                }
                                .quill-editor-container .ql-editor.ql-blank::before {
                                    color: #9ca3af;
                                    font-style: normal;
                                }
                            `}</style>
                        </div>

                        {/* Image Preview */}
                        {form.image && (
                            <div className="rounded-2xl border border-dashed border-purple-200 bg-purple-50/50 p-4">
                                <p className="text-sm font-medium text-gray-700 mb-3">Image Preview</p>
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
                                {editId ? "Update Blog" : "Add Blog"}
                            </button>

                            {editId && (
                                <button
                                    type="button"
                                    onClick={() => {
                                        setForm({
                                            title: "",
                                            author: "",
                                            date: "",
                                            image: "",
                                            slug: "",
                                            content: ""
                                        });
                                        setEditId(null);
                                    }}
                                    className="rounded-2xl border border-gray-200 bg-white px-6 py-3.5 text-gray-700 font-semibold hover:bg-gray-50 transition"
                                >
                                    Cancel Edit
                                </button>
                            )}
                        </div>
                    </form>
                </div>

                {/* Blog List Section */}
                <div>
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900">Published Blogs</h3>
                            <p className="text-xs md:text-sm text-gray-500 mt-1">
                                Manage all blogs added from the admin panel.
                            </p>
                        </div>
                    </div>

                    {blogs.length === 0 ? (
                        <div className="bg-white border border-purple-100 rounded-2xl md:rounded-3xl p-8 md:p-10 text-center shadow-sm">
                            <div className="w-14 h-14 md:w-16 md:h-16 mx-auto rounded-xl md:rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center mb-4">
                                <FileText size={24} className="md:w-7 md:h-7" />
                            </div>
                            <h4 className="text-lg md:text-xl font-bold text-gray-900">No blogs found</h4>
                            <p className="text-gray-500 mt-2 text-sm md:text-base">
                                Start by adding your first blog from the form above.
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
                            {blogs.map((blog) => (
                                <div
                                    key={blog._id}
                                    className="group bg-white border border-purple-100 rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                >
                                    <div className="relative">
                                        <img
                                            src={blog.image}
                                            alt={blog.title}
                                            className="h-48 md:h-52 w-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-80" />
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <span className="inline-block text-[10px] md:text-xs font-semibold bg-white/90 text-purple-700 px-2.5 py-1 rounded-full">
                                                Blog Post
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-4 md:p-5">
                                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 line-clamp-2 leading-tight">
                                            {blog.title}
                                        </h3>

                                        <div className="space-y-1.5 md:space-y-2 mb-4 text-xs md:text-sm text-gray-500">
                                            <p className="flex items-center gap-2">
                                                <User size={14} className="text-purple-500" />
                                                {blog.author || "Unknown Author"}
                                            </p>
                                            <p className="flex items-center gap-2">
                                                <CalendarDays size={14} className="text-purple-500" />
                                                {blog.date || "No date"}
                                            </p>
                                            <p className="flex items-center gap-2 truncate pr-2">
                                                <LinkIcon size={14} className="text-purple-500 shrink-0" />
                                                <span className="truncate">{blog.slug || "No slug"}</span>
                                            </p>
                                            <p className="flex items-center gap-2">
                                                <Layers3 size={14} className="text-purple-500" />
                                                {blog.category || "Counselling"}
                                            </p>
                                        </div>

                                        <div 
                                            className="text-xs md:text-sm text-gray-600 line-clamp-3 min-h-[50px] md:min-h-[60px]"
                                            dangerouslySetInnerHTML={{ __html: blog.content || "No content available for this blog." }}
                                        />

                                        <div className="flex gap-3 mt-4 md:mt-5">
                                            <button
                                                onClick={() => editBlog(blog)}
                                                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl md:rounded-2xl bg-blue-50 text-blue-700 text-sm font-semibold py-2.5 md:py-3 hover:bg-blue-100 transition"
                                            >
                                                <Pencil size={15} />
                                                Edit
                                            </button>

                                            <button
                                                onClick={() => deleteBlog(blog._id)}
                                                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl md:rounded-2xl bg-red-50 text-red-600 text-sm font-semibold py-2.5 md:py-3 hover:bg-red-100 transition"
                                            >
                                                <Trash2 size={15} />
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

export default BlogsAdmin;