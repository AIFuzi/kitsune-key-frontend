'use client'

import { startTransition } from 'react'
import { useLocale } from 'use-intl'
import { useCurrency } from '@/hooks/useCurrency'
import { Currency } from '@/libs/currency/config'
import { Language } from '@/libs/i18n/config'
import { setLanguage } from '@/libs/i18n/language'

interface SelectLangCurrencyButtonProps {
  type: 'language' | 'currency'
  title: string
  description: string
  language?: Language
  currency?: Currency
}

export default function SelectLangCurrencyButton({
  type,
  description,
  title,
  language,
  currency,
}: SelectLangCurrencyButtonProps) {
  const lang = useLocale()
  const { currency: currentCurrency, setCurrency } = useCurrency()

  function onSubmit(lang?: Language, currency?: Currency) {
    if (type === 'language' && lang) {
      startTransition(async () => {
        await setLanguage(lang)
      })
    }

    if (type === 'currency' && currency) {
      setCurrency(currency)
    }
  }

  return (
    <div
      className="flex items-center justify-between"
      onClick={() => onSubmit(language, currency)}
    >
      <div
        className={`hover:bg-muted w-36 cursor-pointer rounded-lg px-3 py-1 text-center ${currency === currentCurrency && 'border border-black'} ${lang === language && 'border border-black'}`}
      >
        <h1 className="text-xl font-semibold">{title}</h1>
        <h1 className="text-muted-foreground text-sm">{description}</h1>
      </div>
    </div>
  )
}
