'use client'

export function AddProjectButton({ className = '' }) {
  const submitUrl = createGitHubSubmissionUrl()

  return (
    <a
      href={submitUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-2 text-text transition-colors hover:text-text ${className}`}
      title="Submit your package to the registry"
    >
      <span className="whitespace-nowrap text-sm font-medium">Add Package</span>
      <svg
        className="h-6 w-6 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
    </a>
  )
}

function createGitHubSubmissionUrl() {
  const repoOwner = 'aiken-lang'
  const repoName = 'awesome-aiken'

  const title = `[SUBMISSION] Add Package: [Your Package Name]`

  const body = `## Package Submission Request

**IMPORTANT**: This is a temporary submission process. In the future, packages will be automatically discovered from on-chain publications. The current manual process is not the long-term solution and will be replaced with a more decentralized approach.

### Package Information
- **Package Name**: [Your package name]
- **Repository URL**: [GitHub repository URL]
- **Package Description**: [Brief description of what your package does]
- **Category**: [e.g., validator, library, utility, etc.]

### Submission Requirements
Please ensure your package meets the following criteria:

- [ ] **Open Source**: Package is publicly available on GitHub
- [ ] **Aiken Compatible**: Package is written in or for the Aiken ecosystem
- [ ] **Documentation**: Has a clear README with usage instructions
- [ ] **Working Code**: Package is functional and tested
- [ ] **License**: Has an appropriate open-source license

### Package Details
**Brief Description**: 
<!-- Describe what your package does and why it's useful -->

**Use Cases**: 
<!-- Explain when/why someone would use this package -->

**Dependencies**: 
<!-- List any major dependencies or requirements -->

### Author Information
- **Your Name/Organization**: 
- **Contact** (optional): 

### Additional Notes
<!-- Any additional information about your package -->

---

**Future Process Notice**: We plan to automatically detect and list packages that are published on-chain, eliminating the need for manual submissions. This will create a more decentralized and trustless package registry.

*This submission was created via the Aiken Package Registry*`

  const url = new URL(`https://github.com/${repoOwner}/${repoName}/issues/new`)
  url.searchParams.set('title', title)
  url.searchParams.set('body', body)
  url.searchParams.set('labels', 'package-submission,needs-review')

  return url.toString()
}
