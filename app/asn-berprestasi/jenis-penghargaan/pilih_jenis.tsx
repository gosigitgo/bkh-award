'use client'

import {RadioGroup} from '@headlessui/react'
import Image from "next/image";
import {useState} from 'react';

const jenis = [
    {
        id:1,
        name: 'Inspiring Leader',
        desc: 'JPT Pratama/Pimpinan Satker/Setara',
        link: '/asn-berprestasi/pilih-inspiring-leader',
        bgimg: "url('https://ropeg.kemkes.go.id/slide/penghargaan/yuk.png')"

    }, {
        id:2,
        name: 'The Future Leader',
        desc: 'Pimpinan/Setara dibawah pimpinan satker',
        link: '/asn-berprestasi/pilih-future-leader',
        bgimg: "url('https://ropeg.kemkes.go.id/slide/penghargaan/yuk.png')"
    }, {
        id:3,
        name: 'Best Innovator',
        desc: 'Seluruh pegawai',
        link: '/asn-berprestasi/pilih-best-innovator',
        bgimg: "url('https://ropeg.kemkes.go.id/slide/penghargaan/yuk.png')"
    }
]

function CheckIcon(props : any) {
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2"/>
            <path
                d="M7 13l3 3 7-7"
                stroke="#fff"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"/>
        </svg>
    )
}

export default function PilihJenis(props : any) {

    const [selected, setSelected] = useState()
    //console.log({pil:selected})
    function pilih(sel:any){
        setSelected(sel)
        props.chgPilih(sel.link)
    }
    return (
        <div className='py-5'>
            <div className='w-full my-2'>Silahkan pilih kategori ASN Berprestasi dibawah.</div>
        <RadioGroup value={selected} onChange={pilih}>
          <RadioGroup.Label className="sr-only">Kategori</RadioGroup.Label>
          <div className="grid md:grid-cols-3 gap-3">
            {jenis.map((plan) => (
              <RadioGroup.Option
                key={plan.name}
                value={plan}
                className={({ active, checked }) =>
                  `${
                    active
                      ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-lime-700'
                      : ''
                  }
                  ${
                    checked ? 'bg-lime-500  text-white' : 'bg-white'
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none bg-[${plan.bgimg}] bg-contain bg-right-bottom bg-no-repeat`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? 'text-white' : 'text-gray-900'
                            }`}
                          >
                            <strong>{plan.name}</strong>
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${
                              checked ? 'text-sky-100' : 'text-gray-500'
                            }`}
                          >
                            <span>
                              {plan.desc}
                            </span>{` `}
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="shrink-0 text-white">
                          <CheckIcon className="h-6 w-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
        </div>
    )
}