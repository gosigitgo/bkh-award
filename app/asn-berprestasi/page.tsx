import Badge from "./badge"; 
import Daftar from "./button_daftar";

// export const metadata = {
//     title: '.: ASN Berprestasi | Penghargaan Bhakti Karya Husada :.',
//     description: 'Aplikasi Penghargaan Bhakti Karya Husada',
//     developer: 'sgt.wibowo@gmail.com',
//     icons: '/images/favicon.png'
// }

export default function Page() {
    return (
        <div>
            <Badge /> 
            <Daftar/>
        </div>
    )
}