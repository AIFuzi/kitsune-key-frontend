import { Image } from 'next/dist/client/image-component'
import { NextLogo } from 'next/dist/next-devtools/dev-overlay/components/devtools-indicator/next-logo'
import Container from '@/components/shared/Container'

interface MainHeaderProps {}

export default function MainHeader({}: MainHeaderProps) {
  return (
    <header>
      <Container>
        <div></div>
      </Container>
    </header>
  )
}
