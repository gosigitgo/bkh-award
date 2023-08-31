'use client'

import {useEffect, useState} from 'react';
import DetailPegawaiFinal from './detail_pegawai_final'
import {LoadingScreen} from '../components/loadingscreen'
import {listVoteFinal, detailPegawai} from '../api/pegawai'
import swal from 'sweetalert'
import axios from "axios"
import { useRouter } from 'next/navigation'


const fetchSession = async() => {
    const res = await axios.get('http://localhost:3000/api/cookies');
    return res.data
};


export default function KandidatFinal() {
    const router = useRouter()
    const [nip,
        setNip] = useState()
    const [triwulan,
        setTriwulan] = useState("")
    const [tahun,
        setTahun] = useState("")
    const [kdsatker,
        setKdsatker] = useState("")
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
                        setTriwulan(datapeg.data[0].triwulan)
                        setTahun(datapeg.data[0].tahun)
                        setKdsatker(datapeg.data[0].kd_satuan_organisasi)
                        console.log('mlebu')
                        listVoteFinal(datapeg.data[0].kd_satuan_organisasi, datapeg.data[0].triwulan, datapeg.data[0].tahun).then((result2) => {
                            if (result2.code == 'ERR_NETWORK') {
                                swal("Network Error", "Silahkan Coba Lagi !", "error");
                            } else if (result2.result == "true") {
                                setListPeg(result2.data);
                                console.log({dipilihA: result2.data})
                                setLoadingScreen(false)
                            } else {
                                setListPeg([]);
                                setLoadingScreen(false)
                            }
                        }).catch(err => {
                            return err;
                        })
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
    })}, [])
    return ((!loadingScreen)
        ? <div className="grid grid-auto-fit-lg gap-4 py-5 -z-100">
            {listPeg?.map((peg, index) => (
                        <DetailPegawaiFinal
                        no={index+1}
                        key={index}
                        detailpeg={peg} />
                    )
                )
            }
            </div>
        : <LoadingScreen />
    )
}