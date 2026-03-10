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
    ),
    10: (
        <div className="prose prose-lg max-w-none text-[#4A5568] font-geist leading-[1.8]">
            <p className="mb-6">
                Most of us grow up hearing things like “Be strong,” “Don’t overthink,” or “Everyone has problems.” Because of this, many people ignore their emotional struggles for a long time. We keep pushing through stress, sadness, or confusion, hoping things will get better on their own. Sometimes they do. But sometimes our mind needs the same care and attention that we give our physical health. Talking to a counsellor can help you understand your thoughts, manage emotions, and feel less alone in what you are going through. At Vriksh Psychological Support Services, many people reach out for counselling not because something is “wrong,” but because they want clarity, support, and healthier ways to cope with life.
            </p>

            <h3 className="text-[#1A1A1A] text-2xl font-bold mb-6 font-inter-tight">Here are 10 relatable signs that counselling might help you:</h3>

            <div className="space-y-8 mb-10">
                <div>
                    <h4 className="text-[#1A1A1A] text-xl font-bold mb-2 font-inter-tight">1. You Feel Mentally Exhausted All the Time</h4>
                    <p>Even when you’re not physically tired, your mind feels drained. Small tasks feel overwhelming, and you often feel like you just want a break from everything.</p>
                </div>

                <div>
                    <h4 className="text-[#1A1A1A] text-xl font-bold mb-2 font-inter-tight">2. You Keep Overthinking Everything</h4>
                    <p>You replay conversations in your head, worry about future situations, and constantly question whether you did something wrong. Overthinking can be exhausting, and counselling can help you manage these thought patterns.</p>
                </div>

                <div>
                    <h4 className="text-[#1A1A1A] text-xl font-bold mb-2 font-inter-tight">3. You Feel Like No One Really Understands You</h4>
                    <p>You might have friends or family around, but you still feel like you cannot openly talk about what you’re going through. A counsellor offers a safe and non-judgmental space where you can express yourself freely.</p>
                </div>

                <div>
                    <h4 className="text-[#1A1A1A] text-xl font-bold mb-2 font-inter-tight">4. Small Things Trigger Big Reactions</h4>
                    <p>Sometimes you notice that small situations make you unusually angry, anxious, or upset. These reactions may be connected to deeper emotions that counselling can help explore.</p>
                </div>

                <div>
                    <h4 className="text-[#1A1A1A] text-xl font-bold mb-2 font-inter-tight">5. You Feel Stuck in the Same Patterns</h4>
                    <p>Maybe you keep repeating the same relationship issues, career confusion, or self-doubt. Counselling can help you identify patterns and work towards healthier choices.</p>
                </div>

                <div>
                    <h4 className="text-[#1A1A1A] text-xl font-bold mb-2 font-inter-tight">6. Your Motivation Is Getting Lower</h4>
                    <p>Things that once interested or excited you no longer feel the same. You may find it hard to focus, stay productive, or feel enthusiastic about your goals.</p>
                </div>

                <div>
                    <h4 className="text-[#1A1A1A] text-xl font-bold mb-2 font-inter-tight">7. You Are Going Through a Big Life Change</h4>
                    <p>Moving to a new place, starting college, becoming a parent, or dealing with a breakup can bring unexpected emotional stress. Having professional support during these times can make the transition easier.</p>
                </div>

                <div>
                    <h4 className="text-[#1A1A1A] text-xl font-bold mb-2 font-inter-tight">8. You Feel Constantly Stressed or Anxious</h4>
                    <p>Your mind rarely feels calm. You may worry about work, studies, family expectations, or the future. Counselling can help you develop practical strategies to manage stress and anxiety.</p>
                </div>

                <div>
                    <h4 className="text-[#1A1A1A] text-xl font-bold mb-2 font-inter-tight">9. Your Sleep or Daily Routine Is Affected</h4>
                    <p>When emotional stress builds up, it often shows in daily habits - difficulty sleeping, low appetite, lack of energy, or struggling to keep up with daily responsibilities.</p>
                </div>

                <div>
                    <h4 className="text-[#1A1A1A] text-xl font-bold mb-2 font-inter-tight">10. You Just Want to Understand Yourself Better</h4>
                    <p>Counselling isn’t only for problems. Many people seek counselling because they want to improve self-awareness, build confidence, and develop healthier emotional habits.</p>
                </div>
            </div>

            <h3 className="text-[#1A1A1A] text-2xl font-bold mb-4 font-inter-tight">Asking for Help Is a Healthy Choice</h3>
            <p className="mb-6">
                Taking care of your mental health is not a luxury - it is a necessity. Seeking counselling is not a sign of weakness; it is a step toward understanding yourself and building a healthier, more balanced life.
            </p>
            <p className="mb-6">
                If you ever feel like you need support, reaching out to professionals such as those at Vriksh Psychological Support Services can help you feel heard, supported, and guided toward positive change. Sometimes, the most important step toward feeling better is simply talking to someone who listens.
            </p>
        </div>
    ),
    11: (
        <div className="prose prose-lg max-w-none text-[#4A5568] font-geist leading-[1.8]">
            <p className="mb-6">
                If you’ve ever heard a child say “I don’t know” when you ask what’s wrong, you’re not alone. Many parents experience moments where a child is clearly upset, but cannot explain why. Sometimes the child cries over something that seems small, refuses to talk, or suddenly becomes angry. As adults, we may feel confused and wonder, “Why can’t they just tell me what they feel?”
            </p>
            <p className="mb-6">
                The truth is, children are still learning how to understand and express their emotions. Just like learning to read or write, emotional expression is a skill that develops over time.
            </p>

            <h3 className="text-[#1A1A1A] text-2xl font-bold mb-6 font-inter-tight">Here are some simple and relatable ways to help children open up:</h3>

            <div className="space-y-8 mb-10">
                <div>
                    <h4 className="text-[#1A1A1A] text-xl font-bold mb-2 font-inter-tight">1. Remember that behaviour is often a feeling</h4>
                    <p>Children don’t always say “I feel frustrated” or “I’m anxious.” Instead, emotions show up through behaviour - tantrums, silence, anger, or clinginess. When a child suddenly refuses to do homework or throws a toy, it may not be about the toy or homework at all. It could be frustration, tiredness, or something that happened at school. Sometimes the behaviour is simply their way of saying, “Something doesn’t feel right.”</p>
                </div>

                <div>
                    <h4 className="text-[#1A1A1A] text-xl font-bold mb-2 font-inter-tight">2. Avoid saying “stop crying”</h4>
                    <p className="mb-4">Many adults say things like:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                        <li>“Don’t cry.”</li>
                        <li>“It’s not a big deal.”</li>
                        <li>“You’re being dramatic.”</li>
                    </ul>
                    <p>While these responses are common, they can make children feel like their emotions are wrong. Instead, try acknowledging the feeling: “I can see you’re upset. Do you want to tell me what happened?”. Often, just feeling understood helps children calm down.</p>
                </div>

                <div>
                    <h4 className="text-[#1A1A1A] text-xl font-bold mb-2 font-inter-tight">3. Help them find words for their feelings</h4>
                    <p>Children often struggle because they simply don’t have the vocabulary to explain their emotions. You can gently guide them: “Are you feeling angry because your game ended?” or “Did that make you feel embarrassed?”. Over time, children learn to recognize and name their emotions themselves.</p>
                </div>

                <div>
                    <h4 className="text-[#1A1A1A] text-xl font-bold mb-2 font-inter-tight">4. Talk during calm moments</h4>
                    <p>Sometimes parents try to discuss feelings right in the middle of a meltdown, when the child is overwhelmed. Children often open up more during relaxed moments - like during bedtime conversations, car rides, or while playing together. A simple question like “What was the best part of your day?” can naturally lead to deeper conversations.</p>
                </div>

                <div>
                    <h4 className="text-[#1A1A1A] text-xl font-bold mb-2 font-inter-tight">5. Let them express feelings in different ways</h4>
                    <p>Not all children express emotions through talking. Some may feel more comfortable expressing themselves through drawing, playing with toys, storytelling, or writing/journaling. For example, asking a child to draw how their day felt can reveal more than a direct question sometimes.</p>
                </div>

                <div>
                    <h4 className="text-[#1A1A1A] text-xl font-bold mb-2 font-inter-tight">6. Show them that feelings are normal</h4>
                    <p>Children learn a lot by watching adults. When parents express emotions calmly, children understand that feelings are natural and manageable. For example: “I felt a little frustrated today, so I took a short break.” This shows children that emotions can be handled in healthy ways.</p>
                </div>

                <div>
                    <h4 className="text-[#1A1A1A] text-xl font-bold mb-2 font-inter-tight">7. Be patient with the process</h4>
                    <p>Helping children express emotions is not something that happens overnight. It takes time, patience, and repeated conversations. Some days children may open up easily. Other days they may stay quiet. Both are part of the learning process. What matters most is that they know someone is willing to listen when they’re ready.</p>
                </div>
            </div>

            <h3 className="text-[#1A1A1A] text-2xl font-bold mb-4 font-inter-tight">The Goal Isn’t Perfect Expression</h3>
            <p className="mb-6">
                The goal isn’t to make children explain every emotion perfectly. It’s simply to help them feel safe enough to share what’s happening inside their minds. When children grow up in environments where their feelings are acknowledged, they develop better emotional awareness, stronger relationships, and healthier coping skills.
            </p>
            <p className="mb-6 italic">
                Sometimes, the most powerful support we can offer a child is simply this: “I’m here. You can tell me how you feel.”
            </p>
        </div>
    ),
    12: (
        <div className="prose prose-lg max-w-none text-[#4A5568] font-geist leading-[1.8]">
            <p className="mb-6">
                Have you ever had a knot in your stomach before an important meeting, or felt your heart race when you’re anxious? Maybe after a stressful day you noticed a headache, tight shoulders, or complete exhaustion. Most of us have experienced moments like these but rarely stop to think about why they happen.
            </p>
            <p className="mb-6">
                The truth is, our emotions, mind, and body are constantly communicating with each other. What we feel emotionally often shows up physically, and what happens in our body can affect how we feel mentally.
            </p>

            <h3 className="text-[#1A1A1A] text-2xl font-bold mb-6 font-inter-tight">Your body reacts to your emotions</h3>
            <p className="mb-6">
                Think about the last time you felt nervous or stressed. Maybe your palms became sweaty, your breathing became faster, or your stomach felt uneasy. That’s because when your brain senses stress or danger, it sends signals throughout the body. This natural response prepares us to react quickly. It’s helpful in short bursts, but when stress becomes constant, the body begins to feel the effects.
            </p>

            <p className="mb-4">This is why emotional stress sometimes shows up as:</p>
            <ul className="list-disc pl-6 mb-8 space-y-1">
                <li>Headaches</li>
                <li>Body aches or muscle tension</li>
                <li>Stomach discomfort</li>
                <li>Fatigue</li>
                <li>Trouble sleeping</li>
            </ul>
            <p className="mb-8">In many ways, your body is simply responding to what your mind is going through.</p>

            <h3 className="text-[#1A1A1A] text-2xl font-bold mb-6 font-inter-tight">Sometimes our body speaks what we don’t say</h3>
            <p className="mb-6">
                Many people try to ignore their emotions. We push through stress, hide sadness, or tell ourselves to “just deal with it.” But emotions don’t simply disappear when ignored. Instead, they often show up in other ways - irritability, tiredness, difficulty concentrating, or physical discomfort.
            </p>
            <p className="mb-10">
                For example, someone who constantly suppresses stress might start feeling frequent headaches or exhaustion. It’s not “just physical.” Often, the body is processing emotions that haven’t been expressed yet.
            </p>

            <h3 className="text-[#1A1A1A] text-2xl font-bold mb-6 font-inter-tight">Positive emotions also change the body</h3>
            <p className="mb-6">
                Just as stress affects our body, positive emotions can heal and relax it. Think about how you feel after:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-1">
                <li>Laughing with friends</li>
                <li>Spending time with loved ones</li>
                <li>Going for a walk in nature</li>
                <li>Listening to music you enjoy</li>
            </ul>
            <p className="mb-10">Your breathing becomes slower, your body relaxes, and your mind feels lighter. These moments show how powerful emotions can be in influencing our physical state.</p>

            <h3 className="text-[#1A1A1A] text-2xl font-bold mb-6 font-inter-tight">Learning to listen to your body</h3>
            <p className="mb-6">
                Our bodies often give us early warning signs when something isn’t right emotionally. You might notice: Feeling constantly tired, difficulty sleeping, restlessness or tension, losing motivation, feeling mentally overwhelmed.
            </p>
            <p className="mb-4">Instead of ignoring these signals, it can help to pause and ask yourself:</p>
            <ul className="list-disc pl-6 mb-8 space-y-1">
                <li>What am I feeling right now?</li>
                <li>Is something in my life causing stress or emotional pressure?</li>
            </ul>
            <p className="mb-10">Sometimes just acknowledging emotions can reduce their intensity.</p>

            <h3 className="text-[#1A1A1A] text-2xl font-bold mb-6 font-inter-tight">Small habits that support the mind-body balance</h3>
            <p className="mb-4">Simple habits can make a difference:</p>
            <ul className="list-disc pl-6 mb-8 space-y-1">
                <li>Taking a few deep breaths during stressful moments</li>
                <li>Getting regular physical movement</li>
                <li>Talking about feelings with someone you trust</li>
                <li>Taking breaks from constant work or screen time</li>
                <li>Practicing mindfulness or relaxation</li>
            </ul>
            <p className="mb-10">These small practices help calm the nervous system and restore balance.</p>

            <h3 className="text-[#1A1A1A] text-2xl font-bold mb-4 font-inter-tight">Your Mind and Body Are on the Same Team</h3>
            <p className="mb-6">
                We often treat mental health and physical health as separate things, but they are closely connected. When one struggles, the other often feels the impact. Learning to understand this connection can help us take better care of ourselves. And sometimes, when emotions feel overwhelming, seeking support from professionals such as those at Vriksh Psychological Support Services can provide helpful guidance.
            </p>
            <p className="mb-6 font-bold">
                At the end of the day, your body is not working against you—it is simply trying to tell you what your mind might need. Sometimes, the most important thing we can do is pause, listen, and take care of both.
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
