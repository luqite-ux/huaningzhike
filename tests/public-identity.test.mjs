import assert from 'node:assert/strict'
import { spawn } from 'node:child_process'
import { once } from 'node:events'
import net from 'node:net'
import path from 'node:path'
import test from 'node:test'

const root = path.resolve(import.meta.dirname, '..')
const expectedOrigin = 'https://huaningpvd.com'
const expectedEmail = 'info@huaningpvd.com'
const retiredIdentity = ['huaningzhike.com', 'huaning@huaningzhike.cn']

async function availablePort() {
  const server = net.createServer()
  server.listen(0, '127.0.0.1')
  await once(server, 'listening')
  const address = server.address()
  server.close()
  await once(server, 'close')
  return address.port
}

async function waitForServer(origin, output) {
  const deadline = Date.now() + 60_000
  while (Date.now() < deadline) {
    try {
      const response = await fetch(origin)
      if (response.ok) return
    } catch {
      // The development server has not started listening yet.
    }
    await new Promise((resolve) => setTimeout(resolve, 250))
  }
  throw new Error(`Next development server did not start:\n${output.join('')}`)
}

test('public pages and SEO documents expose only the formal public identity', async (t) => {
  const port = await availablePort()
  const origin = `http://127.0.0.1:${port}`
  const output = []
  const environment = { ...process.env, NODE_ENV: 'development' }
  delete environment.NEXT_PUBLIC_SITE_URL

  const server = spawn(process.execPath, [path.join(root, 'node_modules', 'next', 'dist', 'bin', 'next'), 'dev', '--hostname', '127.0.0.1', '--port', String(port)], {
    cwd: root,
    env: environment,
    stdio: ['ignore', 'pipe', 'pipe'],
  })
  server.stdout.on('data', (chunk) => output.push(chunk.toString()))
  server.stderr.on('data', (chunk) => output.push(chunk.toString()))

  t.after(async () => {
    server.kill('SIGTERM')
    await once(server, 'exit')
  })

  await waitForServer(origin, output)

  const publicPages = ['/', '/contact', '/privacy', '/about', '/sample-coating', '/solutions/optical-coatings']
  for (const page of publicPages) {
    const response = await fetch(`${origin}${page}`)
    assert.equal(response.status, 200, `expected ${page} to render`)
    const html = await response.text()
    assert.match(html, new RegExp(expectedEmail.replace('@', '@')), `${page} should expose the formal public email`)
    for (const retiredValue of retiredIdentity) {
      assert.doesNotMatch(html, new RegExp(retiredValue.replace('.', '\\.')), `${page} must not expose ${retiredValue}`)
    }
  }

  const rootHtml = await (await fetch(origin)).text()
  assert.match(rootHtml, new RegExp(`<link rel="canonical" href="${expectedOrigin}"`))
  assert.match(rootHtml, new RegExp(`"url":"${expectedOrigin}"`))
  assert.match(rootHtml, new RegExp(`"email":"${expectedEmail}"`))

  const robots = await (await fetch(`${origin}/robots.txt`)).text()
  assert.match(robots, new RegExp(`Sitemap: ${expectedOrigin}/sitemap\\.xml`))
  assert.match(robots, new RegExp(`Host: ${expectedOrigin}`))

  const sitemap = await (await fetch(`${origin}/sitemap.xml`)).text()
  assert.match(sitemap, new RegExp(`<loc>${expectedOrigin}/products</loc>`))
  for (const retiredValue of retiredIdentity) {
    assert.doesNotMatch(sitemap, new RegExp(retiredValue.replace('.', '\\.')))
  }
})
