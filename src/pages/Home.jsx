import React from 'react';
import Hero from '../components/Hero';
import Academy from '../components/Academy';
import Events from '../components/Events';
import Counselling from '../components/Counselling';
import Wellness from '../components/Wellness';
import Corporate from '../components/Corporate';
import WhyVriksh from '../components/WhyVriksh';
import Testimonials from '../components/Testimonials';

const Home = () => {
    return (
        <>
            <Hero />
            <Academy />
            <Events />
            <Counselling />
            <Wellness />
            <Corporate />
            <WhyVriksh />
            <Testimonials />
        </>
    );
};

export default Home;
