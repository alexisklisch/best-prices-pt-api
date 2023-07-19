import { Page } from '@/components/Page.ts'
import { router } from '@router/index.ts'
import { Hono } from 'hono'

const app = new Hono().basePath('/api')

app.route('/', router)

app.notFound((c) => {
  return c.html(Page)
})

Deno.serve(app.fetch)
