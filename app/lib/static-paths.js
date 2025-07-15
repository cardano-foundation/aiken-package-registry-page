import { fetchAwesomeAikenPackages } from './github'

export async function generatePackagePaths() {
  const packages = await fetchAwesomeAikenPackages()
  const allPackages = packages.flatMap((category) =>
    category.packages
      .filter((pkg) => {
        if (
          !pkg ||
          typeof pkg.name !== 'string' ||
          typeof pkg.owner !== 'string'
        ) {
          console.log('Skipping invalid package:', pkg)
          return false
        }
        if (pkg.name === '*' || pkg.name.endsWith('/*')) {
          console.log('Skipping collection:', pkg.owner, pkg.name)
          return false
        }
        return true
      })
      .map((pkg) => ({
        owner: pkg.owner,
        name: pkg.name,
      })),
  )
  // Log the final paths
  console.log(
    'Static paths:',
    allPackages.map((p) => `${p.owner}/${p.name}`),
  )
  return allPackages
}
