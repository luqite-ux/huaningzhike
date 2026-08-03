import assert from 'node:assert/strict'
import test from 'node:test'

import { localizedList, localizedText, resolveLocale } from '../lib/i18n.ts'

test('localizedText follows requested, default, then first non-empty fallback order', () => {
  const value = { de: '', en: 'English', fr: 'Français' }
  assert.equal(localizedText(value, 'fr', 'en'), 'Français')
  assert.equal(localizedText(value, 'de', 'en'), 'English')
  assert.equal(localizedText({ fr: 'Français' }, 'de', 'en'), 'Français')
})

test('localizedList uses the same fallback order and ignores empty translations', () => {
  const value = { en: ['Vacuum control'], de: [], fr: ['Commande du vide'] }
  assert.deepEqual(localizedList(value, 'fr', 'en'), ['Commande du vide'])
  assert.deepEqual(localizedList(value, 'de', 'en'), ['Vacuum control'])
})

test('resolveLocale accepts enabled locales and falls back to the configured default', () => {
  assert.equal(resolveLocale('fr', ['en', 'fr'], 'en'), 'fr')
  assert.equal(resolveLocale('de', ['en', 'fr'], 'en'), 'en')
})
