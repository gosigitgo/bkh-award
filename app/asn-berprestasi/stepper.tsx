export default function Stepper() {
    return (
        <ol
            className="flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4">
            <li className="flex items-center text-lime-600 dark:text-lime-500">
                <span
                    className="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-lime-600 rounded-full shrink-0 dark:border-lime-500">
                    1
                </span>
                Jenis <span className="hidden sm:inline-flex sm:ml-2">Penghargaan</span>
                <svg
                    className="w-3 h-3 ml-2 sm:ml-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 12 10">
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m7 9 4-4-4-4M1 9l4-4-4-4"/>
                </svg>
            </li>
            <li className="flex items-center">
                <span
                    className="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                    2
                </span>
                Pilih <span className="hidden sm:inline-flex sm:ml-2">Pegawai</span>
                <svg
                    className="w-3 h-3 ml-2 sm:ml-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 12 10">
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m7 9 4-4-4-4M1 9l4-4-4-4"/>
                </svg>
            </li>
            <li className="flex items-center">
                <span
                    className="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                    3
                </span>
                Kelengkapan <span className="hidden sm:inline-flex sm:ml-2">Informasi</span>
                <svg
                    className="w-3 h-3 ml-2 sm:ml-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 12 10">
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m7 9 4-4-4-4M1 9l4-4-4-4"/>
                </svg>
            </li>
            <li className="flex items-center">
                <span
                    className="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                    4
                </span>
                Selesai
            </li>
        </ol>
    )

}