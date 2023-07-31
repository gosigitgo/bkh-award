import {Fragment, useEffect, useState} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {XMarkIcon, UserCircleIcon, CheckCircleIcon} from '@heroicons/react/24/outline'
import {saveJustifikasi} from '../api/pegawai'
import swal from 'sweetalert'
import {useRouter} from 'next/navigation'
import {LoadingScreen} from '../components/loadingscreen';

export default function Justifikasi(props : any) {
    const router = useRouter()
    const [open,
        setOpen] = useState(false)
    const [tipeHal,
        setTipeHal] = useState("U")
    const [loading,
        setLoading] = useState(false)
    const [justifikasiNew,
        setJustifikasiNew] = useState(props.justifikasi)
    const [justifikasiIsi,
        setJustifikasiIsi] = useState("")
    useEffect(() => {
        setJustifikasiIsi(justifikasiNew)
        if(props.justifikasi===null){
            setTipeHal("I")
        }
    }, [])

    function handleSave(nip_baru : string, triwulan : string, tahun : string, kd_satker : string) {
        if (justifikasiNew === "" || justifikasiNew === null) {
            swal("Gagal!", "Justifikasi tidak boleh kosong", "error");
            //setJustifikasiNew(justifikasiIsi)
            return;
        }
        setOpen(!open)
        setLoading(true)
        saveJustifikasi(nip_baru, triwulan, tahun, kd_satker, justifikasiNew).then((result) => {
            //console.log({res: result.data[0].nip_baru_dipilih})
            if (result.code == 'ERR_NETWORK') {
                swal("Network Error", "Silahkan Coba Lagi !", "error");
                setLoading(false)
            } else if (result.result == "true") {
                //console.log(resp)
                swal("Sukses", "Justifikasi telah tersimpan.", "success");
                setJustifikasiIsi(justifikasiNew)
                setTipeHal("U")
                setLoading(false)
            } else {
                swal("Terjadi Kesalahan!", "Silahkan Ulangi...", "error");
                setLoading(false)
            }
        }).catch(err => {
            return err;
        })
    }
    
    let colorLine = (tipeHal=="U")?"border-cyan-700":"border-red-700"
    let colorText = (tipeHal=="U")?"text-cyan-700":"text-red-700"
    return ((!loading)
        ? <div
                className={`relative border ${colorLine} border-dotted rounded-lg mx-2 mb-2 py-2`}>
                <div>
                    <p className={`block text-xs pl-3 font-semibold ${colorText}`}>Justifikasi Pimpinan:</p>
                    <p className="block text-xs px-3">{justifikasiIsi}</p>
                </div>
                <div className="flex justify-end">
                    {(tipeHal === 'I')
                        ? <button
                                type="button"
                                onClick={() => setOpen(true)}
                                className="text-xs px-2 py-1 mr-2 bg-red-700 hover:bg-red-800 rounded-lg text-white">
                                <span>Input Justifikasi</span>
                            </button>
                        : <button
                            type="button"
                            onClick={() => setOpen(true)}
                            className="text-xs  mt-1 px-2 py-1 mr-2 bg-cyan-700 hover:bg-cyan-800 rounded-lg text-white ">
                            <span>Ubah Justifikasi</span>
                        </button>
}
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
                                                className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-6 md:right-6 md:top-6 lg:right-8 lg:top-5"
                                                onClick={() => setOpen(false)}>
                                                <span className="sr-only">Close</span>
                                                <XMarkIcon
                                                    className="h-6 w-6 border border-solid border-cyan-900 rounded-lg"
                                                    aria-hidden="true"/>
                                            </button>
                                            <div className="flex w-full pb-2">
                                                <div className="absolute top-4 mt-0 sm:top-4 md:top-6 lg:top-5">
                                                    <p className='text-black text-lg'>
                                                        <strong>PEMBERIAN JUSTIFIKASI</strong>
                                                    </p>
                                                </div>

                                            </div>
                                            <div className="flex w-full sm:mt-7">
                                                <textarea
                                                    onChange={({target}) => setJustifikasiNew(target.value)}
                                                    rows={6}
                                                    className='w-full text-sm border border-cyan-800 border-dotted rounded-lg'
                                                    placeholder='Silahkan masukkan justifikasi Anda disini....'
                                                    required>{justifikasiIsi}</textarea>
                                            </div>
                                            <div className="flex w-full sm:mt-7 justify-end">
                                                <button
                                                    type="submit"
                                                    onClick={() => handleSave(props.nip_baru, props.triwulan, props.tahun, props.kd_satker)}
                                                    className='border bg-cyan-600 border-cyan-700 hover:bg-cyan-700 text-white mr-2 rounded-lg text-sm px-3 py-2'>SIMPAN</button>
                                                <button
                                                    type="button"
                                                    onClick={() => setOpen(false)}
                                                    className='border border-gray-500 hover:bg-gray-200 rounded-lg text-sm px-3 py-2'>BATAL</button>
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