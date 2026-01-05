import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import CreateAccountForm from '@/components/forms/auth/CreateAccountForm'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('auth.login')

  return {
    title: t('heading'),
  }
}

export default function LoginPage() {
  return (
    <div className="h-screen">
      <CreateAccountForm />
    </div>
  )
}
