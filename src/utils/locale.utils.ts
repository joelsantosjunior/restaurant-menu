import localeData from '../assets/locale.json'

interface SourceLocaleObject {
  [key: string]: SourceLocaleObject | string
}

export type LocaleObject = Record<string, string>

function flattenObject(obj: SourceLocaleObject, parentKey = '', sep = '.') {
  const flattened: LocaleObject = {}

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const newKey = parentKey ? `${parentKey}${sep}${key}` : key

      if (
        typeof obj[key] === 'object' &&
        obj[key] !== null &&
        !Array.isArray(obj[key])
      ) {
        Object.assign(
          flattened,
          flattenObject(obj[key] as SourceLocaleObject, newKey, sep)
        )
      } else {
        flattened[newKey] = obj[key] as string
      }
    }
  }

  return flattened
}

export const localeDictionary: LocaleObject = flattenObject(localeData)
