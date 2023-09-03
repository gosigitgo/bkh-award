    "use client"

import {NextRequest, NextResponse} from 'next/server' 
import secureLocalStorage from "react-secure-storage";
import { useSearchParams, useRouter } from 'next/navigation'
import {useEffect, useState} from "react";
import { LoadingScreen } from '@/app/components/loadingscreen';

export default function Callback() {
    // const nip = usePegawaiStore(state => state.nip) const updateNip =
    // usePegawaiStore(state => state.updateNip) console.log({nipawal:nip})
    const router = useRouter()
    const searchParams = useSearchParams()
    const [nip, setNip] = useState(searchParams.get("nip")) 
    useEffect(() => {
        secureLocalStorage.setItem('local_nip', String(nip));
        router.push("/")
    }, [nip, router]);
    return <LoadingScreen />   
}
