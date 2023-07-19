import { searchAuchanProducts } from '@services/auchan.service.ts'
import { Hono } from 'hono'

const auchan = new Hono()

// Search
auchan.get('/auchan', async (c) => {
  const { product, size } = c.req.query()
  const data = await searchAuchanProducts(product, size)

  return c.json(data)
})

export { auchan }
