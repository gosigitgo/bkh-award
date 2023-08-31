import axios from "axios"
import {NextRequest, NextResponse} from 'next/server' 

export const GET = async(req : NextRequest) => {
    // const nip = usePegawaiStore(state => state.nip) const updateNip =
    // usePegawaiStore(state => state.updateNip) console.log({nipawal:nip}) 
 
    let base_url = "https://auth-eoffice.kemkes.go.id/"
    let client_id = "99ce6499-b9ff-46c8-beca-15096253dfae"
    let client_secret = "famq132POQc591yDnHQe62MgH7bb3wynHd9k4D5F"
    let redirect_uri = "http://localhost:3000/api/sso/callback"
    let code = req
        .nextUrl
        .searchParams
        .get("code")
    let postData = new FormData();
    postData.append('grant_type', 'authorization_code');
    postData.append('client_id', client_id);
    postData.append('client_secret', client_secret);
    postData.append('redirect_uri', redirect_uri);
    postData.append('code', String(code));
    try {
        const response = await axios.post(`${base_url}oauth/token`, postData, {timeout: 5000})
        //console.log({ssoresponse: response});
        if (response.status === 200) {
            //console.log(response.data) console.log(response.data.access_token)
            const headers = {
                'Authorization': `Bearer ${response.data.access_token}`
            }
            const responseredirect = await axios.post(`${base_url}oauth/usertoken`, postData, {
                timeout: 5000,
                headers: headers
            })
            if (responseredirect.status === 200) {
                // res
                //     .cookies
                //     .set('nip', responseredirect.data.nip)
                // console.log({
                //     cake: res
                //         .cookies
                //         .get('nip')
                // })
                // localStorage.setItem('nip', responseredirect.data.nip);
                // setCookie('nip',responseredirect.data.nip) myStore.setState({nip:
                // responseredirect.data.nip}); updateNip(responseredirect.data.nip) return
                const response = NextResponse.redirect(new URL('/', req.url))
                response
                    .cookies
                    .set("nip", responseredirect.data.nip, {
                        httpOnly: true,
                        secure: process.env.NODE_ENV === "production"
                    });
                    console.log({
                        cake: response
                            .cookies
                            .get('nip')
                    })

                return response;

            } else {
                console.log({unknown: responseredirect})
            }

        } else {
            console.log({unknown: response})
        }

        return response;
    } catch (err) {
        console.log('Error', err);
        return err
    }
};
