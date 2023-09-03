import {NextResponse} from "next/server";
import {cookies} from 'next/headers'

export const GET = async() => {
    const cookieStore = cookies()
    //const nipsession = '198702112010121004'
    const nipsession = cookieStore.get('cookie_nip')
    const resp = {
        sess_login: true,
        sess_nip: nipsession,
    }
    return NextResponse.json(resp)
    // if (!nipsession) {
    //     const resp = {
    //         sess_login: false,
    //     }
    //     return NextResponse.json(resp)
    // } else {
        
    // }
}
