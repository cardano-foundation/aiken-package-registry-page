import Link from 'next/link'
import Button from '@/components/Button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-cf-blue-600 text-white items-center justify-center">
      <h2 className="text-4xl font-bold mb-4">404 | Not Found</h2>
      <Link href="/">
        <Button className="w-72 text-cf-blue-900 bg-white py-2 px-4">Return Home</Button>
      </Link>
    </div>
  )
}
