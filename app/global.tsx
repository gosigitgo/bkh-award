const appName = 'BKH Award'
const APIUrl = 'https://api-ropeg.kemkes.go.id/bkhaward'
const navigations = [
    {
        key: 1,
        name: 'Vote Pegawai',
        title: 'BKH Award > Hero of The Month',
        href: '/vote-pegawai',
        targetSegment: 'vote-pegawai'
    }, {
        key: 2,
        name: 'Pemilihan Unit Kerja',
        title: 'Pemilihan di Tingkat Unit Kerja',
        href: '/unit-kerja',
        targetSegment: 'unit-kerja'
    }, {
        key: 3,
        name: 'ASN Berprestasi',
        title: 'BKH Award > ASN Berprestasi',
        href: '/asn-berprestasi',
        targetSegment: 'asn-berprestasi'
    }
]

const checkList = [
    {val: 'v1', label: "Suka Menolong (helpful)", vote:100},
    {val: 'v2', label: "Bersemangat dan cekatan", vote:100},
    {val: 'v3', label: "Datang tepat waktu", vote:100},
    {val: 'v4', label: "Tidak melakukan perbuatan tercela", vote:120},
    {val: 'v5', label: "Mampu melaksanakan tugas sesuai arahan pimpinan", vote:100},
    {val: 'v6', label: "Suka berbagi pengetahuan (sharing knowledge)", vote:100},
    {val: 'v7', label: "Tidak memberikan pengaruh buruk", vote:100},
    {val: 'v8', label: "Tidak mengeluh terhadap beban tugas", vote:100},
    {val: 'v9', label: "Mampu bekerja sama dalam tim", vote:100},
    {val: 'v10', label: "Ramah", vote:100}
]


export type DataPeg = {
    nama: string,
    no: number,
    nip_baru: string,
    uker: string,
    nama_jabatan: string,
    nama_pendidikan: string,
    nama_golongan:string,
    kepangkatan:string,
    foto: string,
    triwulan:string,
    tahun:string,
    kd_satuan_organisasi:string,
    direktorifoto: string,
    jml_v1: number,
    jml_v2: number,
    jml_v3: number,
    jml_v4: number,
    jml_v5: number,
    jml_v6: number,
    jml_v7: number,
    jml_v8: number,
    jml_v9: number,
    jml_v10: number
}

export { appName, navigations, APIUrl, checkList }
