export function PackageHeader({ data }) {
  const { repo } = data

  return (
    <div className="border-b border-border bg-window-bg">
      <div className="container mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="tag">{data.category}</span>
          </div>
          <div className="flex items-start justify-between">
            <div>
              <h1 className="mb-2 text-4xl font-bold text-text">
                {repo.full_name}
              </h1>
              <p className="mb-6 text-lg text-text/80">{repo.description}</p>

              {/* Stats */}
              <div className="flex items-center gap-4">
                {/* If URL is a repository (contains /), show package stats, otherwise just link to org/user */}
                {repo.html_url.includes('/') ? (
                  <>
                    <a
                      href={`${repo.html_url}/stargazers`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-text transition-colors hover:text-link"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 .25a.75.75 0 01.673.418l3.058 6.197 6.839.994a.75.75 0 01.415 1.279l-4.948 4.823 1.168 6.811a.75.75 0 01-1.088.791L8 18.347l-6.116 3.215a.75.75 0 01-1.088-.79l1.168-6.812-4.948-4.823a.75.75 0 01.416-1.28l6.838-.993L7.327.668A.75.75 0 018 .25z" />
                      </svg>
                      <span>
                        {repo.stargazers_count.toLocaleString()} stars
                      </span>
                    </a>
                    <a
                      href={`${repo.html_url}/watchers`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-text transition-colors hover:text-link"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                      <span>
                        {repo.subscribers_count.toLocaleString()} watching
                      </span>
                    </a>
                    <a
                      href={`${repo.html_url}/network/members`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-text transition-colors hover:text-link"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5.559 8.855c.166 1.183.789 3.207 3.087 4.079C11 13.829 11 14.534 11 15v.163c-1.44.434-2.5 1.757-2.5 3.337 0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5c0-1.58-1.06-2.903-2.5-3.337V15c0-.466 0-1.171 2.354-2.065 2.298-.872 2.921-2.896 3.087-4.079C19.912 8.441 21 7.102 21 5.5 21 3.57 19.43 2 17.5 2S14 3.57 14 5.5c0 1.552 1.022 2.855 2.424 3.313-.215.978-.872 2.586-3.062 3.373C10.356 11.515 10 10.846 10 10c0-1.102.898-2 2-2s2 .898 2 2c0 .846-.356 1.515-1.362 2.186-2.19-.787-2.847-2.395-3.062-3.373C9.978 8.355 11 7.052 11 5.5 11 3.57 9.43 2 7.5 2S4 3.57 4 5.5c0 1.602 1.088 2.941 2.559 3.355zM17.5 4c.827 0 1.5.673 1.5 1.5S18.327 7 17.5 7 16 6.327 16 5.5 16.673 4 17.5 4zm-10 0C8.327 4 9 4.673 9 5.5S8.327 7 7.5 7 6 6.327 6 5.5 6.673 4 7.5 4zm5.5 6.5c0-.275.225-.5.5-.5s.5.225.5.5-.225.5-.5.5-.5-.225-.5-.5zM12 19c0 .827-.673 1.5-1.5 1.5S9 19.827 9 19s.673-1.5 1.5-1.5 1.5.673 1.5 1.5z" />
                      </svg>
                      <span>{repo.forks_count.toLocaleString()} forks</span>
                    </a>
                  </>
                ) : (
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text transition-colors hover:text-link"
                  >
                    View on GitHub
                  </a>
                )}
              </div>
            </div>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-text transition-colors hover:text-link"
            >
              <span>View on GitHub</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
