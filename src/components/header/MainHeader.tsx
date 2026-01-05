'use client'

import { useWindowScroll } from '@uidotdev/usehooks'
import { Globe, Search } from 'lucide-react'
import LangCurrencyDialog from '@/components/dialogs/LangCurrencyDialog'
import UserMenu from '@/components/header/UserMenu'
import Container from '@/components/shared/Container'
import Logo from '@/components/shared/Logo'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function MainHeader() {
  const [{ y }] = useWindowScroll()

  return (
    <header
      className={`sticky z-10 m-auto shadow-sm shadow-neutral-300/20 ${y && y > 50 ? 'top-5 h-18 w-[90%] rounded-full border' : 'top-0 h-20 w-full border-b'} border-zinc-100 bg-[#fefefe]/40 backdrop-blur-sm transition-all`}
    >
      <Container className="flex h-full items-center justify-between">
        <Logo />
        <div className="rounded-full border border-neutral-300">
          <div className="flex items-center justify-between gap-x-3 p-2">
            <Input placeholder="country" />
            <Input
              placeholder="date"
              type="date"
            />
            <Button className="rounded-full">
              <Search />
            </Button>
          </div>
        </div>
        <div className="flex gap-x-3">
          <LangCurrencyDialog>
            <div className="cursor-pointer rounded-full bg-neutral-200 p-3 transition-colors hover:bg-neutral-300">
              <Globe size={16} />
            </div>
          </LangCurrencyDialog>

          <UserMenu />
        </div>
      </Container>
    </header>
  )
}
