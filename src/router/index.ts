import { auchan } from '@router/markets/auchan.route.ts'
import { pingodoce } from '@router/markets/pingodoce.route.ts'
import { sales } from '@router/sales.route.ts'
import { Hono } from 'hono'

const router = new Hono()

router.route('/', sales)
router.route('/', auchan)
router.route('/', pingodoce)

export { router }
