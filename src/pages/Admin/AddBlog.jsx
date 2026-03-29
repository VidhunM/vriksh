import React, { useState, useEffect } from "react";
import API_BASE_URL from "../../api/config";

const AddBlog = () => {
    const [blogs, setBlogs] = useState([]);
    const [editingId, setEditingId] = useState(null);

    const [formData, setFormData] = useState({
        title: "",
        author: "",
        image: "",
        content: "",
        date: "",
        category: "Counselling",
        slug: ""
    });

    // Fetch blogs
    const fetchBlogs = async () => {
        const res = await fetch(`${API_BASE_URL}/blogs`);
        const data = await res.json();
        setBlogs(data);
    };
// eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        fetchBlogs();
    }, []);

    // Handle input
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Submit (Add / Edit)
    const handleSubmit = async (e) => {
        e.preventDefault();

        const url = editingId
            ? `${API_BASE_URL}/blogs/${editingId}`
            : `${API_BASE_URL}/blogs`;

        const method = editingId ? "PUT" : "POST";

        await fetch(url, {
            method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        setFormData({
            title: "",
            author: "",
            image: "",
            content: "",
            date: "",
            category: "Counselling",
            slug: ""
        });

        setEditingId(null);
        fetchBlogs();
    };

    // Delete
    const deleteBlog = async (id) => {
        await fetch(`${API_BASE_URL}/blogs/${id}`, {
            method: "DELETE"
        });
        fetchBlogs();
    };

    // Edit
    const editBlog = (blog) => {
        setFormData(blog);
        setEditingId(blog._id);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* LEFT: FORM */}
                <div className="bg-white shadow-lg rounded-2xl p-6">
                    <h2 className="text-2xl font-bold mb-6 text-[#520378]">
                        {editingId ? "Edit Blog" : "Add Blog"}
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-4">

                        <input name="title" placeholder="Title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full border p-3 rounded-lg" />

                        <input name="author" placeholder="Author"
                            value={formData.author}
                            onChange={handleChange}
                            className="w-full border p-3 rounded-lg" />

                        <input name="date" placeholder="MARCH 20, 2026"
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full border p-3 rounded-lg" />

                        <input name="image" placeholder="Image URL"
                            value={formData.image}
                            onChange={handleChange}
                            className="w-full border p-3 rounded-lg" />

                        <input name="slug" placeholder="Slug (optional)"
                            value={formData.slug}
                            onChange={handleChange}
                            className="w-full border p-3 rounded-lg" />

                        <textarea name="content" placeholder="Content"
                            value={formData.content}
                            onChange={handleChange}
                            rows="4"
                            className="w-full border p-3 rounded-lg" />

                        <button
                            type="submit"
                            className="w-full bg-[#520378] text-white py-3 rounded-lg font-semibold hover:bg-[#3d025a]"
                        >
                            {editingId ? "Update Blog" : "Add Blog"}
                        </button>
                    </form>
                </div>

                {/* CENTER: BLOG LIST */}
                <div className="lg:col-span-2 space-y-6">
                    <h2 className="text-3xl font-bold text-[#1A1A1A]">
                        All Blogs
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {blogs.map(blog => (
                            <div key={blog._id} className="bg-white rounded-2xl shadow-md overflow-hidden">

                                <img src={blog.image} alt=""
                                    className="h-40 w-full object-cover" />

                                <div className="p-4">
                                    <p className="text-sm text-gray-400">{blog.date}</p>

                                    <h3 className="text-lg font-bold mb-2">
                                        {blog.title}
                                    </h3>

                                    <p className="text-sm text-gray-600 mb-4">
                                        {blog.author}
                                    </p>

                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => editBlog(blog)}
                                            className="bg-blue-500 text-white px-3 py-1 rounded"
                                        >
                                            Edit
                                        </button>

                                        <button
                                            onClick={() => deleteBlog(blog._id)}
                                            className="bg-red-500 text-white px-3 py-1 rounded"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBlog;