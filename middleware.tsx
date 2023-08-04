import {NextResponse, NextRequest} from 'next/server'

export function middleware(request : NextRequest) {
    const url = request.nextUrl
    const res = NextResponse.next();
    //console.log(url)
    if (url.pathname === '/') {
        return NextResponse.rewrite(new URL('/dashboard', request.url))
    }
    if (url.pathname.startsWith('/pleno')) {
        //console.log('REWRETE MIDDLE')
        return NextResponse.redirect(new URL('/vote-pegawai', request.url))
    }
    // if (url.pathname === '/vote-pegawai') {     url.pathname = '/vote-pegawai'
    //  console.log('INI HALAMAN VOTE') } return NextResponse.next()
    // console.log(response.cookies)
    let ip = request.ip ?? request
        .headers
        .get('x-real-ip');

    const forwardedFor = request
        .headers
        .get('x-forwarded-for')
    if (!ip && forwardedFor) {
        ip = forwardedFor
            .split(',')
            .at(0) ?? 'Unknown'
    }

    if (ip) {
        res
            .cookies
            .set("user-ip", ip, {httpOnly: false});
    }
}

export const config = {
    matcher: ['/', '/unit-kerja', '/vote-pegawai']
}
