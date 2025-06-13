const GITHUB_RAW_URL =
  'https://raw.githubusercontent.com/aiken-lang/awesome-aiken/main/README.md'

export async function fetchAwesomeAikenPackages() {
  try {
    const response = await fetch(GITHUB_RAW_URL)
    if (!response.ok) {
      throw new Error('Failed to fetch README content')
    }
    const markdown = await response.text()
    return parseMarkdownPackages(markdown)
  } catch (error) {
    console.error('Error fetching packages:', error)
    return []
  }
}

function parseMarkdownPackages(markdown) {
  const packages = []
  let currentCategory = ''

  // Split the markdown into lines and process each line
  const lines = markdown.split('\n')

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()

    // Check for category headers (#### Category Name)
    if (line.startsWith('#### ')) {
      currentCategory = line.replace('#### ', '').trim()
      continue
    }

    // Check for package entries (they start with - [owner/repo])
    if (line.startsWith('- [')) {
      const match = line.match(/- \[([^\]]+)\]\(([^)]+)\) - (.+)/)
      if (match) {
        const [_, fullName, url, description] = match
        const [owner, name] = fullName.split('/')

        // Only add if we have a category and valid package info
        if (currentCategory && owner && name) {
          packages.push({
            category: currentCategory,
            packages: [
              {
                name,
                owner,
                description: description.trim(),
                url,
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

  return mergedPackages
}
