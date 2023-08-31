"use client"

import Stepper from "../stepper";  
import { useState } from "react";
import InputSearchFutureLeader from "./search_future_leader";
import InputSearchBestInnovator from "./search_best_innovator";

// export const metadata = {
//     title: '.: ASN Berprestasi | Penghargaan Bhakti Karya Husada :.',
//     description: 'Aplikasi Penghargaan Bhakti Karya Husada',
//     developer: 'sgt.wibowo@gmail.com',
//     icons: '/images/favicon.png'
// }

export default function Page() {
    const [pilih, setPilih] = useState(null)
    return (
        <div>
            <Stepper step={2} />
            {(pilih===1)
            ?<InputSearchFutureLeader />
            :(pilih===2)
            ?<InputSearchFutureLeader />
            :<InputSearchBestInnovator />
            }
        </div>
    )
}
