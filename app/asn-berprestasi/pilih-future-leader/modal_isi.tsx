"use client"

import {Fragment, useState} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import { XMarkIcon, CheckCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline' 
import swal from 'sweetalert'
import {detailPegawai, saveASNBerprestasi} from '../../api/pegawai' 
import {useRouter} from 'next/navigation'
import {Label, Textarea } from 'flowbite-react';
import secureLocalStorage from "react-secure-storage";

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
    const pilihNIP = props.nip
    const [dinamika1, setDinamika1] = useState("")
    const [dinamika2, setDinamika2] = useState("")
    const [dinamika3, setDinamika3] = useState("")
    const [dinamika4, setDinamika4] = useState("")
    const [gaya1, setGaya1] = useState("")
    const [gaya2, setGaya2] = useState("")
    const [gaya3, setGaya3] = useState("")
    const [gaya4, setGaya4] = useState("")
    const [gaya5, setGaya5] = useState("")
    const [gaya6, setGaya6] = useState("")
    const [akhlak, setAkhlak] = useState("")
    const [dakung, setDakung] = useState("")

    function handleModal() {
        setOpen(!open);
        detailPegawai(props.nip).then((result) => {
            setDetailPegawai(result.data)
            //console.log({detailPegawai: detPegawai})
        }).catch(err => {
            return err;
        })
    }
    function handleSave() {
        swal({
            title: "Konfirmasi",
            text: "Apakah data yang Anda masukkan sudah benar ?",
            icon: "warning",
            buttons: [
                'Batal',
                'Ya'
            ],
            dangerMode: true,
        }).then(function(isConfirm) {
            if (isConfirm) {
                saveASNBerprestasi("2", pilihNIP, String(secureLocalStorage.getItem('session_kdsatker')), String(secureLocalStorage.getItem('session_tahun')), dinamika1, dinamika2, dinamika3, dinamika4, gaya1, gaya2, gaya3, gaya4, gaya5, gaya6, akhlak, dakung).then((result) => {
                    //console.log({res: result.data[0].nip_baru_dipilih})
                    if (result.code == 'ERR_NETWORK') {
                        swal("Network Error", "Silahkan Coba Lagi !", "error");
                    } else if (result.result == "true") {
                        //console.log(resp)
                        setOpen(!open);
                        swal({
                            title: "Terima Kasih",
                            text: "Pilihan Anda sudah kami simpan.",
                            icon: "success",  
                        }).then(function(isConfirm) {
                            if (isConfirm) {
								router.push('/asn-berprestasi/riwayat')
                            } 
                        })
                    } else {
                        setOpen(!open);
                        swal("Error", "Terjadi Kesalahan!", "error");
                        router.push('/asn-berprestasi/pilih-future-leader')
                    }
                }).catch(err => {
                    return err;
                })
            } else {
                return false;
            }
        })
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
                                    className="flex w-full transform text-left text-base transition md:my-5 md:max-w-2xl md:px-2 lg:max-w-4xl">
                                    <form method='post' onSubmit={handleSave}>
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
                                        
                                        <div className='text-sm'>Jelaskan <u><strong>secara singkat</strong></u> prestasi yang telah Anda capai dalam aspek-aspek sebagai berikut:</div>
                                        <div className='text-sm font-bold mt-2'>I. Dinamika Kinerja Unit Utama</div>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="small" value="1. Perkembangan kinerja unit kerja"/>
                                            </div>
                                            <Textarea
                                                value={dinamika1}
                                                onChange={({target}) => setDinamika1(target.value)}
                                                id="comment1"
                                                className='text-sm'
                                                placeholder="Jelaskan perkembangan kinerja unit kerja yang Anda pimpin selama 2 tahun terakhir"
                                                required
                                                rows={3}
                                            />
                                        </div>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="small" value="2. Dampak kinerja pada pemangku kepentingan"/>
                                            </div>
                                            <Textarea
                                                value={dinamika2}
                                                onChange={({target}) => setDinamika2(target.value)}
                                                id="comment2"
                                                className='text-sm'
                                                placeholder="Jelaskan dampak dari kinerja yang dihasilkan unit kerja yang Anda pimpin pada pemangku kepentingan terkait (termasuk pegawai unit kerja)"
                                                required
                                                rows={3}
                                            />
                                        </div>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="small" value="3. Implementasi rencana unit kerja"/>
                                            </div>
                                            <Textarea
                                                value={dinamika3}
                                                onChange={({target}) => setDinamika3(target.value)}
                                                id="comment3"
                                                className='text-sm'
                                                placeholder="Jelaskan perkembangan implementasi rencana kerja tahunan/strategis unit kerja yang Anda pimpin, serta sekilas tantangan dalam implementasi tersebut"
                                                required
                                                rows={3}
                                            />
                                        </div> 
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="small" value="4. Inovasi di dalam kegiatan unit kerja"/>
                                            </div>
                                            <Textarea
                                                value={dinamika4}
                                                onChange={({target}) => setDinamika4(target.value)}
                                                id="comment4"
                                                className='text-sm'
                                                placeholder="Jelaskan berbagai inovasi yang telah Anda terapkan di dalam unit kerja yang Anda pimpin"
                                                required
                                                rows={3}
                                            />
                                        </div>
                                        <div className='text-sm font-bold mt-2'>II. Gaya Kepemipinan</div>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="small" value="1. Komunikasi dan hubungan dengan pemangku kepentingan"/>
                                            </div>
                                            <Textarea
                                                value={gaya1}
                                                onChange={({target}) => setGaya1(target.value)}
                                                id="comment5"
                                                className='text-sm'
                                                placeholder="Jelaskan kegiatan/mekanisme yang Anda lakukan untuk berkomunikasi dan menjaga hubungan dengan pemangku kepentingan (termasuk pegawai)"
                                                required
                                                rows={3}
                                            />
                                        </div>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="small" value="2. Pengelolaan situasi menekan"/>
                                            </div>
                                            <Textarea
                                                value={gaya2}
                                                onChange={({target}) => setGaya2(target.value)}
                                                id="comment6"
                                                className='text-sm'
                                                placeholder="Jelaskan hal-hal yang biasa Anda lakukan apabila Anda dan unit kerja yang Anda pimpin sedang berada dalam situasi yang menekan (misal: mendapat beban kerja besar dengan tenggat waktu yang singkat)"
                                                required
                                                rows={3}
                                            />
                                        </div>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="small" value="3. Pengembangan kompetensi individu dan tim"/>
                                            </div>
                                            <Textarea
                                                value={gaya3}
                                                onChange={({target}) => setGaya3(target.value)}
                                                id="comment7"
                                                className='text-sm'
                                                placeholder="Jelaskan hal-hal yang telah Anda lakukan terkait pengembangan kompetensi berbagai tim kerja dan individu pegawai di unit kerja yang Anda pimpin "
                                                required
                                                rows={3}
                                            />
                                        </div> 
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="small" value="4. Pencapaian dan kesalahan"/>
                                            </div>
                                            <Textarea
                                                value={gaya4}
                                                onChange={({target}) => setGaya4(target.value)}
                                                id="comment8"
                                                className='text-sm'
                                                placeholder="Jelaskan hal-hal yang telah Anda lakukan terkait pencapaian atau kesalahan yang dilakukan oleh individu atau tim kerja di unit kerja yang Anda pimpin "
                                                required
                                                rows={3}
                                            />
                                        </div>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="small" value="5. Kebutuhan personal dan work-life balance"/>
                                            </div>
                                            <Textarea
                                                value={gaya5}
                                                onChange={({target}) => setGaya5(target.value)}
                                                id="comment9"
                                                className='text-sm'
                                                placeholder="Jelaskan hal-hal yang telah Anda lakukan terkait akomodasi kebutuhan personal serta aspek work-life balance para pegawai di unit kerja Anda"
                                                required
                                                rows={3}
                                            />
                                        </div>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="small" value="6. Kedekatan hubungan atasan-bawahan"/>
                                            </div>
                                            <Textarea
                                                value={gaya6}
                                                onChange={({target}) => setGaya6(target.value)}
                                                id="comment10"
                                                className='text-sm'
                                                placeholder="Jelaskan tingkat kedekatan hubungan Anda dengan para pegawai di unit kerja"
                                                required
                                                rows={3}
                                            />
                                        </div>
                                        <div className='text-sm font-bold mt-2'>III. Internalisasi BerAKHLAK</div>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="small" value="Internalisasi BerAKHLAK di unit kerja"/>
                                            </div>
                                            <Textarea
                                                value={akhlak}
                                                onChange={({target}) => setAkhlak(target.value)}
                                                id="comment11"
                                                className='text-sm'
                                                placeholder="Jelaskan hal-hal yang telah Anda lakukan untuk mendorong munculnya perilaku yang selaras dengan BerAKHLAK di unit kerja yang Anda pimpin"
                                                required
                                                rows={3}
                                            />
                                        </div>
                                        <div className='text-sm font-bold mt-2'>IV. Persyaratan Administrasi & Dokumen Pendukung</div>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="small" value="Link Persyaratan Administrasi & Dokumen Pendukung "/>
                                                <span className='text-xs text-orange-700'>(simpan seluruh dokumen pendukung kedalam 1 lokasi penyimpanan online (<i>cloud storage</i>) seperti GDrive, Dropbox, dsb meliputi <strong>dokumen persyaratan administratif (formulir ringkasan prestasi, formulir rekomendasi pimpinan dan surat pernyatan bebas hukuman disiplin) serta dokumen pendukung berupa foto/video/testimoni maupun data dukung lainnya</strong>. Pastikan lokasi penyimpanan dapat diakses (<i>shared</i>) dan dokumen tidak dimodifikasi setelah data disubmit)</span>
                                            </div>
                                            <input
                                                value={dakung}
                                                onChange={({target}) => setDakung(target.value)}
                                                type="text"
                                                id="comment12"
                                                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-cyan-500 focus:border-cyan-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                                placeholder="Link dokumen pendukung"
                                                required
                                            />
                                        </div>
                                        <div className="w-full">
                                            <button className="w-full flex mt-8 cursor-pointer bg-cyan-600 text-white items-center py-2 rounded-lg justify-center border border-cyan-900 border-solid hover:bg-cyan-700" type='submit'>
                                            <PlusCircleIcon className='font-bold h-7 w-7 pr-1'/>
                                            <span className="">SIMPAN</span>
                                            </button>
                                        </div>
                                    </div>
                                    </form>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    )
}