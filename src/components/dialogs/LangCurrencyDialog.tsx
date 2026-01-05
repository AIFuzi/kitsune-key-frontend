import { useTranslations } from 'next-intl'
import { PropsWithChildren } from 'react'
import SelectLangCurrencyButton from '@/components/dialogs/SelectLangCurrencyButton'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'

export default function LangCurrencyDialog({ children }: PropsWithChildren) {
  const t = useTranslations('layout.menu.settings')

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t('heading')}</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="flex flex-col space-y-5">
          <div className="space-y-2">
            <h1 className="text-xl font-semibold">{t('language')}</h1>
            <Separator />
            <div className="flex items-center justify-between">
              <SelectLangCurrencyButton
                type="language"
                title="English"
                description="United states"
                language="en"
              />
              <SelectLangCurrencyButton
                type="language"
                title="한국어"
                description="대한민국"
                language="ko"
              />
              <SelectLangCurrencyButton
                type="language"
                title="日本語"
                description="日本"
                language="ja"
              />
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="text-xl font-semibold">{t('currency.heading')}</h1>
            <Separator />
            <div className="flex items-center justify-between">
              <SelectLangCurrencyButton
                type="currency"
                title={t('currency.dollar.heading')}
                description={t('currency.dollar.description')}
                currency="usd"
              />
              <SelectLangCurrencyButton
                type="currency"
                title={t('currency.won.heading')}
                description={t('currency.won.description')}
                currency="won"
              />
              <SelectLangCurrencyButton
                type="currency"
                title={t('currency.yen.heading')}
                description={t('currency.yen.description')}
                currency="yen"
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
