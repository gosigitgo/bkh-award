'use client'

import {useEffect, useState} from 'react';
import DetailPegawaiFinal from './detail_pegawai_final'
import {LoadingScreen} from '../components/loadingscreen'
import {listVoteFinal} from '../api/pegawai'
import swal from 'sweetalert'

export default function KandidatFinal() {
    const [listPeg,
        setListPeg] = useState([])
    const [loadingScreen,
        setLoadingScreen] = useState(true)
    useEffect(() => {
        setTimeout(async() => {
        listVoteFinal(String(localStorage.getItem('kdsatker')), String(localStorage.getItem('triwulan')), String(localStorage.getItem('tahun'))).then((result) => {
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
        })}, 1000);
    }, [])
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