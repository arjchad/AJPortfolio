import { NextRequest, NextResponse } from 'next/server';
import { deleteFile } from '@/lib/b2Client';

export async function POST(request: NextRequest) {
  try {
    const { key } = await request.json();

    if (!key) {
      return NextResponse.json({ error: 'File key is required' }, { status: 400 });
    }

    await deleteFile(key);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Delete error:', error);
    return NextResponse.json({ error: 'Delete failed' }, { status: 500 });
  }
}
