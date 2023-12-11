import './globals.css'
import { Chivo } from 'next/font/google'
import { Toaster } from "react-hot-toast";
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Script from 'next/script'

const chivo = Chivo({ subsets: ['latin'] })

export const metadata = {
  title: 'Blockchain Course',
  description: 'In-depth training course to get you from beginner to advanced blockchain knowledge. Free access to high-quality, up-to-date, and self-paced learning material. Register Today! Cardano Academy, powered by the Cardano Foundation',
  openGraph: {
    title: 'Blockchain Course',
    description: 'In-depth training course to get you from beginner to advanced blockchain knowledge. Free access to high-quality, up-to-date, and self-paced learning material. Register Today! Cardano Academy, powered by the Cardano Foundation',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased">
      <body className={chivo.className}>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-M9417RD4BC"/>
        <Script id="google-analytics">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
      
              gtag('config', 'G-M9417RD4BC');
            `}
        </Script>
        <Navigation />
        <Toaster position="bottom-center " />
        {children}
        <Footer />
      </body>
    </html>
  )
}
