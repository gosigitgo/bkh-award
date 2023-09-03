import {Fragment, useState} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {XMarkIcon, UserCircleIcon, CheckCircleIcon} from '@heroicons/react/24/outline'
import {StarIcon} from "@heroicons/react/24/solid";
import {detailVote} from "@/app/api/pegawai";
import swal from 'sweetalert'
import {checkList, DataPeg} from '@/app/global'

function classNames(...classes : any[]) {
    return classes
        .filter(Boolean)
        .join(' ')
}


type Params = {
    nourut: number,
    label: string,
    vote: number
}

type iDataPeg = {
    direktorifoto : string, 
    foto: string,
    nama: string,
    nip_baru: string,
    kepangkatan: string,
    nama_golongan: string, 
    nama_jabatan: string,
}

function LabelSifat(props:any) {
    return (
        <div>
            <div className="flex">
                <div className="flex-none w-8 h-7 text-sm">
                    {props.nourut+1}.
                </div>
                <div className="grow h-2 text-sm">
                    {props.label}
                </div>
                <div className="flex-none w-14">
                    <span
                        title={props.label}
                        className="inline-flex items-center px-2 py-1 bg-green-200 hover:bg-green-300 rounded-full text-xs font-semibold text-green-600">
                        <StarIcon className="text-blue h-4 w-4"/>
                        <span className="ml-1 text-blue text-xs">
                            {props.vote}{props.jml_v}
                        </span>
                    </span>

                </div>
            </div>
        </div>

    )
}


export default function DetailPegawaiTemp(props:any) {

    const [open,
        setOpen] = useState(false)
    const [dataPeg,
        setDataPeg] = useState<iDataPeg>()
    const [checkListFill,
        setCheckListFill] = useState<any[]>([])

    function handleClose() {
        setOpen(!open)
        setCheckListFill([])
        if (!open) {
            //console.log('masuk')
            detailVote(props.nip_baru, props.triwulan, props.tahun).then((result) => {
                //console.log({res: result.data[0]}) 
                if (result.code == 'ERR_NETWORK') {
                    swal("Network Error", "Silahkan Coba Lagi !", "error");
                } else if (result.result == "true") {
                    setDataPeg(result.data[0])
                    //setCheckListFill([]) 
                    checkList.map((item, i) => (setCheckListFill(checkListFill => [...checkListFill, { id: i, label: item.label, jmlvote: result.data[0][`jml_${item.val}`]}])));
                    //console.log({detailPeg: result.data})
                    console.log({checkListFill: checkListFill})
                    //setLoadingScreen(false)
                } else {
                    //setDataPeg();
                    //setLoadingScreen(false)
                }
            }).catch((err : any) => {
                return err;
            })
        } else {
            return []
        }
    } 
    checkListFill.sort((a, b) => (Number(a.jmlvote) < Number(b.jmlvote)) ? 1 : -1)
    return (
        <div>
            <div className=''>
                <button
                    type="button"
                    onClick={handleClose}
                    className="inline-flex items-center px-2 py-1 bg-cyan-700 hover:bg-cyan-800 rounded-lg text-xs font-semibold text-white">
                    <CheckCircleIcon className="flex-none h-6 w-6 pr-1 align-middle"/>
                    <span>Detail</span>
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
                                                    <strong>DETAIL PEGAWAI</strong>
                                                </p>
                                            </div>
                                            <div className="flex w-full sm:mt-7">
                                                <div className="mr-3">
                                                    <img
                                                        src={`${dataPeg?.direktorifoto}${dataPeg?.foto}`}
                                                        width='120'
                                                        height='140'
                                                        alt={dataPeg
                                                        ?.nama}
                                                        className="object-cover min-w-24 min-h-24 mt-1 border border-solid border-x-grey-400 rounded-2xl border-1 shadow-lg"/>
                                                </div>
                                                <div className='w-full mt-1'>
                                                    <div className="grid grid-cols-1 gap-y-0">
                                                        <p className="flex w-full text-sm font-bold text-gray-900">{dataPeg
                                                                ?.nama}</p>
                                                        <p className="flex w-full text-sm text-gray-900">{dataPeg
                                                                ?.nip_baru}</p>
                                                        <p className="flex w-full text-sm text-gray-900">{`${dataPeg
                                                                ?.kepangkatan} - ${dataPeg
                                                                    ?.nama_golongan}`}</p>
                                                        <p className="flex w-full text-sm text-gray-900">{dataPeg
                                                                ?.nama_jabatan}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex w-full border-t border-gray-200">
                                            <p className='font-bold my-1 text-cyan-900'>Sifat Ber<strong>AKHLAK</strong>{` Pegawai`}
                                            </p>
                                        </div>
                                        <div className="border-t border-gray-100 pt-3">
                                            {checkListFill.map((item, key) => (<LabelSifat key={key} nourut={key} label={item.label} vote={item.jmlvote} />))}
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