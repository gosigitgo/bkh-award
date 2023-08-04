import KandidatFinal from './kandidat_final'
import KandidatTemp from './kandidat_temp'
import ModalQuota from './modal_quota'
import Badge from './badge'
import HeadTitle from './head_title'
//import ProsesPilih from './modal_pilih_hotm'

export const metadata = {
    title: '.: Pemilihan Unit Kerja | Penghargaan Bhakti Karya Husada :.',
    description: 'Aplikasi Penghargaan Bhakti Karya Husada',
    developer: 'sgt.wibowo@gmail.com',
    icons: '/images/favicon.png'
}

export default function Page() {
    const tempSchedule = false;
    return (
        <div>
            <Badge/>
            <HeadTitle temp={tempSchedule}/> 
            {(!tempSchedule)
                ? <KandidatFinal/>
                : <KandidatTemp/>
            }

        </div>
    )
}
