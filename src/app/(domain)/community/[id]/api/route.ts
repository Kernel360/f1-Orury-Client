import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve(new NextResponse(JSON.stringify(request), { status: 200 }));
      }, 500);
    });
  } catch (e) {
    return new NextResponse(null, { status: 500 });
  }
}
