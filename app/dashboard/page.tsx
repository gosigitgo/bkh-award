"use client"

import BkhWinner from "./bkh_winner"; 
import InfoCarousel from "./carousel";
import swal from "sweetalert";
import InspiringWinner from "./inspiring_winner";
import FutureWinner from "./future_winner";
import InnovatorWinner from "./innovator_winner"; 
import {useEffect, useState} from "react";
import {LoadingScreen} from '../components/loadingscreen'
import { useRouter } from "next/navigation";
import {detailPegawai} from "../api/pegawai"
import secureLocalStorage from "react-secure-storage"; 

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

export default function Dashboard() {
    const router = useRouter()
    const [nama, setNama] = useState() 
    const [loadingScreen, setLoadingScreen] = useState(true) 
    useEffect(() => { 
		//console.log({sesnip:secureLocalStorage.getItem('session_nip')});
        setTimeout(async() => {
            detailPegawai(String(secureLocalStorage.getItem('session_nip'))).then((datapeg) => {
                //console.log({peg:datapeg.data[0]})
                setNama(datapeg.data[0].nama)
                secureLocalStorage.setItem('session_kdsatker',datapeg.data[0].kd_satuan_organisasi)
                setLoadingScreen(false)
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
    ?
        <div>
            <div
                className="flex w-full font-bold text-2xl text-cyan-600 mt-2 mb-4 sm:text-2xl">Salam Sehat, {titleCase(String(nama))}
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