'use client'

import { useState } from 'react'
import { searchPackages } from '../lib/packages'
import Link from 'next/link'

export default function PackageList({ initialPackages }) {
  const [searchQuery, setSearchQuery] = useState('')
  const filteredPackages = searchQuery
    ? searchPackages(initialPackages, searchQuery)
    : initialPackages

  const isRepositoryUrl = (url) => {
    // Check if URL has more than 4 segments (e.g., github.com/owner/repo)
    return url.split('/').length > 4
  }

  return (
    <main className="min-h-screen bg-window-bg">
      {/* Hero Section */}
      <div className="bg-window-bg py-24 text-text">
        <div className="container mx-auto max-w-6xl px-4">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-text md:text-6xl">
            Aiken Package Registry
          </h1>
          <p className="mb-12 text-xl text-text opacity-80 md:text-2xl">
            Discover and explore Aiken packages for your Cardano smart contracts
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Search packages by name, category, or description..."
                className="w-full rounded-lg border border-border bg-window-bg px-4 py-3 text-text placeholder-text/50 focus:border-link focus:outline-none focus:ring-2 focus:ring-link/20"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute right-3 top-3 text-text/50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Packages List */}
      <div className="container mx-auto max-w-6xl px-4 py-16">
        {searchQuery ? (
          // Search Results
          <div>
            <h2 className="mb-8 text-3xl font-bold text-text">
              Search Results for "{searchQuery}"
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {filteredPackages.map((pkg) => (
                <PackageCard key={`${pkg.owner}/${pkg.name}`} pkg={pkg} />
              ))}
            </div>
          </div>
        ) : (
          // Categories View
          <div className="space-y-16">
            {initialPackages.map((category) => (
              <div key={category.category}>
                <h2 className="mb-8 text-3xl font-bold text-text">
                  {category.category}
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {category.packages.map((pkg) => (
                    <PackageCard key={`${pkg.owner}/${pkg.name}`} pkg={pkg} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}

// Package Card Component
function PackageCard({ pkg }) {
  // For collections, we want to use the URL directly from the package data
  const isCollection = pkg.name === '*' || pkg.name.endsWith('/*')
  const displayName = isCollection ? pkg.name.replace('/*', '') : pkg.name

  const CardContent = () => (
    <div className="flex items-start justify-between">
      <div>
        <h3 className="mb-2 font-mono text-xl font-medium text-text group-hover:text-link">
          {pkg.owner}/{displayName}
        </h3>
        <p className="mb-4 text-text/80">{pkg.description}</p>
        <div className="flex items-center gap-2 text-sm">
          <span className="rounded-full bg-link/10 px-3 py-1 font-medium text-link">
            {pkg.category}
          </span>
          {isCollection && (
            <span className="rounded-full bg-window-bg/50 px-3 py-1 font-medium text-text/60">
              Collection
            </span>
          )}
        </div>
      </div>
      <div className="text-text/50 transition-colors group-hover:text-link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={
              isCollection
                ? 'M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                : 'M9 5l7 7-7 7'
            }
          />
        </svg>
      </div>
    </div>
  )

  // For collections, use the URL from the package data
  if (isCollection) {
    return (
      <a
        href={pkg.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block rounded-xl border border-border bg-window-bg p-6 transition-all hover:bg-link/5"
      >
        <CardContent />
      </a>
    )
  }

  // For regular packages, use the internal route
  return (
    <Link
      href={`/packages/${pkg.owner}/${pkg.name}`}
      className="group block rounded-xl border border-border bg-window-bg p-6 transition-all hover:bg-link/5"
    >
      <CardContent />
    </Link>
  )
}
