"use client"

import { useRouter } from "next/navigation";
import { useState } from 'react'
import swal from 'sweetalert'

const SignIn = () => {
    const router = useRouter()
    const [nip, setNip] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e : any) => {
        e.preventDefault(); 
        if(password === '12345') {
            localStorage.setItem('nip', nip)
            localStorage.setItem('triwulan', "3")
            localStorage.setItem('tahun', "2023")
            localStorage.setItem('kdsatker', "720104000000")
            router.push("/vote-pegawai")
        }else {
            swal('Login Gagal!', 'Username atau password Anda salah', 'error')
        }
    };
    return (
        <form onSubmit={handleSubmit}  className="flex flex-col w-full pt-10">
            <div className="flex flex-col items-center">
                <div className="text-2xl font-bold mb-3">Temporary Login Page</div>
                <div>NIP</div>
                <div><input className="border border-gray-500 p-1 rounded-md" type="text" onChange={({target}) => setNip(target.value)} required /></div>
                <div>Password</div>
                <div><input className="border border-gray-500 p-1 rounded-md" type="password"  onChange={({target}) => setPassword(target.value)} required /></div>
                <div><button type="submit"  className="mt-3 px-2 py-1 bg-cyan-600 text-white rounded-md w-36">LOGIN</button></div>
            </div>
        </form>
    )
}

export default SignIn