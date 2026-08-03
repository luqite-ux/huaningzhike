import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import test from 'node:test'

const root = path.resolve(import.meta.dirname, '..')
const css = fs.readFileSync(path.join(root, 'app/globals.css'), 'utf8')
const hero = fs.readFileSync(path.join(root, 'components/home/hero-section.tsx'), 'utf8')
const homeSections = fs.readFileSync(path.join(root, 'components/home/home-sections.tsx'), 'utf8')
const layout = fs.readFileSync(path.join(root, 'app/layout.tsx'), 'utf8')
const header = fs.readFileSync(path.join(root, 'components/layout/site-header.tsx'), 'utf8')
const pages = fs.readdirSync(path.join(root, 'app'), { recursive: true })
  .filter((file) => file.endsWith('.tsx'))
  .map((file) => fs.readFileSync(path.join(root, 'app', file), 'utf8'))
  .join('\n')

test('public theme uses a light canvas and no former dark page root', () => {
  assert.match(css, /--background:\s*#F[0-9A-F]{5}/i)
  assert.doesNotMatch(pages, /bg-\[#050E1A\]/)
})

test('homepage sections do not restore the former dark canvas', () => {
  assert.doesNotMatch(homeSections, /(?:bg|from|via|to)-\[#(?:030B16|050E1A|070F1F|0A1530)\]/i)
})

test('brand assets use the transparent customer logo and HN favicon', () => {
  assert.match(layout, /\/favicon\.png/)
  assert.doesNotMatch(layout, /\/icon\.svg/)
  assert.match(header, /\/images\/logo-transparent\.png/)
  assert.ok(fs.existsSync(path.join(root, 'public/favicon.png')))
  assert.ok(fs.existsSync(path.join(root, 'public/images/logo-transparent.png')))
})

test('solution cards use clean customer R2 images without dark wash overlays', () => {
  assert.match(homeSections, /pub-c7a22068052144a5805830c30d280128\.r2\.dev/)
  assert.doesNotMatch(homeSections, /from-\[#0B1E3D\]\/80/)
})

test('homepage exposes rich motion with an accessible reduced-motion fallback', () => {
  const motionLayers = hero.match(/animate-(?:float|orbit|drift|light|gradient|pulse)/g) ?? []
  assert.ok(motionLayers.length >= 6, `expected at least 6 motion layers, found ${motionLayers.length}`)
  assert.match(css, /prefers-reduced-motion:\s*reduce/)
})
