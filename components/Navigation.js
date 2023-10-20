'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '@/components/Logo'
import Button from '@/components/Button'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navigation = () => {
  const pathname = usePathname()

  const navigation = [
    { name: 'Course Overview', href: '#', current: false },
    { name: 'Partners', href: '/partners', current: pathname === '/partners' },
    { name: 'Contact Us', href: '/contact', current: pathname === '/contact' },
  ]
  const userNavigation = [
    { name: 'Log In', href: '#' },
    { name: 'Register', href: '#' },
  ]

  const [clientWindowHeight, setClientWindowHeight] = useState("")

  useEffect(() => {
    setClientWindowHeight(window.scrollY)
    const options = { passive: true }
    const scroll = (event) => {
      setClientWindowHeight(window.scrollY)
    };
    document.addEventListener("scroll", scroll, options)
    return () => document.removeEventListener("scroll", scroll, options)
  }, []);

  return (
    <Disclosure as="nav" className={`fixed top-0 z-10 w-full transition-all ease-in-out duration-500 ${clientWindowHeight > 150 || pathname === '/partners' ? 'bg-cf-blue-600' : 'bg-cf-blue-600 lg:bg-cf-offwhite/10'}`}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-24 justify-between">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center lg:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white hover:text-cf-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-shrink-0 items-center">
                  <Link href="/">
                    <Logo className="w-48 lg:mr-1" />
                  </Link>
                </div>
                <div className="hidden lg:ml-12 lg:flex lg:items-center lg:space-x-9">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'font-bold underline underline-offset-8' : 'hover:underline hover:underline-offset-8',
                        'text-white px-2 py-2 text-2xl'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="hidden sm:flex items-center">
                <div className="flex-shrink-0">
                  <Button className="bg-transparent ring-inset ring-2 ring-white text-white w-28 mr-4">Log In</Button>
                  <Button className="text-cf-blue-900 bg-white w-28">Register</Button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden shadow-2xl">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-white text-cf-blue-600' : 'text-white hover:bg-white hover:text-cf-blue-600',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className="border-t border-cf-blue-50 pb-3 pt-4">
              <div className="space-y-1 px-2 sm:px-3">
                {userNavigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-white hover:text-cf-blue-600"
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navigation
