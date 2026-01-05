import { createJSONStorage, persist } from 'zustand/middleware'
import { create } from 'zustand/react'
import { CURRENCY_KEY, DEFAULT_CURRENCY } from '@/libs/currency/config'
import { CurrencyType } from '@/store/currency/currency.type'

export const currencyStore = create(
  persist<CurrencyType>(
    setState => ({
      currency: DEFAULT_CURRENCY,
      setCurrency: (value: string) => setState({ currency: value }),
    }),
    {
      name: CURRENCY_KEY,
      storage: createJSONStorage(() => localStorage),
    },
  ),
)
