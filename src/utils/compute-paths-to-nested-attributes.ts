export const defaultPathFormatter = (nestedPath: string[]): string => nestedPath.join('-')

function computePathsToNestedAttributes(
  item: Record<string, any> | any[],
  pathFormatter: (nestedPath: string[]) => string = defaultPathFormatter,
  pathFromRoot: string[] = []
): Record<string, any> {
  const attributePaths = Array.isArray(item) ? [] : <Record<string, any>>{}

  for (const [key, value] of Object.entries(item)) {
    const currentPath = [...pathFromRoot, key]
    let computedPath

    if ((typeof value === 'object' && value) || (Array.isArray(value) && value.length > 0)) {
      computedPath = computePathsToNestedAttributes(value, pathFormatter, currentPath)
    } else {
      computedPath = pathFormatter(currentPath)
    }

    if (Array.isArray(attributePaths)) {
      attributePaths.push(computedPath)
    } else {
      attributePaths[key] = computedPath
    }
  }

  return attributePaths
}

export default computePathsToNestedAttributes
