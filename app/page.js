'use client'

import { useState, useEffect } from 'react'
import { searchPackages } from './lib/packages'
import PackageList from './components/PackageList'

// Remove static generation to ensure fresh data
// export const dynamic = 'force-static'
// export const revalidate = 3600

async function getPackages() {
  console.log('Page: Fetching packages from API...')
  const res = await fetch('/api/packages')
  if (!res.ok) {
    throw new Error('Failed to fetch packages')
  }
  const data = await res.json()
  return data
}

export default function Home() {
  const [packagesData, setPackagesData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    console.log('Page: Component mounted, loading packages...')
    async function loadPackages() {
      try {
        const data = await getPackages()
        console.log(data)
        setPackagesData(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }
    loadPackages()
  }, [])

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-window-bg">
        <div className="text-center">
          <div className="text-text/50">Loading packages...</div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-window-bg">
        <div className="text-center">
          <p className="text-text/80">Error: {error}</p>
        </div>
      </div>
    )
  }

  return <PackageList initialPackages={packagesData} />
}
