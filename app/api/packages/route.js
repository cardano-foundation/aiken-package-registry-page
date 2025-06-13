import { fetchAwesomeAikenPackages } from '../../lib/github'

export async function GET() {
  console.log('API: Fetching packages...')
  try {
    // Fetch fresh data every time
    const packages = await fetchAwesomeAikenPackages()
    return Response.json(packages)
  } catch (error) {
    console.error('API: Error fetching packages:', error)
    return Response.json({ error: 'Failed to fetch packages' }, { status: 500 })
  }
}
