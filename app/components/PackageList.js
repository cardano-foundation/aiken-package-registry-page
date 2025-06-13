'use client'

import { useState } from 'react'
import { searchPackages } from '../../lib/packages'

export default function PackageList({ initialPackages }) {
  const [searchQuery, setSearchQuery] = useState('')
  const filteredPackages = searchQuery
    ? searchPackages(initialPackages, searchQuery)
    : initialPackages

  return (
    <main className="bg-window-bg min-h-screen">
      {/* Hero Section */}
      <div className="bg-window-bg text-text py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <h1 className="text-text mb-6 text-4xl font-bold tracking-tight md:text-6xl">
            Aiken Package Registry
          </h1>
          <p className="text-text mb-12 text-xl opacity-80 md:text-2xl">
            Discover and explore Aiken packages for your Cardano smart contracts
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Search packages by name, category, or description..."
                className="border-border bg-window-bg text-text placeholder-text/50 focus:border-link focus:ring-link/20 w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2"
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

      {/* Packages List */}
      <div className="container mx-auto max-w-6xl px-4 py-16">
        {searchQuery ? (
          // Search Results
          <div>
            <h2 className="text-text mb-8 text-3xl font-bold">
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
                <h2 className="text-text mb-8 text-3xl font-bold">
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
  return (
    <a
      href={pkg.url}
      target="_blank"
      rel="noopener noreferrer"
      className="border-border bg-window-bg hover:bg-link/5 group block rounded-xl border p-6 transition-all"
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-text group-hover:text-link mb-2 font-mono text-xl font-medium">
            {pkg.owner}/{pkg.name}
          </h3>
          <p className="text-text/80 mb-4">{pkg.description}</p>
          <div className="flex items-center text-sm">
            <span className="bg-link/10 text-link rounded-full px-3 py-1 font-medium">
              {pkg.category}
            </span>
          </div>
        </div>
        <div className="text-text/50 group-hover:text-link transition-colors">
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
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>
      </div>
    </a>
  )
}
