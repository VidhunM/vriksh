import React from 'react';

const categories = ['Counsellors', 'Special Educator', 'Teachers', 'Corporate'];

const certificateCards = [
    {
        title: 'School Counselling: Learn to Support Students',
        subtitle: 'Hands-on training to excel as a professional school counsellor (Teachers can also join)',
        rating: '4.8',
        duration: '10 Hours',
        image: '/images/certificate/School Counselling Learn to Support Students.png',
        categories: ['Counsellors', 'Special Educator', 'Teachers']
    },
    {
        title: 'Career Counselling : From Assessment to Guidance',
        subtitle: 'Learn tools and techniques to support every individual’s career journey (Anyone can join - 18+)',
        rating: '4.8',
        duration: '10 Hours',
        image: '/images/certificate/Career Counselling From Assessment to Guidance.png',
        categories: ['Counsellors', 'Special Educator']
    },
    {
        title: 'Assessment and Management of LD in School Settings',
        subtitle: 'Remedial Teaching Strategies for Learning Difficulties (Teachers can also join)',
        rating: '4.8',
        duration: '10 Hours',
        image: '/images/certificate/Assessment and management strategiues.jpg',
        categories: ['Special Educator', 'Teachers', 'Counsellors']
    },
    {
        title: 'SEL & Life Skills Development',
        subtitle: 'Learn to design engaging, structured modules that empower learners with essential skills (Anyone can join - 18+)',
        rating: '4.8',
        duration: '10 Hours',
        image: '/images/certificate/SEL & Life Skills Development.jpg',
        categories: ['Counsellors', 'Special Educator']
    },
    {
        title: 'Applied Industrial–Organizational Psychology',
        subtitle: 'Learn to apply psychological principles to optimize people and performance at work (Anyone can join - 18+)',
        rating: '4.8',
        duration: '10 Hours',
        image: '/images/certificate/Applied Industrial–Organizational Psychology - Copy.jpg',
        categories: ['Counsellors', 'Special Educator', 'Corporate']
    },
    {
        title: 'Workplace Psychology & Human Behavior',
        subtitle: 'Explore how human behavior shapes workplace dynamics and performance (Anyone can join - 18+)',
        rating: '4.8',
        duration: '10 Hours',
        image: '/images/certificate/Workplace Psychology & Human Behavior.jpg',
        categories: ['Counsellors', 'Special Educator', 'Corporate']
    },
    {
        title: 'Foundations of Child Psychology',
        subtitle: 'Gain insights into children’s minds to foster wellbeing and positive development (Anyone can join - 18+)',
        rating: '4.8',
        duration: '10 Hours',
        image: '/images/certificate/Foundations of Child Psychology.jpg',
        categories: ['Counsellors', 'Special Educator']
    },
    {
        title: 'Psychological First Aid (PFA)',
        subtitle: 'Equip yourself with essential skills to offer timely psychological support in emergencies (Anyone can join - 18+)',
        rating: '4.8',
        duration: '10 Hours',
        image: '/images/certificate/Psychological First Aid (PFA).jpg',
        categories: ['Counsellors', 'Special Educator']
    }
];

const CertificateListing = () => {
    const [activeCategory, setActiveCategory] = React.useState('Counsellors');
    const [visibleCount, setVisibleCount] = React.useState(3);

    // Filter cards based on active category
    const filteredCards = certificateCards.filter(card =>
        card.categories.includes(activeCategory)
    );

    // Reset visible count when category changes
    React.useEffect(() => {
        setVisibleCount(3);
    }, [activeCategory]);

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 3);
    };

    const hasMore = visibleCount < filteredCards.length;
    const cardsToShow = filteredCards.slice(0, visibleCount);
    const centerImageTitles = new Set([
        'Workplace Psychology & Human Behavior',
        'School Counselling: Learn to Support Students',
    ]);

    return (
        <div className="bg-white py-14 sm:py-20 px-6 sm:px-12">
            <div className="max-w-[1240px] mx-auto">

                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl sm:text-4xl font-bold text-black font-inter-tight mb-3 tracking-tight">
                        All Certificate Courses at One Place
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-[930px] mx-auto leading-relaxed mb-6 font-medium font-geist">
                        Led by experienced psychologists, our curated certificate courses encourage deep insight, meaningful reflection, and practical real-world application.
                    </p>
                    <p className="text-[16px] font-medium text-gray-800 tracking-wide font-geist">
                        Live • Online • Accessible Worldwide
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap gap-3 justify-center mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full text-[14px] font-medium border transition-all ${activeCategory === cat
                                ? 'bg-[#520378] text-white border-[#520378]'
                                : 'bg-white text-gray-700 border-gray-400 hover:border-gray-600'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Certificate Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                    {cardsToShow.map((card, index) => (
                        <div
                            key={index}
                            className="group rounded-[14px] overflow-hidden flex flex-col border bg-white border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                        >
                            {/* Card Image */}
                            <div className="h-[170px] w-full shrink-0">
                                <img
                                    src={card.image}
                                    alt="Certificate Course"
                                    className={`w-full h-full object-cover ${centerImageTitles.has(card.title) ? 'object-center' : 'object-top'} group-hover:scale-105 transition-transform duration-500`}
                                />
                            </div>

                            {/* Card Info */}
                            <div className="flex flex-col flex-grow p-5 sm:p-6">
                                <h3 className="font-bold text-[18px] leading-[1.3] mb-3 font-inter-tight text-gray-950 clamp-2 text-balance">
                                    {card.title}
                                </h3>
                                <p className="text-[14px] sm:text-[15px] text-gray-600 mb-6 leading-relaxed font-medium">
                                    {card.subtitle}
                                </p>

                                <div className="border-t border-gray-100 pt-5 flex items-end justify-between mt-auto">
                                    <div className="flex flex-col gap-1.5">
                                        <div className="flex items-center gap-1.5 text-[12px] font-medium text-gray-800">
                                            <span>({card.rating})</span>
                                            <div className="flex gap-[2px]">
                                                {[...Array(5)].map((_, i) => (
                                                    <svg key={i} width="11" height="11" viewBox="0 0 20 20" className="text-[#FCA65B]" fill="currentColor">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="text-[12px] font-medium text-gray-800">
                                            Duration: {card.duration}
                                        </div>
                                    </div>

                                    <button className="px-5 py-2 rounded-full text-[13px] font-medium transition-all active:scale-95 bg-[#520378] text-white hover:bg-[#400260]">
                                        Enquire Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More */}
                {hasMore && (
                    <div className="flex justify-center mt-12 mb-4">
                        <button
                            onClick={handleLoadMore}
                            className="border border-[#520378] text-[#520378] hover:bg-[#520378] hover:text-white bg-white px-10 py-2.5 rounded-full font-semibold text-[14px] transition-all active:scale-95"
                        >
                            Load more
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
};

export default CertificateListing;
