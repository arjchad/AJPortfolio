import { NextRequest, NextResponse } from 'next/server';
import { uploadFile } from '@/lib/b2Client';

export async function POST(request: NextRequest) {
  try {
    const { file, fileName, contentType } = await request.json();

    // Convert base64 to buffer
    const fileBuffer = Buffer.from(file, 'base64');

    const result = await uploadFile(fileBuffer, fileName, contentType);

    return NextResponse.json(result);
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
