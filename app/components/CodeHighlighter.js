'use client'

import { useEffect } from 'react'
import { highlightCode } from '../lib/shiki.js'

export function CodeHighlighter({ children }) {
  useEffect(() => {
    async function highlightCodeBlocks() {
      if (typeof window === 'undefined') return

      const codeBlocks = document.querySelectorAll('pre code')

      for (const codeBlock of codeBlocks) {
        if (
          codeBlock.closest('.shiki') ||
          codeBlock.dataset.highlighted === 'true'
        ) {
          continue
        }

        const pre = codeBlock.parentNode
        const code = codeBlock.textContent || ''

        const className = codeBlock.className || ''
        const languageMatch = className.match(/language-(\w+)/)
        const language = languageMatch ? languageMatch[1] : 'text'

        try {
          const highlighted = await highlightCode(code, language)

          if (highlighted) {
            const tempDiv = document.createElement('div')
            tempDiv.innerHTML = highlighted

            const newPre = tempDiv.firstChild
            if (newPre) {
              pre.replaceWith(newPre)
            }
          }
        } catch (error) {
          codeBlock.dataset.highlighted = 'true'
        }
      }
    }

    const timer = setTimeout(highlightCodeBlocks, 100)
    return () => clearTimeout(timer)
  }, [children])

  return null
}
