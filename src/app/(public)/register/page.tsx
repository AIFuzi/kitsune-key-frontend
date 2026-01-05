import CreateAccountForm from '@/components/forms/auth/CreateAccountForm'

interface PageProps {}

export default function RegisterPage({}: PageProps) {
  return (
    <div className="h-screen">
      <CreateAccountForm />
    </div>
  )
}
