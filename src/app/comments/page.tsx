import AdsTop from '../../components/AdsTop';
import CommentsTab from '../../components/CommentsTab';
import FormComment from '../../components/FormComment';

export default function Comments() {
    return (
        <main className='flex flex-col justify-between m-5'>
        <section className='mb-2'>
            <AdsTop />
        </section>
        <section className='flex flex-col justify-between md:flex-row lg:mx-10'>
            <FormComment />
            <CommentsTab />
        </section>
        </main>
    );
};