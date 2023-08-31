'use client'
import {SquaresPlusIcon, UserGroupIcon } from '@heroicons/react/20/solid'
import { CheckBadgeIcon, BackspaceIcon } from '@heroicons/react/24/outline'
import ProsesPilih from './modal_pilih_hotm'
import {useState} from 'react'
import swal from 'sweetalert'

export default function HeadTitle(props : any) {
    function BelumWaktunya() {
        swal("In Coming", "Pemilihan Akhir akan dibuka setelah periode Bote HoTM Pegawai selesai (30 November 2023)", "info");
    }
    const [temp,
        setTemp] = useState(props.temp)
    return (
        <div>
            {(temp)
                ? <div className="lg:flex lg:items-center lg:justify-between">
                        <div className="min-w-0 flex-1">
                            <h2
                                className="text-2xl font-bold leading-7 text-teal-800 sm:truncate sm:text-2xl sm:tracking-tight">
                                Daftar Kandidat Sementara (10 Besar)
                            </h2>
                        </div>
                        <div
                            className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                            <div className="mt-2 flex items-center text-sm text-bold text-grey-500">
                                <button
                                    type="button"
                                    onClick={BelumWaktunya}
                                    className="inline-flex items-center rounded-md bg-gray-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    <SquaresPlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true"/>
                                    Pilih HoTM
                                </button>
                            </div>

                        </div>
                    </div>
                : <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="min-w-0 flex-1">
                        <h2
                            className="text-2xl font-bold leading-7 text-teal-800 sm:truncate sm:text-2xl sm:tracking-tight">
                            Daftar Kandidat Final
                        </h2>
                    </div>
                    <div
                        className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                        <div className="mt-2 flex items-center text-sm text-bold text-grey-500">
                            <ProsesPilih />
                        </div>

                    </div>
                </div>}
            <div className="grid grid-cols-3 gap-3 pt-3">
                <div
                    className='flex flex-col border-t-4 shadow-lg rounded-b border-green-600 rounded-md justify-center bg-gradient-to-r from-green-200 from-10% via-gray-100 to-gray-100 p-3 text-green-700'>
                    <div className='flex justify-center text-xs lg:text-sm'>Jumlah Pegawai</div>
                    <div className='flex justify-center text-lg lg:text-3xl font-extrabold text-x-green-900'><UserGroupIcon className='hidden md:block sm:block lg:block h-7 lg:h-9 w-7 lg:w-9 mr-1' />138</div>
                </div>
                <div
                    className='flex flex-col border-t-4 shadow-lg rounded-b border-lime-600 rounded-md justify-center bg-gradient-to-r from-lime-200 from-10% via-gray-100 to-gray-100 p-3 text-lime-700'>
                    <div className='flex justify-center text-xs lg:text-sm'>Sudah Memilih</div>
                    <div className='flex justify-center text-lg lg:text-3xl font-extrabold text-lime-900'><CheckBadgeIcon className='hidden md:block sm:block lg:block h-7 lg:h-9 w-7 lg:w-9 mr-1' />100&nbsp;<div className='grid place-items-center text-sm'>(73%)</div></div>
                </div>
                <div
                    className='flex flex-col border-t-4 shadow-lg rounded-b border-rose-600 rounded-md justify-center bg-gradient-to-r from-rose-200 from-10% via-gray-100 to-gray-100 p-3 text-rose-700'>
                    <div className='flex justify-center text-xs lg:text-sm'>Belum Memilih</div>
                    <div className='flex justify-center text-lg lg:text-3xl font-extrabold text-rose-900'><BackspaceIcon className='hidden md:block sm:block lg:block h-7 lg:h-9 w-7 lg:w-9 mr-1' />38&nbsp;<div className='grid place-items-center text-sm'>(27%)</div></div>
                </div>

            </div>
        </div>
    )
} 