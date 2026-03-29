import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const categories = ["Counselling", "Institutional", "Workshop"];

const blogPosts = [
    {
        id: 7,
        date: "April 01, 2025",
        title: "Overthinking: When Your Mind Refuses to Switch Off",
        category: "Counselling",
        image: "/images/Overthinking.jpg"
    },
    {
        id: 8,
        date: "April 10, 2025",
        title: "Screen Addiction: How Digital Devices Trap the Brain",
        category: "Counselling",
        image: "/images/Screentime.jpg"
    },
    {
        id: 9,
        date: "April 18, 2025",
        title: "Academic Pressure: When Success Becomes Stress",
        category: "Counselling",
        image: "/images/Academic pressure.jpg"
    },
    {
        id: 10,
        date: "March 10, 2026",
        title: "10 Signs You May Need Professional Counselling",
        category: "Counselling",
        image: "/images/Signs You May Need Professional Counselling.jpg"
    },
    {
        id: 11,
        date: "March 15, 2026",
        title: "How to Help Children Express Their Feelings",
        category: "Counselling",
        image: "/images/Children Express Their Feelings.jpg"
    },
    {
        id: 12,
        date: "March 20, 2026",
        title: "When Your Mind Talks, Your Body Listens",
        category: "Counselling",
        image: "/images/mind body connection.jpg"
    }
];

