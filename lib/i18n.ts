export type LocaleMap<T> = Record<string, T | null | undefined>

export const DEFAULT_LOCALE = 'en'

export function resolveLocale(
  requested: string | null | undefined,
  supported: readonly string[] = [DEFAULT_LOCALE],
  defaultLocale = DEFAULT_LOCALE,
): string {
  const normalized = requested?.trim().toLowerCase()
  return normalized && supported.includes(normalized) ? normalized : defaultLocale
}

function firstNonEmpty<T>(value: LocaleMap<T>, isEmpty: (entry: T) => boolean): T | undefined {
  return Object.values(value).find((entry): entry is T => entry != null && !isEmpty(entry))
}

export function localizedText(
  value: unknown,
  requestedLocale = DEFAULT_LOCALE,
  defaultLocale = DEFAULT_LOCALE,
  fallback = '',
): string {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return fallback
  const map = value as LocaleMap<unknown>
  const candidates = [map[requestedLocale], map[defaultLocale]]
  const selected = candidates.find((entry) => typeof entry === 'string' && entry.trim())
    ?? firstNonEmpty(map, (entry) => typeof entry !== 'string' || !entry.trim())
  return typeof selected === 'string' ? selected.trim() : fallback
}

export function localizedList(
  value: unknown,
  requestedLocale = DEFAULT_LOCALE,
  defaultLocale = DEFAULT_LOCALE,
  fallback: string[] = [],
): string[] {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return fallback
  const map = value as LocaleMap<unknown>
  const valid = (entry: unknown): entry is string[] =>
    Array.isArray(entry) && entry.some((item) => typeof item === 'string' && item.trim())
  const selected = [map[requestedLocale], map[defaultLocale]].find(valid)
    ?? Object.values(map).find(valid)
  return valid(selected) ? selected.filter((item) => typeof item === 'string' && item.trim()) : fallback
}
