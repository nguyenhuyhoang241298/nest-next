'use server'

import { env } from '@/env'
import { User } from 'next-auth'
import { LoginResultSchema } from './type'

export const loginApi = async (
  userName: string,
  password: string,
): Promise<User | null> => {
  const loginUrl = env.NEXT_PUBLIC_API_ENDPOINT + '/auth/login'

  const res = await fetch(loginUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username: userName, password }),
  })

  if (!res.ok) return null

  const data = await res.json()

  const parsed = LoginResultSchema.safeParse(data)

  if (!parsed.success) {
    console.error('Login error:', parsed.error)
    return null
  }

  return {
    id: String(parsed.data.id),
    name: parsed.data.name,
    accessToken: parsed.data.access_token,
  }
}
