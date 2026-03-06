import React, { useState, useEffect } from 'react';
import AnimatedNumber from '../components/AnimatedNumber';

const counsellingServices = [
  {
    title: 'Individual Counselling',
    description:
      "Life can feel overwhelming, but you don't have to face it alone. Our counselling offers a safe, confidential space to explore your emotions and find support toward healing and balance.",
    image: '/images/counselling 2.png',
    cta: 'Reach Out for Support',
  },
  {
    title: 'Children & Adolescent Counselling',
    description:
      'Growing up can be confusing and challenging. Our counselling offers a safe, supportive space for children and adolescents to share their feelings and get guidance with stress, friendships, and school.',
    image: '/images/schl01.png',
    cta: 'Connect with a Counsellor',
  },
  {
    title: 'Academic and Career counselling',
    description:
      'Academic pressure and career decisions can feel confusing. Our counselling helps you explore your strengths and options so you can move forward with clarity, confidence, and direction.',
    image: '/images/career hero.png',
    cta: 'Reach Out for Support',
  },
];

const stats = [
  { end: 1000, suffix: '+', label: 'Lives Impacted', icon: '/icons/Mask group2.png' },
  { end: 150, suffix: '+', label: 'Well-being Experts', icon: '/icons/Mask group.png' },
  { end: 4.8, decimals: 1, suffix: '/5', label: 'Client Ratings', icon: '/icons/Mask 1.png' },
  { end: 2500, suffix: '+', label: 'Sessions Delivered', icon: '/icons/analysis.png' },
];

const assurances = [
  {
    title: 'Confidentiality',
    text: 'Secure and Confidential Sessions',
    icon: '/icons/confidential.png',
  },
  {
    title: 'Convenience',
    text: 'Online sessions from the comfort of your home',
    icon: '/icons/convenices.png',
  },
  {
    title: 'Easy Access',
    text: 'Flexible sessions based on your needs',
    icon: '/icons/Guidance.png',
  },
  {
    title: 'Regular Follow-ups',
    text: 'Ongoing support to ensure steady progress',
    icon: '/icons/analysis.png',
  },
  {
    title: 'Safety',
    text: 'Strict ethical and professional standards',
    icon: '/icons/Mask 1.png',
  },
];

const testimonials = [
  {
    name: 'Ananya',
    role: 'Individual Counselling Client',
    text: 'Counselling gave me a safe space to speak without being judged. Over a few sessions, I felt lighter, clearer, and more hopeful about my life.',
    date: 'June 2025',
  },
  {
    name: 'Rohit',
    role: 'Working Professional',
    text: 'I was struggling with stress and burnout. The counsellor helped me understand my patterns and build healthier boundaries at work and home.',
    date: 'April 2025',
  },
  {
    name: 'Priya (Parent)',
    role: 'Parent of a Teenager',
    text: 'My child opened up more in counselling than at home. With guidance, we are now able to support her emotions and academics much better.',
    date: 'January 2025',
  },
];

const expertTabs = [
  {
    id: 'experience',
    label: 'Experience',
    content: "Our counselors hold a Master's degree in Psychology and bring years of experience in providing compassionate counselling and therapy.",
  },
  {
    id: 'expertise',
    label: 'Expertise',
    content: 'Our team specialises in stress, anxiety, grief, relationships, parenting, and student wellbeing—combining evidence-based approaches with cultural sensitivity.',
  },
  {
    id: 'well-trained',
    label: 'Well-Trained',
    content: 'Each counsellor undergoes rigorous training and continuous professional development to deliver the highest standard of care and support.',
  },
  {
    id: 'open-minded',
    label: 'Open-Minded',
    content: 'We create a non-judgmental space where every perspective is valued, helping you explore your thoughts and feelings without fear of being misunderstood.',
  },
];

