import { getSales } from '@services/sales.service.ts'
import { Hono } from 'hono'

const sales = new Hono()

sales.get('/sales/:product', async (c) => {
  const { product } = c.req.param()
  const size = c.req.query('size')

  const products = await getSales(product, size)

  return c.json(products)
})

export { sales }
