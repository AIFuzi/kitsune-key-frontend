'use client'

import { LoginService } from '@/service/auth/login.service'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import AuthWrapper from '@/components/AuthWrapper'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Spinner } from '@/components/ui/spinner'
import { IError } from '@/libs/interfaces'
import { loginSchema, TypeLoginSchema } from '@/schemas/auth/login.schema'

export default function LoginForm() {
  const t = useTranslations('auth.login')

  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<TypeLoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function onSubmit(data: TypeLoginSchema) {
    setIsLoading(true)

    try {
      await LoginService.login(data.email, data.password)
    } catch (e) {
      if (axios.isAxiosError(e) && e.response) {
        const err = e.response.data as IError

        form.setError('root', {
          type: 'server',
          message: !Array.isArray(err.message) ? err.message : err.message[0],
        })
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthWrapper
      heading={t('title')}
      switchFormLink="register"
      switchFormLinkLabel={t('switchFormButtonLabel')}
      switchFormText={t('switchFormMessage')}
    >
      <Form {...form}>
        <form
          className="space-y-6"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('fields.email')}</FormLabel>
                <FormControl>
                  <Input
                    placeholder="janedoe@example.com"
                    {...field}
                    type="email"
                  />
                </FormControl>
              </FormItem>
            )}
            name="email"
          />
          <FormField
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('fields.password')}</FormLabel>
                <FormControl>
                  <Input
                    placeholder="********"
                    {...field}
                    type="password"
                  />
                </FormControl>
              </FormItem>
            )}
            name="password"
          />
          <FormDescription className="font-semibold text-red-500">
            {form.formState.errors.root?.message}
          </FormDescription>
          <Button
            type="submit"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center">
                <Spinner />
                <span>{t('buttonLoadingLabel')}</span>
              </div>
            ) : (
              t('buttonLabel')
            )}
          </Button>
        </form>
      </Form>
    </AuthWrapper>
  )
}
