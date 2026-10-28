/** Normalize a provider endpoint while preserving its path prefix. */
export function normalizeBaseURL(raw: string, label = 'provider baseURL'): string {
  const value = raw.trim()
  if (value.length === 0) throw new Error(`${label} must not be empty`)
  let parsed: URL
  try {
    parsed = new URL(value)
  } catch {
    throw new Error(`${label} must be a valid absolute URL`)
  }
  if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
    throw new Error(`${label} must use http or https`)
  }
  if (parsed.username.length > 0 || parsed.password.length > 0) {
    throw new Error(`${label} must not contain embedded credentials`)
  }
  if (parsed.search.length > 0 || parsed.hash.length > 0) {
    throw new Error(`${label} must not contain a query string or fragment`)
  }
  parsed.pathname = parsed.pathname.replace(/\/+$/, '')
  return parsed.toString().replace(/\/$/, '')
}
