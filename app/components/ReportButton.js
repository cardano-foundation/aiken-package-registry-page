'use client'

export function ReportButton({ owner, packageName, className = '' }) {
  const reportUrl = createGitHubIssueUrl(owner, packageName)

  return (
    <a
      href={reportUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-1 text-red-400 transition-colors hover:text-red-300 ${className}`}
      title="Report this package"
    >
      <span>Report Package</span>
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
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.732 16.5c-.77.833.192 2.5 1.732 2.5z"
        />
      </svg>
    </a>
  )
}

function createGitHubIssueUrl(owner, packageName) {
  const repoOwner = 'aiken-lang'
  const repoName = 'awesome-aiken'

  const title = `[REPORT] Package: ${owner}/${packageName}`

  const body = `## Package Information
- **Package**: ${owner}/${packageName}
- **Package URL**: https://aiken-packages.dev/packages/${owner}/${packageName}
- **Repository**: https://github.com/${owner}/${packageName}

## Issue Category
Please select the category that best describes the issue:

- [ ] **Malicious Code** - Contains backdoors, malware, or harmful code
- [ ] **Inappropriate Content** - Contains offensive, illegal, or inappropriate material    
- [ ] **Copyright Violation** - Violates copyright or licensing terms
- [ ] **Spam/Low Quality** - Spam, duplicate, or very low quality package
- [ ] **Misleading Information** - Contains false or misleading information
- [ ] **Security Vulnerability** - Contains known security vulnerabilities
- [ ] **Other** - Other violations not covered above

## Description
Please provide details about the issue:

<!-- Describe the problem in detail. Include any relevant information that would help moderators understand the issue. -->

## Additional Context
<!-- Any additional context, screenshots, or links that would be helpful -->

---
*This report was generated from the Aiken Package Registry*`

  const url = new URL(`https://github.com/${repoOwner}/${repoName}/issues/new`)
  url.searchParams.set('title', title)
  url.searchParams.set('body', body)
  url.searchParams.set('labels', 'package-report,needs-review')

  return url.toString()
}
