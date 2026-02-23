import React from 'react';

const Events = () => {
    const events = [
        {
            image: 'https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            title: 'Youth Leadership Program',
            rating: 4.8,
            price: '$49.00'
        },
        {
            image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            title: 'Mental Health Workshop',
            rating: 4.9,
            price: '$29.00'
        },
        {
            image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            title: 'Career Guidance Seminar',
            rating: 4.7,
            price: '$39.00'
        }
    ];

    return (
        <section id="events" className="py-20 bg-white">
            <div className="max-w-[1200px] mx-auto px-5">
                <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-5">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-3">Upcoming Events</h2>
                        <p className="text-gray-600">Join our upcoming events and webinars led by world-class instructors.</p>
                    </div>
                    <div className="flex gap-2.5">
                        <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-brand-purple hover:text-white hover:border-brand-purple transition-all">←</button>
                        <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-brand-purple hover:text-white hover:border-brand-purple transition-all">→</button>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7.5">
                    {events.map((event, index) => (
                        <div key={index} className="rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                            <div className="h-[200px]">
                                <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-4">{event.title}</h3>
                                <div className="flex justify-between items-center mb-5">
                                    <span className="font-semibold text-yellow-500">⭐ {event.rating}</span>
                                    <span className="font-bold text-lg text-brand-purple">{event.price}</span>
                                </div>
                                <button className="w-full bg-brand-purple text-white py-3 rounded-full font-bold hover:bg-brand-purple-light transition-colors">
                                    Register Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Events;
