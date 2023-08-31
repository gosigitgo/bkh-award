'use client'

import { useEffect, useState } from "react"

export default function Stepper(props:any) {
    const [pilih1, setPilih1] = useState("black")
    const [pilih2, setPilih2] = useState("black")
    const [pilih3, setPilih3] = useState("black") 
    useEffect(() => {
        if(props.step===1){
            setPilih1("red")
        }else if(props.step===2){
            setPilih2("red")
        }else if(props.step===3){
            setPilih3("red")
        } 
    }, [props.step])
    
    
    return (
        <ol
            className="flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4">
            <li className={`flex items-center text-${pilih1}-600 dark:text-${pilih1}-500`}>
                <span
                    className={`flex items-center justify-center w-5 h-5 mr-2 text-xs border border-${pilih1}-600 rounded-full shrink-0 dark:border-${pilih1}-500 text-${pilih1}-500`}>
                    1
                </span>
                Jenis <span className="hidden sm:inline-flex sm:ml-2">Penghargaan</span>
                <svg
                    className="w-3 h-3 ml-2 sm:ml-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 12 10">
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m7 9 4-4-4-4M1 9l4-4-4-4"/>
                </svg>
            </li>
            <li className={`flex items-center text-${pilih2}-600 dark:text-${pilih2}-500`}>
                <span
                    className={`flex items-center justify-center w-5 h-5 mr-2 text-xs border border-${pilih2}-600 rounded-full shrink-0 dark:border-${pilih2}-500 text-${pilih2}-500`}>
                    2
                </span>
                Pilih <span className="hidden sm:inline-flex sm:ml-2">Pegawai</span>&nbsp;dan Isi <span className="hidden sm:inline-flex sm:ml-2">Kelengkapan</span>
                <svg
                    className="w-3 h-3 ml-2 sm:ml-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 12 10">
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m7 9 4-4-4-4M1 9l4-4-4-4"/>
                </svg>
            </li>
            <li className={`flex items-center text-${pilih3}-600 dark:text-${pilih3}-500`}>
                <span
                    className={`flex items-center justify-center w-5 h-5 mr-2 text-xs border border-${pilih3}-600 rounded-full shrink-0 dark:border-${pilih3}-500 text-${pilih3}-500`}>
                    3
                </span>
                Selesai
            </li>
        </ol>
    )

}