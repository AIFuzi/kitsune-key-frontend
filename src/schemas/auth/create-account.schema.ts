import { z } from 'zod'

export const createAccountSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().min(2).max(26),
  birthday: z.string().date(),
  aboutMe: z.string().optional(),
})

export type TypeCreateAccountSchema = z.infer<typeof createAccountSchema>
