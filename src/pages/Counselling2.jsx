import React, { useState, useEffect } from 'react';
import AnimatedNumber from '../components/AnimatedNumber';

const counsellingServices = [
  {
    title: 'Individual Counselling',
    description:
      "Life can feel overwhelming, but you don't have to face it alone. Our counselling offers a safe, confidential space to explore your emotions and find support toward healing and balance.",
    image: '/images/services 1.png',
    cta: 'Reach Out for Support',
  },
  {
    title: 'Children & Adolescent Counselling',
    description:
      'Growing up can be confusing and challenging. Our counselling offers a safe, supportive space for children and adolescents to share their feelings and get guidance with stress, friendships, and school.',
    image: '/images/services 2.png',
    cta: 'Connect with a Counsellor',
  },
  {
    title: 'Academic and Career counselling',
    description:
      'Academic pressure and career decisions can feel confusing. Our counselling helps you explore your strengths and options so you can move forward with clarity, confidence, and direction.',
    image: '/images/services 3.png',
    cta: 'Reach Out for Support',
  },
];

const stats = [
  { end: 1000, suffix: '+', label: 'Lives Impacted', icon: '/icons/lives impact.png' },
  { end: 150, suffix: '+', label: 'Well-being Experts', icon: '/icons/well being expected.png' },
  { end: 4.8, decimals: 1, suffix: '/5', label: 'Client Ratings', icon: '/icons/client ratings.png' },
  { end: 2500, suffix: '+', label: 'Sessions Delivered', icon: '/icons/sessions.png' },
];

const assurances = [
  {
    title: 'Confidentiality',
    text: 'Secure and Confidential Sessions',
    icon: '/icons/Guidance.png',
  },
  {
    title: 'Convenience',
    text: 'Online sessions from the comfort of your home',
    icon: '/icons/confidential.png',
  },
  {
    title: 'Easy Access',
    text: 'Flexible sessions based on your needs',
    icon: '/icons/convenices.png',
  },
  {
    title: 'Regular Follow-ups',
    text: 'Ongoing support to ensure steady progress',
    icon: '/icons/export support.png',
  },
  {
    title: 'Safety',
    text: 'Strict ethical and professional standards',
    icon: '/icons/clear direction.png',
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
    content: (
      <>
        Our counselors hold a Master's degree in Psychology and bring years of experience in providing compassionate
        counselling and therapy.
      </>
    ),
  },
  {
    id: 'expertise',
    label: 'Expertise',
    content: (
      <>
        Our counsellors are skilled in a range of evidence-based therapeutic approaches, supporting individuals through
        diverse emotional and behavioural challenges with care and understanding.
      </>
    ),
  },
  {
    id: 'well-trained',
    label: 'Well-Trained',
    content: (
      <>
        Our team undergoes continuous professional training to deepen their knowledge, sharpen their counselling skills,
        and provide thoughtful, effective support.
      </>
    ),
  },
  {
    id: 'open-minded',
    label: 'Open-Minded',
    content: (
      <>
        Our counselors listen with empathy and respect, creating a safe,{' '}
        <span className="whitespace-nowrap">non-judgmental</span> space where individuals feel heard, valued, and
        supported in their healing journey.
      </>
    ),
  },
];

const inspirationalQuotes = [
  { quote: 'The mind is everything,\nwhat you think you\nbecome', author: 'Buddha' },
  { quote: 'Talk to yourself like you would to someone you love.', author: 'Brené Brown' },
  { quote: 'Healing takes time, and asking for help is a courageous step', author: ' Mariska Hargitay' },
  { quote: 'Out of your vulnerabilities will come your strength.', author: 'Sigmund Freud' },
  { quote: 'Until you make the unconscious conscious, it will direct your life and you will call it fate.', author: 'Carl Jung' },
];

