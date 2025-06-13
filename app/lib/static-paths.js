'use server'

import { fetchAwesomeAikenPackages } from './github'

export async function generatePackagePaths() {
  // Fetch all packages to get the list of possible [owner]/[name] combinations
  const packages = await fetchAwesomeAikenPackages()

  // Flatten the packages array to get all individual packages
  const allPackages = packages.flatMap((category) =>
    category.packages.map((pkg) => ({
      owner: pkg.owner,
      name: pkg.name,
    })),
  )

  // Return the params for each package
  return allPackages.map((pkg) => ({
    owner: pkg.owner,
    name: pkg.name,
  }))
}
