'use client'

import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-window-bg border-border border-t">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Logo section */}
          <div className="flex items-start">
            <Image
              src="/logo-light.png"
              alt="Aiken Logo"
              width={130}
              height={130}
              quality={100}
              className="h-12 w-auto opacity-50"
            />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-text mb-4 font-medium">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-text hover:text-link transition-colors"
                >
                  Prelude
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-text hover:text-link transition-colors"
                >
                  Standard library
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-text hover:text-link transition-colors"
                >
                  Playground
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-text mb-4 font-medium">Community</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://discord.com/invite/ub6atE94v4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text hover:text-link transition-colors"
                >
                  Discord
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com/aiken_lang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text hover:text-link transition-colors"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/aiken-lang/awesome-aiken"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text hover:text-link transition-colors"
                >
                  Awesome list
                </Link>
              </li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h3 className="text-text mb-4 font-medium">Partners</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://pragmatic.software"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text hover:text-link transition-colors"
                >
                  PRAGMA
                </Link>
              </li>
              <li>
                <Link
                  href="https://cardanofoundation.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text hover:text-link transition-colors"
                >
                  Cardano Foundation
                </Link>
              </li>
              <li>
                <Link
                  href="https://txpipe.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text hover:text-link transition-colors"
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
