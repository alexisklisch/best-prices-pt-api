import { getSales } from '@services/auchan.service.ts'
import { Hono } from 'hono'

const auchan = new Hono()

// Search
auchan.get('/auchan', async (c) => {
  const { product, size } = c.req.query()
  const data = await getSales(
    `https://www.auchan.pt/on/demandware.store/Sites-AuchanPT-Site/pt_PT/Search-UpdateGrid?q=${product}&prefn1=soldInStores&prefv1=000&start=0&sz=${
      size ?? 24
    }`,
  )

  return c.json(data)
})

export { auchan }
