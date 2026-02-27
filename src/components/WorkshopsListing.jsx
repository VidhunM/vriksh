import React from 'react';

const categories = ['Counselling', 'Special Education', 'Corporate', 'Teachers', 'Students', 'Parents'];

const allWorkshopCards = [
    // --- COUNSELLING & GENERAL ---
    { title: 'A Counsellor’s Guide', subtitle: 'Practical counsellor’s guide to digital wellbeing', duration: '2 Hours', rating: '4.9', image: '/images/wrk2.png', categories: ['Counselling'] },
    { title: 'Essentials of Child Counselling', subtitle: 'Explore therapeutic approaches to nurture children’s emotional and psychological growth.', duration: '1.5 Hours', rating: '4.9', image: '/images/wrk2.png', categories: ['Counselling', 'Special Education', 'Corporate', 'Teachers', 'Students', 'Parents'] },
    { title: 'Introduction to Cognitive Behavioral Therapy (CBT)', subtitle: 'CBT Basics - Understanding Thoughts, Emotions, and Behavior', duration: '2 Hours', rating: '4.9', image: '/images/wrk2.png', categories: ['Counselling'] },
    { title: 'Intervention strategies in school counselling', subtitle: 'From theory to practice: Activity-based school counselling tools', duration: '1.5 Hours', rating: '4.9', image: '/images/wrk2.png', categories: ['Counselling', 'Teachers', 'Special Education'] },
    { title: 'Crisis Intervention for Children and Adolescents', subtitle: 'Unlock methods to support children and adolescents in critical moments.', duration: '1.5 Hours', rating: '4.9', image: '/images/wrk2.png', categories: ['Counselling', 'Teachers', 'Parents', 'Special Education'] },
    { title: 'Activities for dealing with adolescent challenges', subtitle: 'Empower adolescents with practical, activity-based coping strategies.', duration: '1.5 Hours', rating: '4.9', image: '/images/workshop/Adoloscent challenges.jpg', categories: ['Counselling', 'Teachers', 'Special Education'] },
    { title: 'Counselling Documentations and Case Notes', subtitle: 'Professional documentation skills for every counselling session.', duration: '2 Hours', rating: '4.9', image: '/images/wrk2.png', categories: ['Counselling'] },
    { title: 'Career Counselling : Key Concepts & Approaches', subtitle: 'Explore essential concepts and approaches in career counselling', duration: '2 Hours', rating: '4.9', image: '/images/workshop/Career cousnelling - key concepts.jpg', categories: ['Counselling', 'Special Education', 'Corporate', 'Teachers', 'Students', 'Parents'] },
    { title: 'Essentials of Acceptance and Commitment Therapy', subtitle: 'Learn the fundamentals of Acceptance and Commitment Therapy', duration: '2 Hours', rating: '4.9', image: '/images/workshop/Acceptance and Commitment Therapy.png', categories: ['Counselling'] },
    { title: 'Cognitive Behavioral Therapy (CBT) for Depression', subtitle: 'Practical CBT approaches to support clients with depression.', duration: '2 Hours', rating: '4.9', image: '/images/wrk2.png', categories: ['Counselling'] },
    { title: 'Activities used during counselling sessions', subtitle: 'Practical exercises to help clients reflect and grow', duration: '1.5 Hours', rating: '4.9', image: '/images/workshop/Activities used during counselling sessions.jpg', categories: ['Counselling', 'Special Education'] },
    { title: 'Cognitive Behavioral Therapy (CBT) for Anxiety', subtitle: 'Support clients in navigating anxious feelings with CBT', duration: '2 Hours', rating: '4.9', image: '/images/wrk2.png', categories: ['Counselling'] },
    { title: 'Managing Gaming Addiction: A Counsellor’s Guide', subtitle: 'Structured interventions for effective gaming addiction management', duration: '2 Hours', rating: '4.9', image: '/images/wrk2.png', categories: ['Counselling'] },
    { title: 'Counsellor Self-Care & Burnout Prevention', subtitle: 'Self-care techniques every counsellor needs to thrive', duration: '2 Hours', rating: '4.9', image: '/images/wrk2.png', categories: ['Counselling'] },
    { title: 'Case History Taking Essentials', subtitle: 'Master essential skills for comprehensive case history taking', duration: '2 Hours', rating: '4.9', image: '/images/workshop/Case hsitory taking.jpg', categories: ['Counselling'] },
    { title: 'Cognitive Behavioral Therapy (CBT) for Insomnia', subtitle: 'Help clients restore sleep quality using CBT techniques', duration: '2 Hours', rating: '4.9', image: '/images/wrk2.png', categories: ['Counselling'] },
    { title: 'Counselling Skills 101', subtitle: 'Master the Essentials of Effective Counselling', duration: '1.5 Hours', rating: '4.9', image: '/images/wrk2.png', categories: ['Counselling', 'Special Education', 'Corporate', 'Teachers', 'Students', 'Parents'] },
    { title: 'Introduction to Solution-Focused Brief Therapy', subtitle: 'Learn the essential tools for goal-focused, brief counselling', duration: '2 Hours', rating: '4.9', image: '/images/wrk2.png', categories: ['Counselling'] },
    { title: 'Introduction to Play Therapy', subtitle: 'Engage, Explore, and Empower: The Power of Play Therapy', duration: '2 Hours', rating: '4.9', image: '/images/wrk2.png', categories: ['Counselling', 'Special Education'] },
    { title: 'Understanding Body Image among Adolescents', subtitle: 'Practical strategies to guide adolescents toward a healthy self-view', duration: '2 Hours', rating: '4.9', image: '/images/workshop/Body image.jpg', categories: ['Counselling', 'Special Education', 'Corporate', 'Teachers', 'Students', 'Parents'] },
    { title: 'School based education for Drug Abuse Prevention', subtitle: 'Prevent, Protect, Empower: School-based programs to combat substance abuse', duration: '2 Hours', rating: '4.9', image: '/images/wrk2.png', categories: ['Counselling', 'Teachers', 'Special Education'] },
    { title: 'Supporting Children Through Exam Stress', subtitle: 'Support, strategies, and skills for children to handle exam pressure effectively.', duration: '2 Hours', rating: '4.9', image: '/images/wrk2.png', categories: ['Counselling', 'Teachers', 'Parents', 'Special Education'] },

    // --- SPECIAL EDUCATION ---
    { title: 'Dyslexia, Dysgraphia, Dyscalculia - An Integrated Approach', subtitle: 'Hands-on strategies for educators and counsellors working with learning differences', duration: '2 Hours', rating: '4.9', image: '/images/wrk2.png', categories: ['Special Education', 'Teachers', 'Counselling'] },
    { title: 'Activity based strategies for children with special needs', subtitle: 'Learn techniques to make learning engaging and effective', duration: '2 Hours', rating: '4.9', image: '/images/workshop/Activity based strategies for children with special needs.jpg', categories: ['Special Education', 'Teachers', 'Counselling'] },
    { title: 'Understanding Attention-Deficit/Hyperactivity Disorder', subtitle: 'Learn the fundamentals of ADHD - symptoms, challenges, and support strategies', duration: '2 Hours', rating: '4.9', image: '/images/workshop/Understanding Attention-Deficit.jpg', categories: ['Special Education', 'Teachers', 'Parents', 'Counselling'] },
    { title: 'Understanding Autism: Key Concepts', subtitle: 'Understand the spectrum - challenges, behaviors, and support methods', duration: '2 Hours', rating: '4.9', image: '/images/workshop/Understanding Autism Key Concepts.jpg', categories: ['Special Education', 'Teachers', 'Parents', 'Counselling'] },
    { title: 'Diagnostic Test of Learning Disabilities (DTLD) Assessment', subtitle: 'Identify, assess, and support children with learning difficulties', duration: '2 Hours', rating: '4.9', image: '/images/wrk2.png', categories: ['Special Education', 'Counselling'] },
    { title: 'Development Screening Test (DST) Assessment', subtitle: 'Assess the mental development schema of children effectively with DST', duration: '2 Hours', rating: '4.9', image: '/images/wrk2.png', categories: ['Special Education', 'Counselling'] },
    { title: 'Behavior Modification', subtitle: 'Hands-on strategies for promoting desirable behaviors and reducing challenges', duration: '2 Hours', rating: '4.9', image: '/images/workshop/Behavior Modification.jpg', categories: ['Special Education', 'Teachers', 'Parents', 'Counselling'] },
    { title: 'Multisensory Strategies for Children with Special Needs', subtitle: 'Hands-on strategies to support children with diverse learning needs', duration: '2 Hours', rating: '4.9', image: '/images/wrk2.png', categories: ['Special Education', 'Teachers', 'Counselling'] },
    { title: 'Understanding Learning Disabilities: Key Concepts', subtitle: 'Explore the fundamentals of LD - types, signs, and support strategies', duration: '2 Hours', rating: '4.9', image: '/images/workshop/Understanding Learning Disabilities.jpg', categories: ['Special Education', 'Teachers', 'Parents', 'Counselling'] },
    { title: 'Designing Effective Individualized Education Plans (IEP)', subtitle: 'Plan, track, and support student progress with IEPs', duration: '2 Hours', rating: '4.9', image: '/images/wrk2.png', categories: ['Special Education', 'Counselling'] },
    { title: 'Vineland Social Maturity Scale (VSMS) Assessment', subtitle: 'Learn to assess children’s social and adaptive skills', duration: '2 Hours', rating: '4.9', image: '/images/workshop/VSMS ASSESSMENT.jpg', categories: ['Special Education', 'Counselling'] },
    { title: 'Handwriting - Assessment and Intervention', subtitle: 'Assess, understand, and intervene to enhance children’s handwriting skills', duration: '2 Hours', rating: '4.9', image: '/images/wrk2.png', categories: ['Special Education', 'Teachers', 'Counselling'] },
    { title: 'ADHD Tool Kit - Practical Strategies and Activities', subtitle: 'Practical tools and activities to support children with ADHD', duration: '2 Hours', rating: '4.9', image: '/images/workshop/ADHD TOOLKIT.jpg', categories: ['Special Education', 'Teachers', 'Counselling'] },
    { title: 'Assessment and Management of Autism', subtitle: 'Learn to assess and manage autism effectively in children', duration: '2 Hours', rating: '4.9', image: '/images/workshop/Assessment and management of autism.jpg', categories: ['Special Education', 'Teachers', 'Counselling'] },
    { title: 'Neurodiversity in Classrooms', subtitle: 'Learn to assess and manage autism effectively in children', duration: '2 Hours', rating: '4.9', image: '/images/wrk2.png', categories: ['Special Education', 'Teachers', 'Counselling'] },
    { title: 'Classroom Accommodations & Modifications', subtitle: 'Learn to assess and manage autism effectively in children', duration: '2 Hours', rating: '4.9', image: '/images/wrk2.png', categories: ['Special Education', 'Teachers', 'Counselling'] },

    // --- PARENTS ---
    { title: 'Understanding your teen child', subtitle: 'Support your teen’s emotional and social development with awareness and empathy.', duration: '2 Hours', rating: '4.9', image: '/images/workshop/understanding your teen child.jpg', categories: ['Parents', 'Counselling', 'Special Education', 'Teachers'] },
    { title: 'Understanding Your Child’s Behaviour & Emotions', subtitle: 'Understand what drives your child’s behavior and how to respond effectively', duration: '2 Hours', rating: '4.9', image: '/images/workshop/understanding your child emotion.jpg', categories: ['Parents', 'Counselling', 'Special Education', 'Teachers'] },
    { title: 'Parenting Styles & Positive Discipline', subtitle: 'Understand your parenting style and foster a supportive, respectful home environment', duration: '2 Hours', rating: '4.9', image: '/images/wrk2.png', categories: ['Parents', 'Counselling', 'Special Education', 'Teachers'] },
    { title: 'Managing Screen Time & Digital Well-Being for children', subtitle: 'Equip yourself with tools to support your child’s online safety and healthy technology use', duration: '2 Hours', rating: '4.9', image: '/images/wrk2.png', categories: ['Parents', 'Counselling', 'Special Education', 'Teachers'] },
    { title: 'Developing Emotional Intelligence in Children', subtitle: 'Guide children to recognize emotions, manage feelings, and respond thoughtfully', duration: '2 Hours', rating: '4.9', image: '/images/wrk2.png', categories: ['Parents', 'Counselling', 'Special Education', 'Teachers'] },

    // --- TEACHERS ---
    { title: 'Understanding Learning styles', subtitle: 'Discover practical strategies to cater to diverse learning needs in your classroom', duration: '2 Hours', rating: '4.9', image: '/images/wrk2.png', categories: ['Teachers', 'Counselling', 'Special Education'] },
    { title: 'Inclusive Classroom Strategies', subtitle: 'Learn practical strategies to create an inclusive classroom where every student can thrive', duration: '2 Hours', rating: '4.9', image: '/images/wrk2.png', categories: ['Teachers', 'Counselling', 'Special Education'] },
    { title: 'Identifying Learning & Behavioural Challenges', subtitle: 'Understand signs of learning and behavioral difficulties and support students with the right strategies.', duration: '2 Hours', rating: '4.9', image: '/images/wrk2.png', categories: ['Teachers', 'Counselling', 'Special Education'] },
    { title: 'Classroom Behaviour Management', subtitle: 'Practical tools to manage behavior and enhance teaching effectiveness', duration: '2 Hours', rating: '4.9', image: '/images/wrk2.png', categories: ['Teachers', 'Counselling', 'Special Education'] },
    { title: 'Teacher–Student Relationship Building', subtitle: 'Practical tools for teachers to strengthen bonds and promote student success', duration: '2 Hours', rating: '4.9', image: '/images/workshop/teacher-taking-notes-class.jpg', categories: ['Teachers', 'Counselling', 'Special Education'] },
    { title: 'Supporting Emotional & Academic Needs in School', subtitle: 'Support students holistically - balancing academic success with emotional wellbeing', duration: '2 Hours', rating: '4.9', image: '/images/wrk2.png', categories: ['Teachers', 'Counselling', 'Special Education'] },
    { title: 'Stress Management & Burnout Prevention', subtitle: 'Equip yourself with tools to handle stress and maintain balance at work or school', duration: '2 Hours', rating: '4.9', image: '/images/wrk2.png', categories: ['Teachers', 'Counselling', 'Special Education'] },

    // --- STUDENTS ---
    { title: 'Emotional Awareness & Self-Management', subtitle: 'Practical strategies for students to regulate emotions and make positive choices', duration: '2 Hours', rating: '4.9', image: '/images/wrk2.png', categories: ['Students', 'Counselling'] },
    { title: 'Stress Management Skills for Students', subtitle: 'Empowering students to cope with stress, build resilience, and thrive in school and life.', duration: '2 Hours', rating: '4.9', image: '/images/wrk2.png', categories: ['Students', 'Counselling'] },
    { title: 'Social Skills & Peer Relationships', subtitle: 'Practical strategies for students to improve communication, empathy, and relationship-building', duration: '2 Hours', rating: '4.9', image: '/images/wrk2.png', categories: ['Students', 'Counselling'] },
    { title: 'Building Confidence & Self-Esteem', subtitle: 'Empower students to believe in themselves, overcome self-doubt, and reach their full potential.', duration: '2 Hours', rating: '4.9', image: '/images/workshop/Building confidence and self esteem.jpg', categories: ['Students', 'Counselling'] },
    { title: 'Goal Setting & Time Management', subtitle: 'Practical tools for students to organize their time, stay motivated, and reach their objectives', duration: '2 Hours', rating: '4.9', image: '/images/wrk2.png', categories: ['Students', 'Counselling'] },
    { title: 'Handling Exam Anxiety', subtitle: 'Practical tools for students to organize their time, stay motivated, and reach their objectives', duration: '2 Hours', rating: '4.9', image: '/images/wrk2.png', categories: ['Students', 'Counselling'] },
    { title: 'Career Guidance', subtitle: 'Equip students with tools to plan their future, set goals, and navigate career pathways', duration: '2 Hours', rating: '4.9', image: '/images/workshop/career guidance.jpg', categories: ['Students', 'Counselling'] },
    { title: 'Digital Wellbeing & Online Safety', subtitle: 'Equip students with skills to use digital devices responsibly and stay safe online', duration: '2 Hours', rating: '4.9', image: '/images/wrk2.png', categories: ['Students', 'Counselling'] },
    { title: 'Study Skills & Learning Strategies', subtitle: 'Equip students with effective study techniques, time management, and learning strategies', duration: '2 Hours', rating: '4.9', image: '/images/wrk2.png', categories: ['Students', 'Counselling'] },

    // --- CORPORATE ---
    { title: 'Employee Resilience & Emotional Well-Being', subtitle: 'Practical strategies to enhance emotional health, engagement, and performance at work', duration: '2 Hours', rating: '4.9', image: '/images/wrk2.png', categories: ['Corporate', 'Counselling'] },
    { title: 'Employee Engagement & Retention Psychology', subtitle: 'Practical strategies to enhance emotional health, engagement, and performance at work', duration: '2 Hours', rating: '4.9', image: '/images/wrk2.png', categories: ['Corporate', 'Counselling'] },
    { title: 'Workplace Performance & Motivation', subtitle: 'Understand what drives employee commitment and apply techniques to strengthen retention', duration: '2 Hours', rating: '4.9', image: '/images/workshop/workplace.jpg', categories: ['Corporate', 'Counselling'] },
    { title: 'Emotional Intelligence at Work', subtitle: 'Learn to manage emotions effectively and foster collaboration, communication, and resilience at work.', duration: '2 Hours', rating: '4.9', image: '/images/wrk2.png', categories: ['Corporate', 'Counselling'] },
    { title: 'Leadership Development', subtitle: 'Learn practical strategies to lead effectively, make decisions confidently, and foster collaboration', duration: '2 Hours', rating: '4.9', image: '/images/wrk2.png', categories: ['Corporate', 'Counselling'] },
    { title: 'Stress Management & Burnout Prevention', subtitle: 'Equip employees with tools to handle workplace pressure, maintain balance, and stay productive.', duration: '2 Hours', rating: '4.9', image: '/images/wrk2.png', categories: ['Corporate', 'Counselling'] },
    { title: 'Work - Life Balance', subtitle: 'Learn practical techniques to balance professional demands with personal wellbeing', duration: '2 Hours', rating: '4.9', image: '/images/workshop/work life baacnce.jpg', categories: ['Corporate', 'Counselling'] },
    { title: 'Time Management & Productivity Skills', subtitle: 'Maximize output and minimize stress through effective time management strategies', duration: '2 Hours', rating: '4.9', image: '/images/wrk2.png', categories: ['Corporate', 'Counselling'] },
    { title: 'Conflict Resolution & Negotiation Skills', subtitle: 'Practical tools to handle difficult conversations,mediate disputes, and build stronger teams', duration: '2 Hours', rating: '4.9', image: '/images/wrk2.png', categories: ['Corporate', 'Counselling'] },
    { title: 'Team Building & Cohesion', subtitle: 'Practical strategies to enhance teamwork, synergy, and workplace harmony', duration: '2 Hours', rating: '4.9', image: '/images/workshop/Team building.jpg', categories: ['Corporate', 'Counselling'] },
    { title: 'Cultivating Awareness: Mindfulness Techniques for Daily Life', subtitle: 'Empower yourself with tools to manage emotions, focus, and live mindfully', duration: '2 Hours', rating: '4.9', image: '/images/wrk2.png', categories: ['Corporate', 'Counselling'] },
    { title: 'Personality Enrichment', subtitle: 'Practical strategies to develop a positive personality, strong presence, and interpersonal skills', duration: '1.5 Hours', rating: '4.9', image: '/images/wrk2.png', categories: ['Corporate', 'Counselling'] }
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
