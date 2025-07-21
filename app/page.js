import { fetchAwesomeAikenPackages } from './lib/github'
import PackageList from './components/PackageList'

// This makes the page static and fetches data at build time
export const dynamic = 'force-static'

export default async function Home() {
  const packages = await fetchAwesomeAikenPackages()

  return <PackageList initialPackages={packages} />
}
