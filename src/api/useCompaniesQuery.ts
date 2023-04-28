import { useQuery } from '@tanstack/react-query'
import { ApiCompany, Company } from '../types/company'

async function fetchCompanies() {
  return window
    .fetch(
      'https://gist.githubusercontent.com/mlebkowski/982651de83d346971477485e3da8f642/raw/a819a5e9341ece778c3d347bff3624f066c74b58/companies.json',
      { method: 'get' }
    )
    .then((res) => res.json())
    .then((companies: ApiCompany[]) =>
      companies.map((c) => {
        const company: Company = {
          ...c,
          users: c.users ?? [],
          features: c.features ?? [],
        }
        return company
      })
    )
}

export const useCompaniesQuery = () => {
  return useQuery<Company[]>(['companies'], fetchCompanies)
}
