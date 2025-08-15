import * as z from 'zod'

export const LoginResultSchema = z.object({
  access_token: z.string(),
  id: z.number(),
  name: z.string(),
})
export type LoginResult = z.infer<typeof LoginResultSchema>
