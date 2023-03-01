export function deepCopyWithStringPropsAndEmptyValues<T extends Record<string, any>>(obj: T): { [key: string]: string } & T {
  // If the input is not an object, return it as-is
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }

  // If the input is an array, map over its items recursively
  if (Array.isArray(obj)) {
    return obj.map((item) => deepCopyWithStringPropsAndEmptyValues(item)) as any
  }

  // Otherwise, the input is an object, so create a new object with the same structure
  const newObj = {} as { [key: string]: string } & T
  for (let [key, value] of Object.entries(obj)) {
    ;(newObj as { [k: string]: string })[key] =
      typeof value === 'object' && value !== null
        ? deepCopyWithStringPropsAndEmptyValues(value) // Recursively copy nested objects
        : '' // Assign empty string to non-object properties
  }
  return newObj
}
