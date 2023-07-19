import { parseAuchanDOM } from '@/utils/parseAuchan.ts'

export const searchAuchanProducts = async (product: string, size: string) => {
  const data = await parseAuchanDOM(product, size)
  return {
    showing: data.length,
    products: data,
  }
}
