"use client"

import BkhWinner from "./bkh_winner";
import axios from "axios";
import InfoCarousel from "./carousel";
import swal from "sweetalert";
import InspiringWinner from "./inspiring_winner";
import FutureWinner from "./future_winner";
import InnovatorWinner from "./innovator_winner";
import {useEffect, useState} from "react";
import {LoadingScreen} from '../components/loadingscreen'
import { useRouter } from "next/navigation";
import {detailPegawai} from "../api/pegawai"

// export const metadata = {
//     title: '.: Dashboard | Penghargaan Bhakti Karya Husada :.',
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

const fetchSession = async() => {
    const res = await axios.get('https://penghargaan.kemkes.go.id/api/cookies');
    return res.data
};

export default function Dashboard() {
    const router = useRouter()
    const [nip, setNip] = useState()
    const [nama, setNama] = useState()
    const [loadingScreen, setLoadingScreen] = useState(true)
    useEffect(() => {
        setTimeout(async() => {
            fetchSession().then((result) => { 
                if(result.sess_login === true){
                    detailPegawai(result.sess_nip).then((datapeg) => {
                        //console.log({peg:datapeg.data[0]})
                        setNip(datapeg.data[0].nip)
                        setNama(datapeg.data[0].nama)
                        setLoadingScreen(false)
                    }).catch((err:Error) => {
                        //console.log({errors:err})
                        setLoadingScreen(false)
                    })
                    
                }else {
                    swal({
                        title: "Error",
                        text: "Session habis, silahkan login ulang!",
                        icon: "warning",
                        timer:2000
                    })
                    setLoadingScreen(false)
                    router.push('http://auth-eoffice.kemkes.go.id/do-login')
                }
            }).catch((e : Error) => {
                //console.log({errors:e})
                swal("Error","Terjadi Kesalahan. Silahkan login ulang!", 'error')
                setLoadingScreen(false)
            })
        }, 1000);
    }, [router]);
    return ((!loadingScreen)
    ?
        <div>
            <div
                className="flex w-full font-bold text-2xl text-rose-700 mt-2 mb-4 sm:text-4xl">Halo {titleCase(String(nama))}
                😊</div>
            <div className="relative scrollbar-none">
                <div
                    className="rounded-3xl relative h-56 overflow-hidden md:h-96 scrollbar-none">
                    <InfoCarousel/>
                </div>
            </div>
            <BkhWinner />
            <InspiringWinner />
            <FutureWinner />
            <InnovatorWinner />

        </div>
        : <LoadingScreen />
    )
}