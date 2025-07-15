import './globals.css'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import { Navigation } from './components/Navigation'
import Footer from './components/Footer'
import Script from 'next/script'
import { GoogleTagManager } from '@next/third-parties/google'
import { ThemeProvider } from './components/ThemeProvider'
import { ThemeToggle } from './components/ThemeToggle'
import { fetchAwesomeAikenPackages } from './lib/github'

export const metadata = {
  title: 'Aiken Package Registry',
  description:
    'Discover and explore Aiken packages for your Cardano smart contracts',
  metadataBase: new URL('https://packages.aiken-lang.org'),
  openGraph: {
    title: 'Aiken Package Registry',
    description:
      'Discover and explore Aiken packages for your Cardano smart contracts',
    type: 'website',
    url: 'https://packages.aiken-lang.org',
    siteName: 'Aiken Package Registry',
    images: [
      {
        url: '/social_card.png',
        width: 800,
        height: 418,
        alt: 'Aiken Package Registry - Discover and explore Aiken packages for your Cardano smart contracts',
        type: 'image/png',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aiken Package Registry',
    description:
      'Discover and explore Aiken packages for your Cardano smart contracts',
    images: ['/social_card.png'],
    creator: '@aiken_lang',
    site: '@aiken_lang',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export default async function RootLayout({ children }) {
  // Fetch packages at build time
  const packages = await fetchAwesomeAikenPackages()

  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <meta property="og:title" content="Aiken Package Registry" />
        <meta
          property="og:description"
          content="Discover and explore Aiken packages for your Cardano smart contracts"
        />
        <meta
          property="og:image"
          content="https://packages.aiken-lang.org/social_card.png"
        />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="418" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:url" content="https://packages.aiken-lang.org" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Aiken Package Registry" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aiken Package Registry" />
        <meta
          name="twitter:description"
          content="Discover and explore Aiken packages for your Cardano smart contracts"
        />
        <meta
          name="twitter:image"
          content="https://packages.aiken-lang.org/social_card.png"
        />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <style>{`
          :root {
            color-scheme: dark;
          }
          html {
            visibility: visible;
            opacity: 1;
          }
        `}</style>
      </head>
      <body className="min-h-screen bg-window-bg text-text">
        <ThemeProvider>
          <Navigation packages={packages} />
          <main>{children}</main>
          <Footer />
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  )
}

// This script will be injected into the HTML head
const themeScript = `
  (function() {
    function setTheme(theme) {
      document.documentElement.classList.toggle('dark', theme === 'dark');
      document.documentElement.style.colorScheme = theme;
    }
    
    // Immediately set theme to prevent flash
    setTheme('dark');
    
    // Then check localStorage
    try {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        setTheme(savedTheme);
      }
    } catch (e) {}
  })();
`
