import React from 'react';
import { useParams, Link } from 'react-router-dom';
import API_BASE_URL from '../api/config';
import {
    Calendar,
    Clock,
    User,
    Share2,
    ArrowLeft,
    ChevronRight,
    Search
} from 'lucide-react';

const BlogDetails = () => {
    const { id } = useParams();

    const [apiBlog, setApiBlog] = React.useState(null);
    const [allApiBlogs, setAllApiBlogs] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    // 🔥 FETCH FROM BACKEND
    React.useEffect(() => {
        setLoading(true);
        fetch(`${API_BASE_URL}/blogs/${id}`)
            .then(res => {
                if (!res.ok) return null;
                return res.json();
            })
            .then(data => {
                setApiBlog(data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            });
    }, [id]);

    React.useEffect(() => {
        fetch(`${API_BASE_URL}/blogs?includeContent=true`)
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setAllApiBlogs(data);
                } else if (data && Array.isArray(data.data)) {
                    setAllApiBlogs(data.data);
                } else {
                    setAllApiBlogs([]);
                }
            })
            .catch(err => console.log(err));
    }, []);

    // Use ONLY API data
    const post = apiBlog;

    const content = post?.content ? (
        <div
            className="max-w-none text-[15px] sm:text-[19px] leading-[1.8] text-[#1A1A1A] font-inter-tight tracking-wide quill-content overflow-hidden w-full"
            dangerouslySetInnerHTML={{ __html: post.content.replace(/&nbsp;/g, ' ') }}
        />
    ) : null;

    if (loading) return (
        <div className="min-h-screen bg-white flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#520378]"></div>
        </div>
    );

    if (!post) return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-4">
            <h2 className="text-2xl font-bold text-gray-800">Blog Not Found</h2>
            <Link to="/blogs" className="text-[#520378] font-bold hover:underline">Return to Blogs</Link>
        </div>
    );

    // ✅ RELATED BLOGS (API ONLY)
    const relatedPosts = allApiBlogs
        .filter(p => p._id !== id)
        .slice(0, 3);

    return (
        <section className="bg-white pt-24 sm:pt-28 pb-10 sm:pb-12">
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6">

                {/* ── Top Part (Hero): Centered Title & Header Image ── */}
                <div className="flex flex-col items-center text-center mb-10 sm:mb-16">
                    <h1 className="text-[#1A1A1A] text-[22px] sm:text-[36px] lg:text-[44px] font-bold font-inter-tight leading-[1.2] sm:leading-[1.15] w-full mb-8 sm:mb-6 px-2 sm:px-0">
                        {post.title}
                    </h1>

                    <div className="w-full sm:w-[95%] lg:w-[90%] max-w-[1000px] rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-sm aspect-[16/9] sm:aspect-[21/8] mt-2 sm:mt-8">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover object-[center_15%]"
                        />
                    </div>
                </div>

                {/* ── Article Content ── */}
                {content && (
                    <div className="w-full mx-auto mb-12 sm:mb-20 text-left sm:text-justify font-inter-tight tracking-wide px-4 sm:px-0">
                        {content}
                    </div>
                )}

                {/* ── Related Blogs Section ── */}
                {relatedPosts.length > 0 && (
                    <div className="mt-4 sm:mt-8 border-t border-gray-100 pt-10 sm:pt-0 sm:border-t-0">
                        <h2 className="text-[#1A1A1A] text-[26px] sm:text-[42px] font-bold font-inter-tight mb-8">
                            Related Blogs
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 sm:gap-y-12">
                            {relatedPosts.map((post) => {
                                const relatedId = post._id || post.id;

                                return (
                                    <div key={relatedId} className="group cursor-pointer">
                                        <Link to={`/blog/${relatedId}`}>
                                            <div className="aspect-[4/3] mb-5 sm:mb-6 overflow-hidden rounded-[20px]">
                                                <img
                                                    src={post.image}
                                                    alt={post.title}
                                                    className="w-full h-full object-cover object-[center_25%] transition-transform duration-500 group-hover:scale-105"
                                                />
                                            </div>
                                            <p className="text-gray-400 text-[11px] sm:text-[12px] font-medium mb-2 sm:mb-3">
                                                {post.date}
                                            </p>
                                            <h3 className="text-[#1A1A1A] text-[17px] sm:text-[20px] font-bold mb-3 sm:mb-4 font-inter-tight leading-[1.3] group-hover:text-[#520378] transition-colors">
                                                {post.title}
                                            </h3>
                                            <div
                                                className="text-[#4A5568] text-[13px] sm:text-[14px] font-geist leading-[1.6] mb-5 sm:mb-6 line-clamp-2 opacity-80"
                                                dangerouslySetInnerHTML={{ __html: post.content || "No content available." }}
                                            />
                                        </Link>
                                        <Link
                                            to={`/blog/${relatedId}`}
                                            className="inline-block bg-[#520378] text-white px-7 sm:px-8 py-2 sm:py-2.5 rounded-full text-[13px] sm:text-[14px] font-bold hover:bg-[#400260] transition-all"
                                        >
                                            Read more
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default BlogDetails;