const inspirationalQuotes = [
  { quote: 'The mind is everything,\nwhat you think you become', author: 'Buddha' },
  { quote: 'Healing takes time, and asking for help is a courageous step.', author: 'Unknown' },
  { quote: 'You don\'t have to be perfect to be worthy of love and belonging.', author: 'Brené Brown' },
  { quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.', author: 'Nelson Mandela' },
  { quote: 'What lies behind us and what lies before us are tiny matters compared to what lies within us.', author: 'Ralph Waldo Emerson' },
];

const Counselling2 = () => {
  const [itemsVisible, setItemsVisible] = useState(3);
  const [testIndex, setTestIndex] = useState(0);
  const [activeExpertTab, setActiveExpertTab] = useState('experience');
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsVisible(1);
      } else if (window.innerWidth < 1024) {
        setItemsVisible(2);
      } else {
        setItemsVisible(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(testimonials.length / itemsVisible);

  const prevSlide = () => {
    setTestIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const nextSlide = () => {
    setTestIndex((prev) => (prev + 1) % totalSlides);
  };

  return (
    <section className="bg-white pt-0">
      {/* Banner + Hero */}
      <div className="relative bg-gradient-to-b from-white to-[#FFF9E1] overflow-hidden">
        {/* Purple Top Strip */}
        <div className="bg-[#520378] pt-20 pb-4 sm:pt-32 sm:pb-10 text-center relative z-10">
          <div className="max-w-[1240px] mx-auto px-6">
            <h1 className="text-white text-[clamp(24px,4vw,40px)] font-bold tracking-[0.08em] uppercase font-inter-tight">
              COUNSELLING
            </h1>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-14 py-10 sm:py-16 flex flex-col lg:flex-row items-center gap-10">
          {/* Left text */}
          <div className="w-full lg:w-[52%] relative z-10">
            <h2 className="text-[24px] sm:text-[34px] lg:text-[40px] font-bold text-gray-950 leading-[1.15] mb-4 font-inter-tight">
              Enriching Minds,<br className="hidden sm:block" /> Supporting Hearts
            </h2>
            <p className="text-[14px] sm:text-[18px] text-gray-700 leading-[1.7] mb-6 font-geist max-w-[620px]">
              We provide a compassionate and confidential space where your feelings are truly heard and respected.
              Here, your experiences matter, and you are never alone in your journey. Our caring mental health
              professionals walk alongside you, offering support, understanding, and gentle guidance.
            </p>
            <button className="bg-[#520378] hover:bg-[#400260] text-white px-6 py-2.5 sm:px-8 sm:py-3.5 rounded-full font-semibold text-[14px] sm:text-[15px] transition-all hover:scale-105 active:scale-95 shadow-md">
              Talk to a Counsellor Today
            </button>
          </div>

          {/* Right image */}
          <div className="w-full lg:w-[48%]">
            <div className="rounded-[26px] overflow-hidden shadow-2xl border border-white/40">
              <img
                src="/images/events.png"
                alt="Counselling support"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Counselling Services */}
      <div className="py-12 sm:py-16 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <h2 className="text-[20px] sm:text-[34px] font-bold text-gray-950 mb-8 text-center font-inter-tight">
            Counselling Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {counsellingServices.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col h-full"
              >
                <div className="h-[210px] w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-[18px] sm:text-[20px] font-semibold text-gray-900 mb-3 font-inter-tight leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-[13px] sm:text-[15px] text-gray-700 leading-[1.6] mb-5 flex-1 font-geist">
                    {service.description}
                  </p>
                  <button className="mt-auto inline-flex items-center justify-center bg-[#520378] text-white px-5 py-2.5 rounded-full text-[13px] font-semibold hover:bg-[#400260] transition-all">
                    {service.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="px-4 sm:px-8 pb-10">
        <div className="max-w-[1240px] mx-auto bg-[#FFF9E1] rounded-[20px] px-5 sm:px-10 py-6 sm:py-8 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-[#FFFDF5] border border-[#F3E6C7] rounded-[16px] px-5 py-5 flex flex-col items-center text-center"
              >
                {stat.icon && (
                  <div className="w-10 h-10 mb-3 flex items-center justify-center">
                    <img
                      src={stat.icon}
                      alt={stat.label}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                )}
                <div className="text-[22px] sm:text-[26px] font-bold text-gray-950 font-inter-tight leading-tight mb-1">
                  <AnimatedNumber end={stat.end} decimals={stat.decimals} suffix={stat.suffix} />
                </div>
                <div className="text-[13px] sm:text-[15px] text-gray-700 font-geist">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Experts */}
      <div className="bg-[#520378] py-12 sm:py-16">
        <div className="max-w-[1240px] mx-auto px-6">
          {/* Header: Title, Description, CTA */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-10 sm:mb-14">
            <div className="flex-1 max-w-[720px]">
              <h2 className="text-[24px] sm:text-[34px] font-bold text-white mb-4 font-inter-tight">
                Our Experts
              </h2>
              <p className="text-[14px] sm:text-[16px] text-white/90 leading-[1.7] font-geist">
                Our team of experienced and compassionate counsellors is dedicated to supporting emotional wellbeing across all age groups. With diverse expertise in mental health, education, and therapeutic practices, they provide empathetic guidance in a safe and confidential space, helping individuals navigate challenges and move toward healing and growth.
              </p>
            </div>
            <button className="shrink-0 border-2 border-white bg-white/10 hover:bg-white/20 text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-full font-semibold text-[14px] sm:text-[15px] transition-all">
              Get in touch with us
            </button>
          </div>

          {/* Tabbed Content */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            <div className="flex-1 w-full">
              {/* Tab Navigation */}
              <div className="flex flex-wrap gap-6 sm:gap-8 mb-8">
                {expertTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveExpertTab(tab.id)}
                    className="flex flex-col items-center gap-2 group"
                  >
                    <span className={`text-[13px] sm:text-[15px] font-medium transition-colors ${activeExpertTab === tab.id ? 'text-white' : 'text-white/70 group-hover:text-white'}`}>
                      {tab.label}
                    </span>
                    <div
                      className={`w-3 h-3 rounded-full border-2 transition-all ${
                        activeExpertTab === tab.id
                          ? 'bg-white border-white'
                          : 'bg-transparent border-white/60 group-hover:border-white'
                      }`}
                    />
                  </button>
                ))}
              </div>

              {/* Horizontal line (visual connector) */}
              <div className="hidden sm:block h-px bg-white/30 mb-8 -mt-6" />

              {/* Active Tab Content */}
              {expertTabs.map((tab) => (
                activeExpertTab === tab.id && (
                  <div key={tab.id} className="animate-in fade-in duration-300">
                    <h3 className="text-[20px] sm:text-[26px] font-bold text-white mb-4 font-inter-tight">
                      {tab.label}
                    </h3>
                    <p className="text-[14px] sm:text-[16px] text-white/90 leading-[1.7] font-geist max-w-[560px]">
                      {tab.content}
                    </p>
                  </div>
                )
              ))}
            </div>

            {/* Image */}
            <div className="w-full lg:w-[45%] lg:max-w-[480px] shrink-0">
              <div className="rounded-l-[20px] rounded-b-[20px] overflow-hidden shadow-2xl">
                <img
                  src="/images/counselling 2.png"
                  alt="Our counsellors"
                  className="w-full h-[280px] sm:h-[340px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image + Quote Section */}
      <div className="bg-[#FFFDF5] py-12 sm:py-16">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Photograph */}
            <div className="rounded-[20px] overflow-hidden shadow-lg">
              <img
                src="/images/events.png"
                alt="Two people engaged in a positive discussion at a modern office table"
                className="w-full h-[320px] sm:h-[380px] object-cover"
              />
            </div>

            {/* Right: Quote Card */}
            <div className="bg-[#FFF9E1] rounded-[20px] p-8 sm:p-10 shadow-sm border border-[#F3E6C7] flex flex-col justify-between min-h-[320px]">
              <div>
                <span className="text-[48px] sm:text-[56px] font-serif text-gray-400 leading-none block mb-2">&ldquo;</span>
                <p className="text-[18px] sm:text-[22px] text-gray-800 leading-[1.5] font-geist whitespace-pre-line">
                  {inspirationalQuotes[quoteIndex].quote}
                </p>
                <p className="text-[14px] sm:text-[15px] text-gray-600 font-geist mt-4">
                  &mdash;{inspirationalQuotes[quoteIndex].author}
                </p>
              </div>
              {/* Carousel dots */}
              <div className="flex justify-center gap-2 mt-8">
                {inspirationalQuotes.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setQuoteIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === quoteIndex ? 'w-6 bg-[#520378]' : 'w-2 bg-gray-300'
                    }`}
                    aria-label={`Quote ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Assurances */}
      <div className="bg-white py-12 sm:py-16">
        <div className="max-w-[1240px] mx-auto px-6">
          <h2 className="text-[20px] sm:text-[34px] font-bold text-[#520378] text-center mb-10 font-inter-tight">
            What do we assure?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {assurances.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center text-center bg-white rounded-[16px] px-5 py-6 shadow-md hover:shadow-lg transition-all border border-gray-100"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 mb-4 flex items-center justify-center bg-transparent">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <h3 className="text-[14px] sm:text-[16px] font-bold text-gray-900 mb-2 font-inter-tight">
                  {item.title}
                </h3>
                <p className="text-[12px] sm:text-[14px] text-gray-700 leading-[1.5] font-geist">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div
        className="py-12 sm:py-18"
        style={{ background: 'linear-gradient(180deg, #FFF9E1 0%, #FFFFFF 100%)' }}
      >
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
            <h2 className="text-[22px] sm:text-[34px] font-bold text-gray-950 font-inter-tight leading-tight max-w-[520px]">
              What our clients say
            </h2>
            <div className="flex gap-3">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center bg-white text-gray-500 hover:border-[#520378] hover:text-[#520378] transition-all"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#520378] hover:text-white transition-all"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${testIndex * (100 / itemsVisible)}%)` }}
            >
              {testimonials.map((item, index) => (
                <div
                  key={`${item.name}-${index}`}
                  className="w-full md:w-1/2 lg:w-1/3 flex-none px-3 sm:px-4"
                >
                  <div className="bg-white rounded-[22px] p-7 sm:p-8 shadow-sm border border-gray-100 flex flex-col h-full">
                    <div className="mb-5">
                      <h3 className="text-[16px] sm:text-[18px] font-bold text-gray-950 mb-1 font-inter-tight">
                        {item.name}
                      </h3>
                      <p className="text-[12px] sm:text-[13px] text-gray-500 font-geist">
                        {item.role}
                      </p>
                    </div>
                    <p className="text-[13px] sm:text-[15px] text-gray-700 leading-relaxed mb-6 flex-1 font-geist">
                      “{item.text}”
                    </p>
                    <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex text-[#FCA253] text-[14px]">
                          {'★★★★★'.split('').map((s, i) => (
                            <span key={i}>{s}</span>
                          ))}
                        </div>
                      </div>
                      <span className="text-[11px] sm:text-[12px] font-bold text-gray-800 font-geist">
                        {item.date}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => setTestIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  testIndex === i ? 'w-6 bg-[#520378]' : 'w-2 bg-gray-300'
                }`}
                aria-label={`Go to testimonial page ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Contact / Enquiry Section */}
      <div className="bg-[#520378] py-12 sm:py-16">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="text-white">
              <p className="uppercase text-[12px] tracking-[0.18em] text-[#FFCF99] font-semibold mb-3">
                WE&apos;RE HERE TO LISTEN
              </p>
              <h2 className="text-[24px] sm:text-[32px] font-bold leading-[1.1] mb-4 font-inter-tight">
                We&apos;ll help you get started.
              </h2>
              <p className="text-[13px] sm:text-[16px] text-white/80 leading-[1.7] mb-6 font-geist max-w-[520px]">
                Share a few details and our team will reach out with the next steps.
                You can ask questions, understand the process, and choose a counsellor
                you feel comfortable with.
              </p>
              <ul className="space-y-2 text-[13px] sm:text-[15px] font-geist text-white/85">
                <li>• 100% confidential conversations</li>
                <li>• Flexible timings and online sessions</li>
                <li>• Guidance for individuals, couples, children and families</li>
              </ul>
            </div>

            <div className="bg-white rounded-[20px] p-6 sm:p-8 shadow-xl">
              <h3 className="text-[18px] sm:text-[20px] font-bold text-gray-900 mb-4 font-inter-tight">
                Contact Us
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-[13px] font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-200 rounded-[10px] px-3 py-2.5 text-[14px] outline-none focus:ring-1 focus:ring-[#520378]/40 focus:border-[#520378]"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13px] font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full border border-gray-200 rounded-[10px] px-3 py-2.5 text-[14px] outline-none focus:ring-1 focus:ring-[#520378]/40 focus:border-[#520378]"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full border border-gray-200 rounded-[10px] px-3 py-2.5 text-[14px] outline-none focus:ring-1 focus:ring-[#520378]/40 focus:border-[#520378]"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-gray-700 mb-1">How can we help you?</label>
                  <textarea
                    rows="3"
                    className="w-full border border-gray-200 rounded-[10px] px-3 py-2.5 text-[14px] outline-none focus:ring-1 focus:ring-[#520378]/40 focus:border-[#520378] resize-none"
                    placeholder="Share briefly about what you would like support with"
                  />
                </div>
                <button
                  type="button"
                  className="w-full bg-[#520378] hover:bg-[#400260] text-white font-semibold text-[15px] py-2.5 rounded-full shadow-md transition-all active:scale-95"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counselling2;

