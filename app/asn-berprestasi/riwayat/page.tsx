'use client'
import {useEffect, useState} from "react";
import {LoadingScreen} from '../../components/loadingscreen'
import DetailPegawai from './detail_pegawai';
import secureLocalStorage from "react-secure-storage";
import { listASNBerprestasi } from "@/app/api/pegawai";
import swal from 'sweetalert'


export default function Page(){
    const [loadingScreen,
        setLoadingScreen] = useState(true)
    const [listPeg,
            setListPeg] = useState([])
    const [jmlListPeg,
                setjmlListPeg] = useState(0)
    useEffect(() => {
        setTimeout(async() => {
            listASNBerprestasi(String(secureLocalStorage.getItem('session_kdsatker')), String(secureLocalStorage.getItem('session_tahun'))).then((result) => {
                //console.log({res: result.data[0].nip_baru_dipilih})
                if (result.code == 'ERR_NETWORK') {
                    swal("Network Error", "Silahkan Coba Lagi !", "error");
                } else if (result.result == "true") {
                    setListPeg(result.data);
                    setjmlListPeg(100)
                    console.log({dipilihA: result.data})
                    setLoadingScreen(false)
                } else {
                    setListPeg([]);
                    setLoadingScreen(false)
                }
            }).catch(err => {
                return err;
            });
        }, 1000);
    }, []);
    return ((!loadingScreen)
        ? <div className="w-full">
            <div
                className="flex w-full font-bold text-2xl text-cyan-600 mt-2 sm:text-2xl">Daftar Pemilihan ASN Berprestasi</div>
                <div
                    className="w-full my-5 overflow-x-auto border rounded-md shadow-sm dark:border-gray-700 scrollbar-thin">
                    <table className="w-full bg-white rounded whitespace-nowrap">
                        <thead className="border-b bg-gray-50">
                            <tr className="">
                                <th
                                    className="px-3 py-3 text-xs font-bold text-left text-gray-500 uppercase align-middle">No</th>
                                <th
                                    className="px-3 py-3 text-xs font-bold text-left text-gray-500 uppercase align-middle">Pegawai</th>
                                <th
                                    className="px-3 py-3 text-xs font-bold text-left text-gray-500 uppercase align-middle">Jenis ASN Berprestasi</th>
                                <th
                                    className="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle"></th>
                            </tr>
                        </thead>
                        <tbody className="text-sm bg-white divide-y divide-gray-200">
                        {(jmlListPeg===0)?
                            <tr><td colSpan={4} className="text-center text-xs text-red-600 py-2">Data Tidak Tersedia</td></tr>
                        :''}
                        {listPeg
                                ?.map((peg : any, index) => (
                                    <tr key={index}>
                                        <td className="px-3 py-4 text-gray-600 "><div
                                                        className='rounded-full p-1 w-6 text-cyan-800 text-center text-lg'>{index + 1}.</div></td>
                                        <td className="px-3 py-4">
                                            <div className="flex items-center w-max">
                                                <img
                                                    src={`${peg.direktorifoto}${peg.foto}`}
                                                    alt={peg.nama}
                                                    className="w-11 h-11 rounded-full border border-solid border-x-grey-400"/>
                                                <div className="ml-4">
                                                    <div>{peg.nama}</div>
                                                    <div className="text-sm text-gray-400">{peg.nama_jabatan}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-3 py-4">
                                            {(peg.jns_penghargaan==="1")
                                            ? <span
                                            className="px-3 font-bold py-1 text-xs text-green-500 rounded-full bg-green-50">Inspiring Leader</span>
                                            : ((peg.jns_penghargaan==="2")
                                            ? <span
                                            className="px-3 font-bold py-1 text-xs text-blue-500 rounded-full bg-green-50">The Future Leader</span>
                                            : <span
                                            className="px-3 font-bold py-1 text-xs text-rose-500 rounded-full bg-green-50">Best Innovator</span>
                                            )
                                            }
                                            
                                        </td>
                                        <td className="px-3 py-4 text-right text-gray-500 ">
                                            <DetailPegawai
                                                nip_baru={peg.nip_baru}
                                                triwulan={peg.triwulan}
                                                tahun={peg.tahun}/></td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        : <LoadingScreen/>)
}