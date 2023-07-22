import { checkList } from '../global'
import { InformationCircleIcon } from "@heroicons/react/24/outline";

export default function PanduanVote() {
    return (
        <div className="flex items-center justify-center">
            <div
                className="place-items-center rounded-lg mt-10 p-2 border-dotted border border-red-600 w-full md:w-5/6 sm:w-5/6">
                    <div className='flex justify-center text-lg text-orange-700 font-bold text-center'><InformationCircleIcon className="h-7 w-7 text-orange-700" />&nbsp;PANDUAN MEMILIH HERO OF THE MONTH</div>
                <div className='text-center mt-1 mb-3 font-bold'>Cari Pegawai di lingkungan Satuan/Unit Kerja Anda yang menurut Anda memiliki ciri-ciri perilaku sebagai berikut:</div>
                <div className="place-items-center pl-28"><div className='grid justify-center grid-cols-2 gap-1'>{checkList.map((item, index) => (<li key={index}>{item.label}</li>))}</div></div>
            </div>
        </div>
    )
}