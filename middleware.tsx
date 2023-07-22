import { NextResponse, NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const url = request.nextUrl
    //console.log(url)
    // if (url.pathname === '/') { 
    //     return NextResponse.rewrite(new URL('/vote-pegawai', request.url))  
    // }
    if (url.pathname.startsWith('/pleno')) { 
        //console.log('REWRETE MIDDLE') 
        return NextResponse.redirect(new URL('/vote-pegawai', request.url))
    }
    // if (url.pathname === '/vote-pegawai') {
    //     url.pathname = '/vote-pegawai'
    //     console.log('INI HALAMAN VOTE') 
    // } 

    //return NextResponse.next()
    //console.log(response.cookies)
}
  

export const config = {
    matcher:  ['/', '/unit-kerja', '/vote-pegawai'],
}
  