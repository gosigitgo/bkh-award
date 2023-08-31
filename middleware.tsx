import {NextResponse, NextRequest} from 'next/server'

export const middleware = async(req : NextRequest) => {
    const url = req.nextUrl
    const res = NextResponse.next();
    
    //console.log(url)
    if (url.pathname === '/') {
        return NextResponse.rewrite(new URL('/dashboard', req.url))
    }
    if (url.pathname.startsWith('/pleno')) {
        //console.log('REWRETE MIDDLE')
        return NextResponse.redirect(new URL('/vote-pegawai', req.url))
    }
    // if (url.pathname === '/vote-pegawai') {     url.pathname = '/vote-pegawai'
    // console.log('INI HALAMAN VOTE') } return NextResponse.next()
    // console.log(response.cookies)
}

export const config = {
    matcher: ['/', '/unit-kerja', '/vote-pegawai']
}
