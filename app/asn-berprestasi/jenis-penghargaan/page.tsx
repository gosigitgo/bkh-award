"use client"

import Stepper from "../stepper";
import PilihJenis from "./pilih_jenis";
import Pilih from "./button_pilih";
import {useEffect, useState} from "react";
import {LoadingScreen} from '../../components/loadingscreen'

// export const metadata = {     title: '.: ASN Berprestasi | Penghargaan Bhakti
// Karya Husada :.',     description: 'Aplikasi Penghargaan Bhakti Karya
// Husada',     developer: 'sgt.wibowo@gmail.com',     icons:
// '/images/favicon.png' }

export default function Page() {
    const [pilih,
        setPilih] = useState(null)
    const [loadingScreen,
        setLoadingScreen] = useState(true)
    useEffect(() => {
        setTimeout(async() => {
            setLoadingScreen(false)
        }, 1000);
    }, []);
    //console.log({pilihan:pilih})
    return ((!loadingScreen)
        ? <div>
                <Stepper step={1}/>
                <PilihJenis chgPilih={setPilih}/>
                {(pilih===null)?'':<Pilih pilihan={pilih}/>}
                
            </div>
        : <LoadingScreen/>)
}
