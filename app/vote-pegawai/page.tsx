import BadgeComingsoon from './badge_comingsoon'
import InputSearch from './input_search' 

export const metadata = {
    title: '.: Hero of The Month | Penghargaan Bhakti Karya Husada :.',
    description: 'Aplikasi Penghargaan Bhakti Karya Husada',
    developer: 'sgt.wibowo@gmail.com',
    icons: '/images/favicon.png'
}

export default function Page() {
    return (
        <div>
            <BadgeComingsoon/> 
        </div>
    )
} 
