'use client';

import {listVote, detailPegawai} from '../api/pegawai'
import Image from 'next/image';
import DetailPegawaiTemp from './detail_pegawai_temp';
import {useEffect, useState} from 'react';
import swal from 'sweetalert';
import {LoadingScreen} from '../components/loadingscreen';
import axios from 'axios';
import {useRouter} from 'next/navigation';

const fetchSession = async() => {
    const res = await axios.get('http://localhost:3000/api/cookies');
    return res.data
};

export default function KandidatTemp() {
    const router = useRouter()
    const [listPeg,
        setListPeg] = useState([])
    const [loadingScreen,
        setLoadingScreen] = useState(true)
    useEffect(() => {
        setTimeout(async() => {
            fetchSession().then((result) => {
                console.log({login: result.sess_login})
                if (result.sess_login === true) {
                    detailPegawai(result.sess_nip).then((datapeg) => {

                        console.log('m')
                        console.log({peg: datapeg.data[0]})
                        listVote(datapeg.data[0].kd_satuan_organisasi, datapeg.data[0].triwulan, datapeg.data[0].tahun).then((result) => {
                            //console.log({res: result.data[0].nip_baru_dipilih})
                            if (result.code == 'ERR_NETWORK') {
                                swal("Network Error", "Silahkan Coba Lagi !", "error");
                            } else if (result.result == "true") {
                                setListPeg(result.data);
                                console.log({dipilihA: result.data})
                                setLoadingScreen(false)
                            } else {
                                setListPeg([]);
                                setLoadingScreen(false)
                            }
                        }).catch(err => {
                            return err;
                        });
                        setLoadingScreen(false)
                    }).catch((err : Error) => {
                        console.log({errors: err})
                        setLoadingScreen(false)
                    })

                } else {
                    swal({title: "Error", text: "Session habis, silahkan login ulang!", icon: "warning", timer: 2000})
                    setLoadingScreen(false)
                    router.push('http://auth-eoffice.kemkes.go.id/do-login')
                }
            }).catch((e : Error) => {
                console.log({errors: e})
                swal("Error", "Terjadi Kesalahan. Silahkan login ulang!", 'error')
                setLoadingScreen(false)
            })
        }, 1000);
    }, [router]);

    return ((!loadingScreen)
        ? <div className="w-full">

                <div
                    className="w-full my-10 overflow-x-auto border rounded-md shadow-sm dark:border-gray-700 scrollbar-thin">
                    <table className="w-full bg-white rounded whitespace-nowrap">
                        <thead className="border-b bg-gray-50">
                            <tr className="">
                                <th
                                    className="px-3 py-3 text-xs font-bold text-left text-gray-500 uppercase align-middle">No</th>
                                <th
                                    className="px-3 py-3 text-xs font-bold text-left text-gray-500 uppercase align-middle">Pegawai</th>
                                <th
                                    className="px-3 py-3 text-xs font-bold text-left text-gray-500 uppercase align-middle">Jumlah Vote</th>
                                <th
                                    className="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle"></th>
                            </tr>
                        </thead>
                        <tbody className="text-sm bg-white divide-y divide-gray-200">
                            {listPeg
                                ?.map((peg : any, index) => (
                                    <tr key={index}>
                                        <td className="px-3 py-4 text-gray-600 ">{((index + 1) <= Number(localStorage.getItem('kuotahotm')))
                                                ? <div
                                                        className='rounded-full bg-green-500 p-1 w-6 text-white text-center text-xs font-bold'>{index + 1}</div>
                                                : <div
                                                    className='rounded-full bg-gray-400 p-1 w-6 text-white text-center text-xs font-bold'>{index + 1}</div>
}</td>
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
                                            <span
                                                className="px-3 font-bold py-1 text-sm text-green-500 rounded-full bg-green-50">{peg.jml_vote}</span>
                                            <span className='text-xs text-purple-800'>{` (${peg.jml_v})`}</span>
                                        </td>
                                        <td className="px-3 py-4 text-right text-gray-500 ">
                                            <DetailPegawaiTemp
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