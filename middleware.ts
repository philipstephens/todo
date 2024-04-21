import { url } from 'inspector';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    let cookie = request.cookies.get('token')
    if(cookie == undefined) {
        NextResponse.redirect(new URL('/login', request.url))
    }
    return NextResponse.next();
}

export const config = {
    matcher:['/', 'createtodo']
};
