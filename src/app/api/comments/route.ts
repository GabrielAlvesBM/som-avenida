import { NextResponse } from 'next/server';
import client from '@/modules/mongodb';

type CommentType = {
    name: string;
    email: string;
    city: string;
    state: string;
    content: string;
    date: string;
    hour: string;
};

interface CommentRequest extends CommentType {
    recaptchaToken: string;
}

export async function GET(request: Request) {
    try {
        await client.connect();
        const url = new URL(request.url);

        const pathname = url.searchParams.get('pathname');
        const limitComments = pathname !== "/comments";

        const dbSomAvenida = client.db("som-avenida");
        const comments = limitComments
            ? await dbSomAvenida.collection('comments').find({}).limit(5).toArray()
            : await dbSomAvenida.collection('comments').find({}).toArray();

        return NextResponse.json(comments);
    }
    catch(error) {
        console.log(error);
        return NextResponse.json({ name: "Internal Server Error" });
    }
}

export async function POST(request: Request) {
    try {
        await client.connect();
        const dbSomAvenida = client.db("som-avenida");
        const commentsCollection = await dbSomAvenida.collection('comments');

        const { name, email, city, state, content, recaptchaToken}: CommentRequest = await request.json();

        // Verificação do reCAPTCHA
        const recaptchaResponse = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
                secret: process.env.RECAPTCHA_SECRET_KEY || '',
                response: recaptchaToken
            })
        });

        const recaptchaResult = await recaptchaResponse.json();
        if (!recaptchaResult.success) {
            return NextResponse.json({ error: "Falha na verificação do reCAPTCHA." }, { status: 401 });
        }
        
        const now = new Date();
        const date = now.toLocaleDateString('pt-BR');
        const hour = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

        const newComment = { name, email, city, state, content, date, hour };

        await commentsCollection.insertOne(newComment);

        return NextResponse.json(newComment, { status: 201 });
    } catch(error) {
        console.log(error);
        return NextResponse.json({ name: "Internal Server Error" });
    }
}
