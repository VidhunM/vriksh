import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { LayoutDashboard, FileText, CalendarDays, Shield, Mail } from "lucide-react";

const AdminLayout = () => {
    const location = useLocation();

    const navItems = [
        {
            name: "Dashboard",
            path: "/admin/dashboard",
            icon: <LayoutDashboard size={18} />
        },
        {
            name: "Blogs",
            path: "/admin/blogs",
            icon: <FileText size={18} />
        },
        {
            name: "Events",
            path: "/admin/events",
            icon: <CalendarDays size={18} />
        },
        {
            name: "Event Inquiries",
            path: "/admin/event-inquiries",
            icon: <Mail size={18} />
        }

    ];

    return (
        <div className="min-h-screen bg-[#f6f3fb] flex">
            {/* Sidebar */}
            <aside className="w-[280px] bg-gradient-to-b from-[#4b0b78] to-[#6a11cb] text-white border-r border-white/10 shadow-2xl flex flex-col">
                {/* Brand */}
                <div className="px-6 py-7 border-b border-white/10">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center shadow-md">
                            <Shield size={22} />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold tracking-wide">Vriksh Admin</h2>
                            <p className="text-sm text-white/70">Management Panel</p>
                        </div>
                    </div>
                </div>

                {/* Nav */}
                <nav className="p-5 space-y-3">
                    {navItems.map((item) => {
                        const isActive =
                            location.pathname === item.path ||
                            location.pathname.startsWith(item.path + "/");

                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`flex items-center gap-3 rounded-2xl px-4 py-3.5 border transition-all duration-200 ${
                                    isActive
                                        ? "bg-white text-[#5b1693] border-white shadow-lg"
                                        : "bg-white/8 text-white border-white/10 hover:bg-white/14 hover:border-white/20"
                                }`}
                            >
                                <span className={isActive ? "text-[#7b2cbf]" : "text-white/90"}>
                                    {item.icon}
                                </span>
                                <span className="font-semibold text-[15px]">{item.name}</span>
                            </Link>
                        );
                    })}
                </nav>

                {/* Bottom info */}
                <div className="mt-auto p-5">
                    <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                        <p className="text-sm font-semibold">Admin Workspace</p>
                        <p className="text-xs text-white/70 mt-1">
                            Manage blogs, events, and dashboard content from here.
                        </p>
                    </div>
                </div>
            </aside>

            {/* Main */}
            <main className="flex-1 bg-[#f8f6fc] p-6 md:p-8 overflow-x-hidden">
                <Outlet />
            </main>
        </div>
    );
};

export default AdminLayout;