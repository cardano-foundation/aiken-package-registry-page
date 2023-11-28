import './globals.css'
import { Chivo } from 'next/font/google'
import { Toaster } from "react-hot-toast";
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const chivo = Chivo({ subsets: ['latin'] })

export const metadata = {
  title: 'Blockchain Course',
  description: 'In-depth training course to get you from beginner to advanced blockchain knowledge. Free access to high-quality, up-to-date and self-paced learning material. Register Today!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={chivo.className}>
        <Navigation />
        <Toaster position="bottom-center " />
        {children}
        <Footer />
      </body>
    </html>
  )
}
