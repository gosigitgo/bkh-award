"use client"

import Stepper from "../stepper";
import InputSearch from "./search";

// export const metadata = {
//     title: '.: ASN Berprestasi | Penghargaan Bhakti Karya Husada :.',
//     description: 'Aplikasi Penghargaan Bhakti Karya Husada',
//     developer: 'sgt.wibowo@gmail.com',
//     icons: '/images/favicon.png'
// }

export default function Page() {
    return (
        <div>
            <Stepper step={2} />
            <InputSearch />
        </div>
    )
}
