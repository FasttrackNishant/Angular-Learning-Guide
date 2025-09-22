export interface IProduct {
  productId: number
  productName: string
  shortName: string
  category: string
  sku: string
  price: number
  thumbnailImageUrl: string
  deliveryTimeSpan: string
}


export interface ApiResponseModel {
  message: string,
  result: boolean,
  data: any
}
