import React from 'react';
import { useParams, Link } from 'react-router-dom';

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
    }
];

const articleContent = {
    7: (
        <div className="prose prose-lg max-w-none text-[#4A5568] font-geist leading-[1.8]">
            <p className="mb-6">
                Have you ever found yourself thinking about the same incident again and again, unable to let it go? Perhaps you replay a conversation repeatedly in your mind, wondering if you said the wrong thing, or you stay awake at night worrying about something that happened days ago. It can feel as if your mind is stuck in a loop, replaying the same thoughts over and over like a playlist you cannot pause. If this sounds familiar, you are not alone. Many people experience moments where their thoughts overwhelm them. This experience is commonly known as overthinking.
            </p>
            <p className="mb-6">
                Overthinking happens when we start analyzing situations, decisions, or past events far more than necessary. Instead of helping us find solutions, these repeated thoughts often lead to stress and emotional exhaustion. It may involve being overly critical of ourselves, worrying about how others perceive us, or constantly imagining negative outcomes. Factors such as low self-confidence, fear of being judged, anxiety about the future, or unresolved experiences can contribute to this pattern of thinking.
            </p>
            <p className="mb-6">
                This habit can show up in many different ways. Some people find themselves unable to make decisions because they keep weighing every possible outcome. Others try to read between the lines of every conversation, searching for hidden meanings that may not even exist. Overthinking may also involve predicting worst-case scenarios, analyzing minor details excessively, or replaying past mistakes repeatedly. Over time, this mental pattern can create a cycle where the mind continues to search for problems rather than solutions.
            </p>
            <p className="mb-6">
                When overthinking becomes frequent, it can begin to affect several aspects of life. Individuals may experience difficulty sleeping, persistent anxiety, reduced focus in academics or work, and challenges in maintaining relationships. Constant mental strain can also affect physical health.
            </p>
            <p className="mb-6">
                Although overthinking can feel overwhelming, it can be managed with awareness and simple strategies. Understanding the difference between rumination and problem-solving is important, as rumination keeps the mind stuck in repetitive thoughts rather than finding solutions. Identifying triggers, allowing thoughts to pass without fighting them, and practicing mindfulness can help reduce the intensity of overthinking. Activities like journaling or talking to trusted friends and family can also provide emotional relief and new perspectives.
            </p>
            <p className="mb-6">
                If overthinking begins to feel overwhelming and starts affecting your sleep, daily routine, work, or relationships, it may be helpful to seek professional support. Talking to a mental health professional can provide a safe and confidential space to explore your thoughts, understand underlying triggers, and learn effective coping strategies. Psychologists and counsellors can help individuals develop healthier thinking patterns, manage anxiety, and build emotional resilience. Seeking help is not a sign of weakness; rather, it is a positive step towards taking care of your mental wellbeing. With the right guidance and support, it is possible to break free from the cycle of overthinking and regain a sense of clarity and balance in life.
            </p>
        </div>
    ),
    8: (
        <div className="prose prose-lg max-w-none text-[#4A5568] font-geist leading-[1.8]">
            <p className="mb-6">
                Today, screens are a big part of children's everyday life. Phones, tablets, video games, and laptops are used for learning, entertainment, and staying connected with friends. While technology is helpful, it can sometimes become difficult for children and teenagers to put the device down. Many parents often hear lines like, "Just five more minutes!" which slowly turns into another half an hour.
            </p>
            <p className="mb-6">
                This happens because digital devices are designed to keep the brain hooked. Every time a child wins a level in a game, receives a like on social media, or watches an exciting video, the brain releases a chemical called dopamine, which makes us feel good and excited. The brain then wants to experience that feeling again. That is why children keep checking their phones or continue playing games even when they know they should stop.
            </p>
            <p className="mb-6">
                For example, a child may start watching one short video online. As soon as the video ends, another one automatically starts. Soon, 10 or 20 videos pass by without them realizing how much time has gone by. Similarly, while playing a game, the child might think, "Let me just finish this level." But once that level is over, the game encourages them to move to the next one with rewards, points, or badges.
            </p>
            <p className="mb-6">
                Notifications also play a big role. A simple "ping" sound from a phone can make a child immediately want to check the device. Even if they are studying or doing homework, curiosity about who messaged or what notification appeared can distract them.
            </p>
            <p className="mb-6">
                Another reason screens feel so attractive is because they provide constant stimulation. Bright colours, fast-moving visuals, sound effects, and quick changes in content keep the brain highly engaged. Compared to this, activities like reading a book, doing homework, or playing a quiet game may start to feel less interesting for some children.
            </p>
            <p className="mb-6">
                Over time, excessive screen use can affect daily routines. Children may delay homework, avoid outdoor play, sleep late, or feel irritated when asked to stop using their devices. They may also lose track of time while gaming or scrolling.
            </p>
            <p className="mb-6">
                However, the goal is not to remove screens completely, because technology is now a natural part of modern life. Instead, children need guidance to develop healthy and balanced digital habits. Parents can help by setting clear screen time limits, creating device-free times such as during meals or before bedtime, encouraging outdoor play and hobbies, and spending quality time together without screens.
            </p>
            <p className="mb-6">
                With clear boundaries, open conversations, and positive role modelling, children can learn to balance digital life with real-world experiences. When this balance is achieved, technology becomes a helpful tool that supports growth and learning rather than something that controls their attention and daily life.
            </p>
            <p className="mb-6">
                If screen use starts affecting a child's sleep, behaviour, academics, or relationships, it may be helpful to seek professional support. A psychologist or counsellor can help understand the underlying concerns and guide children and families in building healthier digital habits. Early support can make a meaningful difference in restoring balance and overall wellbeing.
            </p>
        </div>
    ),
    9: (
        <div className="prose prose-lg max-w-none text-[#4A5568] font-geist leading-[1.8]">
            <p className="mb-6">
                For many students today, life often revolves around marks, exams, and expectations. Questions like "How many marks did you get?", "Did you come first?", or "What will you study in the future?" are common in everyday conversations. While doing well in academics is important, the constant pressure to perform can sometimes turn learning into a stressful experience.
            </p>
            <p className="mb-6">
                Many students feel that they must always score high marks to make their parents and teachers proud. Some compare themselves with classmates who score better, while others worry about disappointing their family if their results are not good enough. Over time, studies may begin to feel less about learning and more about avoiding failure.
            </p>
            <p className="mb-6">
                Academic pressure can affect students in different ways. Some may spend long hours studying without taking breaks, feeling anxious about every test or exam. Others may feel so overwhelmed that they start avoiding studies altogether. It is also common for students under pressure to experience sleep problems, headaches, irritability, or difficulty concentrating. For example, a student might start worrying days before an exam, thinking, "What if I forget everything?" or "What if I get less marks than my friends?" Even after the exam, the mind may keep replaying the questions and answers. This constant worry can take away the confidence and joy that learning should bring.
            </p>
            <p className="mb-6">
                It is important to remember that marks are only one part of a child's growth. Every student has different strengths, interests, and abilities. Some may excel in academics, while others may shine in creativity, sports, communication, or problem-solving.
            </p>
            <p className="mb-6">
                Parents and teachers play a big role in shaping how students view success. Encouraging effort rather than only results, appreciating small improvements, and reminding children that mistakes are part of learning can reduce unnecessary pressure. Giving students time for hobbies, relaxation, and social interaction also helps maintain a healthy balance. When children feel supported rather than judged, they develop confidence and a positive attitude towards learning. Education should help students grow, explore, and discover their potential, not feel like a constant burden.
            </p>
            <p className="mb-6">
                If academic stress begins to affect a student's mood, sleep, or daily routine, speaking with a counsellor or psychologist can help them develop healthier ways to cope with pressure.
            </p>
            <p className="mb-6">
                Because in the end, true success is not just about marks—it is about building confident, curious, and emotionally healthy individuals.
            </p>
        </div>
    )
};

