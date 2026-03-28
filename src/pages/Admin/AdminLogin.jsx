import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        if (email === "admin@vriksh.com" && password === "admin123") {
            localStorage.setItem("admin", true);
            navigate("/admin/dashboard");
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-lg w-96">
                <h2 className="text-2xl font-bold mb-6 text-center text-purple-700">
                    Admin Login
                </h2>

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full mb-4 p-3 border rounded"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full mb-4 p-3 border rounded"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button className="w-full bg-purple-700 text-white py-3 rounded">
                    Login
                </button>
            </form>
        </div>
    );
};

export default AdminLogin;