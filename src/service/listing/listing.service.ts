import { api } from '@/api/api'
import { AxiosResponse } from 'axios'
import { IAllListings } from '@/libs/interfaces'

export class ListingService {
  static async fetchListings(): Promise<AxiosResponse<IAllListings>> {
    return await api.get('listing/all/korea')
  }
}
