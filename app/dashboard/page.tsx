import BkhWinner from "./bkh_winner";
import InfoCarousel from "./carousel";
import swal from "sweetalert";
import InspiringWinner from "./inspiring_winner";
import FutureWinner from "./future_winner";
import InnovatorWinner from "./innovator_winner";

export const metadata = {
    title: '.: Dashboard | Penghargaan Bhakti Karya Husada :.',
    description: 'Aplikasi Penghargaan Bhakti Karya Husada',
    developer: 'sgt.wibowo@gmail.com',
    icons: '/images/favicon.png'
    
}

export default function Dashboard() {
    return (
        <div>
            <div className="flex w-full font-bold text-2xl text-rose-700 mt-2 mb-4 sm:text-4xl">Halo #SobatSehat 😊</div>
            <div className="relative scrollbar-none">
                <div
                    className="rounded-3xl relative h-56 overflow-hidden md:h-96 scrollbar-none">
                    <InfoCarousel />
                </div>
            </div>
            <BkhWinner/>
            <InspiringWinner/>
            <FutureWinner/>
            <InnovatorWinner/>
        </div>
    )
}