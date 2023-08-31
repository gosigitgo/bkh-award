import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import Panduan from "./panduan";
export default function Badge() {
    return (
        <div
            className="bg-[url('/images/yuk.png')] bg-contain bg-right-bottom bg-no-repeat bg-lime-100 border-l-4 mb-4 rounded-lg border-lime-500 rounded-b text-lime-900 px-4 py-3 shadow-md"
            role="alert">
            <div className="flex">
                <div className="hidden py-1 sm:block">
                    <svg
                        className="fill-current h-6 w-6 text-lime-500 mr-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"><path
                        d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg>
                </div>
                <div>
                    <p className="text-sm text-justify font-semibold">Dalam rangka memberikan penghargaan kepada para pegawai yang telah memberikan kontribusi dan kinerja yang optimal kepada organisasi, Kementerian Kesehatan memberikan penghargaan Bakti Karya Husada – ASN Berprestasi dengan kategori sebagai berikut:
                    </p>
                    <p className="text-sm font-bold pt-5">1. <i>Inspiring Leader</i>&nbsp;&nbsp;<span className="text-xs text-rose-400">(Maks. 1 pegawai)</span></p>
                    <p className="text-sm">Penghargaan ini diberikan kepada <strong>Pejabat Pimpinan Tinggi Pratama/yang disetarakan/Kepala Satuan Kerja</strong> yang mampu menginspirasi, memotivasi ASN melalui karya, kinerja, dan perilaku kepemimpinan.</p>
                    <p className="text-sm font-bold pt-3">2. <i>Future Leader</i>&nbsp;&nbsp;<span className="text-xs text-rose-400">(Maks. 1 pegawai)</span></p>
                    <p className="text-sm">Penghargaan ini diberikan kepada <strong>Pejabat Administrasi atau Pejabat Fungsional yang memiliki tugas tambahan sebagai Ketua Tim Kerja / Ketua Task Force / Koordinator / Subkoordinator</strong> berusia maksimal 45 tahun yang dinilai memiliki perilaku kepemimpinan yang adaptif, berorientasi kinerja dan visioner.</p>
                    <p className="text-sm font-bold pt-3">3. <i>Best Innovator</i>&nbsp;&nbsp;<span className="text-xs text-rose-400">(Maks. 1 pegawai)</span></p>
                    <p className="text-sm">Penghargaan ini diberikan kepada <strong>Pegawai ASN baik individu maupun tim</strong> yang memiliki karya yang baru, orisinal, dan/atau karya hasil pengembangan yang memiliki nilai lebih tinggi dari karya sebelumnya, yang bermanfaat bagi diri sendiri, rekan kerja, unit kerja, instansi, dan masyarakat.</p>
                    <p className="pt-4 text-sm flex"><CalendarDaysIcon width={20} height={20} className="mr-2" /> Batas Pendaftaran adalah tanggal <strong className="text-red-600">&nbsp;22 September 2023</strong></p>
                    <Panduan/>
                </div>
            </div>
        </div>
    )
}
