import { auchan } from '@router/markets/auchan.route.ts'
import { Hono } from 'hono'

const router = new Hono()

router.route('/', auchan)

export { router }
