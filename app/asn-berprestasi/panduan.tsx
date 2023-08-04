
'use client'
import swal from 'sweetalert' 

type Props = {
    alert:string
}
export default function Panduan() {

    function handleClick(){
        swal("Coming Soon", "Coming Soon ya Gaesss...", "info");
    }

    return (
        <div className="flex flex-wrap gap-1 mt-2">
        <div className="py-1 px-2 bg-blue-500 rounded-md text-center font-bold text-white text-sm cursor-pointer hover:bg-blue-600" onClick={handleClick} >DAFTAR USULAN SATKER</div>
        <div className="py-1 px-2 bg-orange-500 rounded-md text-center font-bold text-white text-sm cursor-pointer hover:bg-orange-600" onClick={handleClick} >PANDUAN&nbsp;PEMILIHAN ASN BERPRESTASI</div> 
        </div>
    )
}