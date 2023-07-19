import { measureSanity } from '@/consts/measureSanity.ts'
import { Product } from '@/types/types.d.ts'

export const getSales = async (url: string, productQuery: string) => {
  const response = await fetch(url)
  const json = await response.json()
  const decodedQuery = decodeURI(productQuery)
  const productList: Product[] = await json.sections[decodedQuery].products

  const products = productList.map(({ _source }) => {
    return {
      title: _source.firstName,
      capacity: _source.netContent,
      price: _source.buyingPrice,
      unitPrice: {
        value: _source.buyingPrice / _source.netContent,
        measure: measureSanity(_source.netContentUnit),
      },
      image:
        `https://res.cloudinary.com/fonte-online/image/upload/c_fill,h_300,q_auto,w_300/v1/PDO_PROD/${_source.sku}_1`,
    }
  })

  return {
    watched: products.length,
    products: products,
  }
}
