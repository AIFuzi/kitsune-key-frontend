import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Login',
  }
}

export default function LoginPage() {
  return <div>LoginPage</div>
}
