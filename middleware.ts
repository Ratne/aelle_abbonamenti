import {SignJWT, jwtVerify, type JWTPayload} from 'jose';

import { NextRequest, NextResponse } from 'next/server'
// Limit the middleware to paths starting with `/api/`
export const config = {
    matcher: '/api/private/:function*',
}

export function middleware(request: NextRequest) {
    const token = request.headers.get('token');
    if(!token) return new NextResponse(
        JSON.stringify({ success: false, message: 'authentication failed' }),
        { status: 401, headers: { 'content-type': 'application/json' } }
    )
     jwtVerify(token, new TextEncoder().encode(process.env.TOKEN_SECRET as string)).then((res => {
        //request.cookies.set('user', JSON.stringify(res));
        return NextResponse.next()
    })).catch((err) => {
        return new NextResponse(
            JSON.stringify({ success: false, message: 'authentication failed' }),
            { status: 401, headers: { 'content-type': 'application/json' } }
        )
    })
}
