import { IListingBase, IProfile } from '@/libs/interfaces'

export interface IOneListing extends IListingBase {
  description: string
  amenities: string[]
  hostId: string
  host: {
    profileInfo: IProfile
  }
}
