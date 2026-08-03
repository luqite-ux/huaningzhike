import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import test from 'node:test'

const root = path.resolve(import.meta.dirname, '..')
const css = fs.readFileSync(path.join(root, 'app/globals.css'), 'utf8')
const hero = fs.readFileSync(path.join(root, 'components/home/hero-section.tsx'), 'utf8')
const pages = fs.readdirSync(path.join(root, 'app'), { recursive: true })
  .filter((file) => file.endsWith('.tsx'))
  .map((file) => fs.readFileSync(path.join(root, 'app', file), 'utf8'))
  .join('\n')

test('public theme uses a light canvas and no former dark page root', () => {
  assert.match(css, /--background:\s*#F[0-9A-F]{5}/i)
  assert.doesNotMatch(pages, /bg-\[#050E1A\]/)
})

test('homepage exposes rich motion with an accessible reduced-motion fallback', () => {
  const motionLayers = hero.match(/animate-(?:float|orbit|drift|light|gradient|pulse)/g) ?? []
  assert.ok(motionLayers.length >= 6, `expected at least 6 motion layers, found ${motionLayers.length}`)
  assert.match(css, /prefers-reduced-motion:\s*reduce/)
})
