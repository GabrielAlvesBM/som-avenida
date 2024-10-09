import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '500'],
});

const Statistics = () => {
    return (
        <section className="flex flex-col justify-around min-w-[175px] w-full h-[200px] bg-myLightBlack2 
        sm:flex-row sm:h-[175px] md:max-w-[550px]">
            <article className="flex flex-col justify-center items-center gap-3 md:mb-4">
                <h2 className={`${montserrat.className} text-[20px]`}>Visitantes:</h2>
                <p className={`${montserrat.className} text-base font-medium`}>19.455</p>
            </article>
            <article className="flex flex-col justify-center items-center gap-3 md:mb-4">
                <h2 className={`${montserrat.className} text-[20px]`}>Online Agora:</h2>
                <p className={`${montserrat.className} text-base font-medium`}>327</p>
            </article>
        </section>
    );
};

export default Statistics;