'use client'

import { useState } from 'react'
import Link from 'next/link'
import { searchPackages } from '../lib/packages'

export default function PackageList({ initialPackages }) {
  const [searchQuery, setSearchQuery] = useState('')
  const filteredPackages = searchQuery
    ? searchPackages(initialPackages, searchQuery)
    : initialPackages

  return (
    <main className="min-h-screen bg-window-bg">
      {/* Hero Section */}
      <div className="bg-window-bg py-24 text-text">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-text md:text-6xl">
            Aiken Package Registry
          </h1>
          <p className="text-text/80 mb-12 text-xl md:text-2xl">
            Discover and explore Aiken packages for your Cardano smart contracts
          </p>

          {/* Search Bar with shadow */}
          <div className="relative max-w-3xl">
            <div className="bg-window-bg/50 relative rounded-lg shadow-lg ring-1 ring-border/20 backdrop-blur-sm">
              <input
                type="text"
                placeholder="Search packages by name, category, or description..."
                className="placeholder-text/50 focus:ring-link/20 w-full rounded-lg border border-border bg-transparent px-4 py-3 text-text focus:border-link focus:outline-none focus:ring-2"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="text-text/50 absolute right-3 top-3">
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

      {/* Divider with label */}
      <div className="relative -mt-8 mb-12">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-border/30" />
        </div>
        <div className="relative flex justify-center">
          <span className="text-text/60 bg-window-bg px-4 text-sm font-medium">
            {searchQuery ? 'Search Results' : 'Available Packages'}
          </span>
        </div>
      </div>

      {/* Packages List */}
      <div className="container mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-0">
        {searchQuery ? (
          // Search Results
          <div>
            <h2 className="mb-8 text-2xl font-semibold text-text">
              Results for "{searchQuery}"
            </h2>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
                <h2 className="mb-8 text-2xl font-semibold text-text">
                  {category.category}
                </h2>
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
  const isCollection = pkg.name === '*' || pkg.name.endsWith('/*')
  const displayName = isCollection ? pkg.name.replace('/*', '') : pkg.name

  const CardContent = () => (
    <div className="flex items-start justify-between">
      <div>
        <h3 className="mb-2 font-mono text-lg font-medium text-text group-hover:text-link">
          {pkg.owner}/{displayName}
        </h3>
        <p className="text-text/80 mb-4 line-clamp-2">{pkg.description}</p>
        <div className="flex items-center gap-2 text-sm">
          <span className="bg-link/10 rounded-full px-3 py-1 font-medium text-link">
            {pkg.category}
          </span>
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

  if (isCollection) {
    return (
      <a
        href={pkg.url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-window-bg/50 hover:bg-link/5 group block rounded-xl border border-border p-6 transition-all hover:border-link hover:shadow-md"
      >
        <CardContent />
      </a>
    )
  }

  return (
    <Link
      href={`/packages/${pkg.owner}/${pkg.name}`}
      className="bg-window-bg/50 hover:bg-link/5 group block rounded-xl border border-border p-6 transition-all hover:border-link hover:shadow-md"
    >
      <CardContent />
    </Link>
  )
}
