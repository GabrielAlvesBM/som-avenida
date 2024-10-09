import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400']
});

type CommentProps = {
    name    : string;
    content : string;
    date    : string;
    hour    : string;
}

export default function Comment({ name, content, date, hour}: CommentProps) {
    return (
        <article className="relative m-3 ml-12 bg-myLightBlack 
        before:content-[''] before:absolute before:top-[5%] before:-left-5 before:w-px before:h-[90%] before:bg-myBlackGray">
            <div className="flex justify-between pt-[10px] mx-4 mb-5">
                <h3 id="name" className={`${montserrat.className} text-xl text-base`}>{ name}</h3>
                <span className="my-auto text-sm text-myLightGray">
                    <time id="date" dateTime={ date } className="mr-1">{ date }</time>
                    <time id="hour" dateTime={ hour }>{ hour }</time>
                </span>
            </div>
            <p id="comment" className="mx-4 pb-7 text-myWhite">{ content }</p>
        </article>
    );
}
