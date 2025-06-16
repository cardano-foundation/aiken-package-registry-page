import { notFound } from 'next/navigation'
import { PackageHeader } from '@/app/components/PackageHeader'
import { PackageContent } from '@/app/components/PackageContent'
import { fetchPackageData } from '@/app/lib/github'
import { generatePackagePaths } from '@/app/lib/static-paths'

// This makes the page static and fetches data at build time
export const dynamic = 'force-static'
export const revalidate = false // Ensure pages are fully static

// Generate static params for all packages at build time
export async function generateStaticParams() {
  try {
    return await generatePackagePaths()
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

// This is a static page, but we need to handle async data fetching
export default async function PackagePage({ params }) {
  if (!params?.owner || !params?.name) {
    notFound()
  }

  const { owner, name } = params

  // Check if this is a collection (ends with /*)
  if (typeof name === 'string' && name.endsWith('/*')) {
    notFound()
  }

  try {
    const data = await fetchPackageData(owner, name)
    if (!data) {
      notFound()
    }

    return (
      <div className="min-h-screen bg-window-bg">
        <PackageHeader data={data} />
        <PackageContent data={data} />
      </div>
    )
  } catch (error) {
    console.error('Error fetching package data:', error)
    notFound()
  }
}
