'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '@/components/Logo'
import Button from '@/components/Button'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navigation = () => {
  const pathname = usePathname()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [closeTimeout, setCloseTimeout] = useState(null)

  const navigation = [
    {
      name: 'Accelerator ',
      href: '/accelerator ',
      current: pathname === '/accelerator ',
    },
    {
      name: 'Masterclass',
      href: '/blockchain-masterclass ',
      current: pathname === '/blockchain-masterclass ',
    },
  ]

  const [clientWindowHeight, setClientWindowHeight] = useState('')

  useEffect(() => {
    setClientWindowHeight(window.scrollY)
    const options = { passive: true }
    const scroll = (event) => {
      setClientWindowHeight(window.scrollY)
    }
    document.addEventListener('scroll', scroll, options)
    return () => document.removeEventListener('scroll', scroll, options)
  }, [])

  const handleMouseEnter = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout)
      setCloseTimeout(null)
    }
    setDropdownOpen(true)
  }

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setDropdownOpen(false)
    }, 200) // Adjust the delay as needed
    setCloseTimeout(timeout)
  }

  return (
    <nav
      className={`fixed top-0 z-30 w-full transition-all duration-500 ease-in-out ${
        clientWindowHeight > 150 ||
        pathname === '/privacy-policy' ||
        pathname === '/terms-and-conditions'
          ? 'bg-cf-blue-600'
          : 'bg-cf-blue-600 lg:bg-cf-offwhite/10'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 justify-between">
          <div className="flex">
            <div className="-ml-2 mr-2 flex items-center lg:hidden">
              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white hover:text-cf-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
            <div className="flex flex-shrink-0 items-center">
              <Link href="/">
                <Logo className="w-48 lg:mr-1" />
              </Link>
            </div>
            <div className="hidden lg:ml-12 lg:flex lg:items-center lg:space-x-9">
              <div
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button className="px-2 py-2 text-2xl text-white hover:underline hover:underline-offset-8">
                  Courses
                </button>
                {dropdownOpen && (
                  <div className="absolute left-0 mt-2 w-56 origin-top-left rounded-xl rounded-tl-none bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <Link
                        href="/cbca"
                        className="block rounded-xl px-4 py-4 text-lg hover:bg-gray-100"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Cardano Blockchain Certified Associate (CBCA)
                      </Link>
                      <div className="px-3">
                        <div className="border-t border-gray-200"></div>
                      </div>
                      <Link
                        href="/blockchain-fundamentals"
                        className="block rounded-xl px-4 py-4 text-lg hover:bg-gray-100"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Blockchain Fundamentals
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'font-bold underline-offset-8'
                      : 'hover:underline hover:underline-offset-8',
                    'px-2 py-2 text-2xl text-white',
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden items-center sm:flex">
            <div className="flex-shrink-0">
              <Link href="https://learn.academy.cardanofoundation.org/register">
                <Button className="bg-white text-cf-blue-600">
                  Start Learning
                </Button>
              </Link>
              <Link href="/partner">
                <Button className="mx-4 border-1 border-white bg-transparent text-white">
                  Partner with Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <Link
              href="/cbca"
              className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-white hover:text-cf-blue-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Cardano Blockchain Certified Associate (CBCA)
            </Link>
            <Link
              href="/blockchain-fundamentals"
              className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-white hover:text-cf-blue-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blockchain Fundamentals
            </Link>
            <Link
              href="/accelerator"
              className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-white hover:text-cf-blue-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Accelerator
            </Link>
            <Link
              href="/blockchain-masterclass"
              className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-white hover:text-cf-blue-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Masterclass
            </Link>
            <Link
              href="/partner"
              className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-white hover:text-cf-blue-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Partner with Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