const Counselling2 = () => {
  const [itemsVisible, setItemsVisible] = useState(3);
  const [testIndex, setTestIndex] = useState(0);
  const [serviceIndex, setServiceIndex] = useState(0);
  const [assureIndex, setAssureIndex] = useState(0);
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

  useEffect(() => {
    const timer = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % inspirationalQuotes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (window.innerWidth < 768) {
        setServiceIndex((prev) => (prev + 1) % counsellingServices.length);
      }
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (window.innerWidth < 768) {
        setAssureIndex((prev) => (prev + 1) % assurances.length);
      }
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveExpertTab((prev) => {
        const currentIndex = expertTabs.findIndex((tab) => tab.id === prev);
        const nextIndex = (currentIndex + 1) % expertTabs.length;
        return expertTabs[nextIndex].id;
      });
    }, 8000); // Switch expert tab every 8 seconds (Slowed down from 4s)
    return () => clearInterval(timer);
  }, []);

  // ✅ NEW FORM STATE
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    support: '',
    datetime: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  // ✅ NEW FUNCTIONS
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill required fields");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbzPTZch4Xvd7OcwAr6Pt7LuCqOA_LOO-i8dRMCQE5U1-wjx1fa1S8LE3iF7B28SVfUwTA/exec", {
        method: "POST",
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.status === "success") {
        alert("Form submitted successfully!");

        setFormData({
          name: '',
          email: '',
          phone: '',
          age: '',
          support: '',
          datetime: '',
          message: ''
        });
      }
    } catch (error) {
      console.error(error);
      alert("Error submitting form");
    }

    setLoading(false);
  };


  return (
    <section className="bg-white pt-0">
      {/* Banner + Hero */}
      <div
        className="relative overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #FFFAE4 0%, #FFFFFF 100%)' }}
      >
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
          <div className="w-full lg:w-[45%] relative z-10">
            <h2 className="text-[24px] sm:text-[34px] lg:text-[40px] font-bold text-gray-950 leading-[1.15] mb-4 font-inter-tight">
              Enriching Minds,<br className="hidden sm:block" /> Supporting Hearts
            </h2>
            <p className="text-[14px] sm:text-[18px] text-gray-700 leading-[1.7] mb-6 font-geist max-w-[620px]">
              We provide a compassionate and confidential space where your feelings are truly heard and respected.
              Here, your experiences matter, and you are never alone in your journey. Our caring mental health
              professionals walk alongside you, offering support, understanding, and gentle guidance.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#520378] hover:bg-[#400260] text-white px-6 py-2.5 sm:px-8 sm:py-3.5 rounded-full font-semibold text-[14px] sm:text-[15px] transition-all hover:scale-105 active:scale-95 shadow-md"
            >
              Talk to a Counsellor Today
            </button>
          </div>

          {/* Right image */}
          <div className="w-full lg:w-[52%]">
            <div className="rounded-[26px] overflow-hidden shadow-2xl border border-white/40 h-[260px] sm:h-[300px] lg:h-[380px]">
              <img
                src="/images/counselling 2.png"
                alt="Counselling support"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Counselling Services */}
      <div id="services" className="py-12 sm:py-8 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <h2 className="text-[20px] sm:text-[34px] font-bold text-gray-950 mb-8 text-center font-inter-tight">
            Counselling Services
          </h2>

          {/* Desktop View: Grid */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
                  <p className="text-[13px] sm:text-[17px] text-gray-700 leading-[1.6] mb-5 flex-1 font-geist">
                    {service.description}
                  </p>
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="mt-auto inline-flex items-center justify-center bg-[#520378] text-white px-5 py-2.5 rounded-full text-[13px] font-semibold hover:bg-[#400260] transition-all self-start"
                  >
                    {service.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View: Slider */}
          <div className="md:hidden relative">
            <div className="overflow-hidden px-1">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${serviceIndex * 100}%)` }}
              >
                {counsellingServices.map((service, index) => (
                  <div key={service.title} className="w-full flex-none px-2">
                    <div className="bg-white rounded-[24px] overflow-hidden shadow-sm flex flex-col h-full border border-gray-100">
                      <div className="h-[200px] w-full overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="text-[18px] font-semibold text-gray-900 mb-3 font-inter-tight leading-tight">
                          {service.title}
                        </h3>
                        <p className={`text-[14px] text-gray-700 leading-[1.6] ${index === 0 ? 'mb-1' : 'mb-2'} flex-1 font-geist`}>
                          {service.description}
                        </p>
                        <button
                          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                          className={`${index === 0 ? 'mt-1' : 'mt-auto'} inline-flex items-center justify-center bg-[#520378] text-white px-6 py-2.5 rounded-full text-[13px] font-semibold active:scale-95 transition-all self-start`}
                        >
                          {service.cta}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {counsellingServices.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setServiceIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${serviceIndex === i ? 'w-6 bg-[#520378]' : 'w-2 bg-gray-300'
                    }`}
                  aria-label={`Go to service ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="px-4 sm:px-8 pb-10">
        <div className="max-w-[1240px] mx-auto bg-[#FFF9E1] rounded-[20px] px-3 sm:px-10 py-6 sm:py-8 shadow-sm">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-[#FFFDF5] border border-[#F3E6C7] rounded-[16px] px-3 py-5 flex flex-col items-center text-center"
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
            <div className="flex-1 max-w-[1000px]">
              <h2 className="text-[24px] sm:text-[34px] font-bold text-white mb-4 font-inter-tight">
                Our Experts
              </h2>
              <p className="text-[14px] sm:text-[19px] text-white/90 leading-[1.7] font-geist">
                Our team of experienced and compassionate counsellors is dedicated to supporting emotional wellbeing across all age groups. With diverse expertise in mental health, education, and therapeutic practices, they provide empathetic guidance in a safe and confidential space, helping individuals navigate challenges and move toward healing and growth.
              </p>
            </div>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="shrink-0 border-2 border-white bg-white hover:bg-gray-100 text-[#520378] px-6 py-2.5 sm:px-8 sm:py-3 rounded-full font-semibold text-[14px] sm:text-[15px] transition-all lg:mt-18"
            >
              Get in touch with us
            </button>
          </div>

          {/* Tabbed Content */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            <div className="flex-1 w-full">
              {/* Tab Navigation */}
              <div className="flex justify-between md:justify-start md:gap-10 mb-8 w-full">
                {expertTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveExpertTab(tab.id)}
                    className="flex flex-col items-center gap-2 group min-w-[60px]"
                  >
                    <span className={`text-[13px] sm:text-[15px] font-medium transition-colors whitespace-nowrap ${activeExpertTab === tab.id ? 'text-white' : 'text-white/70 group-hover:text-white'}`}>
                      {tab.label}
                    </span>
                    <div
                      className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-2 transition-all ${activeExpertTab === tab.id
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
                  src="/images/OUR EXPERTS.png"
                  alt="Our counsellors"
                  className="w-full h-[280px] sm:h-[340px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image + Quote Section */}
      <div className="bg-[#FFFDF5] pt-8 pb-12 sm:pt-10 sm:pb-16">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left: Photograph */}
            <div className="lg:col-span-7 rounded-[20px] overflow-hidden shadow-lg">
              <img
                src="/images/Frame 2.png"
                alt="Two people engaged in a positive discussion at a modern office table"
                className="w-full h-[320px] sm:h-[380px] object-cover"
              />
            </div>

            {/* Right: Quote Card */}
            <div className="lg:col-span-5 bg-[#FFF9E1] rounded-[20px] p-6 sm:p-10 shadow-sm border border-[#F3E6C7] flex flex-col justify-end h-[320px] sm:h-[380px]">
              <div className="flex flex-col flex-1 justify-end pt-10 sm:pt-12">
                <div>
                  {/* Large quote icon */}
                  <img
                    src="/icons/quotes.png"
                    alt="Quote"
                    className="w-12 h-12 sm:w-16 sm:h-16 object-contain mb-4 opacity-60"
                  />
                  <p className="text-[18px] sm:text-[22px] font-semibold text-gray-800 leading-[1.4] font-inter-tight">
                    {inspirationalQuotes[quoteIndex].quote}
                  </p>
                  <p className="text-[13px] sm:text-[14px] text-gray-500 font-geist mt-3">
                    -{inspirationalQuotes[quoteIndex].author}
                  </p>
                </div>
                {/* Carousel dots */}
                <div className="flex gap-2 mt-auto pt-6">
                  {inspirationalQuotes.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setQuoteIndex(i)}
                      className={`h-2.5 w-2.5 rounded-full transition-all ${i === quoteIndex ? 'bg-[#3d3d3d]' : 'bg-gray-300'
                        }`}
                      aria-label={`Quote ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Assurances */}
      <div className="bg-white py-4 sm:py-16">
        <div className="max-w-[1240px] mx-auto px-6">
          <h2 className="text-[20px] sm:text-[34px] font-bold text-[#520378] text-center mb-4 sm:mb-10 font-inter-tight">
            What do we assure?
          </h2>

          {/* Desktop View: Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {assurances.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center text-center"
              >
                <div className="w-22 h-22 sm:w-20 sm:h-20 lg:w-28 lg:h-28 mb-4 flex items-center justify-center">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="bg-[#520378] rounded-[14px] px-5 py-6 shadow-md hover:shadow-lg transition-all w-full h-full">
                  <h3 className="text-[14px] sm:text-[16px] font-bold text-white mb-2 font-inter-tight">
                    {item.title}
                  </h3>
                  <p className="text-[12px] sm:text-[14px] text-white/90 leading-[1.5] font-geist">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View: Slider */}
          <div className="md:hidden relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${assureIndex * 100}%)` }}
              >
                {assurances.map((item) => (
                  <div key={item.title} className="w-full flex-none px-4">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-26 h-26 mb-2 flex items-center justify-center">
                        <img
                          src={item.icon}
                          alt={item.title}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                      <div className="bg-[#520378] rounded-[20px] px-6 py-8 shadow-lg w-full min-h-[160px] flex flex-col justify-center">
                        <h3 className="text-[18px] font-bold text-white mb-3 font-inter-tight">
                          {item.title}
                        </h3>
                        <p className="text-[14px] text-white/90 leading-[1.6] font-geist">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {assurances.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setAssureIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${assureIndex === i ? 'w-6 bg-[#520378]' : 'w-2 bg-gray-300'
                    }`}
                  aria-label={`Go to assurance ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div
        className="py-10 sm:py-20 border-t border-black/5"
        style={{ background: 'linear-gradient(180deg, #FFF9E1 0%, #FFFFFF 100%)' }}
      >
        <div className="max-w-[1240px] mx-auto px-6">
          {/* Header with Navigation - Desktop */}
          <div className="hidden sm:flex justify-between items-end mb-12">
            <h2 className="text-xl sm:text-4xl lg:text-[42px] font-bold text-black font-inter-tight leading-tight">
              What our clients say
            </h2>
            {/* Carousel Controls */}
            <div className="flex gap-3 mb-2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center bg-white text-gray-400 hover:border-[#520378] hover:text-[#520378] transition-all shadow-sm active:scale-95"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 hover:bg-[#520378] hover:text-white transition-all shadow-sm active:scale-95"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>

          {/* Header with Navigation - Mobile */}
          <div className="sm:hidden flex flex-row justify-between items-center w-full mb-10 gap-4">
            <h2 className="text-xl font-bold text-gray-900 leading-[1.1] text-left font-inter-tight">
              What our clients say
            </h2>
            <div className="flex gap-3">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full flex items-center justify-center shadow-sm border border-gray-100 hover:shadow-md transition-all active:scale-95 bg-white"
              >
                <svg className="w-5 h-5 text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path></svg>
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full flex items-center justify-center shadow-sm border border-gray-100 hover:shadow-md transition-all active:scale-95 bg-white"
              >
                <svg className="w-5 h-5 text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
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
                  <div className="bg-white rounded-[24px] p-8 sm:p-10 shadow-sm border border-black/5 flex flex-col h-full hover:shadow-md transition-shadow">
                    <div className="mb-6">
                      <h4 className="text-base sm:text-lg font-bold text-gray-950 mb-0.5">{item.name}</h4>
                      <p className="text-xs sm:text-sm text-gray-500 font-medium italic">{item.role}</p>
                    </div>
                    <p className="text-gray-800 text-sm sm:text-[15px] leading-relaxed mb-6 sm:mb-10 flex-grow font-medium">
                      "{item.text}"
                    </p>
                    {/* Footer with Google & Stars */}
                    <div className="flex items-center justify-between pt-6 border-t border-gray-100 mt-auto">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 flex items-center justify-center">
                          <svg viewBox="0 0 24 24" className="w-6 h-6">
                            <path
                              fill="#4285F4"
                              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            />
                            <path
                              fill="#34A853"
                              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            />
                            <path
                              fill="#FBBC05"
                              d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z"
                            />
                            <path
                              fill="#EA4335"
                              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                            />
                          </svg>
                        </div>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg key={star} className="w-4 h-4 text-[#FCA65B]" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                          ))}
                        </div>
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-gray-800 font-geist">
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
                className={`h-1.5 rounded-full transition-all duration-300 ${testIndex === i ? 'w-6 bg-[#520378]' : 'w-2 bg-gray-300'
                  }`}
                aria-label={`Go to testimonial page ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="bg-white pt-8 pb-12 sm:pt-16 sm:pb-20 scroll-mt-20" style={{ background: 'linear-gradient(180deg, #FFFAE4 0%, #FFFFFF 100%)' }}>
        <div className="max-w-[1240px] mx-auto px-6 sm:px-12">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 justify-between items-start">
            {/* Left: Heading & Description */}
            <div className="w-full lg:w-[45%] text-center lg:text-left flex flex-col items-center lg:items-start pt-2">
              <h2 className="text-[28px] sm:text-[42px] font-extrabold text-gray-950 leading-[1.1] mb-4 font-inter-tight tracking-wide">
                We&apos;ll help you <br className="hidden sm:block" />get started
              </h2>
              <p className="text-[14px] sm:text-[19px] text-gray-600 leading-[1.7] font-geist max-w-[520px]">
                Connect with our experts to explore employee wellness solutions and discover how Vriksh can help you build a healthier, high-performing workplace.
              </p>
            </div>

            {/* Right: Contact Form */}
            <div className="w-full lg:w-[50%] flex flex-col items-center lg:items-start mt-4 lg:mt-0">
              <h3 className="text-[20px] sm:text-[24px] font-bold text-[#520378] mb-1 font-inter-tight text-center lg:text-left">
                Contact Us
              </h3>
              <p className="text-[13px] sm:text-[19px] text-gray-600 mb-8 font-geist text-center lg:text-left">
                Reach out for support. We&apos;re here to listen.
              </p>
              <form className="space-y-4 w-full" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-[14px] sm:text-[15px] font-medium text-gray-700">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-[8px] px-3 py-2.5 sm:py-3 text-[14px] sm:text-[15px] outline-none focus:ring-1 focus:ring-[#520378]/40 focus:border-[#520378] transition-all"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-[14px] sm:text-[15px] font-medium text-gray-700">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-[8px] px-3 py-2.5 sm:py-3 text-[14px] sm:text-[15px] outline-none focus:ring-1 focus:ring-[#520378]/40 focus:border-[#520378] transition-all"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-[14px] sm:text-[15px] font-medium text-gray-700">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-[8px] px-3 py-2.5 sm:py-3 text-[14px] sm:text-[15px] outline-none focus:ring-1 focus:ring-[#520378]/40 focus:border-[#520378] transition-all"
                      placeholder="Enter phone number"
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-[14px] sm:text-[15px] font-medium text-gray-700">Age</label>
                    <select
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-[8px] px-3 py-2.5 sm:py-3 text-[14px] sm:text-[15px] outline-none focus:ring-1 focus:ring-[#520378]/40 focus:border-[#520378] appearance-none cursor-pointer transition-all"
                      style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center', backgroundSize: '1.25rem', paddingRight: '2.5rem' }}
                    >
                      <option value="">Select age</option>
                      {Array.from({ length: 83 }, (_, i) => i + 18).map((age) => (
                        <option key={age} value={age}>{age}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-[14px] sm:text-[15px] font-medium text-gray-700">Type of Support Needed</label>
                    <select
                      name="support"
                      value={formData.support}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-[8px] px-3 py-2.5 sm:py-3 text-[14px] sm:text-[15px] outline-none focus:ring-1 focus:ring-[#520378]/40 focus:border-[#520378] appearance-none cursor-pointer transition-all"
                      style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center', backgroundSize: '1.25rem', paddingRight: '2.5rem' }}
                    >
                      <option value="">Select type</option>
                      <option value="individual">Individual Counselling</option>
                      <option value="children">Children & Adolescent</option>
                      <option value="academic">Academic & Career</option>
                      <option value="corporate">Corporate / Workplace</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-[14px] sm:text-[15px] font-medium text-gray-700">Preferred Date and Time</label>
                    <input
                      type="datetime-local"
                      name="datetime"
                      value={formData.datetime}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-[8px] px-3 py-2.5 sm:py-3 text-[14px] sm:text-[15px] outline-none focus:ring-1 focus:ring-[#520378]/40 focus:border-[#520378] cursor-pointer transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="block text-[14px] sm:text-[15px] font-medium text-gray-700">Message</label>
                  <textarea
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-[8px] px-3 py-2.5 sm:py-3 text-[14px] sm:text-[15px] outline-none focus:ring-1 focus:ring-[#520378]/40 focus:border-[#520378] resize-none transition-all"
                    placeholder="Share your message or concerns"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto bg-[#520378] hover:bg-[#400260] text-white font-bold text-[14px] sm:text-[16px] px-10 py-3 rounded-full shadow-md transition-all active:scale-95 mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? "Submitting..." : "Submit"}
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

