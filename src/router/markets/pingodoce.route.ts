import { getPingoDoceProducts } from '@services/pingodoce.service.ts'
import { Hono } from 'hono'

const pingodoce = new Hono()

// Search
pingodoce.get('/pingodoce', async (c) => {
  const { product, size } = c.req.query()
  const data = await getPingoDoceProducts(product, size)

  return c.json(data)
})

export { pingodoce }
