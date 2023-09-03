
'use client'
import swal from 'sweetalert' 
import ModalDownload from './modal_download';
import { useRouter } from 'next/navigation';

type Props = {
    alert:string
}
export default function Panduan() {
    const router = useRouter()
    function handleClick(){
        router.push('/asn-berprestasi/riwayat')
    }


    return (
        <div className="flex flex-wrap gap-1 mt-2">
        <a className="py-1 px-2 bg-green-500 rounded-md text-center font-bold text-white text-sm cursor-pointer hover:bg-green-600" href="formulir/Pengumuman_Pelaksanaan_Seleksi_ASN_Berprestasi_Tahun_2023.pdf" target='_blank' >PENGUMUMAN LENGKAP</a>
        <div className="py-1 px-2 bg-blue-500 rounded-md text-center font-bold text-white text-sm cursor-pointer hover:bg-blue-600" onClick={handleClick} >DAFTAR USULAN SATKER</div>
        <ModalDownload/>
        </div>
    )
}