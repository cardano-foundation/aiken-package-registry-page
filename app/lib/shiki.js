// Client-side only syntax highlighting to avoid SSR issues
let highlighterPromise = null

const aikenGrammar = {
  $schema:
    'https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json',
  name: 'Aiken',
  patterns: [
    {
      include: '#comments',
    },
    {
      include: '#keywords',
    },
    {
      include: '#strings',
    },
    {
      include: '#constant',
    },
    {
      include: '#entity',
    },
  ],
  repository: {
    keywords: {
      patterns: [
        {
          name: 'keyword.control.aiken',
          match:
            '\\b(if|else|when|is|fn|use|let|pub|type|opaque|const|todo|expect|test|bench|trace|fail|validator|and|or|as|via)\\b',
        },
        {
          name: 'keyword.operator.arrow.aiken',
          match: '->',
        },
        {
          name: 'keyword.operator.pipe.aiken',
          match: '\\|>',
        },
        {
          name: 'keyword.operator.backpass.aiken',
          match: '<-',
        },
        {
          name: 'constant.language.aiken',
          match: '\\b(True|False)\\b',
        },
      ],
    },
    strings: {
      patterns: [
        {
          name: 'string.quoted.double.aiken',
          begin: '"',
          end: '"',
          patterns: [
            {
              name: 'constant.character.escape.aiken',
              match: '\\\\.',
            },
          ],
        },
        {
          name: 'string.quoted.bytestring.aiken',
          begin: '#"',
          end: '"',
          patterns: [
            {
              name: 'constant.character.escape.aiken',
              match: '\\\\.',
            },
          ],
        },
        {
          name: 'string.quoted.utf8.aiken',
          begin: '@"',
          end: '"',
          patterns: [
            {
              name: 'constant.character.escape.aiken',
              match: '\\\\.',
            },
          ],
        },
      ],
    },
    comments: {
      patterns: [
        {
          name: 'comment.line.double-slash.aiken',
          match: '//.*',
        },
        {
          name: 'comment.line.triple-slash.documentation.aiken',
          match: '///.*',
        },
      ],
    },
    constant: {
      patterns: [
        {
          name: 'constant.numeric.aiken',
          match:
            '\\b(0[bB][01_]+|0[oO][0-7_]+|0[xX][0-9a-fA-F_]+|[0-9][0-9_]*)\\b',
        },
        {
          name: 'constant.other.bytearray.aiken',
          match: '#\\[[0-9a-fA-F, ]*\\]',
        },
      ],
    },
    entity: {
      patterns: [
        {
          name: 'entity.name.function.aiken',
          match: '\\b[a-z_][a-zA-Z0-9_]*(?=\\s*\\()',
        },
        {
          name: 'entity.name.type.aiken',
          match: '\\b[A-Z][a-zA-Z0-9_]*\\b',
        },
      ],
    },
  },
  scopeName: 'source.aiken',
}

async function createShikiHighlighter() {
  if (typeof window === 'undefined') {
    return null
  }

  try {
    const { createHighlighter } = await import('shiki')

    const highlighter = await createHighlighter({
      themes: ['dark-plus'],
      langs: [
        // Programming languages
        'javascript',
        'typescript',
        'python',
        'rust',
        'haskell',
        'c',
        'cpp',
        'go',
        'java',
        'scala',
        'clojure',
        'elm',
        'purescript',
        'json',
        'yaml',
        'toml',
        'xml',
        'ini',
        'csv',
        'bash',
        'shell',
        'sh',
        'zsh',
        'fish',
        'powershell',
        'cmd',
        'markdown',
        'html',
        'css',
        'scss',
        'less',
        'tex',
        'sql',
        'graphql',
        'dockerfile',
        'docker',
        'makefile',
        'nginx',
        'diff',
        'text',
        'plaintext',
        'txt',
        'gleam',
        // Custom Aiken grammar
        {
          id: 'aiken',
          scopeName: 'source.aiken',
          grammar: aikenGrammar,
          aliases: ['ak'],
        },
      ],
    })

    return highlighter
  } catch (error) {
    console.warn('Failed to load Shiki highlighter:', error)
    return null
  }
}

export async function getShikiHighlighter() {
  if (!highlighterPromise) {
    highlighterPromise = createShikiHighlighter()
  }
  return highlighterPromise
}

export async function highlightCode(code, lang, theme = 'dark-plus') {
  const highlighter = await getShikiHighlighter()

  if (!highlighter) {
    return `<pre class="bg-window-bg/50 border border-border rounded-lg p-4 overflow-x-auto"><code class="text-text">${escapeHtml(code)}</code></pre>`
  }
  const langMap = {
    // Aiken aliases
    ak: 'aiken',
    aiken: 'aiken',

    js: 'javascript',
    jsx: 'javascript',
    ts: 'typescript',
    tsx: 'typescript',
    node: 'javascript',

    sh: 'bash',
    bash: 'bash',
    shell: 'bash',
    zsh: 'bash',
    fish: 'fish',
    ps1: 'powershell',
    cmd: 'cmd',

    yml: 'yaml',
    yaml: 'yaml',
    json: 'json',
    toml: 'toml',
    xml: 'xml',
    html: 'html',
    css: 'css',
    scss: 'scss',

    py: 'python',
    python: 'python',
    rs: 'rust',
    rust: 'rust',
    hs: 'haskell',
    haskell: 'haskell',
    c: 'c',
    cpp: 'cpp',
    cxx: 'cpp',
    'c++': 'cpp',
    go: 'go',
    golang: 'go',
    java: 'java',
    scala: 'scala',
    clj: 'clojure',
    clojure: 'clojure',
    elm: 'elm',
    purs: 'purescript',
    purescript: 'purescript',
    gleam: 'gleam',

    md: 'markdown',
    markdown: 'markdown',
    tex: 'tex',
    latex: 'tex',

    sql: 'sql',
    gql: 'graphql',
    graphql: 'graphql',

    dockerfile: 'dockerfile',
    docker: 'dockerfile',
    makefile: 'makefile',
    make: 'makefile',
    nginx: 'nginx',

    diff: 'diff',
    patch: 'diff',
    git: 'diff',

    plutus: 'haskell',
    marlowe: 'json',

    // Fallbacks
    text: 'text',
    txt: 'text',
    plain: 'text',
    plaintext: 'text',
    '': 'text',
  }

  const normalizedLang = langMap[lang?.toLowerCase()] || lang || 'text'

  try {
    return highlighter.codeToHtml(code, {
      lang: normalizedLang,
      theme,
    })
  } catch (error) {
    try {
      return highlighter.codeToHtml(code, {
        lang: 'text',
        theme,
      })
    } catch (fallbackError) {
      return `<pre class="bg-window-bg/50 border border-border rounded-lg p-4 overflow-x-auto"><code class="text-text">${escapeHtml(code)}</code></pre>`
    }
  }
}

function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
