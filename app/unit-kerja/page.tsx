'use client'

import KandidatFinal from './kandidat_final'
import KandidatTemp from './kandidat_temp'
import ModalQuota from './modal_quota'
import Badge from './badge'
import HeadTitle from './head_title'
//import ProsesPilih from './modal_pilih_hotm'
import {LoadingScreen} from '../components/loadingscreen'
import secureLocalStorage from "react-secure-storage";
import {useEffect, useState} from "react";
import {detailPegawai} from "../api/pegawai" 
import { useRouter } from "next/navigation";
import swal from "sweetalert";

// export const metadata = {
//     title: '.: Pemilihan Unit Kerja | Penghargaan Bhakti Karya Husada :.',
//     description: 'Aplikasi Penghargaan Bhakti Karya Husada',
//     developer: 'sgt.wibowo@gmail.com',
//     icons: '/images/favicon.png'
// }

function titleCase(str:string) {
    return str
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}
export default function Page() {
    const tempSchedule = false;
    const router = useRouter()
    const [loadingScreen,
        setLoadingScreen] = useState(true)
    const [nip, setNip] = useState() 
    const [nama, setNama] = useState() 
    const [level, setLevel] = useState() 
    useEffect(() => { 
        console.log({sesnip:secureLocalStorage.getItem('session_nip')});
        setTimeout(async() => {
            detailPegawai(String(secureLocalStorage.getItem('session_nip'))).then((datapeg) => {
                //console.log({peg:datapeg.data[0]})
                setNip(datapeg.data[0].nip)
                setNama(datapeg.data[0].nama)
                setLevel(datapeg.data[0].kd_level)
                if(datapeg.data[0].kd_level !='2' && datapeg.data[0].status_plt !='1'){
                    swal({
                        title: "Error",
                        text: "Maaf, Anda tidak memiliki akses pada halaman ini!",
                        icon: "warning",  
                      }).then(function(isConfirm) {
                        if (isConfirm) {
                          router.push('/')
                        } 
                      }) 
                }else {
                    setLoadingScreen(false)
                }
                //setLoadingScreen(false)
            }).catch((err:Error) => {
                swal({
                    title: "Error",
                    text: "Session habis, silahkan login ulang!",
                    icon: "warning",  
                  }).then(function(isConfirm) {
                    if (isConfirm) {
                      router.push('http://auth-eoffice.kemkes.go.id/do-login')
                    } 
                  }) 
            })      
        }, 1000);
    }, [router]);
return ((!loadingScreen)
    ? <div>
        <div
                className="flex w-full font-bold text-2xl text-cyan-600 mt-2 mb-4 sm:text-2xl">Salam Sehat, {titleCase(String(nama))}
                😊</div>
    <Badge/>
    <HeadTitle temp={tempSchedule}/> 
    {(!tempSchedule)
        ? <KandidatFinal/>
        : <KandidatTemp/>
    }

</div>
    : <LoadingScreen/>)
}
