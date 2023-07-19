import { measureSanity } from '@/consts/measureSanity.ts'
import { Product } from '@/types/types.d.ts'

export async function parsePingoDoce(product: string, size?: string) {
  const response = await fetch(
    `https://mercadao.pt/api/catalogues/6107d28d72939a003ff6bf51/products/search?query=${product}&from=0&size=${
      size ?? 24
    }&esPreference=0.618962195638902`,
  )
  const json = await response.json()
  const decodedProduct = decodeURI(product)
  const productList: Product[] = await json.sections[decodedProduct].products

  const products = productList.map(({ _source }) => {
    return {
      title: _source.firstName,
      capacity: _source.netContent,
      price: parseFloat(_source.buyingPrice.toFixed(2)),
      unitPrice: {
        value: _source.buyingPrice / _source.netContent,
        measure: measureSanity(_source.netContentUnit),
      },
      image:
        `https://res.cloudinary.com/fonte-online/image/upload/c_fill,h_300,q_auto,w_300/v1/PDO_PROD/${_source.sku}_1`,
      market: 'Pingo Doce',
    }
  })

  return products
}
