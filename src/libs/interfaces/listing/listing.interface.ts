export interface IListingBase {
  id: string
  title: string
  imageUrl: string[]
  propertyType: string
  country: string
  city: string
  lat: number
  lng: number
  price: number
  discountPercent: number
  bedCount: number
  bathCount: number
  roomCount: number
  listingStatus: string
  createdAt: string
  updatedAt: string
}
