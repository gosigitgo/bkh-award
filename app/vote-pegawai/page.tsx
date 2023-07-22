import BadgePegawai from './badge_pegawai'
import InputSearch from './input_search' 

export const metadata = {
    title: '.: Vote Pegawai | Penghargaan Bhakti Karya Husada :.',
    description: 'Aplikasi Penghargaan Bhakti Karya Husada',
    developer: 'sgt.wibowo@gmail.com',
    icons: '/images/favicon.png'
}

export default function Page() {
    return (
        <div>
            <BadgePegawai/> 
            <div className="border-dotted rounded-lg items-center">
                <InputSearch/>
            </div>
        </div>
    )
} 
