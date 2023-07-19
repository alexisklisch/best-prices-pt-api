import { getSales } from '@services/pingodoce.service.ts'
import { Hono } from 'hono'

const pingodoce = new Hono()

// Search
pingodoce.get('/pingodoce', async (c) => {
  const { product, size } = c.req.query()
  const data = await getSales(
    `https://mercadao.pt/api/catalogues/6107d28d72939a003ff6bf51/products/search?query=${product}&from=0&size=${
      size ?? 24
    }&esPreference=0.618962195638902`,
    product,
  )

  return c.json(data)
})

export { pingodoce }
