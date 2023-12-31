"use client"

import Link from 'next/link'
import { Fragment, useEffect, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useSelectedLayoutSegment } from 'next/navigation'
import Image from 'next/image'
import { navigations } from '../global'
import { useRouter } from 'next/navigation'
import { NextResponse } from 'next/server'   




function classNames(...classes: any[]) {
  const ret = classes.filter(Boolean).join(' ')
  return ret
}


// export const getServerSideProps = withSessionSsr(
//   async function getServerSideProps(req:any ) {
//     const user = req.session?.user;

//     if (user?.login_status !== true) {
//       return {
//         notFound: true,
//       };
//     }

//     return {
//       props: {
//         user: req.session?.user,
//       },
//     };
//   },
// );

export default async function Header() {
  //const res = NextResponse.next
  //setCookie('nip','19191919191')
  //const myStoreState = useStore(myStore) 
  const [nip, setNip] = useState('')
  //const nipstore = usePegawaiStore(state => state.nip) 
  const router = useRouter()
  const activeSegment = useSelectedLayoutSegment()
 

  function handleLogout(){
    //cookies.delete('nip')
    NextResponse.redirect('https://portal-eoffice.kemkes.go.id/dashboard')
  }

  //console.log({nipnya:nip})
  return (
    <div className="min-h-full sticky top-0 right-0 left-0 z-10">
    <Disclosure as="nav" className="top-0 bg-[#07A9A2]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white hover:text-[#07A9A2] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#07A9A2]">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link href="/"><Image
                    className="block h-9 w-auto lg:hidden"
                    width={170}
                    height={170}
                    src="/images/kemkes3.png"
                    alt="Kemenkes RI"
                  /></Link>
                  <Link href="/"><Image
                    className="hidden h-9 w-auto lg:block"
                    width={170}
                    height={170}
                    src="/images/kemkes3.png"
                    alt="Kemenkes"
                  /></Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-2">
                    {navigations.map((item) => (
                      <Link key={item.key} href={item.href} className={classNames(
                        (activeSegment==item.targetSegment) ? 'bg-[#018294] text-white' : 'text-gray-300 hover:bg-[#018294] hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium'
                      )}
                      >{item.name}</Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <Image
                        className="h-8 w-8 rounded-full ring-1 ring-white"
                        width={170}
                        height={170}
                        src="/images/user.png"
                        alt="User"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            <span className="font-bold block">XXXX</span>
                            <span className="block text-lime-900">Biro Organisasi dan SDM</span>
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            onClick={handleLogout}
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Keluar
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigations.map((item) => (
                <Disclosure.Button
                  key={item.key}
                  as='a'
                  href={item.href}
                  className={classNames(
                    (activeSegment==item.targetSegment) ? 'bg-[#018294] text-white' : 'text-gray-300 hover:bg-[#018294] hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={(activeSegment==item.targetSegment) ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    </div>
  )
}
