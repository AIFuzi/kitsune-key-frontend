import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import Container from '@/components/shared/Container'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('pages.main')

  return {
    title: t('title'),
  }
}

export default function MainPage() {
  return <Container>Main page</Container>
}
