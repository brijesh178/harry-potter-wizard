import { CAMEL_CASE_REGEX } from "./constants"

export function formatDisplayText(str: string) {
  if (!str) return str

  if (CAMEL_CASE_REGEX.test(str)) {
    str = str
      .replace(/([A-Z])/g, " $1")
      .toLowerCase()
      .trim()
  }

  return str.charAt(0).toUpperCase() + str.slice(1)
}
