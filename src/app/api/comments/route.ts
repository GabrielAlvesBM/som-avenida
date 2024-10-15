import { NextResponse } from 'next/server';

const comments: Array<{ name: string; content: string; date: string; hour: string }> = [
    // Comentários iniciais (opcional)
];

export async function GET() {
    return NextResponse.json(comments); // Retorna a lista de comentários
}

export async function POST(request: Request) {
    const { name, content } = await request.json();
    const now = new Date();
    const date = now.toLocaleDateString('pt-BR');
    const hour = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

    const newComment = { name, content, date, hour };
    comments.push(newComment);

    return NextResponse.json(newComment, { status: 201 });
}
