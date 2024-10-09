import { Montserrat } from "next/font/google";
import Comment from './Comment';
import CommentSub from '../components/CommentSub';

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400']
});

const Comments = () => {
    const comments = [
        {
            name    : "Daniel Oliveira",
            content : "Parabéns pelo trabalho de excelência. Curtindo e muito aqui. Tooooooooooooop",
            date    : "22-03-2022",
            hour    : "19:04",
        },
        {
            name    : "Jorge",
            content : "Parabéns pela inovação.",
            date    : "04-11-2021",
            hour    : "13:01",
        },
        {
            name    : "Tomaz Turbando",
            content : "Krlhou eu pagaria no mínimo uns 3000 dólares para o criador desse site foda!",
            date    : "09-10-2024",
            hour    : "18:47",
        },
        {
            name    : "Loks",
            content : "Nossa, mas que site fodástico! Me manda o contato do programador que fez ele, pra fazer uns projetinhos pae. ;P",
            date    : "22-03-2022",
            hour    : "19:04",
        },
    ];

    const commentSub = [
        {
            name    : "Teste",
            content : "Parabéns pela inovação meu parceiro",
            date    : "22-03-2022",
            hour    : "19:04",
        },
    ];

    return (
        <section className="w-full max-w-[950px] bg-myLightBlack2">
            {comments.map((comment, index) => (
                <Comment key={index} name={comment.name} content={comment.content} date={comment.date} hour={comment.hour}/>
                ))}
            
            {commentSub.map((commentSub, index) => (
            <CommentSub key={index} name={commentSub.name} content={commentSub.content} date={commentSub.date} hour={commentSub.hour}/>
                ))}

            <div className={`${montserrat.className} m-3 text-lg`}>
                <button className='py-3 px-7 mr-5 mb-3 rounded-[10px] bg-base sm:mb-0'>Comentar</button>
                <button className='py-3 px-7 rounded-[10px] border border-base'>Ver todos os comentários</button>
            </div>
        </section>
        
    );
};

export default Comments;