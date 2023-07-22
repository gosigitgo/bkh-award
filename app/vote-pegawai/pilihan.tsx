'use client'
import {detailPegawai, hapusPilihan} from '../api/pegawai'
import {useEffect, useState} from 'react'
import {checkList} from '../global'
import swal from 'sweetalert' 

type Pegawai = {
    nama: string,
    nip_baru: string,
    nama_jabatan: string,
    kepangkatan: string,
    foto: string,
    direktorifoto: string
}

export default function Pilihan(props : any) { 
    console.log({props: props})
    const pilih = [
        {
            key: 'v1',
            data: props.dataPilih[0].v1
        }, {
            key: 'v2',
            data: props.dataPilih[0].v2
        }, {
            key: 'v3',
            data: props.dataPilih[0].v3
        }, {
            key: 'v4',
            data: props.dataPilih[0].v4
        }, {
            key: 'v5',
            data: props.dataPilih[0].v5
        }, {
            key: 'v6',
            data: props.dataPilih[0].v6
        }, {
            key: 'v7',
            data: props.dataPilih[0].v7
        }, {
            key: 'v8',
            data: props.dataPilih[0].v8
        }, {
            key: 'v9',
            data: props.dataPilih[0].v9
        }, {
            key: 'v10',
            data: props.dataPilih[0].v10
        }
    ];
    function searchPilih(q : string) {
        let result = false
        pilih.filter(pil => {
            if (pil.key == q && pil.data == '1') { 
                result = true
                return;
            }
        })
        return result;   
    }

    function handleDelete(id: string) { 
        swal({
            title: "Anda yakin menghapus Data?",
            text: "Setelah dihapus, Anda harus memilih ulang pegawai.",
            icon: "warning",
            buttons: [
              'Tidak',
              'Ya'
            ],
            dangerMode: true,
          }).then(function(isConfirm) {
            if (isConfirm) {
              swal({
                title: 'Sukses Hapus!',
                text: 'Pilihan Anda berhasil dihapus. Silahkan memilih kembali.',
                icon: 'success'
              }).then(function() {
                hapusPilihan(id).then((result) => {
                    console.log({hapusRes:result}) 
                    props.onDelete(); 
                }).catch((e) => {
                    console.log(e)
                });
              });
            } 
          })
    }
    
    const [detPegawai,
        setDetailPegawai] = useState([]);
    useEffect(() => {
        detailPegawai(props.dataPilih[0].nip_baru_dipilih).then((result) => {
            setDetailPegawai(result.data)
        }).catch((e) => {
            console.log(e)
        });
    }, [props.dataPilih])

    return (
        <div className="flex place-items-center justify-center">
            <div
                className="place-items-center rounded-lg mt-10 p-2 border-dotted border border-cyan-600 w-full md:w-5/6 sm:w-5/6">
                <div className='place-items-center text-lg text-cyan-800 font-bold text-center'>ANDA TELAH MEMILIH HERO OF THE MONTH PERIODE III (JULI - SEPTEMBER) TAHUN 2023</div>
                <div className="place-items-center">
                    <div className='flex gap-2'>
                        <div className='flex-none w-3/12'>{detPegawai
                                ?.map((peg : Pegawai, i) => (
                                    <div key={i} className="flex flex-col">
                                        <div className="flex w-full items-center justify-center mb-2">
                                            <div
                                                className="-z-10 relative mt-3 w-32 h-32 border border-solid border-x-grey-400 rounded-2xl border-1 shadow">
                                                {/* <Image
                        src={params.gambar}
                        width={170}
                        height={170}
                        alt="No Photo"
                        className="object-cover w-32 h-32 rounded-2xl"/> */}
                                                <img
                                                    src={`${peg.direktorifoto}${peg.foto}`}
                                                    width='120'
                                                    height='140'
                                                    alt='no-image'
                                                    className="object-cover w-32 h-32 rounded-2xl"/>
                                            </div>
                                        </div>
                                        <div className="font-bold text-center text-sm xs:text-xs">{peg.nama}</div>
                                        <div className="text-center text-xs xs:text-xs">{peg.nip_baru}</div>
                                        <div className="text-center text-xs truncate xs:text-sm h-4 px-2">{peg.kepangkatan}</div>
                                        <div className="text-center text-xs truncate xs:text-sm h-4 px-2">{peg.nama_jabatan}</div>

                                    </div>
                                ))}</div>
                        <div className='grow w-9/12 items-center justify-center'>
                            <div className='font-bold text-sm pb-2 pt-3'>Penilaian Anda:</div>
                            <div className='grid justify-center grid-cols-2 gap-1'>{checkList.map((item, index) => (
                                    <div className="flex" key={index}>
                                        <div className="flex-none w-6 h-6">
                                            {searchPilih(item.val)
                                                ? <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                                : <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                                    <g id="SVGRepo_iconCarrier">
                                                        <path d="M5 8h6v1H5z"></path>
                                                    </g>
                                                </svg>
}
                                        </div>
                                        <div className="grow text-sm">
                                            {item.label}
                                        </div>
                                    </div>
                                ))}</div>
                                <div className='flex justify-end pb-2 pt-2 w-full pr-10'>
                                    <div className='w-16 text-white font-bold text-sm text-center py-1 px-2 bg-red-500 hover:bg-red-700 rounded-md cursor-pointer place-items-end' onClick={() => handleDelete(props.dataPilih[0].id_hotm_pilih)}>Hapus</div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}