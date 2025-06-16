import { redirect } from 'next/navigation'
import { PackageHeader } from '@/app/components/PackageHeader'
import { PackageContent } from '@/app/components/PackageContent'
import { fetchPackageData } from '@/app/lib/github'
import { generatePackagePaths } from '@/app/lib/static-paths'

// This makes the page static and fetches data at build time
export const dynamic = 'force-static'
export const revalidate = false // Ensure pages are fully static

// Generate static params for all packages at build time
export const generateStaticParams = generatePackagePaths

// This is a static page, but we need to handle async data fetching
export default async function PackagePage({ params }) {
  const { owner, name } = params

  // Check if this is a collection (ends with /*)
  if (name.endsWith('/*')) {
    // Redirect to the organization's GitHub page
    redirect(`https://github.com/${owner}`)
  }

  // For static pages, use the async version but it will be cached
  const data = await fetchPackageData(owner, name)

  return (
    <div className="min-h-screen bg-window-bg">
      <PackageHeader data={data} />
      <PackageContent data={data} />
    </div>
  )
}
