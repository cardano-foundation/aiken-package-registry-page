'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from './ThemeProvider'

const Footer = () => {
  const { theme } = useTheme()

  return (
    <footer className="border-t border-border bg-window-bg">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Logo section */}
          <div className="flex items-start">
            <Image
              src={theme === 'dark' ? '/logo-light.png' : '/logo-dark.png'}
              alt="Aiken Logo"
              width={130}
              height={130}
              quality={100}
              className="h-12 w-auto "
            />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-medium text-text">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://aiken-lang.github.io/prelude/"
                  className="text-text transition-colors hover:text-link"
                >
                  Prelude
                </Link>
              </li>
              <li>
                <Link
                  href="https://aiken-lang.github.io/stdlib/"
                  className="text-text transition-colors hover:text-link"
                >
                  Standard library
                </Link>
              </li>
              <li>
                <Link
                  href="https://play.aiken-lang.org/"
                  className="text-text transition-colors hover:text-link"
                >
                  Playground
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="mb-4 font-medium text-text">Community</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://discord.com/invite/ub6atE94v4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text transition-colors hover:text-link"
                >
                  Discord
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com/aiken_eng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text transition-colors hover:text-link"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/aiken-lang/awesome-aiken"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text transition-colors hover:text-link"
                >
                  Awesome list
                </Link>
              </li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h3 className="mb-4 font-medium text-text">Partners</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://pragma.builders"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text transition-colors hover:text-link"
                >
                  PRAGMA
                </Link>
              </li>
              <li>
                <Link
                  href="https://cardanofoundation.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text transition-colors hover:text-link"
                >
                  Cardano Foundation
                </Link>
              </li>
              <li>
                <Link
                  href="https://txpipe.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text transition-colors hover:text-link"
                >
                  TxPipe
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
