'use client'

import Image from "next/image";
import {StarIcon, TrophyIcon } from "@heroicons/react/24/solid";
import DetailPegawai from "./detail_pegawai";

type Params = {
    nama: string,
    no: number,
    uker: string,
    gambar: string
}


export default function BoxPegawai(params : Params) {
    return (
        <div>
            <div className="flex w-full items-center justify-center mb-2">
                <div
                    className="relative mt-2 w-20 h-20 border border-solid border-x-grey-400 rounded-2xl border-1 shadow">
                    <Image
                        src={params.gambar}
                        width={100}
                        height={100}
                        alt="No Photo"
                        className="object-cover w-20 h-18 rounded-lg"/>
                </div>
            </div>
            <div className="font-bold text-center text-[9pt] pb-0">{params.nama}</div>
            <div className="text-center text-[8pt] truncate hover:text-clip w-44 pb-0 px-3 mb-1">{params.uker}</div>
            <DetailPegawai/>
        </div>
    );
}