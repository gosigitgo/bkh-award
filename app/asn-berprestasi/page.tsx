import Badge from "./badge";
import Stepper from "./stepper";
import PilihJenis from "./pilih_jenis";

export const metadata = {
    title: '.: ASN Berprestasi | Penghargaan Bhakti Karya Husada :.',
    description: 'Aplikasi Penghargaan Bhakti Karya Husada',
    developer: 'sgt.wibowo@gmail.com',
    icons: '/images/favicon.png'
}

export default function Page() {
    return (
        <div>
            <Badge />
            <Stepper />
            <PilihJenis />
        </div>
    )
}
