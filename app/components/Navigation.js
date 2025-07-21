'use client'

import Link from 'next/link'
import Image from 'next/image'
import { SearchBar } from './SearchBar'
import { useState } from 'react'
import { useTheme } from './ThemeProvider'
import { NavThemeToggle } from './NavThemeToggle'
import { usePathname } from 'next/navigation'

export const Navigation = ({ packages }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme } = useTheme()
  const pathname = usePathname()

  return (
    <nav className="bg-window-bg/80 sticky top-0 z-50 w-full border-b border-border backdrop-blur-lg">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
        <div className="flex h-16 items-center justify-between">
          {/* Left side - Logo and main nav */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src={theme === 'dark' ? '/logo-light.png' : '/logo-dark.png'}
                alt="Aiken Logo"
                width={130}
                height={130}
                priority
                className="h-8 w-auto"
                quality={100}
              />
            </Link>
            {/* Desktop Navigation */}
            <div className="ml-12 hidden items-center space-x-8 md:flex">
              <Link
                href="/"
                className={`font-medium transition-colors hover:text-link ${
                  pathname === '/'
                    ? 'border-b-2 border-link pb-1 text-link'
                    : 'text-text'
                }`}
              >
                Packages
              </Link>
              <Link
                href="/submit"
                className={`font-medium transition-colors hover:text-link ${
                  pathname === '/submit'
                    ? 'border-b-2 border-link pb-1 text-link'
                    : 'text-text'
                }`}
              >
                Add Package
              </Link>
              <Link
                href="https://aiken-lang.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-text transition-colors hover:text-link"
              >
                Discover Aiken
              </Link>
            </div>
          </div>

          {/* Right side - Search and social links */}
          <div className="flex items-center space-x-6">
            {/* Desktop Search */}
            <div className="hidden md:block">
              <SearchBar packages={packages} />
            </div>
            {/* Desktop Social Links */}
            <div className="hidden items-center space-x-6 md:flex">
              <Link
                href="https://discord.com/invite/ub6atE94v4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text transition-colors hover:text-link"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </Link>
              <Link
                href="https://github.com/aiken-lang/awesome-aiken?tab=readme-ov-file#libraries"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text transition-colors hover:text-link"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </Link>
              <NavThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="hover:bg-window-bg/50 relative inline-flex items-center justify-center rounded-md p-2 text-text transition-colors hover:text-link md:hidden"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="animate-in slide-in-from-top-2 bg-window-bg/90 border-t border-border backdrop-blur-lg duration-200 md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {/* Mobile Search */}
              <div className="px-2 py-2">
                <SearchBar packages={packages} />
              </div>
              {/* Mobile Navigation Links */}
              <Link
                href="/"
                className={`hover:bg-window-bg/80 block rounded-md px-3 py-2 text-base font-medium hover:text-link ${
                  pathname === '/'
                    ? 'bg-window-bg/50 border-l-4 border-link text-link'
                    : 'text-text'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Packages
              </Link>
              <Link
                href="/submit"
                className={`hover:bg-window-bg/80 block rounded-md px-3 py-2 text-base font-medium hover:text-link ${
                  pathname === '/submit'
                    ? 'bg-window-bg/50 border-l-4 border-link text-link'
                    : 'text-text'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Add Package
              </Link>
              <Link
                href="https://aiken-lang.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-window-bg/80 block rounded-md px-3 py-2 text-base font-medium text-text hover:text-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Discover Aiken
              </Link>
              {/* Mobile Social Links */}
              <div className="flex items-center space-x-4 px-3 py-2">
                <Link
                  href="https://discord.com/invite/ub6atE94v4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text transition-colors hover:text-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </Link>
                <Link
                  href="https://github.com/aiken-lang/awesome-aiken?tab=readme-ov-file#libraries"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text transition-colors hover:text-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </Link>
                <NavThemeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
