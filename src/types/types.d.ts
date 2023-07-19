export interface PingoDoce {
  products: Product[]
}

export interface Product {
  _index: string
  _type: string
  _id: string
  _score: number
  _source: Source
}

export interface Source {
  firstName: string
  secondName: string
  thirdName: string
  longDescription: string
  shortDescription: string
  sku: string
  imagesNumber: number
  grossWeight: number
  capacity: string
  netContent: number
  netContentUnit: string
  averageWeight: number
  onlineStatus: string
  status: string
  slug: string
  tags: any[]
  categories: Brand[]
  eans: string[]
  brand: Brand
  catalogueId: string
  categoriesArray: string[]
  leafCategories: Brand[]
  isPerishable: boolean
  ancestorsCategoriesArray: string[]
  regularPrice: number
  campaignPrice: number
  buyingPrice: number
  unitPrice: number
  promotion: Promotion
  minimumOrderableQuantity: number
  maximumOrderableQuantity: number
  countriesOfOrigin: any[]
  additionalInfo: string
  durabilityDays: number
  activePromotion: boolean
  advertising: any[]
  suggest_catalogue: SuggestCatalogue[]
  unitNoVatPrice: number
  campaignNoVatPrice: number
  qualitativeIcons: any[]
  capacityType: null
  noVatPrice: number
  vatTax: number
  buyingNoVatPrice: number
  lowestBuyingPrice?: number
}

export interface Brand {
  name: string
  id: string
}

export interface Promotion {
  beginDate: Date
  amount: number
  payAmount: null
  endDate: Date
  takeAmount: null
  type: string
}

export interface SuggestCatalogue {
  input: string
  weight: number
  contexts: Contexts
}

export interface Contexts {
  catalogue: string
}
