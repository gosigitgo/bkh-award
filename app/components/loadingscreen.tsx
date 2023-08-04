import Image from "next/image"
export const LoadingScreen = () => {
    return (
        <div>
            <div className="fixed top-0 left-0 w-full h-full bg-white z-40 opacity-100">
                <div className="flex justify-center items-center space-x-1 text-md font-semibold h-screen text-lg text-cyan-700">
                    {/* <svg
                        fill='none'
                        className="w-8 h-8 animate-spin"
                        viewBox="0 0 32 32"
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                            clip-rule='evenodd'
                            d='M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z'
                            fill='currentColor'
                            fill-rule='evenodd'/>
                    </svg> */}
                    <Image src='/images/loading.gif' alt="Loading" height={60} width={60} unoptimized={true} className="bg-white" />
                    Memproses...
                </div>
            </div>
        </div>
    )
}