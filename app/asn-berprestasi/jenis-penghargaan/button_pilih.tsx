'use client'

import {ArrowRightCircleIcon} from "@heroicons/react/24/outline"
import {useRouter} from "next/navigation"
import { useState } from "react"

export default function Pilih(props : any) {
    const router = useRouter()
    const [destination, setDestination] = useState('')
    // if(props.pilihan===1){
    //     setDestination('/asn-berprestasi/pilih-inspiring-leader')
    // }else if(props.pilihan===2){
    //     setDestination('/asn-berprestasi/pilih-future-leader')
    // }else if(props.pilihan===3){
    //     setDestination('/asn-berprestasi/pilih-best-innovator')
    // }else {
    //     setDestination('/')
    // }
    return (
        <div className="flex w-full justify-center mx-auto mt-10 mb-10">
            <button
                onClick={() => router.push(props.pilihan)}
                className="flex bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-lg text-white font-semibold shadow-2xl">SELANJUTNYA&nbsp;<ArrowRightCircleIcon width={24} height={24} className="font-bold"/></button>
        </div>
    )
}