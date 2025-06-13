// Helper function to get all packages flattened
export const getAllPackages = (packagesData) => {
  return packagesData.flatMap((category) =>
    category.packages.map((pkg) => ({
      ...pkg,
      category: category.category,
    })),
  )
}

// Helper function to search packages
export const searchPackages = (packagesData, query) => {
  const searchTerm = query.toLowerCase()
  return getAllPackages(packagesData).filter(
    (pkg) =>
      pkg.name.toLowerCase().includes(searchTerm) ||
      pkg.owner.toLowerCase().includes(searchTerm) ||
      pkg.category.toLowerCase().includes(searchTerm) ||
      pkg.description.toLowerCase().includes(searchTerm),
  )
}
