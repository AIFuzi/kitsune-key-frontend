import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import CreateAccountForm from '@/components/forms/auth/CreateAccountForm'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('auth.create')

  return {
    title: t('heading'),
  }
}

export default function RegisterPage() {
  return (
    <div className="h-screen">
      <CreateAccountForm />
    </div>
  )
}
