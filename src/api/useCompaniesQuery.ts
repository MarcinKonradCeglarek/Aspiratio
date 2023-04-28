import { useQuery } from '@tanstack/react-query'
import { ApiCompany } from '../types/compainy'

async function fetchClients() {
  return window
    .fetch(
      'https://gist.githubusercontent.com/mlebkowski/982651de83d346971477485e3da8f642/raw/a819a5e9341ece778c3d347bff3624f066c74b58/companies.json',
      { method: 'get' }
    )
    .then((res) => res.json())
    .then((user) => ({ ...user, createdAt: new Date(user.createdAt) }))
}

export const useClientsQuery = () => {
  return useQuery<ApiCompany[]>(['companies'], fetchClients)
}
