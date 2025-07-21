export default function SubmissionGuide() {
  const submitUrl = createGitHubSubmissionUrl()

  return (
    <div className="min-h-screen bg-window-bg">
      <div className="container mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-0">
        <div className="prose prose-invert max-w-none">
          <h1 className="mb-8 text-4xl font-bold text-text">
            Package Submission Guide
          </h1>

          <div className=" rounded-lg border border-yellow-500/20 bg-yellow-500/10 px-6 pb-4">
            <div className="flex items-start gap-3">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-yellow-400">
                  Temporary Process Notice
                </h3>
                <p className="mb-3 text-yellow-200">
                  This manual submission process is <strong>temporary</strong>.
                  We're working toward an automated system that will detect
                  packages published on-chain.
                </p>
                <p className="text-sm text-yellow-200">
                  The future vision is to have a decentralized registry where
                  packages are automatically discovered from on-chain
                  publications, eliminating gatekeeping while maintaining
                  quality.
                </p>
              </div>
            </div>
          </div>

          <h2 className="mb-4 text-2xl font-semibold text-text">
            Current Process
          </h2>
          <p className="text-text/80 mb-6">
            For now, package submissions are handled through GitHub issues. This
            allows us to maintain some curation while we develop the on-chain
            discovery system.
          </p>

          <h3 className="mb-3 text-xl font-semibold text-text">
            Submission Requirements
          </h3>
          <ul className="text-text/80 mb-6 space-y-2">
            <li>
              <strong>Open Source</strong>: Your package must be publicly
              available
            </li>
            <li>
              <strong>Aiken Compatible</strong>: Written in or for the Aiken
              ecosystem
            </li>
            <li>
              <strong>Documentation</strong>: Clear README with usage
              instructions
            </li>
            <li>
              <strong>Functional</strong>: Package works and is tested
            </li>
            <li>
              <strong>Licensed</strong>: Has an appropriate open-source license
            </li>
          </ul>

          <h3 className="mb-3 text-xl font-semibold text-text">
            What We're Building Toward
          </h3>
          <div className="mb-8 rounded-lg border border-blue-500/20 bg-blue-500/10 p-6">
            <h4 className="mb-3 font-semibold text-blue-400">
              Future: On-Chain Package Discovery
            </h4>
            <ul className="space-y-2 text-blue-200">
              <li>
                <strong>Automatic Detection</strong>: Packages published
                on-chain will be automatically discovered
              </li>
              <li>
                <strong>Curated Labels</strong>: "Awesome Aiken" will become a
                quality label, not a requirement
              </li>
              <li>
                <strong>Decentralized</strong>: No central authority controlling
                what gets listed
              </li>
              <li>
                <strong>Trustless</strong>: On-chain publication provides
                authenticity
              </li>
              <li>
                <strong>Real-time</strong>: New packages appear as soon as
                they're published
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-window-bg px-6 pb-6">
            <h3 className="mb-3 text-xl font-semibold text-text">
              Ready to Submit?
            </h3>
            <p className="text-text/80 mb-4">
              Click the button below to create a submission issue with all the
              necessary information pre-filled.
            </p>
            <a
              href={submitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 !text-white transition-colors hover:bg-green-700 hover:!text-white"
            >
              <span>Submit Your Package</span>
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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
