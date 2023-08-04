"use client"

import {Fragment, useState} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import { XMarkIcon, CheckCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline' 
import swal from 'sweetalert'
import {detailPegawai, savePilihan} from '../../api/pegawai' 
import {useRouter} from 'next/navigation'
import {Label, Textarea } from 'flowbite-react';
 
type Params = {
    label: string,
    index: number,
    checked: boolean
}
type Pegawai = {
    nama: string,
    nip_baru: string,
    nama_jabatan: string,
    kepangkatan: string,
    foto: string,
    direktorifoto: string
} 

export default function ModalIsi(props : any) {
    const router = useRouter()
    //console.log({nip:'1987021120101221004'})
    const [checked,
        setChecked] = useState([])
    const [open,
        setOpen] = useState(false)
    const [loading,
        setLoading] = useState(false)
    const [detPegawai,
        setDetailPegawai] = useState([])
    const [pilihNIPPeg,
        setPilihNIPPeg] = useState(props.nip)
    const [pilihNIP,
        setPilihNIP] = useState(String(localStorage.getItem('nip')))
    const [pilihTw,
        setPilihTw] = useState(String(localStorage.getItem('triwulan')))
    const [pilihTahun,
        setPilihTahun] = useState(String(localStorage.getItem('tahun')))
    const [pilihV1,
        setPilihV1] = useState(false)
    const [pilihV2,
        setPilihV2] = useState(false)
    const [pilihV3,
        setPilihV3] = useState(false)
    const [pilihV4,
        setPilihV4] = useState(false)
    const [pilihV5,
        setPilihV5] = useState(false)
    const [pilihV6,
        setPilihV6] = useState(false)
    const [pilihV7,
        setPilihV7] = useState(false)
    const [pilihV8,
        setPilihV8] = useState(false)
    const [pilihV9,
        setPilihV9] = useState(false)
    const [pilihV10,
        setPilihV10] = useState(false)

    function handleModal() {
        setOpen(!open);
        detailPegawai(props.nip).then((result) => {
            setDetailPegawai(result.data)
            console.log({detailPegawai: detPegawai})
        }).catch(err => {
            return err;
        })
    }
    function handleSave() : void {
        if((Number(pilihV1) + Number(pilihV2) + Number(pilihV3) + Number(pilihV4) + Number(pilihV5) + Number(pilihV6) + Number(pilihV7) + Number(pilihV8) + Number(pilihV9) + Number(pilihV10)) < 3) {
            swal("Gagal!", "Silahkan pilih minimal 3 (tiga) perilaku BerAKHLAK", "error");
        } else {
            savePilihan(pilihNIP, pilihNIPPeg, pilihTw, pilihTahun, pilihV1, pilihV2, pilihV3, pilihV4, pilihV5, pilihV6, pilihV7, pilihV8, pilihV9, pilihV10).then((result) => {
                //console.log({res: result.data[0].nip_baru_dipilih})
                if (result.code == 'ERR_NETWORK') {
                    swal("Network Error", "Silahkan Coba Lagi !", "error");
                } else if (result.result == "true") {
                    //console.log(resp)
                    setOpen(!open);
                    swal("Terima Kasih", "Pilihan Anda sudah kami simpan.", "success");
                    props.onInfoChange(result)
                } else {
                    setOpen(!open);
                    swal("Terjadi Kesalahan!", "Halaman akan di refresh ulang.", "error");
                    router.refresh()
                }
            }).catch(err => {
                return err;
            })

        }

    }
 
    return (
        <div>
            <div className="px-3 pb-2 my-3 items-center">
                <button
                    type="button"
                    onClick={handleModal}
                    className="flex w-full justify-center text-cyan-900  rounded-md border border-solid border-cyan-900 px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 hover:text-slate-100 hover:bg-cyan-700">
                    <CheckCircleIcon className="font-bold h-6 w-6 pr-1"/>
                    <span>Pilih Pegawai</span>
                </button>
            </div>

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
                                            className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                                            onClick={() => setOpen(false)}>
                                            <span className="sr-only">Close</span>
                                            <XMarkIcon
                                                className="h-6 w-6 border border-solid border-cyan-900 rounded-lg"
                                                aria-hidden="true"/>
                                        </button>
                                        <div className="flex w-full pb-2">
                                            <div className="absolute top-4 mt-0 sm:top-4 md:top-6 lg:top-6">
                                                <p className='text-red-900 text-lg'>
                                                    <strong>DETAIL PEGAWAI</strong>
                                                </p>
                                            </div>

                                            {detPegawai
                                                ?.map((peg : Pegawai, i) => (
                                                    <div className="flex w-full sm:mt-7" key={i}>
                                                        <div className="mr-3">
                                                            {/* <Image
                                                        src='/images/1.png'
                                                        width={160}
                                                        height={160}
                                                        alt="No Photo"
                                                        className="object-cover min-w-24 min-h-24 mt-1 border border-solid border-x-grey-400 rounded-2xl border-1 shadow-lg "/> */}
                                                            <img
                                                                src={`${peg.direktorifoto}${peg.foto}`}
                                                                width='120'
                                                                height='140'
                                                                alt='no-image'
                                                                className="object-cover min-w-24 min-h-24 mt-1 border border-solid border-x-grey-400 rounded-2xl border-1 shadow-lg"/>
                                                        </div>
                                                        <div className='w-full mt-1'>
                                                            <div className="grid grid-cols-1 gap-y-0">
                                                                <div>
                                                                    <p className="flex w-full text-sm font-bold text-gray-900">{peg.nama}</p>
                                                                    <p className="flex w-full text-sm text-gray-900">{peg.nip_baru}</p>
                                                                    <p className="flex w-full text-sm text-gray-900">{peg.kepangkatan}</p>
                                                                    <p className="flex w-full text-sm text-gray-900">{peg.nama_jabatan}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                        </div>
                                        <div className="flex w-full border-t border-gray-200">
                                            <p className='block font-bold my-1 text-cyan-900'>Ringkasan Prestasi/Inovasi
                                            </p>

                                        </div>
                                        <div className='text-sm'>Jelaskan <u><strong>secara singkat</strong></u> inovasi yang telah Anda capai dalam aspek-aspek sebagai berikut:</div>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="small" value="1. Skala, ruang lingkup, dan kompleksitas"/>
                                            </div>
                                            <Textarea
                                                id="comment1"
                                                className='text-sm'
                                                placeholder="Jelaskan secara singkat desain dari inovasi yang telah Anda ciptakan, termasuk skala, rung lingkup, dan kompleksitas penerapan"
                                                required
                                                rows={3}
                                            />
                                        </div>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="small" value="2. Kebutuhan sumber daya"/>
                                            </div>
                                            <Textarea
                                                id="comment2"
                                                className='text-sm'
                                                placeholder="Jelaskan sumber daya dan anggaran yang dibutuhkan untuk menerapkan inovasi yang Anda ciptakan"
                                                required
                                                rows={3}
                                            />
                                        </div>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="small" value="3. Hasil penerapan dan dampak "/>
                                            </div>
                                            <Textarea
                                                id="comment2"
                                                className='text-sm'
                                                placeholder="Jelaskan hasil dari penerapan inovasi dan dampaknya pada para penerima manfaat/pemangku kepentingan"
                                                required
                                                rows={3}
                                            />
                                        </div> 
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="small" value="4. Rencana implementasi dan adopsi lanjutan"/>
                                            </div>
                                            <Textarea
                                                id="comment4"
                                                className='text-sm'
                                                placeholder="Jelaskan rencana yang telah Anda susun untuk menerapkan lebih lanjut inovasi yang telah Anda ciptakan "
                                                required
                                                rows={3}
                                            />
                                        </div>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="small" value="5. Promosi inovasi"/>
                                            </div>
                                            <Textarea
                                                id="comment1"
                                                className='text-sm'
                                                placeholder="Jelaskan mengapa inovasi yang Anda ciptakan adalah sesuatu yang bernilai tambah bagi pemangku kepentingan dan layak untuk terus diimplementasikan"
                                                required
                                                rows={3}
                                            />
                                        </div>
                                        <div
                                            className="flex mt-8 cursor-pointer bg-cyan-600 text-white items-center py-2 rounded-lg justify-center border border-cyan-900 border-solid hover:bg-cyan-700"
                                            onClick={handleSave}>
                                            <PlusCircleIcon className='font-bold h-7 w-7 pr-1'/>
                                            <span className="">SIMPAN</span>
                                        </div>
                                    </div>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    )
}