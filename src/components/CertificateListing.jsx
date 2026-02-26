import React from 'react';

const categories = ['Counsellors', 'Special Educator', 'Parents', 'Teachers', 'Students', 'Corporate'];

const certificateCards = [
    {
        title: 'Certificate Course in Child Counselling',
        subtitle: 'Comprehensive program for child and adolescent counselling',
        rating: '4.9',
        duration: '20 Hours',
        image: '/images/hwrkshp.png',
        categories: ['Counsellors', 'Teachers', 'Special Educator']
    },
    {
        title: 'Certificate Course in CBT',
        subtitle: 'Advanced techniques in Cognitive Behavioral Therapy',
        rating: '4.9',
        duration: '20 Hours',
        image: '/images/hwrkshp.png',
        categories: ['Counsellors', 'Corporate']
    },
    {
        title: 'Certificate Course in School Counselling',
        subtitle: 'Practical skills for effective school counselling interventions',
        rating: '4.9',
        duration: '20 Hours',
        image: '/images/hwrkshp.png',
        categories: ['Counsellors', 'Teachers', 'Special Educator']
    },
    {
        title: 'Certificate in Family Therapy',
        subtitle: 'Equip yourself to support families through critical moments',
        rating: '4.9',
        duration: '20 Hours',
        image: '/images/hwrkshp.png',
        categories: ['Counsellors', 'Parents']
    }
];

const CertificateListing = () => {
    const [activeCategory, setActiveCategory] = React.useState('Counsellors');
    const [visibleCount, setVisibleCount] = React.useState(4);

    // Filter cards based on active category
    const filteredCards = certificateCards.filter(card =>
        card.categories.includes(activeCategory)
    );

    // Reset visible count when category changes
    React.useEffect(() => {
        setVisibleCount(4);
    }, [activeCategory]);

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 4);
    };

    const hasMore = visibleCount < filteredCards.length;
    const cardsToShow = filteredCards.slice(0, visibleCount);

    return (
        <div className="bg-white py-14 sm:py-20 px-6 sm:px-12">
            <div className="max-w-[1240px] mx-auto">

                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-[clamp(26px,3vw,38px)] font-bold text-black font-inter-tight mb-4 tracking-tight">
                        All Certificate Courses at One Place
                    </h2>
                    <p className="text-[14px] sm:text-[15px] text-gray-600 max-w-[680px] mx-auto leading-relaxed mb-6 font-medium">
                        Led by experienced psychologists, our curated certificate courses encourage deep insight, meaningful reflection, and practical real-world application.
                    </p>
                    <p className="text-[14px] font-medium text-gray-800 tracking-wide">
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
                                ? 'bg-black text-white border-black'
                                : 'bg-white text-gray-700 border-gray-400 hover:border-gray-600'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Certificate Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
                    {cardsToShow.map((card, index) => (
                        <div
                            key={index}
                            className="group rounded-[14px] p-3 flex flex-col border bg-white border-gray-200 shadow-sm hover:shadow-md hover:bg-[#520378] hover:border-[#520378] transition-all duration-300"
                        >
                            {/* Card Image */}
                            <div className="h-[170px] w-full mb-4 rounded-[10px] overflow-hidden shrink-0">
                                <img
                                    src={card.image}
                                    alt="Certificate Course"
                                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Card Info */}
                            <div className="flex flex-col flex-grow px-1">
                                <h3 className="font-bold text-[16px] leading-[1.3] mb-4 font-inter-tight text-[#520378] group-hover:text-white transition-colors duration-300">
                                    {card.title} <br />
                                    <span className="text-[14px] text-gray-900 opacity-90 group-hover:text-white transition-colors duration-300">{card.subtitle}</span>
                                </h3>

                                <div className="border-t border-gray-100 group-hover:border-white/20 pt-4 flex flex-col gap-2.5 mb-5 transition-colors duration-300 mt-auto">
                                    <div className="text-[13px] font-medium flex items-center text-gray-800 group-hover:text-white/90 transition-colors duration-300">
                                        Duration: {card.duration}
                                    </div>
                                    <div className="text-[13px] font-medium flex items-center gap-1 text-gray-800 group-hover:text-white/90 transition-colors duration-300">
                                        ({card.rating})
                                        <div className="flex gap-[2px]">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} width="11" height="11" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <button className="mt-auto w-[110px] py-1.5 rounded-full text-[13px] font-medium transition-all active:scale-95 bg-[#520378] text-white group-hover:bg-white group-hover:text-[#520378]">
                                    Know more
                                </button>
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
