import { parsePingoDoce } from '@/utils/parsePingoDoce.ts'

export const getPingoDoceProducts = async (
  url: string,
  productQuery: string,
) => {
  const products = await parsePingoDoce(url, productQuery)

  return {
    watched: products.length,
    products: products,
  }
}
