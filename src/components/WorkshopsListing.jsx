import React from 'react';

const categories = ['Counselling', 'Special Education', 'Corporate', 'Teachers', 'Students', 'Parents'];

const allWorkshopCards = [
    // --- COUNSELLING & GENERAL ---
    { title: 'A Counsellor’s Guide', duration: '2 Hours', rating: '4.9', image: '/images/workshop/Digital wellbeing and online safety.jpg', categories: ['Counselling'] },
    { title: 'Essentials of Child Counselling', duration: '1.5 Hours', rating: '4.9', image: '/images/workshop/Child counselling.jpg', categories: ['Counselling', 'Special Education', 'Corporate', 'Teachers', 'Students', 'Parents'] },
    { title: 'Introduction to Cognitive Behavioral Therapy (CBT)', duration: '2 Hours', rating: '4.9', image: '/images/workshop/Introduction to Cognitive Behavioral Therapy (CBT).jpg', categories: ['Counselling'] },
    { title: 'Intervention strategies in school counselling', duration: '1.5 Hours', rating: '4.9', image: '/images/workshop/Intervention strategies in school counselling.jpg', categories: ['Counselling', 'Teachers', 'Special Education'] },
    { title: 'Crisis Intervention for Children and Adolescents', duration: '1.5 Hours', rating: '4.9', image: '/images/workshop/Crisis intervention.jpg', categories: ['Counselling', 'Teachers', 'Parents', 'Special Education'] },
    { title: 'Activities for dealing with adolescent challenges', duration: '1.5 Hours', rating: '4.9', image: '/images/workshop/Adolescent challenges.jpg', categories: ['Counselling', 'Teachers', 'Special Education'] },
    { title: 'Counselling Documentations and Case Notes', duration: '2 Hours', rating: '4.9', image: '/images/workshop/Counselling documentation.png', categories: ['Counselling'] },
    { title: 'Career Counselling : Key Concepts & Approaches', duration: '2 Hours', rating: '4.9', image: '/images/workshop/Career counselling - key concepts.jpg', categories: ['Counselling', 'Special Education', 'Corporate', 'Teachers', 'Students', 'Parents'] },
    { title: 'Essentials of Acceptance and Commitment Therapy', duration: '2 Hours', rating: '4.9', image: '/images/workshop/Acceptance and Commitment Therapy.png', categories: ['Counselling'] },
    { title: 'Cognitive Behavioral Therapy (CBT) for Depression', duration: '2 Hours', rating: '4.9', image: '/images/workshop/CBT FOR DEPRESSION.jpg', categories: ['Counselling'] },
    { title: 'Activities used during counselling sessions', duration: '1.5 Hours', rating: '4.9', image: '/images/workshop/Activities used during counselling sessions.jpg', categories: ['Counselling', 'Special Education'] },
    { title: 'Cognitive Behavioral Therapy (CBT) for Anxiety', duration: '2 Hours', rating: '4.9', image: '/images/workshop/cbt for anxiety.jpg', categories: ['Counselling'] },
    { title: 'Managing Gaming Addiction: A Counsellor’s Guide', duration: '2 Hours', rating: '4.9', image: '/images/workshop/Gaming addiction.jpg', categories: ['Counselling'] },
    { title: 'Counsellor Self-Care & Burnout Prevention', duration: '2 Hours', rating: '4.9', image: '/images/workshop/Counsellor Self-Care & Burnout Prevention.jpg', categories: ['Counselling'] },
    { title: 'Case History Taking Essentials', duration: '2 Hours', rating: '4.9', image: '/images/workshop/Case history taking.jpg', categories: ['Counselling'] },
    { title: 'Cognitive Behavioral Therapy (CBT) for Insomnia', duration: '2 Hours', rating: '4.9', image: '/images/workshop/CBT for insomnia.jpg', categories: ['Counselling'] },
    { title: 'Counselling Skills 101', duration: '1.5 Hours', rating: '4.9', image: '/images/workshop/Counselling skills 101.jpg', categories: ['Counselling', 'Special Education', 'Corporate', 'Teachers', 'Students', 'Parents'] },
    { title: 'Introduction to Solution-Focused Brief Therapy', duration: '2 Hours', rating: '4.9', image: '/images/workshop/Introduction to sfbt.jpg', categories: ['Counselling'] },
    { title: 'Introduction to Play Therapy', duration: '2 Hours', rating: '4.9', image: '/images/workshop/Introduction to Play Therapy.jpg', categories: ['Counselling', 'Special Education'] },
    { title: 'Understanding Body Image among Adolescents', duration: '2 Hours', rating: '4.9', image: '/images/workshop/Body image.jpg', categories: ['Counselling', 'Special Education', 'Corporate', 'Teachers', 'Students', 'Parents'] },
    { title: 'School based education for Drug Abuse Prevention', duration: '2 Hours', rating: '4.9', image: '/images/workshop/Drug abuse prevention.jpg', categories: ['Counselling', 'Teachers', 'Special Education'] },
    { title: 'Supporting Children Through Exam Stress', duration: '2 Hours', rating: '4.9', image: '/images/workshop/Exam stress.jpg', categories: ['Counselling', 'Teachers', 'Parents', 'Special Education'] },

    // --- SPECIAL EDUCATION ---
    { title: 'Dyslexia, Dysgraphia, Dyscalculia - An Integrated Approach', duration: '2 Hours', rating: '4.9', image: '/images/workshop/Dyslexia, Dysgraphia, Dyscalculia.jpg', categories: ['Special Education', 'Teachers', 'Counselling'] },
    { title: 'Activity based strategies for children with special needs', duration: '2 Hours', rating: '4.9', image: '/images/workshop/Activity based strategies for children with special needs.jpg', categories: ['Special Education', 'Teachers', 'Counselling'] },
    { title: 'Understanding Attention-Deficit/Hyperactivity Disorder', duration: '2 Hours', rating: '4.9', image: '/images/workshop/Understanding Attention-Deficit.jpg', categories: ['Special Education', 'Teachers', 'Parents', 'Counselling'] },
    { title: 'Understanding Autism: Key Concepts', duration: '2 Hours', rating: '4.9', image: '/images/workshop/Understanding Autism Key Concepts.jpg', categories: ['Special Education', 'Teachers', 'Parents', 'Counselling'] },
    { title: 'Diagnostic Test of Learning Disabilities (DTLD) Assessment', duration: '2 Hours', rating: '4.9', image: '/images/workshop/Diagnostic Test of Learning Disabilities (DTLD) Assessment.jpg', categories: ['Special Education', 'Counselling'] },
    { title: 'Development Screening Test (DST) Assessment', duration: '2 Hours', rating: '4.9', image: '/images/workshop/Development Screening Test (DST) Assessment.png', categories: ['Special Education', 'Counselling'] },
    { title: 'Behavior Modification', duration: '2 Hours', rating: '4.9', image: '/images/workshop/Behavior Modification.jpg', categories: ['Special Education', 'Teachers', 'Parents', 'Counselling'] },
    { title: 'Multisensory Strategies for Children with Special Needs', duration: '2 Hours', rating: '4.9', image: '/images/workshop/Multisensory Strategies for Children with Special Needs.jpg', categories: ['Special Education', 'Teachers', 'Counselling'] },
    { title: 'Understanding Learning Disabilities: Key Concepts', duration: '2 Hours', rating: '4.9', image: '/images/workshop/Understanding Learning Disabilities.jpg', categories: ['Special Education', 'Teachers', 'Parents', 'Counselling'] },
    { title: 'Designing Effective Individualized Education Plans (IEP)', duration: '2 Hours', rating: '4.9', image: '/images/workshop/Designing Effective Individualized Education Plans (IEP).jpg', categories: ['Special Education', 'Counselling'] },
    { title: 'Vineland Social Maturity Scale (VSMS) Assessment', duration: '2 Hours', rating: '4.9', image: '/images/workshop/VSMS ASSESSMENT.jpg', categories: ['Special Education', 'Counselling'] },
    { title: 'Handwriting - Assessment and Intervention', duration: '2 Hours', rating: '4.9', image: '/images/workshop/HANDWRITING.jpg', categories: ['Special Education', 'Teachers', 'Counselling'] },
    { title: 'ADHD Tool Kit - Practical Strategies and Activities', duration: '2 Hours', rating: '4.9', image: '/images/workshop/ADHD TOOLKIT.jpg', categories: ['Special Education', 'Teachers', 'Counselling'] },
    { title: 'Assessment and Management of Autism', duration: '2 Hours', rating: '4.9', image: '/images/workshop/Assessment and management of autism.jpg', categories: ['Special Education', 'Teachers', 'Counselling'] },
    { title: 'Neurodiversity in Classrooms', duration: '2 Hours', rating: '4.9', image: '/images/workshop/Neurodiversity.jpg', categories: ['Special Education', 'Teachers', 'Counselling'] },
    { title: 'Classroom Accommodations & Modifications', duration: '2 Hours', rating: '4.9', image: '/images/workshop/Classroom Accommodations & Modifications.jpg', categories: ['Special Education', 'Teachers', 'Counselling'] },

    // --- PARENTS ---
    { title: 'Understanding your teen child', duration: '2 Hours', rating: '4.9', image: '/images/workshop/understanding your teen child.jpg', categories: ['Parents', 'Counselling', 'Special Education', 'Teachers'] },
    { title: 'Understanding Your Child’s Behaviour & Emotions', duration: '2 Hours', rating: '4.9', image: '/images/workshop/understanding your child emotion.jpg', categories: ['Parents', 'Counselling', 'Special Education', 'Teachers'] },
    { title: 'Parenting Styles & Positive Discipline', duration: '2 Hours', rating: '4.9', image: '/images/workshop/Parenting style.jpg', categories: ['Parents', 'Counselling', 'Special Education', 'Teachers'] },
    { title: 'Managing Screen Time & Digital Well-Being for children', duration: '2 Hours', rating: '4.9', image: '/images/workshop/Managing screen time.jpg', categories: ['Parents', 'Counselling', 'Special Education', 'Teachers'] },
    { title: 'Developing Emotional Intelligence in Children', duration: '2 Hours', rating: '4.9', image: '/images/workshop/Developing emotional intelligence.jpg', categories: ['Parents', 'Counselling', 'Special Education', 'Teachers'] },

    // --- TEACHERS ---
    { title: 'Understanding Learning styles', duration: '2 Hours', rating: '4.9', image: '/images/workshop/teacher-taking-notes-class.jpg', categories: ['Teachers', 'Counselling', 'Special Education'] },
    { title: 'Inclusive Classroom Strategies', duration: '2 Hours', rating: '4.9', image: '/images/workshop/Inclusive classroom strategies.png', categories: ['Teachers', 'Counselling', 'Special Education'] },
    { title: 'Identifying Learning & Behavioural Challenges', duration: '2 Hours', rating: '4.9', image: '/images/workshop/Understanding Learning Disabilities.jpg', categories: ['Teachers', 'Counselling', 'Special Education'] },
    { title: 'Classroom Behaviour Management', duration: '2 Hours', rating: '4.9', image: '/images/workshop/Classroom behaviour management.jpg', categories: ['Teachers', 'Counselling', 'Special Education'] },
    { title: 'Teacher–Student Relationship Building', duration: '2 Hours', rating: '4.9', image: '/images/workshop/teacher student relationship.jpg', categories: ['Teachers', 'Counselling', 'Special Education'] },
    { title: 'Supporting Emotional & Academic Needs in School', duration: '2 Hours', rating: '4.9', image: '/images/workshop/educational-concept-tired-student-library.jpg', categories: ['Teachers', 'Counselling', 'Special Education'] },
    { title: 'Stress Management & Burnout Prevention', duration: '2 Hours', rating: '4.9', image: '/images/workshop/Stress Management & Burnout Prevention.jpg', categories: ['Teachers', 'Counselling', 'Special Education'] },

    // --- STUDENTS ---
    { title: 'Emotional Awareness & Self-Management', duration: '2 Hours', rating: '4.9', image: '/images/workshop/Emotional awareness.jpg', categories: ['Students', 'Counselling'] },
    { title: 'Stress Management Skills for Students', duration: '2 Hours', rating: '4.9', image: '/images/workshop/stress management skills for students.jpg', categories: ['Students', 'Counselling'] },
    { title: 'Social Skills & Peer Relationships', duration: '2 Hours', rating: '4.9', image: '/images/workshop/social skills and peer relationship.jpg', categories: ['Students', 'Counselling'] },
    { title: 'Building Confidence & Self-Esteem', duration: '2 Hours', rating: '4.9', image: '/images/workshop/Building confidence and self esteem.jpg', categories: ['Students', 'Counselling'] },
    { title: 'Goal Setting & Time Management', duration: '2 Hours', rating: '4.9', image: '/images/workshop/Goal setting and time management.jpg', categories: ['Students', 'Counselling'] },
    { title: 'Handling Exam Anxiety', duration: '2 Hours', rating: '4.9', image: '/images/workshop/exam anxiety.jpg', categories: ['Students', 'Counselling'] },
    { title: 'Career Guidance', duration: '2 Hours', rating: '4.9', image: '/images/workshop/career guidance.jpg', categories: ['Students', 'Counselling'] },
    { title: 'Digital Wellbeing & Online Safety', duration: '2 Hours', rating: '4.9', image: '/images/workshop/Managing screentime and digital wellbeing.jpg', categories: ['Students', 'Counselling'] },
    { title: 'Study Skills & Learning Strategies', duration: '2 Hours', rating: '4.9', image: '/images/workshop/study skills and learning strategies.jpg', categories: ['Students', 'Counselling'] },

    // --- CORPORATE ---
    { title: 'Employee Resilience & Emotional Well-Being', duration: '2 Hours', rating: '4.9', image: '/images/workshop/Employee Resilience & Emotional Well-Being.jpg', categories: ['Corporate', 'Counselling'] },
    { title: 'Employee Engagement & Retention Psychology', duration: '2 Hours', rating: '4.9', image: '/images/workshop/Employee engagement.jpg', categories: ['Corporate', 'Counselling'] },
    { title: 'Workplace Performance & Motivation', duration: '2 Hours', rating: '4.9', image: '/images/workshop/workplace.jpg', categories: ['Corporate', 'Counselling'] },
    { title: 'Emotional Intelligence at Work', duration: '2 Hours', rating: '4.9', image: '/images/workshop/Emotional intelligence at work.jpg', categories: ['Corporate', 'Counselling'] },
    { title: 'Leadership Development', duration: '2 Hours', rating: '4.9', image: '/images/workshop/Leadership development.jpg', categories: ['Corporate', 'Counselling'] },
    { title: 'Stress Management & Burnout Prevention', duration: '2 Hours', rating: '4.9', image: '/images/workshop/stress management and burnout.jpg', categories: ['Corporate', 'Counselling'] },
    { title: 'Work - Life Balance', duration: '2 Hours', rating: '4.9', image: '/images/workshop/work life balance.jpg', categories: ['Corporate', 'Counselling'] },
    { title: 'Time Management & Productivity Skills', duration: '2 Hours', rating: '4.9', image: '/images/workshop/Goal setting and time management.jpg', categories: ['Corporate', 'Counselling'] },
    { title: 'Conflict Resolution & Negotiation Skills', duration: '2 Hours', rating: '4.9', image: '/images/workshop/Conflict Resolution & Negotiation Skills.jpg', categories: ['Corporate', 'Counselling'] },
    { title: 'Team Building & Cohesion', duration: '2 Hours', rating: '4.9', image: '/images/workshop/Team building.jpg', categories: ['Corporate', 'Counselling'] },
    { title: 'Cultivating Awareness: Mindfulness Techniques for Daily Life', duration: '2 Hours', rating: '4.9', image: '/images/workshop/Emotional awareness.jpg', categories: ['Corporate', 'Counselling'] },
    { title: 'Personality Enrichment', duration: '1.5 Hours', rating: '4.9', image: '/images/workshop/Building confidence and self esteem.jpg', categories: ['Corporate', 'Counselling'] }
];

const WorkshopsListing = () => {
    const [activeCategory, setActiveCategory] = React.useState('Counselling');
    const [visibleCount, setVisibleCount] = React.useState(4);

    // Filter cards based on active category
    const filteredCards = allWorkshopCards.filter(card =>
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
                    <h2 className="text-3xl sm:text-4xl font-bold text-black font-inter-tight mb-3 tracking-tight">
                        All Workshops at One Place
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-[900px] mx-auto leading-relaxed mb-6 font-medium font-geist">
                        Led by experienced psychologists, our curated and highly interactive sessions encourage deep
                        <br className="hidden sm:block" />
                        insight,meaningful reflection, and practical real-world application.
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
                                ? 'bg-black text-white border-black'
                                : 'bg-white text-gray-700 border-gray-400 hover:border-gray-600'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Workshop Cards */}
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
                                    alt="Workshop"
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

export default WorkshopsListing;
