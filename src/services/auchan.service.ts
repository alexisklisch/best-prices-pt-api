import { DOMParser, Element } from 'deno-dom'

export const getSales = async (url: string) => {
  const response = await fetch(url)
  const data = await response.text()

  const document = new DOMParser().parseFromString(data, 'text/html')
  const productsNode = document?.querySelectorAll(
    '.product',
  )
  const productsArray = Array.from(productsNode!) ?? []
  const products = productsArray.map((item) => {
    // Get product title
    const title = (item as Element).querySelector(
      '.tile-body.auc-product-tile__body a',
    )?.textContent

    // Extract price
    const price = (item as Element)
      .querySelector('span.value')?.getAttribute('content')!

    // Extract price per unit
    const unitPriceText = (item as Element)
      .querySelector('.auc-measures--price-per-unit')?.textContent
    const unitPriceMeasureIndex = unitPriceText?.indexOf('€/')!
    const unitPriceMeasure = unitPriceText?.slice(unitPriceMeasureIndex + 2)
      .toLowerCase()
    const unitPriceValue = unitPriceText?.slice(0, unitPriceMeasureIndex - 1)!

    // Extract image
    const imgLink = (item as Element).querySelector(
      'picture source',
    )?.getAttribute('data-srcset')!
    const imgURL = new URL(imgLink)
    const image = imgURL.origin + imgURL.pathname

    // Calc capacity
    const capacity = +price / +unitPriceValue

    return {
      title,
      capacity: parseFloat(capacity.toFixed(2)),
      price: +price,
      unitPrice: {
        value: +unitPriceValue,
        measure: unitPriceMeasure,
      },
      image,
    }
  })

  return {
    size: products.length,
    products: products,
  }
}
