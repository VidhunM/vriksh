import React from 'react';

const Academy = () => {
    const services = [
        {
            title: 'Expert Led Classes',
            desc: 'Join our live sessions led by industry experts and experienced educators.',
            btnText: 'Join Now'
        },
        {
            title: 'Flexible Courses',
            desc: 'Learn at your own pace with our comprehensive library of on-demand courses.',
            btnText: 'Enroll Now'
        },
        {
            title: 'Certifications',
            desc: 'Earn recognized certificates to boost your career and professional growth.',
            btnText: 'Get Certified'
        }
    ];

    return (
        <section id="academy" className="py-24 bg-brand-cream">
            <div className="max-w-[1200px] mx-auto px-5">
                <div className="grid lg:grid-cols-2 gap-15 items-center">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                            alt="Student learning"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-7.5 right-7.5 bg-white px-6 py-4 rounded-xl font-bold shadow-lg">
                            <span className="text-brand-purple">10K+ Students</span>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-5 text-gray-900">Vriksh E-Academy</h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            The portal to your future. Our E-Academy provides a seamless learning experience with state-of-the-art tools and resources tailored for your success.
                        </p>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-5">
                            {services.map((service, index) => (
                                <div key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                                    <h3 className="text-lg font-bold mb-3 text-brand-purple">{service.title}</h3>
                                    <p className="text-sm text-gray-600 mb-5">{service.desc}</p>
                                    <button className="font-bold text-sm text-brand-purple group">
                                        {service.btnText} <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Academy;
