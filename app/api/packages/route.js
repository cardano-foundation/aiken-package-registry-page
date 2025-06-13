import { fetchAwesomeAikenPackages } from '../../../lib/github'

// Cache the packages data for 1 hour
let cachedPackages = null
let lastFetch = null
const CACHE_DURATION = 60 * 60 * 1000 // 1 hour in milliseconds

export async function GET() {
  try {
    // Check if we have valid cached data
    const now = Date.now()
    if (cachedPackages && lastFetch && now - lastFetch < CACHE_DURATION) {
      return Response.json(cachedPackages)
    }

    // Fetch fresh data
    const packages = await fetchAwesomeAikenPackages()

    // Update cache
    cachedPackages = packages
    lastFetch = now

    return Response.json(packages)
  } catch (error) {
    console.error('Error fetching packages:', error)
    return Response.json({ error: 'Failed to fetch packages' }, { status: 500 })
  }
}
