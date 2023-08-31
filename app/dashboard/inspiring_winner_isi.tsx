'use client'

import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline" 
import BoxPegawai from "./box_pegawai"
import {useRouter} from "next/navigation"
import {useRef, useState} from "react"

export default function InspiringWinner(){
    const router = useRouter()
    const elementRef = useRef(null)
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
                <div className="font-bold text-xl text-purple-800 truncate">Inspiring Leader Tahun 2023 🎉</div>
                <button onClick={() => router.push('/beranda-detail')} className="flex text-[8pt] border border-purple-700 rounded-md mb-1 py-1 px-2  text-purple-700 hover:bg-purple-50">Lihat&nbsp;Semua <ChevronDoubleRightIcon className="w-3 h-4"/></button>
            </div>
            <div
                className="flex overflow-x-scroll py-2 scrollbar-none border border-purple-800 border-opacity-50 border-dotted rounded-lg"
                ref={elementRef}>
                <div className="flex flex-nowrap">
                    <div className="inline-block pr-2 pl-3">
                        <div
                            className="w-44 h-44 max-w-xs overflow-hidden rounded-lg shadow-md bg-white text-sm hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center">
                            <BoxPegawai
                                nama="Sigit Wibowo"
                                uker="Biro Organisasi dan SDM"
                                no={1}
                                gambar="/images/1.png"/>
                        </div>
                    </div>
                    <div className="inline-block px-2">
                        <div
                            className="w-44 h-44 max-w-xs overflow-hidden rounded-lg shadow-md bg-white text-sm hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center"><BoxPegawai
                            nama="Sigit Wibowo"
                            uker="Biro Perencanaan"
                            no={1}
                            gambar="/images/5.png"/></div>
                    </div>
                    <div className="inline-block px-2">
                        <div
                            className="w-44 h-44 max-w-xs overflow-hidden rounded-lg shadow-md bg-white text-sm hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center"><BoxPegawai
                            nama="Sigit Wibowo"
                            uker="Biro Hukum"
                            no={1}
                            gambar="/images/6.png"/></div>
                    </div>
                    <div className="inline-block px-2">
                        <div
                            className="w-44 h-44 max-w-xs overflow-hidden rounded-lg shadow-md bg-white text-sm hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center"><BoxPegawai
                            nama="Sigit Wibowo"
                            uker="Biro Keuangan dan BMN"
                            no={1}
                            gambar="/images/7.png"/></div>
                    </div>
                    <div className="inline-block px-2">
                        <div
                            className="w-44 h-44 max-w-xs overflow-hidden rounded-lg shadow-md bg-white text-sm hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center"><BoxPegawai
                            nama="Sigit Wibowo"
                            uker="Pusat Data dan Teknologi Informasi"
                            no={1}
                            gambar="/images/5.png"/></div>
                    </div>
                    <div className="inline-block px-2">
                        <div
                            className="w-44 h-44 max-w-xs overflow-hidden rounded-lg shadow-md bg-white text-sm hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center"><BoxPegawai
                            nama="Sigit Wibowo"
                            uker="Pusat Pengembangan Kompetensi ASN"
                            no={1}
                            gambar="/images/6.png"/></div>
                    </div>
                    <div className="inline-block px-2">
                        <div
                            className="w-44 h-44 max-w-xs overflow-hidden rounded-lg shadow-md bg-white text-sm hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center"><BoxPegawai
                            nama="Sigit Wibowo"
                            uker="Pusat Kesehatan Haji"
                            no={1}
                            gambar="/images/7.png"/></div>
                    </div>
                    <div className="inline-block px-2">
                        <div
                            className="w-44 h-44 max-w-xs overflow-hidden rounded-lg shadow-md bg-white text-sm hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center"><BoxPegawai nama="Sigit Wibowo" uker="Biro Umum" no={1} gambar="/images/5.png"/></div>
                    </div>
                    <div className="inline-block px-2">
                        <div
                            className="w-44 h-44 max-w-xs overflow-hidden rounded-lg shadow-md bg-white text-sm hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center"><BoxPegawai
                            nama="Sigit Wibowo"
                            uker="Pusat Sistem dan Strategi Kesehatan"
                            no={1}
                            gambar="/images/6.png"/></div>
                    </div>
                    <div className="inline-block pr-3 pl-2">
                        <div
                            className="w-44 h-44 max-w-xs overflow-hidden rounded-lg shadow-md bg-white text-sm hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center"><BoxPegawai
                            nama="Sigit Wibowo"
                            uker="Pusat Krisis Kesehatan"
                            no={1}
                            gambar="/images/7.png"/></div>
                    </div>

                </div>

            </div>
            <div
                className="flex w-full absolute justify-between  right-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <button
                    onClick={() => {
                    handleHorizantalScroll(elementRef.current, 20, 100, -20);
                }}
                    disabled={arrowDisable}
                    type="button"
                    className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-2 cursor-pointer group focus:outline-none"
                    data-carousel-prev>
                    <span
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/50 dark:bg-gray-800/30 group-hover:bg-white/60 dark:group-hover:bg-gray-800/60 group-focus:ring-2 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg
                            className="w-4 h-4 text-purple-300 dark:text-gray-800"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10">
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 1 1 5l4 4"/>
                        </svg>
                        <span className="sr-only">Prev</span>
                    </span>
                </button>

                <button
                    onClick={() => {
                    handleHorizantalScroll(elementRef.current, 20, 100, 20);
                }}
                    type="button"
                    className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-2 cursor-pointer group  focus:outline-none"
                    data-carousel-next>
                    <span
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/50 dark:bg-gray-800/30 group-hover:bg-white/60 dark:group-hover:bg-gray-800/60 group-focus:ring-2 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg
                            className="w-4 h-4 text-purple-300 dark:text-gray-800"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10">
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m1 9 4-4-4-4"/>
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>

            </div>
        </div>
    )
}