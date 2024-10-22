import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

type CommentType = {
    name: string;
    email: string;
    city: string;
    state: string;
    content: string;
    date: string;
    hour: string;
};

const dataPath = path.join(process.cwd(), 'src', 'data', 'comments.json');

export async function GET() {
    const jsonData = fs.readFileSync(dataPath, 'utf-8');
    const data = JSON.parse(jsonData);

    return NextResponse.json(data);
}

export async function POST(request: Request) {
    const { name, email, city, state, content }: CommentType = await request.json();
    const now = new Date();
    const date = now.toLocaleDateString('pt-BR');
    const hour = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

    const newComment = { name, email, city, state, content, date, hour };

    let comments = [];
    try {
        const jsonData = fs.readFileSync(dataPath, 'utf-8');
        comments = JSON.parse(jsonData);
    } catch (error) {
        comments = [];
        console.log(error);
    }

    comments.push(newComment);
    fs.writeFileSync(dataPath, JSON.stringify(comments, null, 2), 'utf-8');

    return NextResponse.json(newComment, { status: 201 });
}
