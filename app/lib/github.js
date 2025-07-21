const GITHUB_RAW_URL =
  'https://raw.githubusercontent.com/aiken-lang/awesome-aiken/main/README.md'

export async function fetchAwesomeAikenPackages() {
  try {
    const response = await fetch(GITHUB_RAW_URL)
    if (!response.ok) {
      throw new Error('Failed to fetch README content')
    }
    const markdown = await response.text()
    const packages = parseMarkdownPackages(markdown)
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

  try {
    // Fetch repository data
    const repoRes = await fetch(
      `https://api.github.com/repos/${owner}/${name}`,
      {
        headers,
      },
    )
    if (!repoRes.ok) {
      if (repoRes.status === 404) {
        throw new Error(`Repository ${owner}/${name} not found`)
      }
      throw new Error(`Failed to fetch repository: ${repoRes.statusText}`)
    }
    const repoData = await repoRes.json()

    // Fetch README content
    const readmeRes = await fetch(
      `https://api.github.com/repos/${owner}/${name}/readme`,
      { headers },
    )
    if (!readmeRes.ok) {
      // If README is not found, use an empty string
      if (readmeRes.status === 404) {
        console.log('README not found, using empty string')
        return {
          repo: repoData,
          readme: '',
          contributors: [],
          releases: [],
        }
      }
      throw new Error(`Failed to fetch README: ${readmeRes.statusText}`)
    }
    const readmeData = await readmeRes.json()
    let readmeContent = Buffer.from(readmeData.content, 'base64').toString()

    // Fix relative URLs in markdown content
    readmeContent = readmeContent.replace(
      /!\[([^\]]*)\]\((?!https?:\/\/)([^)]+)\)/g,
      (match, alt, src) => {
        // Skip if already absolute URL
        if (src.startsWith('http')) return match

        // Clean up the path (remove ./ prefix and leading slash)
        const cleanSrc = src.replace(/^(\.\/|\/)?/, '')

        // Convert to raw GitHub URL
        const absoluteUrl = `https://raw.githubusercontent.com/${owner}/${name}/main/${cleanSrc}`
        return `![${alt}](${absoluteUrl})`
      },
    )

    // Fix relative URLs in HTML img tags while preserving all attributes
    readmeContent = readmeContent.replace(
      /<img([^>]*)\s+src=["'](?!https?:\/\/)([^"']+)["']([^>]*)>/g,
      (match, beforeSrc, src, afterSrc) => {
        // Skip if already absolute URL
        if (src.startsWith('http')) return match

        // Clean up the path (remove ./ prefix and leading slash)
        const cleanSrc = src.replace(/^(\.\/|\/)?/, '')

        // Convert to raw GitHub URL
        const absoluteUrl = `https://raw.githubusercontent.com/${owner}/${name}/main/${cleanSrc}`

        // Extract and convert HTML attributes to CSS styles
        const fullAttributes = beforeSrc + afterSrc
        let styleAttr = ''
        let otherAttrs = fullAttributes

        // Extract existing style attribute
        const styleMatch = fullAttributes.match(/style=["']([^"']*)["']/i)
        let existingStyles = styleMatch ? styleMatch[1] : ''

        // Remove style attribute from other attributes to avoid duplication
        otherAttrs = otherAttrs.replace(/\s*style=["'][^"']*["']/gi, '')

        // Convert height attribute to CSS
        const heightMatch = fullAttributes.match(/height=["']?(\d+)["']?/i)
        if (heightMatch) {
          const heightValue = heightMatch[1]
          existingStyles += existingStyles ? '; ' : ''
          existingStyles += `height: ${heightValue}px`
          // Remove height attribute since we're converting it to CSS
          otherAttrs = otherAttrs.replace(/\s*height=["']?\d+["']?/gi, '')
        }

        // Convert width attribute to CSS
        const widthMatch = fullAttributes.match(/width=["']?(\d+)["']?/i)
        if (widthMatch) {
          const widthValue = widthMatch[1]
          existingStyles += existingStyles ? '; ' : ''
          existingStyles += `width: ${widthValue}px`
          // Remove width attribute since we're converting it to CSS
          otherAttrs = otherAttrs.replace(/\s*width=["']?\d+["']?/gi, '')
        }

        // Build the final style attribute
        if (existingStyles) {
          styleAttr = ` style="${existingStyles}"`
        }

        return `<img${otherAttrs} src="${absoluteUrl}"${styleAttr}>`
      },
    )

    // Convert HTML attributes to CSS for ALL img tags (including absolute URLs)
    readmeContent = readmeContent.replace(
      /<img([^>]*?)(\s*\/?>)/g,
      (match, attributes, closing) => {
        let styleAttr = ''
        let otherAttrs = attributes

        // Extract existing style attribute
        const styleMatch = attributes.match(/style=["']([^"']*)["']/i)
        let existingStyles = styleMatch ? styleMatch[1] : ''

        // Remove style attribute from other attributes to avoid duplication
        otherAttrs = otherAttrs.replace(/\s*style=["'][^"']*["']/gi, '')

        // Convert height attribute to CSS
        const heightMatch = attributes.match(/height=["']?(\d+)["']?/i)
        if (heightMatch) {
          const heightValue = heightMatch[1]
          existingStyles +=
            existingStyles && !existingStyles.endsWith(';') ? '; ' : ''
          existingStyles += `height: ${heightValue}px`
          // Remove height attribute since we're converting it to CSS
          otherAttrs = otherAttrs.replace(/\s*height=["']?\d+["']?/gi, '')
        }

        // Convert width attribute to CSS
        const widthMatch = attributes.match(/width=["']?(\d+)["']?/i)
        if (widthMatch) {
          const widthValue = widthMatch[1]
          existingStyles +=
            existingStyles && !existingStyles.endsWith(';') ? '; ' : ''
          existingStyles += `width: ${widthValue}px`
          // Remove width attribute since we're converting it to CSS
          otherAttrs = otherAttrs.replace(/\s*width=["']?\d+["']?/gi, '')
        }

        // Build the final style attribute
        if (existingStyles) {
          styleAttr = ` style="${existingStyles}"`
        }

        return `<img${otherAttrs}${styleAttr}${closing}`
      },
    )

    // Fetch contributors
    const contributorsRes = await fetch(
      `https://api.github.com/repos/${owner}/${name}/contributors`,
      { headers },
    )
    const contributors = contributorsRes.ok ? await contributorsRes.json() : []

    // Fetch releases
    const releasesRes = await fetch(
      `https://api.github.com/repos/${owner}/${name}/releases`,
      { headers },
    )
    const releases = releasesRes.ok ? await releasesRes.json() : []

    return {
      repo: repoData,
      readme: readmeContent,
      contributors,
      releases,
    }
  } catch (error) {
    console.error('Error fetching package data:', error)
    // Return a minimal response for not found repositories
    if (error.message.includes('not found')) {
      return {
        repo: {
          name,
          owner: { login: owner },
          description: 'Repository not found',
          html_url: `https://github.com/${owner}/${name}`,
        },
        readme: 'Repository not found or is private.',
        contributors: [],
        releases: [],
      }
    }
    throw error
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
