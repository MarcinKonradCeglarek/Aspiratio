import { FC } from 'react'
import { FlexLayout } from '../../components'
import { useCurrentUser } from '../../context/contextStore'
import { useNavigate } from 'react-router'
import { useCompaniesQuery } from '../../api/useCompaniesQuery'

export const UserDashboard: FC = () => {
  const currentUser = useCurrentUser()
  const companies = useCompaniesQuery()
  const navigate = useNavigate()

  if (currentUser === undefined) {
    navigate('/')
  }

  console.log(companies.data)
  const companiesForUser = companies.data?.filter((c) => {
    console.log(c.users)
    return c.users.includes(currentUser?.id ?? '-1')
  })

  const featuresForUser = companiesForUser?.map((c) => c.features).flat()

  return (
    <FlexLayout>
      <div>User Dashboard</div>
      <div>Parmissions: {featuresForUser}</div>
    </FlexLayout>
  )
}
