import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { 
    LayoutDashboard, 
    FileText, 
    CalendarDays, 
    Mail, 
    Menu, 
    X 
} from "lucide-react";

const AdminLayout = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
        <div className="min-h-screen bg-[#f6f3fb] flex flex-col lg:flex-row relative overflow-x-hidden">
            {/* Mobile Header */}
            <header className="lg:hidden h-20 bg-gradient-to-r from-[#4b0b78] to-[#6a11cb] text-white flex items-center justify-between px-6 sticky top-0 z-50 shadow-lg">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-md p-1.5">
                        <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
                    </div>
                    <h2 className="text-lg font-bold tracking-wide">Vriksh Admin</h2>
                </div>
                <button 
                    onClick={toggleMenu}
                    className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors border border-white/20"
                >
                    {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </header>

            {/* Mobile Backdrop */}
            {isMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`
                w-[280px] bg-gradient-to-b from-[#4b0b78] to-[#6a11cb] text-white border-r border-white/10 shadow-2xl flex flex-col
                fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0
                ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
                lg:h-screen lg:sticky lg:top-0
            `}>
                {/* Brand - visible on lg screens */}
                <div className="px-6 py-7 border-b border-white/10 hidden lg:block">
                    <div className="flex items-center gap-3">
                        <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-md p-2">
                            <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold tracking-wide">Vriksh Admin</h2>
                            <p className="text-sm text-white/70">Management Panel</p>
                        </div>
                    </div>
                </div>

                {/* Brand for mobile drawer */}
                <div className="px-6 py-7 border-b border-white/10 flex lg:hidden items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center p-1.5">
                            <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
                        </div>
                        <h2 className="text-lg font-bold tracking-wide">Vriksh Admin</h2>
                    </div>
                    <button onClick={() => setIsMenuOpen(false)} className="text-white/70 hover:text-white">
                        <X size={20} />
                    </button>
                </div>

                {/* Nav */}
                <nav className="p-5 space-y-3 flex-1 overflow-y-auto custom-scrollbar">
                    {navItems.map((item) => {
                        const isActive =
                            location.pathname === item.path ||
                            location.pathname.startsWith(item.path + "/");

                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                onClick={() => setIsMenuOpen(false)}
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
                <div className="p-5">
                    <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                        <p className="text-sm font-semibold">Admin Workspace</p>
                        <p className="text-xs text-white/70 mt-1">
                            Manage blogs, events, and dashboard content from here.
                        </p>
                    </div>
                </div>
            </aside>

            {/* Main */}
            <main className="flex-1 bg-[#f8f6fc] p-4 md:p-8 overflow-x-hidden min-h-0 min-w-0">
                <div className="max-w-[1600px] mx-auto">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;