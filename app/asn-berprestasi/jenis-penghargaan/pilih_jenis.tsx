'use client'

import {RadioGroup} from '@headlessui/react'
import Image from "next/image";
import {useState} from 'react';

const jenis = [
    {
        name: 'Inspiring Leader',
        desc: 'JPT Pratama/Pimpinan Satker/Setara',
        disk: '160 GB SSD disk'
    }, {
        name: 'Future Leader',
        desc: 'Pimpinan/setara pimpinan dibawah pimpinan satker',
        disk: '512 GB SSD disk'
    }, {
        name: 'Best Innovator',
        desc: 'Seluruh pegawai',
        disk: '1024 GB SSD disk'
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

    const [selected, setSelected] = useState(jenis[0])

    function pilih(sel:any){
        setSelected(sel)
        props.chgPilih(sel)
    }
    return (
        <div className='py-5'>
            <div className='w-full my-2'>Silahkan pilih kategori ASN Berprestasi dibawah.</div>
        <RadioGroup value={selected} onChange={pilih}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
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
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none bg-[url('/images/yuk.png')] bg-contain bg-right-bottom bg-no-repeat`
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