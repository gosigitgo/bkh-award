"use client"

import Stepper from "../stepper";
import PilihJenis from "./pilih_jenis";
import Pilih from "./button_pilih";
import { useState } from "react";

export const metadata = {
    title: '.: ASN Berprestasi | Penghargaan Bhakti Karya Husada :.',
    description: 'Aplikasi Penghargaan Bhakti Karya Husada',
    developer: 'sgt.wibowo@gmail.com',
    icons: '/images/favicon.png'
}

export default function Page() {
    const [pilih, setPilih] = useState(null)
    return (
        <div>
            <Stepper step={1} />
            <PilihJenis chgPilih={setPilih} />
            <Pilih />
        </div>
    )
}
