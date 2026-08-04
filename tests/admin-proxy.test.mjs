import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import test from 'node:test'

const root = path.resolve(import.meta.dirname, '..')
const proxyPath = path.join(root, 'proxy.ts')
const middlewarePath = path.join(root, 'middleware.ts')

test('admin proxy normalizes Server Action origin headers at the customer-site boundary', () => {
  assert.equal(fs.existsSync(proxyPath), true, 'proxy.ts must own the external admin rewrite')

  const proxy = fs.readFileSync(proxyPath, 'utf8')
  assert.match(proxy, /requestHeaders\.set\(['"]origin['"],\s*adminOrigin\.origin\)/)
  assert.match(proxy, /requestHeaders\.set\(['"]x-forwarded-host['"],\s*adminOrigin\.host\)/)
  assert.match(proxy, /NextResponse\.rewrite\(destination,\s*\{\s*request:\s*\{\s*headers:\s*requestHeaders\s*\}\s*\}\)/s)
})

test('admin proxy leaves customer-site login and logout handlers local', () => {
  assert.equal(fs.existsSync(proxyPath), true, 'proxy.ts must exist')

  const proxy = fs.readFileSync(proxyPath, 'utf8')
  assert.match(proxy, /pathname === ['"]\/admin\/login['"]/)
  assert.match(proxy, /pathname === ['"]\/admin\/logout['"]/)
  assert.match(proxy, /return NextResponse\.next\(\)/)
})

test('admin proxy preserves session enforcement without a legacy middleware conflict', () => {
  const proxy = fs.readFileSync(proxyPath, 'utf8')

  assert.equal(fs.existsSync(middlewarePath), false, 'Next.js 16 cannot load middleware.ts and proxy.ts together')
  assert.match(proxy, /SESSION_COOKIE/)
  assert.match(proxy, /request\.cookies\.get\(SESSION_COOKIE\)/)
  assert.match(proxy, /url\.pathname = ['"]\/admin\/login['"]/)
  assert.match(proxy, /NextResponse\.redirect\(url\)/)
})
