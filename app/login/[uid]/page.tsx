"use client"
import { useRouter, useParams } from "next/navigation";
import {useEffect} from "react"; 
import secureLocalStorage from "react-secure-storage";
import nextBase64 from 'next-base64';
import {LoadingScreen} from '../../components/loadingscreen'

export default function Page() {
	const router = useRouter()
	const params = useParams()
	useEffect(() => {
		//let urinip = '198702112010121004' 
		
        setTimeout(() => {
            //let urinip = nextBase64.decode(params.uid);
            let urinip = params.uid;
			//console.log(urinip);
			//if(urinip=='198702112010121004'){
				//urinip = '197305151997032002';	// SIGIT jadi BU LIA
			//}
			secureLocalStorage.setItem('session_nip',urinip)
			secureLocalStorage.setItem('session_triwulan','3')
			secureLocalStorage.setItem('session_tahun','2023')
            router.push('/')
        }, 1000);
    }, [params.uid, router]);
	return <LoadingScreen />
}