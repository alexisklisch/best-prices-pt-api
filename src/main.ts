import { router } from '@router/index.ts'
import { Hono } from 'hono'

const app = new Hono().basePath('/api')

app.route('/', router)

app.notFound((c) => {
  return c.html(`<h1>Página no encontrada</h1>`)
})

Deno.serve(app.fetch)
