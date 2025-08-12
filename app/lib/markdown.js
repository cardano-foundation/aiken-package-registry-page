import { marked } from 'marked'
import DOMPurify from 'dompurify'
import { highlightCode } from './shiki.js'

export async function processMarkdownWithShiki(markdown, theme = 'dark-plus') {
  if (!markdown) return ''

  try {
    // Configure marked to extract code blocks
    const renderer = new marked.Renderer()
    const codeBlocks = new Map()
    let codeCounter = 0

    // Custom code renderer that collects code blocks
    renderer.code = function (code, language, escaped) {
      const id = `__CODE_BLOCK_${codeCounter++}__`
      codeBlocks.set(id, { code, language })
      return id
    }

    // First pass: parse markdown and collect code blocks
    const html = marked(markdown, { renderer })

    // Highlight all code blocks
    const highlightPromises = Array.from(codeBlocks.entries()).map(
      async ([id, { code, language }]) => {
        const highlighted = await highlightCode(code, language, theme)
        return [id, highlighted]
      },
    )

    const highlightedResults = await Promise.all(highlightPromises)
    const replacements = new Map(highlightedResults)

    // Replace placeholders with highlighted code
    let finalHtml = html
    for (const [id, highlighted] of replacements) {
      finalHtml = finalHtml.replace(
        id,
        `<div class="shiki-container">${highlighted}</div>`,
      )
    }

    // Sanitize the HTML
    const clean = DOMPurify.sanitize(finalHtml, {
      ADD_ATTR: ['style', 'class', 'data-language', 'data-theme'],
      ADD_TAGS: ['span', 'div', 'pre', 'code'],
      ALLOW_DATA_ATTR: true,
    })

    return clean
  } catch (error) {
    console.error('Error processing markdown with Shiki:', error)

    // Fallback to basic marked processing
    try {
      const html = marked(markdown)
      return DOMPurify.sanitize(html, {
        ADD_ATTR: ['style'],
        ADD_TAGS: ['img'],
        ALLOW_DATA_ATTR: false,
      })
    } catch (fallbackError) {
      console.error('Fallback markdown processing also failed:', fallbackError)
      return '<p>Error loading content.</p>'
    }
  }
}
