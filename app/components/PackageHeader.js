export function PackageHeader({ data }) {
  const { repo } = data

  return (
    <div className="border-b border-border">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="mb-2 text-4xl font-bold text-text">
              {repo.full_name}
            </h1>
            <p className="mb-6 text-lg text-text/80">{repo.description}</p>

            {/* Stats */}
            <div className="flex flex-wrap gap-4">
              <a
                href={`${repo.html_url}/stargazers`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-text transition-colors hover:text-link"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .25a.75.75 0 01.673.418l3.058 6.197 6.839.994a.75.75 0 01.415 1.279l-4.948 4.823 1.168 6.811a.75.75 0 01-1.088.791L12 18.347l-6.117 3.216a.75.75 0 01-1.088-.79l1.168-6.812-4.948-4.823a.75.75 0 01.416-1.28l6.838-.993L11.327.668A.75.75 0 0112 .25z" />
                </svg>
                <span>{repo.stargazers_count.toLocaleString()} stars</span>
              </a>
              <a
                href={`${repo.html_url}/network/members`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-text transition-colors hover:text-link"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zm-3.25-1.75a3.25 3.25 0 106.5 0 3.25 3.25 0 00-6.5 0zm-3-12.75a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zM2.5 4.75a3.25 3.25 0 106.5 0 3.25 3.25 0 00-6.5 0zM18.25 6.5a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zM15 4.75a3.25 3.25 0 106.5 0 3.25 3.25 0 00-6.5 0z" />
                </svg>
                <span>{repo.forks_count.toLocaleString()} forks</span>
              </a>
              <a
                href={`${repo.html_url}/watchers`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-text transition-colors hover:text-link"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.62-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 5a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
                <span>{repo.subscribers_count.toLocaleString()} watching</span>
              </a>
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
  )
}
