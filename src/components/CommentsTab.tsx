"use client";

import { useEffect, useState } from 'react';
import { Montserrat } from "next/font/google";
import Comment from './Comment';
import Link from 'next/link';

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400']
});

type CommentType = {
    name: string;
    content: string;
    date: string;
    hour: string;
};

const Comments = () => {
    const [comments, setComments] = useState<CommentType[]>([]);

    useEffect(() => {
        const fetchComments = async () => {
            const res = await fetch('/api/comments');
            const data = await res.json();
            setComments(data);
        }
        fetchComments();
    }, []);

    return (
        <section className="w-full max-w-[900px] bg-myLightBlack2">
            {comments.map((comment, index) => (
                <Comment key={index} name={comment.name} content={comment.content} date={comment.date} hour={comment.hour}/>
                ))}

            <div className={`${montserrat.className} m-3`}>
                <Link href="/comments"><button className='py-3 px-7 mr-5 mb-3 rounded-[10px] bg-base sm:mb-0'>Comentar</button></Link>
                <Link href="/comments"><button className='py-3 px-7 rounded-[10px] border border-base'>Ver todos os comentários</button></Link>
            </div>
        </section>
        
    );
};

export default Comments;