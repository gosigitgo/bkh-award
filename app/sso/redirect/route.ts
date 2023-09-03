import {NextResponse} from 'next/server'

export const GET = async () => {
    let base_url = "https://auth-eoffice.kemkes.go.id/"
    let client_id = "9965f3f2-c176-4f29-9fa9-30575db51e3b"
    let redirect_uri = "https://penghargaan.kemkes.go.id/sso/callback"
    let response_type = "code"
    let scope = "openid"
    let state = "login-portal"
    let url = `${base_url}oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}&scope=${scope}&state=${state}`
    //return NextResponse.json({ message: url})
    return NextResponse.redirect(new URL(url))
    //console.log(url)
}