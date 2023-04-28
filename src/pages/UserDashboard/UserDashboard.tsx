import { FC } from 'react'
import { FlexLayout, RandomNumber, Kittens, Company } from '../../components'
import { useCurrentUser } from '../../context/contextStore'
import { useNavigate } from 'react-router'
import { useCompaniesQuery } from '../../api/useCompaniesQuery'
import './UserDashboard.css'
import { useUsersQuery } from '../../api/useUsersQuery'

export const UserDashboard: FC = () => {
  const currentUser = useCurrentUser()
  const companies = useCompaniesQuery()
  const users = useUsersQuery()

  const navigate = useNavigate()

  if (currentUser === undefined) {
    navigate('/')
  }

  const companiesForUser = companies.data?.filter((c) => {
    return c.users.includes(currentUser?.id ?? '-1')
  })

  const featuresForUser = companiesForUser?.map((c) => c.features).flat() ?? []

  return (
    <FlexLayout>
      <div className="UserDashboard-DashboardWrapper">
        <div>User Dashboard</div>
        <div className="UserDashboard-horizontalStack">
          {featuresForUser.includes('kittens') && <Kittens />}
          {featuresForUser.includes('random-number') && <RandomNumber />}
          {currentUser && featuresForUser.includes('company') && (
            <Company
              companies={companies.data ?? []}
              users={users.data ?? []}
              currentUser={currentUser}
            />
          )}
        </div>
      </div>
    </FlexLayout>
  )
}