const BlogDetails = () => {
    const { id } = useParams();
    const blogId = parseInt(id);
    const post = blogPosts.find(p => p.id === blogId) || blogPosts[0];

    // Get 2 related posts (excluding current)
    const relatedPosts = blogPosts.filter(p => p.id !== blogId).slice(0, 2);

    const content = articleContent[blogId];

    return (
        <section className="bg-white pt-20 sm:pt-28 pb-12">
            <div className="max-w-[1240px] mx-auto px-6">

                {/* ── Top Part (Hero): Centered Title & Header Image ── */}
                <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
                    <h1 className="text-[#1A1A1A] text-[32px] sm:text-[42px] lg:text-[52px] font-bold font-inter-tight leading-[1.15] max-w-[900px] mb-8 sm:mb-12">
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

                {/* ── Article Content ── */}
                {content && (
                    <div className="max-w-[860px] mx-auto mb-16 sm:mb-20">
                        {content}
                    </div>
                )}

                {/* ── Related Blogs Section ── */}
                {relatedPosts.length > 0 && (
                    <div className="mt-4 sm:mt-8">
                        <h2 className="text-[#1A1A1A] text-[32px] sm:text-[42px] font-bold font-inter-tight mb-8">
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
                )}
            </div>
        </section>
    );
};

export default BlogDetails;
