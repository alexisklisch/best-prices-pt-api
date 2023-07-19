import { parseAuchanDOM } from '@/utils/parseAuchan.ts'
import { parsePingoDoce } from '@/utils/parsePingoDoce.ts'

export const getSales = async (product: string, size?: string) => {
  const pingoDoceProducts = await parsePingoDoce(product, size)
  const auchanProducts = await parseAuchanDOM(product, size)

  const mergedProducts = [pingoDoceProducts, auchanProducts].flat()
  const products = mergedProducts.sort((a, b) =>
    a.unitPrice.value - b.unitPrice.value
  )

  return products
}
