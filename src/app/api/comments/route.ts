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

export async function GET() {
    try {
        await client.connect();

        const dbSomAvenida = client.db("som-avenida");
        const comments = await dbSomAvenida
        .collection('comments')
        .find({})
        .limit(5)
        .toArray();

        console.log(comments);

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
        
        const { name, email, city, state, content }: CommentType = await request.json();
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
