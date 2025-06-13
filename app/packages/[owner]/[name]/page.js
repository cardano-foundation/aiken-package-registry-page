'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { fetchPackageData } from '@/app/lib/github'
import { PackageHeader } from '@/app/components/PackageHeader'
import { PackageContent } from '@/app/components/PackageContent'

export default function PackagePage() {
  const params = useParams()
  const router = useRouter()
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if this is a collection (ends with /*)
    if (params.name.endsWith('/*')) {
      // Redirect to the organization's GitHub page
      window.location.replace(`https://github.com/${params.owner}`)
      return
    }

    // For regular packages, fetch the data
    const loadData = async () => {
      try {
        const packageData = await fetchPackageData(params.owner, params.name)
        setData(packageData)
      } catch (err) {
        console.error('Error loading package:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [params.owner, params.name])

  // For collections, show a loading state while redirecting
  if (params.name.endsWith('/*')) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-window-bg">
        <div className="text-center">
          <div className="text-text/50">
            Redirecting to GitHub collection...
          </div>
        </div>
      </div>
    )
  }

  // Show loading state while fetching package data
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-window-bg">
        <div className="text-center">
          <div className="text-text/50">Loading package data...</div>
        </div>
      </div>
    )
  }

  // Show error state
  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-window-bg">
        <div className="text-center">
          <div className="text-error mb-2">Error loading package</div>
          <div className="text-text/50">{error}</div>
        </div>
      </div>
    )
  }

  // Show package data
  return (
    <div className="min-h-screen bg-window-bg">
      <PackageHeader data={data} />
      <PackageContent data={data} />
    </div>
  )
}
