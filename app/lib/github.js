'use server'

const GITHUB_RAW_URL =
  'https://raw.githubusercontent.com/aiken-lang/awesome-aiken/main/README.md'

export async function fetchAwesomeAikenPackages() {
  console.log('GitHub: Fetching README from:', GITHUB_RAW_URL)
  try {
    const response = await fetch(GITHUB_RAW_URL)
    if (!response.ok) {
      throw new Error('Failed to fetch README content')
    }
    const markdown = await response.text()
    console.log('GitHub: README fetched, length:', markdown.length)
    const packages = parseMarkdownPackages(markdown)
    console.log('GitHub: Parsed packages:', packages)
    return packages
  } catch (error) {
    console.error('GitHub: Error fetching packages:', error)
    return []
  }
}

export async function fetchPackageData(owner, name) {
  console.log('Fetching data for:', { owner, name })

  const headers = {
    Accept: 'application/vnd.github.v3+json',
    ...(process.env.GITHUB_TOKEN && {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    }),
  }

  // Fetch repository data
  const repoRes = await fetch(`https://api.github.com/repos/${owner}/${name}`, {
    headers,
  })
  if (!repoRes.ok) {
    throw new Error(`Failed to fetch repository: ${repoRes.statusText}`)
  }
  const repoData = await repoRes.json()
  console.log('Repository data:', repoData)

  // Fetch README content
  const readmeRes = await fetch(
    `https://api.github.com/repos/${owner}/${name}/readme`,
    { headers },
  )
  if (!readmeRes.ok) {
    throw new Error(`Failed to fetch README: ${readmeRes.statusText}`)
  }
  const readmeData = await readmeRes.json()
  console.log('README data received')
  const readmeContent = Buffer.from(readmeData.content, 'base64').toString()

  // Fetch contributors
  const contributorsRes = await fetch(
    `https://api.github.com/repos/${owner}/${name}/contributors`,
    { headers },
  )
  if (!contributorsRes.ok) {
    throw new Error(
      `Failed to fetch contributors: ${contributorsRes.statusText}`,
    )
  }
  const contributors = await contributorsRes.json()

  // Fetch releases
  const releasesRes = await fetch(
    `https://api.github.com/repos/${owner}/${name}/releases`,
    { headers },
  )
  if (!releasesRes.ok) {
    throw new Error(`Failed to fetch releases: ${releasesRes.statusText}`)
  }
  const releases = await releasesRes.json()

  return {
    repo: repoData,
    readme: readmeContent,
    contributors,
    releases,
  }
}

function parseMarkdownPackages(markdown) {
  console.log('GitHub: Starting to parse markdown...')
  const packages = []
  let currentCategory = ''

  // Split the markdown into lines and process each line
  const lines = markdown.split('\n')
  console.log('GitHub: Found', lines.length, 'lines in markdown')

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()

    // Check for category headers (#### Category Name)
    if (line.startsWith('#### ')) {
      currentCategory = line.replace('#### ', '').trim()
      console.log('GitHub: Found category:', currentCategory)
      continue
    }

    // Check for package entries (they start with - [owner/repo])
    if (line.startsWith('- [')) {
      const match = line.match(/- \[([^\]]+)\]\(([^)]+)\) - (.+)/)
      if (match) {
        const [_, fullName, url, description] = match
        const [owner, name] = fullName.split('/')
        console.log('GitHub: Found package:', {
          owner,
          name,
          url,
          description: description.trim(),
        })

        // Only add if we have a category and valid package info
        if (currentCategory && owner && name) {
          // Check if this is a collection (ends with /*)
          const isCollection = name.endsWith('/*')

          packages.push({
            category: currentCategory,
            packages: [
              {
                // Keep the original name with /* for collections
                name: name,
                owner,
                description: description.trim(),
                // Use the URL from the markdown link
                url: url,
              },
            ],
          })
        }
      }
    }
  }

  // Merge packages under the same category
  const mergedPackages = packages.reduce((acc, curr) => {
    const existingCategory = acc.find((cat) => cat.category === curr.category)
    if (existingCategory) {
      existingCategory.packages.push(...curr.packages)
    } else {
      acc.push(curr)
    }
    return acc
  }, [])

  console.log(
    'GitHub: Finished parsing, found',
    mergedPackages.length,
    'categories',
  )
  return mergedPackages
}
