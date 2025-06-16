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
import { metadata } from './metadata'

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
