'use client'

import './globals.css'
import NextTopLoader from 'nextjs-toploader'
import {Roboto} from 'next/font/google'
import Header from './components/header'
import {useSelectedLayoutSegment} from 'next/navigation'
import Footer from './components/footer'
import { navigations } from './global'


const roboto = Roboto({weight: '400', subsets: ['latin'], display: 'swap'})

export default function RootLayout({children} : {
    children: React.ReactNode;
}) {
    const activeSegment = useSelectedLayoutSegment()
    // console.log(activeSegment)
    const selTitle = navigations.filter(title => title.targetSegment === activeSegment)
    const pageTitle = (selTitle?.length > 0)?selTitle[0].title:'Penghargaan Bhakti Karya Husada'
    return (
        (activeSegment=='login')
        ? (<html
            className="h-96 scrollbar scrollbar-w-1 scrollbar-thumb-teal-500 scrollbar-track-lime-100 scrollbar-corner-lime-400"
            lang="id">
            <body className={roboto.className}>
                <NextTopLoader color="#0E7490"/> 
                <main> 
                        {children}
                     
                </main> 

            </body>
            </html>)
        : (<html
            className="h-96 scrollbar scrollbar-w-1 scrollbar-thumb-teal-500 scrollbar-track-lime-100 scrollbar-corner-lime-400"
            lang="id">
            <body className={roboto.className}>
                <NextTopLoader color="#0E7490"/>
                <Header/>
                <header className="bg-slate-100 shadow">
                    <div className="mx-auto max-w-7xl px-3 py-3 sm:px-6 lg:px-8">
                        <h1 className="text-2xl font-bold tracking-tight text-teal-800">{pageTitle}</h1>
                    </div>
                </header>
                <main>
                    <div className="mx-auto pb-10 max-w-7xl px-3 py-3 sm:px-6 lg:px-8">
                        {children}
                    </div>
                </main>
                <Footer />

            </body>
        </html>)
    )
}
