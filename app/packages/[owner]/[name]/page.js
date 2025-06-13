import { fetchPackageData } from '@/app/lib/github'
import { generatePackagePaths } from '@/app/lib/static-paths'
import { PackageHeader } from '@/app/components/PackageHeader'
import { PackageContent } from '@/app/components/PackageContent'
import { redirect } from 'next/navigation'

// This makes the page static and fetches data at build time
export const dynamic = 'force-static'

// This function runs at build time to generate all possible package pages
export const generateStaticParams = generatePackagePaths

export default async function PackagePage({ params }) {
  // Check if this is a collection (ends with /*)
  if (params.name.endsWith('/*')) {
    // Redirect to the organization's GitHub page
    redirect(`https://github.com/${params.owner}`)
  }

  // For regular packages, fetch the data at build time
  const data = await fetchPackageData(params.owner, params.name)

  return (
    <div className="min-h-screen bg-window-bg">
      <PackageHeader data={data} />
      <PackageContent data={data} />
    </div>
  )
}
