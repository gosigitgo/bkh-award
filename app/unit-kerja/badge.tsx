'use client';

import { UsersIcon } from '@heroicons/react/20/solid'
import ModalQuota from './modal_quota'

export default function Badge() {
    return (
        <div
            className="bg-orange-100 border-l-4 mb-4 rounded-lg border-orange-500 rounded-b text-orange-900 px-4 py-3 shadow-md"
            role="alert">
            <div className="flex">
                <div className="hidden py-1 sm:block">
                    <svg
                        className="fill-current h-6 w-6 text-orange-500 mr-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"><path
                        d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg>
                </div>
                <div>
                    <p className="font-bold">Informasi</p>
                    <p className="text-sm">Silahkan pilih <strong>1 (satu)</strong> pegawai <strong>Hero of The Month Tingkat Unit Kerja</strong> yang telah diurutkan berdasarkan vote terbanyak dari pegawai di tingkat Unit
                        Kerja. Batas pemilihan <strong>Periode Triwulan III (Tahun 2023)</strong> adalah tanggal&nbsp;
                        <strong>30 November 2023</strong>
                    </p>
                    <div className="mt-2 flex items-center text-sm text-bold text-grey-500">
                        <UsersIcon
                            className="mr-1.5 h-5 w-5 flex-shrink-0 text-grey-400"
                            aria-hidden="true"/>
                        Kandidat:&nbsp;<b>{localStorage.getItem('kuotahotm')} pegawai</b>
                        <ModalQuota/>
                    </div>
                </div>
            </div>
        </div>
    )
}
