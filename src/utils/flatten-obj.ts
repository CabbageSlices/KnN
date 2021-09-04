export const defaultPathFormatter = (nestedPath: string[]): string => nestedPath.join('.')

type FlattenedObject = Record<
  string,
  //eslint-disable-next-line @typescript-eslint/ban-types
  string | number | boolean | null | undefined | [] | never | Function
>

/**
 * given a nested object returns a flattened object.
 * each nested parameter will be given a new key consisting of the path of the parameter within the original object.
 * eg: {
 *  a: {
 *     b: 1
 *  },
 *  c: 2,
 *  d: {}
 * }
 *
 *
 *
 * will become {a.b: 1, c: 2}.
 *
 * NOTE: nested object/array array will not be included in the final results. e.g in the above example, a.d: {} is not included
 * the path formatter function allows changing the format of the nested keys.
 * @param obj
 * @param pathFormatter
 * @param pathFromRoot
 * @returns
 */
function flattenObj(
  obj: Record<string, any> | any[],
  pathFormatter: (nestedPath: string[]) => string = defaultPathFormatter,
  pathFromRoot: string[] = []
): FlattenedObject {
  let flattened = <FlattenedObject>{}

  for (const [key, value] of Object.entries(obj)) {
    const currentPath = [...pathFromRoot, key]

    const flattenedKey = pathFormatter(currentPath)
    let flattenedValue

    if (Array.isArray(value) || (typeof value === 'object' && value)) {
      flattenedValue = flattenObj(value, pathFormatter, currentPath)
    } else {
      flattenedValue = {
        [flattenedKey]: value,
      }
    }

    flattened = { ...flattened, ...flattenedValue }
  }

  return flattened
}

export default flattenObj
