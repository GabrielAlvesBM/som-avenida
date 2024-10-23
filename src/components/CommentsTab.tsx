"use client";

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'
import Comment from './Comment';
import CommentButtons from '../components/CommentButtons';


type CommentType = {
    name: string;
    content: string;
    date: string;
    hour: string;
};

const Comments = () => {
    const [comments, setComments] = useState<CommentType[]>([]);
    const pathname = usePathname();

    useEffect(() => {
        const fetchComments = async () => {
            const res = await fetch(`/api/comments?pathname=${pathname}`);
            const data = await res.json();
            setComments(data);
        }
        fetchComments();
    }, [pathname]);

    return (
        <section className="w-full max-w-[900px] bg-myLightBlack2">
            {comments.map((comment, index) => (
                <Comment key={index} name={comment.name} content={comment.content} date={comment.date} hour={comment.hour}/>
            ))}

            {pathname !== '/comments' && <CommentButtons />}
        </section>
    );
};

export default Comments;