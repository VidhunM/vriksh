import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

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
        image: "/images/counselling 2.png"
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

const BlogDetails = () => {
    const { id } = useParams();
    const blogId = parseInt(id);
    const post = blogPosts.find(p => p.id === blogId) || blogPosts[1];

    // Get 3 related posts (excluding current)
    const relatedPosts = blogPosts.filter(p => p.id !== blogId).slice(0, 3);

    return (
        <section className="bg-white pt-24 sm:pt-36 pb-20">
            <div className="max-w-[1240px] mx-auto px-6">

                {/* ── Top Part (Hero): Centered Title & Header Image ── */}
                <div className="flex flex-col items-center text-center mb-16 sm:mb-24">
                    <h1 className="text-[#1A1A1A] text-[32px] sm:text-[42px] lg:text-[52px] font-bold font-inter-tight leading-[1.15] max-w-[900px] mb-10 sm:mb-16">
                        {post.title}
                    </h1>

                    <div className="w-full rounded-[24px] overflow-hidden shadow-sm aspect-[21/9] sm:aspect-[21/10]">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 ">

                    {/* ── Left Column: Main Content ── */}
                    <div className="lg:w-[70%]">
                        {/* Meta Data Block */}
                        <div className="flex items-center gap-3 mb-10">
                            <span className="text-gray-400 text-[14px] font-medium font-inter-tight">
                                {post.date}
                            </span>
                            <span className="w-1.5 h-1.5 bg-[#520378] rounded-full"></span>
                            <span className="px-5 py-1.5 rounded-full border border-[#520378] text-[#520378] text-[13px] font-semibold uppercase tracking-wider">
                                {post.category}
                            </span>
                        </div>

                        {/* Article Header Title In Body */}
                        <h2 className="text-[#1A1A1A] text-[30px] sm:text-[38px] lg:text-[42px] font-bold font-inter-tight leading-[1.15] mb-8">
                            {post.title}
                        </h2>

                        {/* Article Text Content */}
                        <div className="prose prose-lg max-w-none text-[#4A5568] font-geist leading-[1.8]">
                            <p className="mb-8">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>

                            <h3 className="text-[#1A1A1A] text-[22px] sm:text-[26px] font-bold font-inter-tight mt-12 mb-6">
                                Lorem ipsum dolor sit
                            </h3>

                            <p className="mb-10">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>

                            {/* Inner Image */}
                            <div className="my-12 rounded-[24px] overflow-hidden shadow-sm aspect-[16/9] sm:aspect-[16/7]">
                                <img
                                    src="/images/schl01.png"
                                    alt="Article content"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <h3 className="text-[#1A1A1A] text-[22px] sm:text-[26px] font-bold font-inter-tight mt-12 mb-6">
                                Lorem ipsum dolor sit
                            </h3>

                            <p className="mb-8">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                        </div>
                    </div>

                    {/* ── Right Column: Sidebar ── */}
                    <div className="lg:w-[30%] flex flex-col gap-10">
                        <div className="relative">
                            <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-[18px]" />
                            <input
                                type="text"
                                placeholder="Search here..."
                                className="w-full bg-[#FFFBEB] border border-gray-100 rounded-[12px] py-4 pl-12 pr-6 text-[15px] focus:ring-1 focus:ring-[#520378]/10 transition-all outline-none"
                            />
                        </div>

                        <div className="bg-white border border-gray-100 rounded-[20px] p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                            <h3 className="text-[#1A1A1A] text-[19px] font-bold font-inter-tight mb-6">
                                Categories
                            </h3>
                            <div className="flex flex-col gap-2.5">
                                {['Psychology', 'Wellness', 'Education', 'Corporate'].map((cat, idx) => (
                                    <div key={idx} className="bg-[#FFFBEB] rounded-[10px] px-5 py-3.5 text-[#4A5568] text-[14.5px] font-medium hover:bg-[#FFF5D1] transition-colors cursor-pointer capitalize">
                                        {cat}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white border border-gray-100 rounded-[20px] p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                            <h3 className="text-[#1A1A1A] text-[19px] font-bold font-inter-tight mb-6">
                                Table of contents
                            </h3>
                            <div className="flex flex-col gap-2.5">
                                {[1, 2, 3, 4].map(idx => (
                                    <div key={idx} className="bg-[#FFFBEB] rounded-[10px] px-5 py-3.5 text-[#4A5568] text-[14.5px] font-medium hover:bg-[#FFF5D1] transition-colors cursor-pointer">
                                        Section Title {idx}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Related Blogs Section ── */}
                <div className="mt-20 sm:mt-24">
                    <h2 className="text-[#1A1A1A] text-[32px] sm:text-[42px] font-bold font-inter-tight mb-12">
                        Related Blogs
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                        {relatedPosts.map((post) => (
                            <div key={post.id} className="group cursor-pointer">
                                <Link to={`/blog/${post.id}`}>
                                    <div className="aspect-[4/3] mb-6 overflow-hidden rounded-[20px]">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <p className="text-gray-400 text-[12px] font-medium mb-3">
                                        {post.date}
                                    </p>
                                    <h3 className="text-[#1A1A1A] text-[18px] sm:text-[20px] font-bold mb-6 font-inter-tight leading-[1.3] group-hover:text-[#520378] transition-colors">
                                        {post.title}
                                    </h3>
                                </Link>
                                <Link
                                    to={`/blog/${post.id}`}
                                    className="inline-block bg-[#520378] text-white px-8 py-2.5 rounded-full text-[14px] font-bold hover:bg-[#400260] transition-all"
                                >
                                    Read more
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogDetails;
