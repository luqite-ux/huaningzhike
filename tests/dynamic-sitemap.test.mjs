import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import test from 'node:test'

const root = path.resolve(import.meta.dirname, '..')
const routePath = path.join(root, 'app/sitemap.xml/route.ts')

test('sitemap uses an uncached request-time route for database articles', () => {
  assert.equal(fs.existsSync(routePath), true, 'expected an explicit sitemap.xml route handler')

  const source = fs.readFileSync(routePath, 'utf8')
  assert.match(source, /export\s+const\s+dynamic\s*=\s*['"]force-dynamic['"]/)
  assert.match(source, /export\s+const\s+revalidate\s*=\s*0/)
  assert.match(source, /getAllArticles\s*\(/)
  assert.match(source, /Cache-Control['"]?\s*:\s*['"]no-store/)
  assert.match(source, /Content-Type['"]?\s*:\s*['"]application\/xml/)
})

test('the cached metadata sitemap convention is not registered at the same URL', () => {
  assert.equal(fs.existsSync(path.join(root, 'app/sitemap.ts')), false)
})
