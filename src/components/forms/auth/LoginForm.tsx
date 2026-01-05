'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
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
import { loginSchema, TypeLoginSchema } from '@/schemas/auth/login.schema'

export default function LoginForm() {
  const t = useTranslations('auth.login')

  const form = useForm<TypeLoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  function onSubmit(data: TypeLoginSchema) {
    console.log(data)
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
            __ERR MESSAGES__
          </FormDescription>
          <Button
            type="submit"
            className="w-full"
          >
            {t('buttonLabel')}
          </Button>
        </form>
      </Form>
    </AuthWrapper>
  )
}
