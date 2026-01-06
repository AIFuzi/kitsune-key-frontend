import { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import ListingGrid from '@/components/listing/ListingGrid'
import ListingItem from '@/components/listing/ListingItem'
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
    <Container className="mt-3">
      <h1 className="text-3xl font-semibold">{t('heading')}</h1>
      <ListingGrid />
    </Container>
  )
}
