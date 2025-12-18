'use client'

import { LoginService } from '@/service/auth/login.service'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [totp, setTotp] = useState('')

  async function sendLogin() {
    await LoginService.login(email, password, totp)
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-1/2 space-y-4">
        <h1 className="text-3xl font-semibold">TestLogin</h1>
        <Input
          placeholder="Email"
          autoComplete="off"
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          placeholder="********"
          autoComplete="off"
          type="password"
          onChange={e => setPassword(e.target.value)}
        />
        <Input
          placeholder="2FA"
          type="number"
          onChange={e => setTotp(e.target.value)}
        />
        <Button
          className="w-full"
          onClick={() => sendLogin()}
        >
          Login
        </Button>
      </div>
    </div>
  )
}
