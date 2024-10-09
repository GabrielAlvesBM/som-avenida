import AdsTop from '../components/AdsTop';
import AdsRight from '../components/AdsRight';
import Statistics from '../components/Statistics';

export default function Home() {
  return (
    <>
      <section className='flex flex-col items-center gap-5 w-full'>
      <AdsTop />
      <Statistics />
      </section>
      <section>
        <AdsRight />
      </section>
    </>
  );
}
