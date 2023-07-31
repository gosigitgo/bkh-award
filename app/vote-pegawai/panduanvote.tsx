import {checkList} from '../global'
import {InformationCircleIcon} from "@heroicons/react/24/outline";

export default function PanduanVote() {
    return (
        <div className="flex items-center justify-center mb-5">
            <div
                className="place-items-center rounded-lg mt-10 p-2 border-dotted border border-red-600 w-full md:w-5/6 sm:w-5/6">
                <div
                    className='flex justify-center text-lg text-orange-700 font-bold text-center'><InformationCircleIcon className="h-7 w-7 text-orange-700"/>&nbsp;PANDUAN MEMILIH HERO OF THE MONTH</div>
                <div className='text-center mt-1 mb-3 font-bold'>Cari Pegawai di lingkungan
                    Satuan/Unit Kerja Anda yang menurut Anda memiliki ciri-ciri perilaku sebagai
                    berikut:</div>
                <div className="place-items-center md:pl-28 text-xs md:text-sm">
                    <div className='grid justify-center grid-cols-2 gap-1'>{checkList.map((item, index) => (
                            <div className="flex" key={index}>
                                <div className="flex-none w-6 h-6">
                                    <svg viewBox="2 2 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path
                                                d="M17.0001 9L10 16L7 13"
                                                stroke="#73d100"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"></path>
                                        </g>
                                    </svg>
                                </div>
                                <div className="grow text-xs md:text-sm">
                                    {item.label}
                                </div>
                            </div>
                        ))}</div>
                </div>
            </div>
        </div>
    )
}