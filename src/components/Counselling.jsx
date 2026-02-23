import React from 'react';

const Counselling = () => {
    const categories = [
        'Stress & Anxiety',
        'Depression',
        'Relationships',
        'Career Stress',
        'Personal Growth'
    ];

    return (
        <section id="counselling" className="py-24 bg-brand-purple text-white">
            <div className="max-w-[1200px] mx-auto px-5">
                <h2 className="text-3xl md:text-4xl font-bold mb-15 text-center">Counselling & Therapy</h2>

                <div className="flex justify-center flex-wrap gap-4 mb-15">
                    {categories.map((cat, index) => (
                        <button
                            key={index}
                            className={`px-6 py-3 rounded-full font-medium transition-all ${index === 0
                                    ? 'bg-white text-brand-purple shadow-lg'
                                    : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid lg:grid-cols-2 gap-15 items-center">
                    <div className="rounded-2xl overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                            alt="Counselling Session"
                            className="w-full object-cover"
                        />
                    </div>

                    <div>
                        <h3 className="text-3xl font-bold mb-6">Counselling for Stress and Anxiety</h3>
                        <p className="text-lg mb-8 opacity-90 leading-relaxed">
                            Our expert therapists provide a safe, confidential space for you to explore your thoughts and feelings. We use evidence-based approaches to help you manage stress and overcome anxiety.
                        </p>
                        <ul className="mb-10 space-y-3">
                            {['Certified Professional Therapists', '100% Confidential sessions', 'Flexible online or offline modes', 'Tailored support plans'].map((item) => (
                                <li key={item} className="flex items-center gap-3 font-medium">
                                    <span className="text-green-400">✓</span> {item}
                                </li>
                            ))}
                        </ul>
                        <button className="bg-white text-brand-purple px-10 py-4 rounded-full font-bold text-lg hover:bg-brand-cream hover:-translate-y-1 transition-all">
                            Make an Appointment
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Counselling;
