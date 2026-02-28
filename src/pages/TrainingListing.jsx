import React from 'react';

const categories = ['Counsellors', 'Special Educator', 'Corporate', 'Parents', 'Teachers'];

const trainingCards = [
  { title: 'CBT for Children & Adolescents', rating: '4.8', duration: '6 Hours', image: '/images/training/CBT for Children & Adolescents.jpg', categories: ['Counsellors', 'Special Educator'] },
  { title: 'Assessment Toolkit & Skills for Learning Difficulties (School Setting)', rating: '4.8', duration: '6 Hours', image: '/images/training/Assessment Toolkit & Skills for Learning Difficulties (School Setting).png', categories: ['Special Educator', 'Counsellors'] },
  { title: 'Psychological Assessment: Master 10 Essential Tools', rating: '4.8', duration: '4 Hours', image: '/images/training/Psychological Assessment Master 10 Essential Tools.png', categories: ['Counsellors', 'Special Educator'] },
  { title: 'Assessments for Children with Special Needs', rating: '4.8', duration: '4 Hours', image: '/images/training/Assessments for Children with Special Needs.jpg', categories: ['Special Educator', 'Counsellors'] },
  { title: 'Informal Assessment of Learning Disabilities', rating: '4.8', duration: '4 Hours', image: '/images/training/Informal Assessment of Learning Disabilities.jpg', categories: ['Special Educator', 'Counsellors'] },
  { title: 'Alcohol Dependence and management', rating: '4.8', duration: '6 Hours', image: '/images/training/Alcohol Dependence and management.jpg', categories: ['Counsellors'] },
  { title: 'Navigating Grief: Supporting Children & Adolescents', rating: '4.8', duration: '6 Hours', image: '/images/training/Navigating Grief Supporting Children & Adolescents.jpg', categories: ['Counsellors'] },
  { title: 'Navigating Grief: Supporting Adults', rating: '4.8', duration: '6 Hours', image: '/images/training/Navigating Grief Supporting Adults.jpg', categories: ['Counsellors'] },
  { title: 'Assessment and Management Strategies (LD and ADHD)', rating: '4.8', duration: '6 Hours', image: '/images/training/Assessment and Management Strategies (LD and ADHD).jpg', categories: ['Special Educator', 'Counsellors'] },
  { title: 'Foundations of Child & Adolescent Mental Health', rating: '4.8', duration: '6 Hours', image: '/images/events.png', categories: ['Counsellors', 'Teachers', 'Parents'] },
  { title: 'Understanding Neurodiversity (ADHD, ASD, LD, ID)', rating: '4.8', duration: '6 Hours', image: '/images/training/Neurodiversity.jpg', categories: ['Counsellors', 'Special Educator', 'Teachers', 'Parents'] },
  { title: 'Early Identification & Red Flags in School Settings', rating: '4.8', duration: '4 Hours', image: '/images/training/Early Identification & Red Flags in School Settings.jpg', categories: ['Teachers', 'Special Educator', 'Counsellors'] },
  { title: 'Basic Counselling Skills & Ethical Practices', rating: '4.8', duration: '4 Hours', image: '/images/training/Basic Counselling Skills & Ethical Practices.jpg', categories: ['Counsellors', 'Teachers'] },
  { title: 'Behaviour Management & Positive Behaviour Support', rating: '4.8', duration: '4 Hours', image: '/images/training/Behaviour Management & Positive Behaviour Support.jpg', categories: ['Teachers', 'Special Educator', 'Counsellors'] },
  { title: 'Academic & Socio-Emotional Profiling', rating: '4.8', duration: '4 Hours', image: '/images/training/Academic & Socio-Emotional Profiling.jpg', categories: ['Teachers', 'Special Educator', 'Counsellors'] },
  { title: 'Functional Behaviour Assessment (FBA)', rating: '4.8', duration: '4 Hours', image: '/images/training/Functional Behaviour Assessment (FBA).jpg', categories: ['Special Educator', 'Counsellors'] },
  { title: 'Inclusive Classroom Models & Universal Design for Learning', rating: '4.8', duration: '4 Hours', image: '/images/events.png', categories: ['Teachers', 'Special Educator', 'Counsellors'] },
  { title: 'Organizational Psychology for High-Performance Teams', rating: '4.8', duration: '4 Hours', image: '/images/training/Organizational Psychology for High-Performance Teams.jpg', categories: ['Corporate'] },
  { title: 'Psychology-Driven HR Practices', rating: '4.8', duration: '4 Hours', image: '/images/training/Psychology-Driven HR Practices.jpg', categories: ['Corporate', 'Counsellors'] },
  { title: 'Workplace Mental Health & Psychological Safety', rating: '4.8', duration: '4 Hours', image: '/images/training/Workplace Mental Health & Psychological Safety.jpg', categories: ['Corporate', 'Counsellors'] },
  { title: 'Mastering Emotional Intelligence: Lead with Awareness', rating: '4.8', duration: '4 Hours', image: '/images/training/Mastering Emotional Intelligence Lead with Awareness.jpg', categories: ['Corporate', 'Parents', 'Counsellors', 'Teachers', 'Special Educator'] },
  { title: 'Next-Gen Leadership: Skills for Today’s Workplace', rating: '4.8', duration: '4 Hours', image: '/images/training/Next-Gen Leadership Skills for Today’s Workplace.jpg', categories: ['Corporate', 'Counsellors'] },
  { title: 'Mindfulness', rating: '4.8', duration: '4 Hours', image: '/images/training/Mindfulness.jpg', categories: ['Counsellors', 'Corporate', 'Parents', 'Teachers', 'Special Educator'] },
  { title: 'Phonics', rating: '4.8', duration: '6 Hours', image: '/images/training/Phonics.jpg', categories: ['Teachers', 'Special Educator', 'Parents'] },
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
  const centerImageTitles = new Set([
    'Navigating Grief: Supporting Adults',
    'Informal Assessment of Learning Disabilities',
    'Navigating Grief: Supporting Children & Adolescents',
    'Behaviour Management & Positive Behaviour Support',
    'Functional Behaviour Assessment (FBA)',
    'Mastering Emotional Intelligence: Lead with Awareness (Anyone can join - 18+)',
    'Alcohol Dependence and management',
  ]);

  return (
    <section className="bg-white py-14 sm:py-20 px-6 sm:px-12">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-black font-inter-tight mb-3 tracking-tight">
            All Training at One Place
          </h2>
          <p className="text-[19px] lg:text-[clamp(15px,1vw,17px)] text-gray-700 leading-relaxed font-normal mb-8 mx-auto lg:mx-0">
            Bridging theory and real-world practice to deliver accessible, lifelong learning through customized workshops, training programs, and certification courses
          </p>
          <p className="text-lg sm:text-xl text-gray-600 max-w-[930px] mx-auto leading-relaxed mb-6 font-medium font-geist">
            Facilitated by experienced psychologists, these dynamic sessions bridge theory and practice, building clarity and confident application.
          </p>
          <p className="text-[16px] font-medium text-gray-800 tracking-wide font-geist">Live • Online • Accessible Worldwide</p>
        </div>

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {cardsToShow.map((card, index) => (
            <div
              key={index}
              className="rounded-[16px] overflow-hidden flex flex-col border bg-white border-gray-200 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="h-[180px] w-full shrink-0">
                <img
                  src={card.image}
                  alt="Training"
                  className={`w-full h-full object-cover ${centerImageTitles.has(card.title) ? 'object-center' : 'object-top'} hover:scale-[1.02] transition-transform duration-500`}
                />
              </div>

              <div className="flex flex-col flex-grow p-5">
                <h3 className="font-bold text-[18px] leading-[1.3] mb-4 font-inter-tight text-gray-950 clamp-2 text-balance max-w-[330px]">
                  {card.title === 'CBT for Children & Adolescents' ? (
                    <>
                      <span>CBT for Children &</span><br /><span>Adolescents</span>
                    </>
                  ) : (
                    card.title
                  )}
                </h3>

                <div className="flex items-center text-[12px] sm:text-[13px] text-gray-700 mb-6">
                  <div className="flex items-center gap-1">
                    <span className="text-gray-900 font-medium">{card.rating}</span>
                    <div className="flex gap-[2px] ml-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="14" height="14" viewBox="0 0 20 20" className="text-[#FCA65B]" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <span className="mx-3 text-gray-300">|</span>
                  <div className="text-[#520378] font-medium">Duration: {card.duration}</div>
                </div>

                <button className="mt-auto w-[110px] py-2 rounded-full text-[13px] font-medium transition-all active:scale-95 bg-[#520378] text-white">
                  Enquire Now
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
