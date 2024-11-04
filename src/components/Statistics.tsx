'use client';

import { useEffect, useState } from 'react';
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '500'],
});

const Statistics = () => {
    const [totalVisitors, setTotalVisitors] = useState(0);

    useEffect(() => {
        const fetchVisitors = async () => {
            fetch('/api/visitors')
            .then((res) => res.json())
            .then((data) => {
                setTotalVisitors(data.totalVisitors);
            });
        }
        
        const registerVisit = async () => {
            fetch('/api/visitors', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({}),
            });
        }
        
        fetchVisitors();

        const timer = setTimeout(() => {
            registerVisit();
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="flex flex-col justify-evenly min-w-[175px] w-full h-[200px] bg-myLightBlack2 
        sm:flex-row sm:h-[175px] md:max-w-[500px]">
            <article className="flex flex-col justify-center items-center gap-3 md:mb-4">
                <h2 className={`${montserrat.className} text-[20px]`}>Visitantes:</h2>
                <p className={`${montserrat.className} text-base font-medium`}>{ totalVisitors }</p>
            </article>
        </section>
    );
};

export default Statistics;