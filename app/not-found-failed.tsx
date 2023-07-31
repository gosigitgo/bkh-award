'use client'

import { useRouter } from "next/navigation"

export default function Custom404() {
  const router = useRouter()
    return <div className="mt-20 w-full flex flex-col justify-center items-center">
        <h1 className="text-9xl font-extrabold text-cyan-900 tracking-widest">404</h1>
        <div className="bg-[#D2DC02] px-2 text-sm rounded rotate-12 absolute shadow-lg">
            Page Not Found
        </div>
        <button className="mt-5">
            <a
                className="relative inline-block text-sm font-medium text-[#D2DC02] group active:text-orange-500 focus:outline-none focus:ring">
                <span
                    className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#D2DC02] group-hover:translate-y-0 group-hover:translate-x-0"></span>

                <span
                    className="relative block px-5 py-3 bg-[#1A2238] border border-current rounded-lg" onClick={()=>router.push('/')}>
                    Kembali Ke Beranda
                </span>
            </a>
        </button>
    </div>
}