import { NextResponse } from 'next/server';
import client from '@/modules/mongodb';

export async function GET() {
    try {
        await client.connect();
        const dbSomAvenida = client.db('som-avenida');
        const visitors = dbSomAvenida.collection('visitors');

        const stats = await visitors.findOne({ id: 'site-stats'});

        if (!stats) {
            return NextResponse.json({
                totalVisitors: 0,
                onlineVisitors: 0,
                message: 'No stats found',
            });
        }

        return NextResponse.json({
            totalVisitors: stats.totalVisitors || 0,
            onlineVisitors: stats.onlineVisitors || 0,
        })
    } catch(error) {
        return NextResponse.json({ error: `Failed to fecth stats: ${error}` }, { status: 500 });
    }
};

export async function POST() {
    try {
        await client.connect();
        const dbSomAvenida = client.db('som-avenida');
        const visitors = dbSomAvenida.collection('visitors');

        await visitors.updateOne(
            { id: 'site-stats' },
            { $inc: { totalVisitors: 1 } },
            { upsert: true }
        );

        return NextResponse.json({ message: 'Visitor count updated' });
    } catch(error) {
        return NextResponse.json({ error: `Failed to update stats: ${error}` }, { status: 500 });
    }
}