const appName = 'BKH Award'
const APIUrl = 'https://api-ropeg.kemkes.go.id/bkhaward'
const navigations = [
    // {
    //     key: 1,
    //     name: 'Pemilihan Unit Kerja',
    //     title: 'Pemilihan di Tingkat Unit Kerja',
    //     href: '/unit-kerja',
    //     targetSegment: 'unit-kerja'
    // }, 
    {
        key: 1,
        name: 'Vote Pegawai',
        title: 'BKH Award > Hero of The Month',
        href: '/vote-pegawai',
        targetSegment: 'vote-pegawai'
    }
]

const checkList = [
    {val: 'v1', label: "Suka Menolong (helpful)"},
    {val: 'v2', label: "Bersemangat dan cekatan"},
    {val: 'v3', label: "Datang tepat waktu"},
    {val: 'v4', label: "Tidak melakukan perbuatan tercela"},
    {val: 'v5', label: "Mampu melaksanakan tugas sesuai arahan pimpinan"},
    {val: 'v6', label: "Suka berbagi pengetahuan (sharing knowledge)"},
    {val: 'v7', label: "Tidak memberikan pengaruh buruk"},
    {val: 'v8', label: "Tidak mengeluh terhadap beban tugas"},
    {val: 'v9', label: "Mampu bekerja sama dalam tim"},
    {val: 'v10', label: "Ramah"}
]

export { appName, navigations, APIUrl, checkList }