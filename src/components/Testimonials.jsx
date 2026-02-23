import React from 'react';

const Testimonials = () => {
    const reviews = [
        {
            name: 'Priya Sharma',
            role: 'Student, IIT Madras',
            text: 'The mental health workshops by Vriksh were life-changing for me. They provided practical tools to handle academic stress.',
            rating: 5,
            avatar: 'https://i.pravatar.cc/150?u=priya'
        },
        {
            name: 'Dr. Rahul Verma',
            role: 'HoD, Amity University',
            text: 'Vriksh’s wellness program has significantly improved the overall atmosphere of our campus. Highly recommended for any institution.',
            rating: 5,
            avatar: 'https://i.pravatar.cc/150?u=rahul'
        },
        {
            name: 'Anita Desai',
            role: 'HR Manager, Tech Corp',
            text: 'Efficient, professional, and empathetic. Their corporate workshops are exactly what our team needed for better work-life balance.',
            rating: 4,
            avatar: 'https://i.pravatar.cc/150?u=anita'
        }
    ];

    return (
        <section id="testimonials" className="py-24 bg-brand-cream">
            <div className="max-w-[1200px] mx-auto px-5">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-15 leading-tight">
                    Trusted by Individuals,<br />Institutions & Professionals
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((rev, index) => (
                        <div key={index} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                            <div className="flex items-center gap-4 mb-5">
                                <img src={rev.avatar} alt={rev.name} className="w-15 h-15 rounded-full object-cover border-2 border-brand-purple/10" />
                                <div className="rev-author">
                                    <h4 className="text-lg font-bold text-gray-900 leading-tight">{rev.name}</h4>
                                    <span className="text-sm text-gray-500">{rev.role}</span>
                                </div>
                            </div>
                            <p className="italic text-gray-700 mb-6 leading-relaxed">"{rev.text}"</p>
                            <div className="flex gap-1 text-sm">
                                {Array(rev.rating).fill().map((_, i) => <span key={i}>⭐</span>)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
