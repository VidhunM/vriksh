import React, { useState, useEffect, useRef } from 'react';

const AnimatedNumber = ({ end, decimals = 0, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    let start = null;
                    const duration = 2000;
                    const step = (timestamp) => {
                        if (!start) start = timestamp;
                        const progress = Math.min((timestamp - start) / duration, 1);
                        const easeOut = 1 - Math.pow(1 - progress, 3);
                        setCount(easeOut * end);
                        if (progress < 1) {
                            window.requestAnimationFrame(step);
                        } else {
                            setCount(end);
                        }
                    };
                    window.requestAnimationFrame(step);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => { if (ref.current) observer.disconnect(); };
    }, [end, hasAnimated]);

    const formattedCount = count.toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
    });

    return <span ref={ref}>{formattedCount}{suffix}</span>;
};

export default AnimatedNumber;
