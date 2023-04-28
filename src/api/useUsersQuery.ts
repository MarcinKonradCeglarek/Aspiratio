import { useQuery } from '@tanstack/react-query'
import { ApiUser, User } from '../types/user'

async function fetchUsers() {
  return window
    .fetch(
      'https://gist.githubusercontent.com/mlebkowski/982651de83d346971477485e3da8f642/raw/a819a5e9341ece778c3d347bff3624f066c74b58/users.json',
      { method: 'get' }
    )
    .then((res) => res.json())
    .then((users: ApiUser[]) =>
      users.map((user) => ({ ...user, createdAt: new Date(user.createdAt) }))
    )
}

export const useUsersQuery = () => {
  return useQuery<User[]>(['users'], fetchUsers)
}
