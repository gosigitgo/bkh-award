import axios from "axios"
import {NextRequest, NextResponse} from 'next/server' 
import nextBase64 from 'next-base64';

export const GET = async(req : NextRequest) => {
    // const nip = usePegawaiStore(state => state.nip) const updateNip =
    // usePegawaiStore(state => state.updateNip) console.log({nipawal:nip}) 
 
    let base_url = "https://auth-eoffice.kemkes.go.id/"
    let client_id = "9965f3f2-c176-4f29-9fa9-30575db51e3b"
    let client_secret = "giSDUbckzuaYi1a7HVQjGfv3qrtm2si9n00HEbBN"
    let redirect_uri = "https://penghargaan.kemkes.go.id/sso/callback"
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
				//secureLocalStorage.setItem('session_nip', "198702112010121004");
				//const urinip = btoa(responseredirect.data)
				const base64Encoded = nextBase64.encode(responseredirect.data.nip);
                const response = NextResponse.redirect(new URL(`/login/${base64Encoded}`, req.url))
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
