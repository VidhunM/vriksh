import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const categories = ['Counselling', 'Students', 'Workshop', 'College'];

const blogPosts = [
    {
        id: 1,
        date: "February 12, 2025",
        title: "Recognizing Stress Before It Becomes Burnout",
        category: "Counselling",
        image: "/images/blogid.jpg"
    },
    {
        id: 2,
        date: "February 23, 2025",
        title: "How Counselling Can Help You Navigate Life's Challenges",
        category: "Counselling",
        image: "/images/blogid.jpg"
    },
    {
        id: 3,
        date: "March 03, 2025",
        title: "Student Mental Health: Supporting Young Minds",
        category: "Counselling",
        image: "/images/blogid.jpg"
    },
    {
        id: 4,
        date: "March 05, 2025",
        title: "Student Mental Health: Supporting Young Minds",
        category: "Counselling",
        image: "/images/blogid.jpg"
    },
    {
        id: 5,
        date: "March 12, 2025",
        title: "Building Emotional Resilience in Everyday Life",
        category: "Counselling",
        image: "/images/blogid.jpg"
    },
    {
        id: 6,
        date: "March 20, 2025",
        title: "Managing Workplace Stress: A Guide for Professionals",
        category: "Counselling",
        image: "/images/blogid.jpg"
    }
];

const Blogs = () => {
    const [activeCategory, setActiveCategory] = useState('Counselling');

    const filteredPosts = blogPosts.filter(post => post.category === activeCategory);

    return (
        <section className="bg-white pt-0 min-h-screen pb-20">
            {/* ── Purple Header Banner ── */}
            <div className="bg-[#520378] pt-24 pb-6 sm:pt-30 sm:pb-8 text-center relative z-10 w-full">
                <div className="max-w-[1240px] mx-auto px-6">
                    <h1 className="text-white text-[clamp(20px,3.5vw,36px)] font-bold tracking-[0.02em] uppercase font-inter-tight">
                        BLOGS
                    </h1>
                </div>
            </div>

            {/* ── Featured Insights Section ── */}
            <div className="max-w-[1240px] mx-auto px-6 py-12 sm:py-20">
                <h2 className="text-[#1A1A1A] text-[24px] sm:text-[32px] font-bold mb-10 font-inter-tight">
                    Featured Insights
                </h2>

                {/* Featured Blog Card */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
                    {/* Image Area */}
                    <div className="lg:w-3/5">
                        <img
                            src="/images/counselling 2.png"
                            alt="Featured Blog"
                            className="w-full h-full object-cover rounded-[20px] shadow-sm"
                        />
                    </div>

                    {/* Details Card */}
                    <div className="lg:w-2/5 bg-[#FFF9E1] rounded-[20px] p-8 sm:p-10 flex flex-col justify-between shadow-sm">
                        <div>
                            <p className="text-[#1A1A1A] text-[12px] sm:text-[14px] font-bold tracking-[0.1em] uppercase mb-6 font-inter-tight">
                                JULY 2025
                            </p>
                            <h3 className="text-[#1A1A1A] text-[24px] sm:text-[28px] lg:text-[32px] font-bold mb-6 font-inter-tight leading-[1.2]">
                                Understanding Anxiety: Signs, Causes
                            </h3>
                            <p className="text-[#4A5568] text-[15px] sm:text-[16px] font-geist leading-[1.7] mb-8">
                                Anxiety is one of the most common mental health challenges people experience today.
                                In this article, our psychologists explain the common signs of anxiety, its possible causes,
                                and practical strategies that can help individuals regain.
                            </p>
                        </div>

                        <button className="text-[#1A1A1A] font-bold text-[16px] hover:underline flex items-center gap-2 transition-all w-fit font-inter-tight">
                            Read More
                        </button>
                    </div>
                </div>
            </div>

            {/* ── Insights for a Healthier Mind Section ── */}
            <div className="max-w-[1240px] mx-auto px-6 py-12 sm:py-20">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12">
                    <div className="max-w-[800px]">
                        <h2 className="text-[#1A1A1A] text-[32px] sm:text-[42px] font-bold font-inter-tight leading-[1.1] mb-6">
                            Insights for a <br /> Healthier Mind
                        </h2>

                        {/* Filter Chips */}
                        <div className="flex flex-wrap gap-3">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-6 py-2 rounded-full text-[14px] font-semibold transition-all border ${activeCategory === cat
                                        ? 'bg-[#520378] text-white border-[#520378]'
                                        : 'bg-white text-gray-600 border-gray-300 hover:border-gray-400'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="lg:max-w-[500px]">
                        <p className="text-[#4A5568] text-[15px] sm:text-[16px] font-geist leading-[1.7]">
                            Thoughtful articles, practical guidance, and expert perspectives from Vriksh Enriching Minds to help individuals,
                            students, and professionals build emotional resilience and mental wellbeing.
                        </p>
                    </div>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {filteredPosts.map((post) => (
                        <div key={post.id} className="group cursor-pointer">
                            <Link to={`/blog/${post.id}`}>
                                <div className="aspect-[4/3] mb-6 overflow-hidden rounded-[20px]">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <p className="text-gray-400 text-[13px] font-medium mb-3">
                                    {post.date}
                                </p>
                                <h3 className="text-[#1A1A1A] text-[18px] sm:text-[20px] font-bold mb-6 font-inter-tight leading-[1.3] group-hover:text-[#520378] transition-colors">
                                    {post.title}
                                </h3>
                            </Link>
                            <Link to={`/blog/${post.id}`} className="inline-block bg-[#520378] text-white px-8 py-2.5 rounded-full text-[14px] font-bold hover:bg-[#400260] transition-all">
                                Read more
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blogs;
