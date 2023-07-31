'use client';

import {listVoteFinal} from '../api/pegawai'
import {Table, Radio} from 'flowbite-react';
import {Fragment, useState, useEffect} from 'react'
import {Dialog, RadioGroup, Transition} from '@headlessui/react'
import {XMarkIcon, SquaresPlusIcon, MagnifyingGlassCircleIcon} from '@heroicons/react/24/outline'
import {LoadingScreen} from '../components/loadingscreen';
import swal from 'sweetalert';
import {saveJustifikasiFinal} from '../api/pegawai'

export default function ModalPilihHotm(props : any) {
    const [open,
        setOpen] = useState(false)
    const [pilih,
        setPilih] = useState("")
    const [justifikasi,
        setJustifikasi] = useState("")
    const [loadingScreen,
        setLoadingScreen] = useState(true)
    const handlePilih = (e : any) => {
        setPilih(e.target.value)
    }
    const [listPeg,
        setListPeg] = useState([])

    function handleSave(triwulan : string, tahun : string, kd_satker : string) {
        if (pilih === "") {
            swal("Gagal!", "Anda belum memilih penerima HoTM!", "error");
            //setJustifikasiNew(justifikasiIsi)
            return;
        }
        if (justifikasi === "") {
            swal("Gagal!", "Justifikasi tidak boleh kosong!", "error");
            //setJustifikasiNew(justifikasiIsi)
            return;
        }
        setOpen(!open)
        setLoadingScreen(true)
        saveJustifikasiFinal(pilih, triwulan, tahun, kd_satker, justifikasi).then((result) => {
            //console.log({res: result.data[0].nip_baru_dipilih})
            if (result.code == 'ERR_NETWORK') {
                swal("Network Error", "Silahkan Coba Lagi !", "error");
                setLoadingScreen(false)
            } else if (result.result == "true") {
                //console.log(resp)
                swal("Sukses", "Justifikasi akhir telah tersimpan.", "success").then((value) => {
                    window
                        .location
                        .reload()
                });
                setLoadingScreen(false)

            } else {
                swal("Terjadi Kesalahan!", "Silahkan Ulangi...", "error");
                setLoadingScreen(false)
            }
        }).catch(err => {
            return err;
        })
    }

    useEffect(() => {
        listVoteFinal(String(localStorage.getItem('kdsatker')), String(localStorage.getItem('triwulan')), String(localStorage.getItem('tahun'))).then((result) => {
            //console.log({res: result.data[0].nip_baru_dipilih})
            if (result.code == 'ERR_NETWORK') {
                swal("Network Error", "Silahkan Coba Lagi !", "error");
            } else if (result.result == "true") {
                setListPeg(result.data);
                result.data
                    ?.map((peg : any) => {
                        if (peg.isWin == "1") {
                            setJustifikasi(peg.justifikasi_final)
                            setPilih(peg.nip_baru)
                            console.log({just: justifikasi, pil: pilih})
                            return;
                        }
                    });
                console.log({dipilihA: result.data})
                setLoadingScreen(false)
            } else {
                setListPeg([]);
                setLoadingScreen(false)
            }
        }).catch(err => {
            return err;
        })
    }, [])

    return ((!loadingScreen)
        ? <div>
                <button
                    type="button"
                    onClick={() => setOpen(true)}
                    className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    <SquaresPlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true"/>
                    Pilih HoTM
                </button>

                <Transition.Root show={open} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={setOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0">
                            <div
                                className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block"/>
                        </Transition.Child>

                        <div className="fixed inset-0 z-10 overflow-y-auto">
                            <div
                                className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                                    enterTo="opacity-100 translate-y-0 md:scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 translate-y-0 md:scale-100"
                                    leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95">
                                    <Dialog.Panel
                                        className="flex w-full transform text-left text-base transition md:my-5 md:max-w-2xl md:px-2 lg:max-w-2xl">
                                        <div
                                            className="relative w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                                            <button
                                                type="button"
                                                className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-4 md:right-6 md:top-4 lg:right-8 lg:top-6"
                                                onClick={() => setOpen(false)}>
                                                <span className="sr-only">Close</span>
                                                <XMarkIcon
                                                    className="h-6 w-6 border border-solid border-cyan-900 rounded-lg"
                                                    aria-hidden="true"/>
                                            </button>
                                            <div className='grid grid-cols-1 w-full'>
                                                <div className="absolute top-4 mt-0 sm:top-4 md:top-4 lg:top-6">
                                                    <p className='text-black text-lg'>
                                                        <strong>PEMILIHAN PENERIMA PENGHARGAAN</strong>
                                                    </p>
                                                </div>
                                                <div className="flex w-full">
                                                    <table className="min-w-full table-auto mt-8">
                                                        <thead className="bg-gray-100 text-cyan-700 border-b">
                                                            <tr>
                                                                <th className='px-2 py-2'>No</th>
                                                                <th>Nama Pegawai</th>
                                                                <th className='text-center'>Jml Vote</th>
                                                                <th className='text-center'>Pilih</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {listPeg
                                                                ?.map((peg : any, index) => (
                                                                    <tr key={index} className="border-green-300 border-opacity-30 border-b">
                                                                        <td className='text-center'>
                                                                            <div
                                                                                className='rounded-full border border-cyan-800 bg-white p-1 w-6 text-cyan-800 text-center text-xs font-bold'>{index + 1}</div>
                                                                        </td>
                                                                        <td className='flex items-center whitespace-nowrap py-3'>
                                                                            <img
                                                                                src={`${peg.direktorifoto}${peg.foto}`}
                                                                                alt={peg.nama}
                                                                                className="w-11 h-11 rounded-full border border-solid border-x-grey-400"/>
                                                                            <div className="pl-3">
                                                                                <div className="text-sm font-semibold">{peg.nama}</div>
                                                                                <div className="text-sm text-gray-500">{peg.nama_jabatan}</div>
                                                                            </div>
                                                                        </td>
                                                                        <td className='font-bold text-center text-md text-green-700'>
                                                                            {peg.jml_vote}
                                                                        </td>
                                                                        <td className='flex-none align-middle text-center'>
                                                                            <Radio
                                                                                defaultChecked={(peg.isWin === "1")
                                                                                ? true
                                                                                : false}
                                                                                id={peg.nip_baru}
                                                                                className="border border-cyan-400"
                                                                                name="pilih"
                                                                                value={peg.nip_baru}
                                                                                onChange={handlePilih}/>
                                                                        </td>
                                                                    </tr>
                                                                ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className="flex w-full mt-2 mb-1 font-semibold text-sm">
                                                    Justifikasi Akhir
                                                </div>
                                                <div className="flex w-full">
                                                    <textarea
                                                        onChange={({target}) => setJustifikasi(target.value)}
                                                        rows={5}
                                                        className='w-full text-sm border border-cyan-800 border-dotted rounded-lg'
                                                        placeholder='Silahkan masukkan justifikasi akhir Anda disini....'
                                                        required>{justifikasi}</textarea>
                                                </div>
                                                <div className="flex w-full sm:mt-7 justify-end">
                                                    <button
                                                        type="submit"
                                                        onClick={() => handleSave(String(localStorage.getItem('triwulan')), String(localStorage.getItem('tahun')),String(localStorage.getItem('kdsatker')))}
                                                        className='border bg-cyan-600 border-cyan-700 hover:bg-cyan-700 text-white mr-2 rounded-lg text-sm px-3 py-2'>SIMPAN</button>
                                                    <button
                                                        type="button"
                                                        onClick={() => setOpen(false)}
                                                        className='border border-gray-500 hover:bg-gray-200 rounded-lg text-sm px-3 py-2'>BATAL</button>
                                                </div>
                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition.Root>
            </div>
        : <LoadingScreen/>)
}