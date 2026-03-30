import React from 'react';
import { ExternalLink, Home, Info, Presentation, Award, GraduationCap, Calendar, FileText, Mail, Newspaper, Heart, Compass, Building, School, Library } from 'lucide-react';

const AdminDashboard = () => {
    const editLinks = [
        { name: 'Home', url: 'https://docs.google.com/spreadsheets/d/1oAq3m3JMvec_BCkd5zSl74Q_JnLOCpxOnzFO352uwpM/edit?gid=1230671957#gid=1230671957', icon: <Home className="text-blue-500" size={24} /> },
        { name: 'About', url: 'https://docs.google.com/spreadsheets/d/1oAq3m3JMvec_BCkd5zSl74Q_JnLOCpxOnzFO352uwpM/edit?gid=1814719165#gid=1814719165', icon: <Info className="text-cyan-500" size={24} /> },
        { name: 'Workshop', url: 'https://docs.google.com/spreadsheets/d/1oAq3m3JMvec_BCkd5zSl74Q_JnLOCpxOnzFO352uwpM/edit?gid=1842250540#gid=1842250540', icon: <Presentation className="text-purple-500" size={24} /> },
        { name: 'Training', url: 'https://docs.google.com/spreadsheets/d/1oAq3m3JMvec_BCkd5zSl74Q_JnLOCpxOnzFO352uwpM/edit?gid=1956486502#gid=1956486502', icon: <GraduationCap className="text-green-500" size={24} /> },
        { name: 'Certificate', url: 'https://docs.google.com/spreadsheets/d/1oAq3m3JMvec_BCkd5zSl74Q_JnLOCpxOnzFO352uwpM/edit?gid=191610688#gid=191610688', icon: <Award className="text-yellow-500" size={24} /> },
        { name: 'Upcoming Events', url: 'https://docs.google.com/spreadsheets/d/1oAq3m3JMvec_BCkd5zSl74Q_JnLOCpxOnzFO352uwpM/edit?gid=1758314743#gid=1758314743', icon: <Calendar className="text-orange-500" size={24} /> },
        { name: 'Event Details', url: 'https://docs.google.com/spreadsheets/d/1oAq3m3JMvec_BCkd5zSl74Q_JnLOCpxOnzFO352uwpM/edit?gid=634847876#gid=634847876', icon: <FileText className="text-red-500" size={24} /> },
        { name: 'Contact', url: 'https://docs.google.com/spreadsheets/d/1NMcPLYZ9brsk4fve5JuMsBEQm-J5A2VSAFFSpPz8QkQ/edit?gid=0#gid=0', icon: <Mail className="text-pink-500" size={24} /> },
        { name: 'Newsletter', url: 'https://docs.google.com/spreadsheets/d/1NMcPLYZ9brsk4fve5JuMsBEQm-J5A2VSAFFSpPz8QkQ/edit?gid=1257915033#gid=1257915033', icon: <Newspaper className="text-indigo-500" size={24} /> },
        { name: 'Counselling', url: 'https://docs.google.com/spreadsheets/d/1NMcPLYZ9brsk4fve5JuMsBEQm-J5A2VSAFFSpPz8QkQ/edit?gid=2037083385#gid=2037083385', icon: <Heart className="text-rose-500" size={24} /> },
        { name: 'Career Counselling', url: 'https://docs.google.com/spreadsheets/d/18oDI4WvdAJr1yO8eYt9UT8cRITWAAddaRsgdvOO0DeY/edit?gid=155700272#gid=155700272', icon: <Compass className="text-teal-500" size={24} /> },
        { name: 'Corporate EAP', url: 'https://docs.google.com/spreadsheets/d/18oDI4WvdAJr1yO8eYt9UT8cRITWAAddaRsgdvOO0DeY/edit?gid=996264696#gid=996264696', icon: <Building className="text-slate-500" size={24} /> },
        { name: 'School Based', url: 'https://docs.google.com/spreadsheets/d/18oDI4WvdAJr1yO8eYt9UT8cRITWAAddaRsgdvOO0DeY/edit?gid=1095297424#gid=1095297424', icon: <School className="text-fuchsia-500" size={24} /> },
        { name: 'College Based', url: 'https://docs.google.com/spreadsheets/d/18oDI4WvdAJr1yO8eYt9UT8cRITWAAddaRsgdvOO0DeY/edit?gid=1436446810#gid=1436446810', icon: <Library className="text-amber-600" size={24} /> }
    ];

    return (
        <div className="p-2 md:p-6 lg:ml-6 mt-4">
            <div className="mb-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h1 className="text-2xl md:text-3xl font-bold text-[#5b1693] mb-2 tracking-tight">Admin Dashboard Workspace</h1>
                <p className="text-gray-600 text-[15px]">Welcome to the Vriksh Admin Panel. Access the quick links below to manage and edit page contents via Google Sheets.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {editLinks.map((link, index) => (
                    <a 
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col group relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-1 h-full bg-[#7b2cbf] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="flex justify-between items-start mb-5">
                            <div className="p-3.5 bg-[#f6f3fb] rounded-xl group-hover:bg-[#f0e8fa] group-hover:scale-110 transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
                                {link.icon}
                            </div>
                            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#7b2cbf] transition-colors">
                                <ExternalLink size={14} className="text-gray-400 group-hover:text-white transition-colors" />
                            </div>
                        </div>
                        <h3 className="text-[17px] font-bold text-gray-800 mb-1.5">{link.name}</h3>
                        <span className="text-[13px] text-gray-500 font-medium tracking-wide uppercase">Edit Content</span>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default AdminDashboard;
