'use client'

import { PageConfig } from '@/libs'
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
import { Textarea } from '@/components/ui/textarea'
import {
  createAccountSchema,
  TypeCreateAccountSchema,
} from '@/schemas/auth/create-account.schema'


export default function CreateAccountForm() {
  const t = useTranslations('auth.create')

  const form = useForm<TypeCreateAccountSchema>({
    resolver: zodResolver(createAccountSchema),
    defaultValues: {
      name: '',
      email: '',
      aboutMe: '',
      birthday: '',
      password: '',
    },
  })

  function onSubmit(data: TypeCreateAccountSchema) {
    console.log(data)
  }

  return (
    <AuthWrapper
      heading={t('title')}
      switchFormLink={PageConfig.LOGIN_PAGE}
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
                <FormLabel>{t('fields.name')}</FormLabel>
                <FormControl>
                  <Input
                    placeholder="JaneDoe"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
            name="name"
          />
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
          <FormField
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('fields.birthday')}</FormLabel>
                <FormControl>
                  <Input
                    type="date"
                    max="2010-01-01"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
            name="birthday"
          />
          <FormField
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('fields.aboutMe')}</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={t('aboutMePlaceholder')}
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
            name="aboutMe"
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
