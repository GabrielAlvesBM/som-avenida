import { Montserrat } from "next/font/google";
import Link from 'next/link';

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400']
});

const CommentButtons = () => {
    return <div className={`${montserrat.className} m-3`}>
        <Link href="/comments"><button className='py-3 px-7 mr-5 mb-3 rounded-[10px] bg-base sm:mb-0'>Comentar</button></Link>
        <Link href="/comments"><button className='py-3 px-7 rounded-[10px] border border-base'>Ver todos os comentários</button></Link>
    </div>
};

export default CommentButtons;