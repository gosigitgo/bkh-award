'use client'

import PegawaiVote from './pegawai_vote'
import {searchPegawai, pegawaiDipilih} from '../api/pegawai'
import {SkeletonPeg} from '../components/skeletonpeg'
import {useState, useEffect} from "react";
import {LoadingScreen} from '../components/loadingscreen'
import swal from 'sweetalert'
import PanduanVote from './panduanvote'
import Pilihan from './pilihan'
import {DataPeg} from '../global'



const InputSearch = () => {
    const [searchQuery,
        setSearchQuery] = useState("");
    const [submit,
        setSubmit] = useState(false)
    const [loading,
        setLoading] = useState(false)
    const [loadingScreen,
        setLoadingScreen] = useState(true)
    const [dataPegawai,
        setDataPegawai] = useState([])
    const [dataPilih,
        setDataPilih] = useState([])
    useEffect(() => {       
        pegawaiDipilih(String(localStorage.getItem('nip')), String(localStorage.getItem('triwulan')), String(localStorage.getItem('tahun'))).then((result) => {
            //console.log({res: result.data[0].nip_baru_dipilih})
            if(result.code=='ERR_NETWORK'){
                swal("Network Error", "Silahkan Coba Lagi !", "error");
            }
            else if (result.result == "true") {
                setDataPilih(result.data);
                console.log({dipilihA:result.data})
                setLoadingScreen(false)
            }else {
                setDataPilih([]);
                setLoadingScreen(false)
            }
        }).catch(err => {
            return err;
        })
    }, [])
    // const pegawaiTerpilih = await pegawaiDipilih("198809132010122003", "3",
    // "2023") console.log({terpilih:pegawaiTerpilih})
    // if(pegawaiTerpilih.data?.length != null){
    // setDataPilih(pegawaiTerpilih.data.nip_baru_dipilih) } const
    // [dataPilih,setDataPilih] = useState([{nip:'18726982691992692'}])
    function changeDataPilih(newValue : any) {
        setDataPilih(newValue.data)
        console.log({dipilihB:newValue})
    }
    function deleteDataPilih(){
        setDataPilih([])
        console.log({dihapusnih:dataPilih})
        setLoadingScreen(true)
        setTimeout(async() => {
            setSearchQuery("") 
            setSubmit(false)
            setLoadingScreen(false)
        }, 1000);
    }

    //console.log({dataPilih: dataPilih})
    const DataPegawaiList = (props : any) => {
        return dataPegawai
            ?.map((item : DataPeg, i) => (<PegawaiVote
                key={i}
                nama={item.nama}
                uker={item.nama_jabatan}
                nip={item.nip_baru}
                no={i}
                gambar={`${item.direktorifoto}${item.foto}`}
                onInfoChange={props.onInfoChange}
                info={props.info}/>))
    }
    const handleSubmit = async(e : any) => {
        e.preventDefault()
        //console.log(searchQuery)
        setSubmit(true)
        setLoading(true)
        setTimeout(async() => {
            await searchPegawai(String(localStorage.getItem('kdsatker')), searchQuery).then((result) => {
                console.log({res: result})
                if(result.code=='ERR_NETWORK'){
                    swal("Koneksi Jaringan Error", "Silahkan coba beberapa saat lagi!", "error");
                    setLoading(false)
                    setSearchQuery("")
                }else if (result.result == "true") {
                    setDataPegawai(result.data)
                    console.log(dataPegawai.length)
                    setLoading(false)
                }else if (result.result == "false") {
                    setDataPegawai([])
                    console.log('kosong')
                    setLoading(false)
                }else {
                    setLoading(false)
                    console.log('error')
                }
            })
            
        }, 1000);
    };

    function handleEmpty() {
        swal("Coming Soon", "Data Tidak Ditemukan", "danger");
    }
    
    //console.log({dataPegawais: dataPegawai})
    let skeletonPegs = Array(4).fill(0);

    if (loadingScreen) 
        return <LoadingScreen/> 
    return (
        (loadingScreen) 
        ? <LoadingScreen/>
        :(dataPilih?.length == 0 ? (
            <div> 
                <div className="flex flex-col w-full items-center justify-center">
                    <div className='text-lg py-4 font-bold'>Cari Pegawai Paling BerAkhlak Pilihanmu!</div>
                    <div className='w-full md:w-5/6 sm:w-5/6'>
                        <form onSubmit={handleSubmit}>
                            <label
                                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Cari</label>
                            <div className="relative">
                                <div
                                    className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg
                                        aria-hidden="true"
                                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                </div>
                                <input
                                    value={searchQuery}
                                    onChange={({target}) => setSearchQuery(target.value)}
                                    type="text"
                                    id="default-search"
                                    className="focus:outline-none block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-cyan-800 focus:border-cyan-800 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-800 dark:focus:border-cyan-800"
                                    placeholder="Cari berdasarkan Nama atau NIP"
                                    required/>
                                <button
                                    type="submit"
                                    className="text-white absolute right-2.5 bottom-2.5 bg-cyan-900 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">Cari</button>
                            </div>
                        </form>
                    </div>
                </div>
                {(submit == true)
                    ? (
                        <div className="w-full">
                            {loading
                                ? (
                                    <div
                                        className="grid justify-center grid-cols-1 md:grid-cols-4 gap-4 py-5 -z-100 mt-4">
                                        {(skeletonPegs.map((index : number) => <SkeletonPeg key={index}/>))}
                                    </div>
                                )
                                : (dataPegawai
                                    ?.length === 0)
                                    ? (
                                        <div className="mt-5 text-center text-sm text-orange-700">Data Tidak Ditemukan</div>
                                    )
                                    : (
                                        <div
                                            className="grid justify-center grid-cols-1 md:grid-cols-4 gap-4 py-5 -z-100 mt-4">
                                            <DataPegawaiList onInfoChange={changeDataPilih}/>
                                        </div>
                                    )
}
                        </div>
                    )
                    : <PanduanVote/>
}
            </div>
        )
        : <Pilihan dataPilih={dataPilih} onDelete={deleteDataPilih} />)
    )
}

export default InputSearch;
