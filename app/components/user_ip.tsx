import {useEffect, useState} from "react";
import {cookies} from 'next/headers'
export const useUserIp = () => {
    const [ip,setUserIp] = useState("");
    useEffect(() => {
        const cookieStore = cookies()
        const userIp = cookieStore.get('user-ip')
        setUserIp(String(userIp))
    }, []);

    return ip;
};