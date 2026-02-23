import React from 'react';

const Wellness = () => {
    const partners = [
        'https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Indian_Institute_of_Technology_Madras_Logo.svg/1200px-Indian_Institute_of_Technology_Madras_Logo.svg.png',
        'https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/IIT_Delhi_logo.svg/1200px-IIT_Delhi_logo.svg.png',
        'https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg/1200px-Indian_Institute_of_Technology_Bombay_Logo.svg.png',
        'https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/IIT_Kanpur_Logo.svg/1200px-IIT_Kanpur_Logo.svg.png'
    ];

    return (
        <section id="wellness" className="py-24 bg-white">
            <div className="max-w-[1200px] mx-auto px-5">
                <div className="grid lg:grid-cols-[1fr,1.2fr] gap-20 items-center">
                    <div className="rounded-2xl overflow-hidden shadow-2xl">
                        <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Yoga and Wellness" className="w-full object-cover" />
                    </div>

                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-5">Vriksh Institution Wellness Program</h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            We partner with educational institutions to provide comprehensive wellness programs for students and faculty. Our holistic approach integrates mental, physical, and emotional well-being.
                        </p>

                        <div className="mb-10">
                            <label className="block font-bold mb-4 text-gray-900">Choose Your Institution:</label>
                            <div className="flex gap-4">
                                <button className="px-9 py-3 rounded-full border border-brand-purple bg-brand-purple text-white font-semibold">School</button>
                                <button className="px-9 py-3 rounded-full border border-brand-purple text-brand-purple font-semibold hover:bg-brand-purple hover:text-white transition-colors">College</button>
                            </div>
                        </div>

                        <div>
                            <p className="text-sm font-bold text-gray-500 mb-5 uppercase tracking-wider">Trusted by premier institutions:</p>
                            <div className="flex flex-wrap gap-8 items-center">
                                {partners.map((logo, index) => (
                                    <div key={index} className="w-16 h-16 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                        <img src={logo} alt={`Partner ${index + 1}`} className="w-full h-full object-contain" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Wellness;
