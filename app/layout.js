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
  openGraph: {
    title: 'Aiken Package Registry',
    description:
      'Discover and explore Aiken packages for your Cardano smart contracts',
    type: 'website',
    url: 'https://packages.aiken-lang.org',
    images: [
      {
        url: '/social_card.png',
        width: 1200,
        height: 630,
        alt: 'Aiken Package Registry',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aiken Package Registry',
    description:
      'Discover and explore Aiken packages for your Cardano smart contracts',
    images: ['/social_card.png'],
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
