import AdsTop from '../components/AdsTop';
import AdsRight from '../components/AdsRight';
import Statistics from '../components/Statistics';
import CommentsTab from '../components/CommentsTab';

export default function Home() {
  return (
    <>
      <section className='flex flex-col items-center gap-5 w-full'>
      <AdsTop />
      <Statistics />
      <CommentsTab />
      </section>
      <section>
        <AdsRight />
      </section>
    </>
  );
}
