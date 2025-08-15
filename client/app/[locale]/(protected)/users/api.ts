import fetcher from '@/lib/fetcher'
import { User } from './type'

export const getUsers = async () => {
  const res = await fetcher({
    path: 'users',
  })
  return res.json() as Promise<User[]>
}

export const createUser = async (user: Omit<User, 'id'>) => {
  const res = await fetcher({
    path: 'users',
    method: 'POST',
    body: user,
  })
  return res.json() as Promise<User>
}

export const updateUser = async (user: User) => {
  const res = await fetcher({
    path: `users/${user.id}`,
    method: 'PUT',
    body: user,
  })
  return res.json() as Promise<User>
}

export const deleteUser = async (id: number) => {
  const res = await fetcher({
    path: `users/${id}`,
    method: 'DELETE',
  })
  return res.json() as Promise<void>
}
