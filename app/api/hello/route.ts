import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    message: 'Hallo von deinem Next.js Backend!',
    timestamp: new Date().toISOString()
  });
}
