'use client'

import {ArrowRightCircleIcon} from "@heroicons/react/24/outline"
import {useRouter} from "next/navigation"

export default function Pilih() {
    const router = useRouter()
    return (
        <div className="flex w-full justify-center mx-auto mt-10 mb-10">
            <button
                onClick={() => router.push('/asn-berprestasi/pilih-pegawai')}
                className="flex bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-lg text-white font-semibold shadow-2xl">SELANJUTNYA&nbsp;<ArrowRightCircleIcon width={24} height={24} className="font-bold"/></button>
        </div>
    )
}