'use client'

import { useState, useEffect } from 'react'
import { searchPackages } from '../lib/packages'
import PackageList from './components/PackageList'

// This makes the page static and fetches data at build time
export const dynamic = 'force-static'
export const revalidate = 3600 // Revalidate every hour

// This is the equivalent of getStaticProps in App Router
async function getPackages() {
  const res = await fetch('/api/packages')
  if (!res.ok) {
    throw new Error('Failed to fetch packages')
  }
  return res.json()
}

export default function Home() {
  const [packagesData, setPackagesData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadPackages() {
      try {
        const data = await getPackages()
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
      <div className="bg-window-bg flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="text-text/50">Loading packages...</div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-window-bg flex min-h-screen items-center justify-center">
        <div className="text-center">
          <p className="text-text/80">Error: {error}</p>
        </div>
      </div>
    )
  }

  return <PackageList initialPackages={packagesData} />
}
