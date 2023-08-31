'use client'

import {StarIcon, TrophyIcon} from "@heroicons/react/24/solid";
import {CheckBadgeIcon} from "@heroicons/react/24/outline";
import ModalDetailPegawai from "./detail_pegawai_temp";
import {checkList, DataPeg} from '../global'
import {detailVote} from '../api/pegawai'
import {useEffect, useState} from "react";
import swal from "sweetalert";
import Justifikasi from "./justifikasi";

type ParamsLabel = {
    nourut: number,
    label: string,
    vote: number
}
function LabelSifat(param : ParamsLabel) {
    return (
        <div className="text-xs">
            <div
                className="flex border-b-[1px] border-dotted border-green-200 border-opacity-50 py-1">
                <div className="flex grow h-6 leading-none align-middle">
                    {param.label}
                </div>
                <div className="flex-none w-14">
                    <span
                        title={param.label}
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
export default function DetailPegawaiFinal(params : any) {
    const [detailpeg,
        setDetailPeg] = useState(params.detailpeg) 
    const [menang,
            setMenang] = useState(params.detailpeg.isWin)
    const [checkListFill,
        setCheckListFill] = useState < any[] > ([])
    useEffect(() => {
        detailVote(detailpeg.nip, detailpeg.triwulan, detailpeg.tahun).then((result) => {
            console.log({res: result.data[0]})
            if (result.code == 'ERR_NETWORK') {
                swal("Network Error", "Silahkan Coba Lagi !", "error");
            } else if (result.result == "true") {
                setCheckListFill([])
                checkList.map((item, i) => (setCheckListFill(checkListFill => [
                    ...checkListFill, {
                        id: i,
                        label: item.label,
                        jmlvote: result.data[0][`jml_${item.val}`]
                    }
                ])));
            } else {
                setDetailPeg([]);
                //setLoadingScreen(false)
            }
        }).catch((err : any) => {
            return err;
        })
    }, [detailpeg.nip, detailpeg.tahun, detailpeg.triwulan])
    //console.log({menang:menang})
    // checkListFill.sort((a, b) => (a.vote < b.vote)     ? 1     : -1)
    const colorWin = (menang === "1")
        ? 'bg-yellow-50'
        : ''
    return (
        <div
            className={`flex flex-col shadow-lg rounded-xl border border-dotted border-cyan-900 border-1 ${colorWin}`}>
                {(menang === "1")
                    ? <div className="w-12 px-2 py-1 text-amber-500"><CheckBadgeIcon /></div>
                    : <div
                    className="w-24 px-2 text-[12px] py-1 rounded-br-md rounded-tl-md bg-cyan-700 text-white font-bold">Kandidat {params.no}</div>
                }
                <div className="flex w-full items-center justify-center mb-2">
                    <div
                        className="relative mt-3 w-32 h-32 border border-solid border-x-grey-400 rounded-2xl border-1 shadow">
                        <img
                            src={`${detailpeg.direktorifoto}${detailpeg.foto}`}
                            width={170}
                            height={170}
                            alt={detailpeg.nama}
                            className="object-cover w-32 h-32 rounded-2xl"/>
                    </div>
                </div>
                <div className="font-bold text-center text-sm xs:text-xs">{detailpeg.nama}</div>
                <div className="text-center text-xs xs:text-xs">{detailpeg.nama_jabatan}</div>
                <div className="text-center text-xs xs:text-xs">{detailpeg.nip}</div>
                <hr
                    className="mt-1 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100"/>
                <div className="flex w-full items-center justify-center">
                    <span
                        className="inline-flex items-center mt-2 mr-2 mb-4 px-2 py-1 bg-green-200 hover:bg-green-300 rounded-full text-xs font-semibold text-green-600">
                        <StarIcon className="text-green h-4 w-4"/>
                        <span className="ml-0 text-green text-xs">
                            {detailpeg.jml_vote}
                        </span>
                    </span>
                    <span
                        className="inline-flex items-center mt-2 mb-4 px-2 py-1 bg-blue-200 hover:bg-blue-300 rounded-full text-xs font-semibold text-blue-600">
                        <TrophyIcon className="text-blue h-4 w-4"/>
                        <span className="ml-1 text-blue text-xs">
                            {detailpeg.jml_win}
                        </span>
                    </span>
                </div>
                <div className="border-opacity-50 pt-1 m-3">
                    {checkListFill.map((item, i) => (<LabelSifat key={i} nourut={i + 1} label={item.label} vote={item.jmlvote}/>))}
                </div>
                <Justifikasi
                    nip_baru={detailpeg.nip}
                    justifikasi={detailpeg.justifikasi}
                    triwulan={detailpeg.triwulan}
                    tahun={detailpeg.tahun}
                    kd_satker={detailpeg.kd_satker} /> 
                {(detailpeg.justifikasi_final !== "")
                    ? <div
                            className={`relative border border-cyan-700 border-dotted rounded-lg mx-2 mb-2 py-2`}>
                            <div>
                                <p className={`block text-xs pl-3 font-semibold text-cyan-700`}>Justifikasi Akhir:</p>
                                <p className="block text-xs px-3">{detailpeg.justifikasi_final}</p>
                            </div>
                        </div>
                    : ""
                }
            </div>
        )
}