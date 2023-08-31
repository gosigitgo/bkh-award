'use client'

import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline" 
import BoxPegawai from "./box_pegawai"
import {useRouter} from "next/navigation"
import {useRef, useState} from "react"

export default function FutureWinner(){
    const router = useRouter()
    const elementRef2 = useRef(null)
    const [arrowDisable,
        setArrowDisable] = useState(true)

    const handleHorizantalScroll = (element : any, speed : number, distance : number, step : number) => {
        let scrollAmount = 0;
        const slideTimer = setInterval(() => {
            element.scrollLeft += step;
            scrollAmount += Math.abs(step);
            if (scrollAmount >= distance) {
                clearInterval(slideTimer);
            }
            if (element.scrollLeft === 0) {
                setArrowDisable(true);
            } else {
                setArrowDisable(false);
            }
        }, speed);
    };
    return (
        <div className="w-full my-7 relative">
            <div className="flex justify-between">
                <div className="font-bold text-xl text-rose-600 truncate">The Future Leader Tahun 2023 🎉</div>
                <button
                    className="flex text-[8pt] border border-gray-400 rounded-md mb-1 py-1 px-2  text-gray-400 hover:bg-gray-50">Lihat&nbsp;Semua
                    <ChevronDoubleRightIcon className="w-3 h-4"/></button>
            </div>
            <div
                className="flex overflow-x-scroll py-2 scrollbar-none border border-cyan-800 border-opacity-50 border-dotted rounded-lg"
                ref={elementRef2}>
                <div className="flex items-center text-gray-600 w-full justify-center text-xs">
                    -- Data Tidak Tersedia --
                </div>

            </div>
        </div>
    )
}