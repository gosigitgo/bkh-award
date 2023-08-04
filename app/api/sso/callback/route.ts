import axios from "axios"
import { NextRequest } from 'next/server'

export async function handler(req: NextRequest) {
    const { method } = req;
    let base_url = "https://auth-eoffice.kemkes.go.id/"
    let client_id = "99ce6499-b9ff-46c8-beca-15096253dfae"
    let client_secret = "famq132POQc591yDnHQe62MgH7bb3wynHd9k4D5F"
    let redirect_uri = "http://localhost/api/sso/callback"
    let state = req.nextUrl.searchParams.get("state")
    let code = req.nextUrl.searchParams.get("code")
    let postData = new FormData();
    postData.append('grant_type', 'authorization_code');
    postData.append('client_id', client_id);
    postData.append('client_secret', client_secret);
    postData.append('redirect_uri', redirect_uri);
    postData.append('code', String(code));
    try {
        const response = await axios.post(`${base_url}/oauth/token`, postData, {timeout: 5000})
        console.log({ssoresponse: response});
        return response;
    } catch (err) {
        console.log('Error', err);
        return err
    }
}