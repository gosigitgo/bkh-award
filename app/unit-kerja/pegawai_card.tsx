'use client'

import Image from "next/image";
import {StarIcon, TrophyIcon} from "@heroicons/react/24/solid";
import ModalDetailPegawai from "./modal_detail_pegawai";

type Params = {
    nama: string,
    no: number,
    star: number,
    nip: string,
    gambar: string
}

type ParamsLabel = {
    nourut: number,
    label: string,
    vote: number
}
function LabelSifat(param : ParamsLabel) {
    return (
        <div className="text-xs">
            <div className="flex">
                <div className="grow h-7">
                {param.label}
                </div>
                <div className="flex-none w-14">
                    <span title={param.label}
                        className="inline-flex items-center px-2 py-1 bg-green-200 hover:bg-green-300 rounded-full text-xs font-semibold text-green-600">
                        <StarIcon className="text-blue h-4 w-4"/>
                        <span className="ml-1 text-blue text-xs">
                            {param.vote}
                        </span>
                    </span>

                </div>
            </div>
        </div>

    )
}
export default function PegawaiCard(params : Params) {
    const checkList = [
        {
            key: 1,
            sifat: 'Suka Menolong (helpful)',
            vote: 76
        }, {
            key: 2,
            sifat: 'Bersemangat dan cekatan',
            vote: 52
        }, {
            key: 3,
            sifat: 'Datang tepat waktu',
            vote: 89
        }, {
            key: 4,
            sifat: 'Tidak melakukan perbuatan tercela',
            vote: 43
        }, {
            key: 5,
            sifat: 'Mampu melaksanakan tugas sesuai arahan pimpinan',
            vote: 65
        }, {
            key: 6,
            sifat: 'Suka berbagi pengetahuan (sharing knowledge)',
            vote: 102
        }, {
            key: 7,
            sifat: 'Tidak memberikan pengaruh buruk',
            vote: 49
        }, {
            key: 8,
            sifat: 'Tidak mengeluh terhadap beban tugas',
            vote: 56
        }, {
            key: 9,
            sifat: 'Mampu bekerja sama dalam tim',
            vote: 49
        }, {
            key: 10,
            sifat: 'Ramah',
            vote: 40
        }
    ]

    checkList.sort((a, b) => (a.vote < b.vote)
        ? 1
        : -1)
    return (
        <div
            className="flex flex-col shadow-lg rounded-xl border border-dotted border-cyan-900 border-1">
            <div
                className="w-24 px-2 text-[12px] py-1 rounded-br-md rounded-tl-md bg-cyan-700 text-white font-bold">Kandidat {params.no}</div>
            <div className="flex w-full items-center justify-center mb-2">
                <div
                    className="relative mt-3 w-32 h-32 border border-solid border-x-grey-400 rounded-2xl border-1 shadow">
                    <Image
                        src={params.gambar}
                        width={170}
                        height={170}
                        alt="No Photo"
                        className="object-cover w-32 h-32 rounded-2xl"/>
                </div>
            </div>
            <div className="font-bold text-center text-sm xs:text-xs">{params.nama}</div>
            <div className="text-center text-xs xs:text-xs">{params.nip}</div>
            <hr
                className="my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100"/>
            <div className="flex w-full items-center justify-center">
                <span
                    className="inline-flex items-center mt-2 mr-2 mb-4 px-2 py-1 bg-green-200 hover:bg-green-300 rounded-full text-xs font-semibold text-green-600">
                    <StarIcon className="text-green h-4 w-4"/>
                    <span className="ml-0 text-green text-xs">
                        {params.star}
                    </span>
                </span>
                <span
                    className="inline-flex items-center mt-2 mb-4 px-2 py-1 bg-blue-200 hover:bg-blue-300 rounded-full text-xs font-semibold text-blue-600">
                    <TrophyIcon className="text-blue h-4 w-4"/>
                    <span className="ml-1 text-blue text-xs">
                        0
                    </span>
                </span>
            </div>
            <div className="border-t border-gray-100 pt-3 m-3">
                {checkList.map((item) => (<LabelSifat
                    key={item.key}
                    nourut={item.key}
                    label={item.sifat}
                    vote={item.vote}/>))}
            </div>
            <p className="block text-xs pl-3">Justifikasi Pimpinan:</p>
            <p className="block text-xs px-3"><textarea className="border border-solid border-gray-700 p-1 rounded-md w-full h-18">...</textarea></p>
            <p className="block text-xs px-3">Pilih</p>
        </div>
    );
}