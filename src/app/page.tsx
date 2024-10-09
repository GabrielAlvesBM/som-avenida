import AdsRight from '../components/AdsRight';
import AdsTop from '../components/AdsTop';

export default function Home() {
  return (
    <>
      <section className='flex flex-col items-center'>
      <AdsTop />
      <h1></h1>
      </section>
      <section>
        <AdsRight />
      </section>
    </>
  );
}