const Blogs = () => {
    const [activeCategory, setActiveCategory] = useState('Counselling');
    const [blogIndex, setBlogIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const [apiBlogs, setApiBlogs] = useState([]);

    const allBlogs = [...blogPosts, ...apiBlogs];
    const latestBlog = apiBlogs.length > 0 ? apiBlogs[0] : blogPosts[blogPosts.length - 1];

    const filteredPosts = allBlogs.filter(post => post.category === activeCategory);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
    fetch("http://localhost:5000/blogs")
        .then(res => res.json())
        .then(data => setApiBlogs(data))
        .catch(err => console.log(err));
    }, []);

    // Reset index when category changes
    useEffect(() => {
        setBlogIndex(0);
    }, [activeCategory]);

    const prevSlide = () => {
        setBlogIndex((prev) => (prev - 1 + filteredPosts.length) % filteredPosts.length);
    };

    const nextSlide = () => {
        setBlogIndex((prev) => (prev + 1) % filteredPosts.length);
    };

    return (
        <section className="bg-white pt-0 min-h-screen pb-8">
            {/* ── Purple Header Banner ── */}
            <div className="bg-[#520378] pt-24 pb-3 sm:pt-26 sm:pb-6 text-center relative z-10 w-full">
                <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
                    <h1 className="text-white text-[clamp(18px,4vw,36px)] font-bold tracking-[0.02em] uppercase font-inter-tight">
                        BLOGS
                    </h1>
                </div>
            </div>

            {/* ── Featured Insights Section ── */}
            <div className="max-w-[1240px] mx-auto px-5 sm:px-6 py-8 sm:py-12">
                <h2 className="text-[#1A1A1A] text-[24px] sm:text-[32px] font-bold mb-6 sm:mb-8 font-inter-tight border-l-4 border-[#520378] pl-4">
                    Featured Insight
                </h2>

                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">
                    {/* Left: Large Image Card */}
                    <div className="lg:w-1/2 relative group overflow-hidden rounded-[24px] sm:rounded-[32px] shadow-lg cursor-pointer h-[320px] sm:h-[400px] lg:h-auto">
                        <Link to={`/blog/${latestBlog?._id || latestBlog?.id}`} className="h-full block">
                            <img
                                src={latestBlog?.image}
                                alt={latestBlog?.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end p-6 sm:p-8">
                                <span className="text-[#FCA253] text-[10px] sm:text-[12px] font-bold tracking-[0.2em] uppercase mb-2 sm:mb-3">Latest Post</span>
                                <h3 className="text-white text-[22px] sm:text-[32px] font-bold font-inter-tight leading-tight group-hover:text-[#FCA253] transition-colors">
                                    {latestBlog?.title}
                                </h3>
                            </div>
                        </Link>
                    </div>

                    {/* Right: Content Cards Stack */}
                    <div className="lg:w-1/2 flex flex-col gap-6">
                        {/* Main Content Card */}
                        <div className="bg-[#FFF9E1] rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 flex flex-col flex-grow shadow-sm border border-[#520378]/5 hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-center mb-5 sm:mb-6">
                                <p className="text-[#520378] text-[11px] sm:text-[12px] font-bold tracking-[0.1em] uppercase font-inter-tight opacity-80">
                                    MARCH 20, 2026
                                </p>
                                <span className="bg-[#520378] text-white text-[9px] sm:text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider shadow-sm">
                                    Counselling
                                </span>
                            </div>
                            <h3 className="text-[#1A1A1A] text-[20px] sm:text-[28px] font-bold mb-4 sm:mb-5 font-inter-tight leading-[1.3]">
                               Your mind and body are always in conversation. Are you listening?
                            </h3>
                            <div 
                                className="text-[#4A5568] text-[14px] sm:text-[17px] font-geist leading-[1.6] sm:leading-[1.7] mb-6 sm:mb-8 line-clamp-3"
                                dangerouslySetInnerHTML={{ __html: latestBlog?.content || "No content available." }}
                            />
                            <Link to={`/blog/${latestBlog?._id || latestBlog?.id}`} className="mt-auto flex items-center gap-3 group/btn">
                                <span className="text-[#520378] font-bold text-[15px] sm:text-[16px] group-hover/btn:underline font-inter-tight transition-all">
                                    Read Full Story
                                </span>
                                <div className="w-8 h-8 rounded-full bg-[#520378] text-white flex items-center justify-center group-hover/btn:translate-x-1.5 transition-transform shadow-md">
                                    →
                                </div>
                            </Link>
                        </div>

                        {/* Secondary Highlights Card */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            <Link to="/blog/7" className="bg-white border border-gray-100 rounded-[24px] p-5 sm:p-6 shadow-sm hover:shadow-md transition-all group flex flex-col justify-center min-h-[100px]">
                                <p className="text-[#520378] text-[10px] font-bold tracking-[0.1em] uppercase mb-2 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#520378]"></span>
                                    Editor's Choice
                                </p>
                                <h4 className="text-[#1A1A1A] text-[15px] sm:text-[16px] font-bold font-inter-tight leading-snug group-hover:text-[#520378] transition-colors">
                                    Overthinking: When Your Mind Refuses to Switch Off
                                </h4>
                            </Link>
                            <Link to="/blog/11" className="bg-white border border-gray-100 rounded-[24px] p-5 sm:p-6 shadow-sm hover:shadow-md transition-all group flex flex-col justify-center min-h-[100px]">
                                <p className="text-[#520378] text-[10px] font-bold tracking-[0.1em] uppercase mb-2 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#520378]"></span>
                                    Trending
                                </p>
                                <h4 className="text-[#1A1A1A] text-[15px] sm:text-[16px] font-bold font-inter-tight leading-snug group-hover:text-[#520378] transition-colors">
                                    How to Help Children Express Their Feelings
                                </h4>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Insights for a Healthier Mind Section ── */}
            <div className="max-w-[1240px] mx-auto px-5 sm:px-6 py-8 sm:py-12">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-1 sm:gap-8 mb-8 sm:mb-12">
                    <div className="max-w-[800px]">
                        <h2 className="text-[#1A1A1A] text-[32px] sm:text-[42px] font-bold font-inter-tight leading-[1.1] mb-3 sm:mb-8">
                            Insights for a <br className="hidden sm:block" /> Healthier Mind
                        </h2>

                        {/* Filter Chips */}
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-[13px] sm:text-[14px] font-semibold transition-all border ${activeCategory === cat
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
                        <p className="text-[#4A5568] text-[14px] sm:text-[19px] font-geist leading-[1.6] sm:leading-[1.7]">
                            Thoughtful articles, practical guidance, and expert perspectives to help individuals,
                            students, and professionals build emotional resilience and mental wellbeing.
                        </p>
                    </div>
                </div>

                {/* Blog Grid / Mobile Slider */}
                <div className="relative group/slider overflow-hidden">
                    {/* Mobile Arrows */}
                    <div className="flex sm:hidden justify-between absolute top-[140px] -translate-y-1/2 w-full z-10 px-0.5 pointer-events-none">
                        <button
                            onClick={prevSlide}
                            className="w-10 h-10 rounded-full bg-white/95 shadow-xl flex items-center justify-center pointer-events-auto active:scale-90 transition-all border border-gray-100"
                        >
                            <svg className="w-6 h-6 text-[#520378]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path></svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-10 h-10 rounded-full bg-white/95 shadow-xl flex items-center justify-center pointer-events-auto active:scale-90 transition-all border border-gray-100"
                        >
                            <svg className="w-6 h-6 text-[#520378]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
                        </button>
                    </div>

                    <div className="overflow-hidden">
                        <div
                            className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 transition-transform duration-500 ease-in-out"
                            style={{
                                transform: isMobile ? `translateX(calc(-${blogIndex} * 100% - ${blogIndex} * 32px))` : 'none',
                                display: isMobile ? 'flex' : 'grid'
                            }}
                        >
                            {filteredPosts.map((post) => (
                                <div key={post.id} className="group cursor-pointer flex-none w-full sm:w-auto bg-white rounded-[24px] overflow-hidden border border-gray-100 sm:border-none sm:bg-transparent shadow-sm sm:shadow-none pb-6 sm:pb-0 transition-all">
                                    <Link to={`/blog/${post._id || post.id}`}>
                                        <div className="aspect-[16/10] sm:aspect-[4/3] mb-5 sm:mb-6 overflow-hidden sm:rounded-[20px]">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="px-5 sm:px-0">
                                            <p className="text-[#520378] text-[12px] sm:text-[13px] font-bold mb-2 sm:mb-3 opacity-70">
                                                {post.date}
                                            </p>
                                            <h3 className="text-[#1A1A1A] text-[18px] sm:text-[20px] font-bold mb-5 sm:mb-6 font-inter-tight leading-[1.3] group-hover:text-[#520378] transition-colors min-h-[50px] sm:min-h-0">
                                                {post.title}
                                            </h3>
                                        </div>
                                    </Link>
                                    <div className="px-5 sm:px-0">
                                        <Link to={`/blog/${post._id || post.id}`} className="inline-flex items-center gap-2 text-[#520378] font-bold text-[14px] group/link">
                                            <span className="group-hover/link:underline">Read more</span>
                                            <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Dots */}
                    {isMobile && filteredPosts.length > 1 && (
                        <div className="flex sm:hidden justify-center gap-1.5 mt-6">
                            {filteredPosts.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setBlogIndex(i)}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${blogIndex === i ? 'w-6 bg-[#520378]' : 'w-1.5 bg-gray-300'}`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Blogs;
