import { FC } from 'react'
import { User } from '../types/user'
import { Company as CompanyType } from '../types/company'

interface ICompany {
  users: User[]
  companies: CompanyType[]
  currentUser: User
}
export const Company: FC<ICompany> = ({ users, companies, currentUser }) => {
  const userCompanies = companies.filter((c) => c.users.includes(currentUser.id))

  return (
    <div>
      Company:
      <ul>
        {userCompanies.map((c) => (
          <li key={`dashboard-c-${c.id}`}>
            <b>{c.name}</b>
            <ul>
              {c.users.map((uId) => {
                const user = users.find((u) => u.id === uId)
                return (
                  user && <li key={`dashboard-c-${c.id}-u-${user.id}`}>{user.name}</li>
                )
              })}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}
