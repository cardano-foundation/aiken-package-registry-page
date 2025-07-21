'use client'

import { marked } from 'marked'
import DOMPurify from 'dompurify'
import { useEffect, useState } from 'react'

// Helper function to format dates consistently
function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
}

export function PackageContent({ data }) {
  const { repo, readme, contributors, releases } = data
  const [sanitizedContent, setSanitizedContent] = useState('')

  useEffect(() => {
    // Sanitize the content on the client side
    const html = marked(readme)
    const clean = DOMPurify.sanitize(html, {
      ADD_ATTR: ['style'], // Allow style attributes
      ADD_TAGS: ['img'], // Ensure img tags are allowed
      ALLOW_DATA_ATTR: false,
    })
    setSanitizedContent(clean)
  }, [readme])

  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* README */}
          <div className="rounded-lg border border-border bg-window-bg p-6">
            <div
              className="prose-p:text-text/80 prose-code:bg-window-bg/50 prose-pre:bg-window-bg/50 
                prose 
                prose-invert 
                max-w-none 
                prose-headings:text-text 
                prose-a:text-link 
                prose-strong:text-text
                prose-code:rounded
                prose-code:px-1
                prose-code:py-0.5
                prose-code:text-text
                prose-code:before:content-none
                prose-code:after:content-none
                prose-pre:overflow-x-auto 
                prose-pre:rounded-lg
                prose-pre:border
                prose-pre:border-border
                prose-img:mx-auto
                prose-img:max-w-full
                prose-img:rounded-lg
                [&>ul>li>*:first-child]:mt-0
                [&>ul>li]:mt-0
                [&_p_a_img]:!mx-1
                [&_p_a_img]:!my-0
                [&_p_a_img]:!inline
                [&_p_a_img]:!align-middle"
              dangerouslySetInnerHTML={{
                __html: sanitizedContent,
              }}
            />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Contributors */}
          <div className="rounded-lg border border-border bg-window-bg p-6">
            <h2 className="mb-4 text-lg font-semibold text-text">
              Contributors
            </h2>
            <div className="flex flex-wrap gap-2">
              {contributors.slice(0, 10).map((contributor) => (
                <a
                  key={contributor.id}
                  href={contributor.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <img
                    src={contributor.avatar_url}
                    alt={contributor.login}
                    className="h-8 w-8 rounded-full transition-transform group-hover:scale-110"
                    title={contributor.login}
                  />
                </a>
              ))}
              {contributors.length > 10 && (
                <div className="text-text/60 flex h-8 w-8 items-center justify-center rounded-full bg-window-bg">
                  +{contributors.length - 10}
                </div>
              )}
            </div>
          </div>

          {/* Releases */}
          {releases.length > 0 && (
            <div className="rounded-lg border border-border bg-window-bg p-6">
              <h2 className="mb-4 text-lg font-semibold text-text">
                Latest Releases
              </h2>
              <div className="space-y-4">
                {releases.slice(0, 5).map((release) => (
                  <a
                    key={release.id}
                    href={release.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-text transition-colors hover:text-link"
                  >
                    <div className="font-medium">{release.tag_name}</div>
                    <div className="text-text/60 text-sm">
                      {formatDate(release.published_at)}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Repository Info */}
          <div className="rounded-lg border border-border bg-window-bg p-6">
            <h2 className="mb-4 text-lg font-semibold text-text">
              Repository Info
            </h2>
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-text/60">Language</dt>
                <dd className="font-medium text-text">
                  {repo?.language || 'N/A'}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-text/60">License</dt>
                <dd className="font-medium text-text">
                  {repo?.license?.name || 'N/A'}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-text/60">Created</dt>
                <dd className="font-medium text-text">
                  {repo?.created_at ? formatDate(repo.created_at) : 'N/A'}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-text/60">Last updated</dt>
                <dd className="font-medium text-text">
                  {repo?.updated_at ? formatDate(repo.updated_at) : 'N/A'}
                </dd>
              </div>
            </dl>
          </div>

          {/* Watching */}
          <div className="rounded-lg border border-border bg-window-bg p-6">
            <h2 className="mb-4 text-lg font-semibold text-text">Watching</h2>
            <a
              href={`${repo?.html_url}/watchers`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-text transition-colors hover:text-link"
            >
              <svg
                className="h-5 w-5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
                style={{ transform: 'translateY(1px)' }}
              >
                <path d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.62-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 5a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
              <span>{repo?.subscribers_count.toLocaleString()} watching</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
