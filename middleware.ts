import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

function unauthorized() {
  const response = new NextResponse('Authentifizierung erforderlich', { status: 401 });
  response.headers.set('www-authenticate', 'Basic realm="FBC Sales"');
  return response;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname.startsWith('/_next') || pathname.startsWith('/favicon.ico') || PUBLIC_FILE.test(pathname)) {
    return NextResponse.next();
  }

  const user = process.env.BASIC_AUTH_USER;
  const pass = process.env.BASIC_AUTH_PASS;
  if (!user || !pass) {
    return new NextResponse('Basic Auth ist nicht konfiguriert', { status: 500 });
  }

  const authHeader = request.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Basic ')) {
    return unauthorized();
  }

  const encoded = authHeader.split(' ')[1];
  const decoded = atob(encoded);
  const [receivedUser, receivedPass] = decoded.split(':');

  if (receivedUser !== user || receivedPass !== pass) {
    return unauthorized();
  }

  return NextResponse.next();
}
