import React from 'react';

const categories = ['Counsellors', 'Special Educator', 'Parents', 'Teachers', 'Students', 'Corporate'];

const trainingCards = [
  {
    title: 'CBT for Children & Adolescents',
    rating: '4.9',
    duration: '1.5 Hours',
    image: '/images/events.png',
    categories: ['Counsellors'],
  },
  {
    title: 'CBT for Children & Adolescents',
    rating: '4.9',
    duration: '1.5 Hours',
    image: '/images/events.png',
    categories: ['Counsellors'],
  },
  {
    title: 'CBT for Children & Adolescents',
    rating: '4.9',
    duration: '1.5 Hours',
    image: '/images/events.png',
    categories: ['Counsellors'],
  },
  {
    title: 'CBT Advanced Techniques',
    rating: '4.9',
    duration: '1.5 Hours',
    image: '/images/events.png',
    categories: ['Counsellors'],
  },
  {
    title: 'Behavioural Interventions',
    rating: '4.9',
    duration: '1.5 Hours',
    image: '/images/events.png',
    categories: ['Counsellors'],
  },
  {
    title: 'Therapeutic Skills Practice',
    rating: '4.9',
    duration: '1.5 Hours',
    image: '/images/events.png',
    categories: ['Counsellors'],
  },
];

const TrainingListing = () => {
  const [activeCategory, setActiveCategory] = React.useState('Counsellors');
  const [visibleCount, setVisibleCount] = React.useState(3);
  const filteredCards = trainingCards.filter((card) => card.categories.includes(activeCategory));
  React.useEffect(() => {
    setVisibleCount(3);
  }, [activeCategory]);
  const handleLoadMore = () => setVisibleCount((prev) => prev + 3);
  const hasMore = visibleCount < filteredCards.length;
  const cardsToShow = filteredCards.slice(0, visibleCount);

  return (
    <section className="bg-white py-14 sm:py-20 px-6 sm:px-12">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-black font-inter-tight mb-3 tracking-tight">
            All Training at One Place
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-[910px] mx-auto leading-relaxed mb-6 font-medium font-geist">
            Led by experienced psychologists, our curated and highly interactive training programs encourage deep insight,
            <br className="hidden sm:block" />
            meaningful reflection, and practical real-world application.
          </p>
          <p className="text-[16px] font-medium text-gray-800 tracking-wide font-geist">Live • Online • Accessible Worldwide</p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-[14px] font-medium border transition-all ${
                activeCategory === cat
                  ? 'bg-[#520378] text-white border-[#520378]'
                  : 'bg-white text-gray-700 border-gray-400 hover:border-gray-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {cardsToShow.map((card, index) => (
            <div
              key={index}
              className="rounded-[16px] p-3 flex flex-col border bg-white border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="h-[180px] w-full mb-4 rounded-[12px] overflow-hidden shrink-0">
                <img
                  src={card.image}
                  alt="Training"
                  className="w-full h-full object-cover object-center hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

              <div className="flex flex-col flex-grow px-1">
                <h3 className="font-bold text-[16px] leading-[1.3] mb-3 font-inter-tight text-gray-950">{card.title}</h3>

                <div className="border-t border-gray-100 pt-3 flex items-center justify-between text-[13px] text-gray-700 mb-4">
                  <div className="flex items-center gap-1">
                    <span className="text-gray-700">({card.rating})</span>
                    <div className="flex gap-[2px] ml-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="12" height="12" viewBox="0 0 20 20" className="text-[#FCA65B]" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <span className="mx-2 text-gray-300">•</span>
                  <div className="text-gray-700">Duration: {card.duration}</div>
                </div>

                <button className="mt-auto w-[110px] py-1.5 rounded-full text-[13px] font-medium transition-all active:scale-95 bg-[#520378] text-white">
                  Know more
                </button>
              </div>
            </div>
          ))}
        </div>

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
    </section>
  );
};

export default TrainingListing;
