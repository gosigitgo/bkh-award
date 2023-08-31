'use client'

import {Fragment, useRef, useState} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {InformationCircleIcon} from '@heroicons/react/24/outline'

export default function ModalDownload() {
    const [open,
        setOpen] = useState(false)

    const cancelButtonRef = useRef(null)
    function handleClose() {
        setOpen(!open)
    }
    return (
        <div>
            <div
                className="py-1 px-2 bg-orange-500 rounded-md text-center font-bold text-white text-sm cursor-pointer hover:bg-orange-600"
                onClick={handleClose}>DOWNLOAD</div>

            <Transition.Root show={open} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-10"
                    initialFocus={cancelButtonRef}
                    onClose={handleClose}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div
                            className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                                <Dialog.Panel
                                    className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        <div className="sm:flex sm:items-start">
                                           
                                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                <Dialog.Title
                                                    as="h3"
                                                    className="text-base font-semibold leading-6 text-gray-900">
                                                    Format Persyaratan
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                    <p className="text-sm text-gray-500">
                                                        Silahkan download beberapa format persyaratan pendaftaran ASN Berprestasi sebagai berikut:
                                                    </p>
                                                    <p className="text-sm text-gray-500">
                                                        <table className="table-auto border-collapse border border-grey-400">
                                                            <tbody>
                                                                <tr>
                                                                    <td className="border px-4 py-2 text-center align-top">1.</td>
                                                                    <td className="border px-4 py-2 text-left align-top">Formulir Rekomendasi Pimpinan/Atasan Langsung/Kepala Satuan Kerja</td>
                                                                    <td className="border px-4 py-2 text-center align-top"><a href="formulir/Formulir_Rekomendasi_Pimpinan_tpl.docx" target="_blank" className="text-xs rounded-md text-white my-2 px-1.5 py-1.5 border-dotted bg-orange-500 hover:bg-orange-700">Download</a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="border px-4 py-2 text-center align-top">2.</td>
                                                                    <td className="border px-4 py-2 text-left align-top">Surat Pernyataan Tidak Pernah Dikenakan Hukuman Disiplin</td>
                                                                    <td className="border px-4 py-2 text-center align-top"><a href="formulir/Super_Tidak_Pernah_Terkena_Hukdis_tpl.docx" target="_blank" className="text-xs rounded-md text-white my-2 px-1.5 py-1.5 border-dotted bg-orange-500 hover:bg-orange-700">Download</a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="border px-4 py-2 text-center align-top">3.</td>
                                                                    <td className="border px-4 py-2 text-left align-top">Formulir Ringkasan Prestasi </td>
                                                                    <td className="border px-4 py-2 text-center align-top"><a href="formulir/Formulir_Ringkasan_Prestasi_tpl.docx" target="_blank" className="text-xs rounded-md text-white my-2 px-1.5 py-1.5 border-dotted bg-orange-500 hover:bg-orange-700">Download</a></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button
                                            type="button"
                                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                            onClick={() => setOpen(false)}
                                            ref={cancelButtonRef}>
                                            Tutup
                                        </button>
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
