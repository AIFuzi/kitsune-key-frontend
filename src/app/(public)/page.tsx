import { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import ListingGrid from '@/components/listing/ListingGrid'
import Container from '@/components/shared/Container'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('pages.main')

  return {
    title: t('title'),
  }
}

export default function MainPage() {
  const t = useTranslations('listing')

  return (
    <Container className="mt-3 mb-35">
      <h1 className="text-3xl font-semibold">{t('headingKr')}</h1>
      <ListingGrid
        country="korea"
        limit={12}
      />
      <h1 className="text-3xl font-semibold">{t('headingJp')}</h1>
      <ListingGrid
        country="japan"
        limit={12}
      />
    </Container>
  )
}
