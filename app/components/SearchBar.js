'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { searchPackages } from '../lib/packages'

export function SearchBar({ packages }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const searchRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Handle search input changes
  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      setIsOpen(false)
      return
    }

    const searchResults = searchPackages(packages, query)
    setResults(searchResults)
    setIsOpen(true)
  }, [query, packages])

  const handleSelect = (pkg) => {
    // Clear the search query
    setQuery('')
    setResults([])
    setIsOpen(false)

    if (pkg.name.endsWith('*')) {
      // For collections, open GitHub in a new tab
      window.open(`https://github.com/${pkg.owner}`, '_blank')
    } else {
      // For regular packages, navigate to the package page
      router.push(`/packages/${pkg.owner}/${pkg.name}`)
    }
  }

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && results.length > 0) {
      handleSelect(results[0])
    } else if (e.key === 'Escape') {
      setIsOpen(false)
      setQuery('')
    }
  }

  return (
    <div className="relative w-64" ref={searchRef}>
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query.trim() && setIsOpen(true)}
          placeholder="Search packages..."
          className="placeholder:text-text/40 w-full rounded-lg border border-border bg-window-bg px-3 py-1.5 pr-8 text-sm text-text focus:border-link focus:outline-none"
        />
        <svg
          className="text-text/40 absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {/* Results dropdown */}
      {isOpen && (
        <div className="absolute z-50 mt-1 w-full rounded-lg border border-border bg-window-bg shadow-lg">
          {results.length > 0 ? (
            <div className="max-h-96 overflow-auto py-1">
              {results.map((pkg, index) => {
                const isCollection = pkg.name.endsWith('*')
                const displayName = isCollection
                  ? pkg.name.replace('/*', '')
                  : pkg.name
                const isLast = index === results.length - 1

                const itemContent = (
                  <>
                    <div className="font-medium text-text">
                      {pkg.owner}/{displayName}
                    </div>
                    {pkg.description && (
                      <div className="text-text/60 mt-0.5 line-clamp-2 text-xs">
                        {pkg.description}
                      </div>
                    )}
                  </>
                )

                return (
                  <button
                    key={`${pkg.owner}/${pkg.name}`}
                    onClick={() => handleSelect(pkg)}
                    className={`hover:bg-window-bg/80 w-full px-3 py-2 text-left ${
                      !isLast ? 'border-b border-border/50' : ''
                    }`}
                  >
                    {itemContent}
                  </button>
                )
              })}
            </div>
          ) : (
            <div className="text-text/60 px-3 py-4 text-center text-sm">
              <div className="mb-1">No packages found</div>
              <div className="text-xs">Try a different search term</div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
