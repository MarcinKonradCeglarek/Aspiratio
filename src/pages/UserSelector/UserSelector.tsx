import { FC, useState } from 'react'
import { useNavigate } from 'react-router'
import { useUsersQuery } from '../../api/useUsersQuery'
import { useSelectUser } from '../../context/contextStore'
import { FlexLayout } from '../../components'

export const UserSelector: FC = () => {
  const users = useUsersQuery()
  const selectUser = useSelectUser()
  const [selectedId, setSelectedId] = useState<string>('')
  const navigate = useNavigate()
  const handleProceed = () => {
    selectUser(selectedId)
    navigate('/dashboard')
  }

  return (
    <FlexLayout style={{ gap: '16px', flexDirection: 'column' }}>
      <div>Select user:</div>
      <div>
        <select value={selectedId} onChange={(e) => setSelectedId(e.target.value)}>
          <option disabled value={''}>
            Select user
          </option>
          {users.data?.map((u) => (
            <option key={`userSelect-${u.id}`} value={u.id}>
              {u.name}
            </option>
          ))}
        </select>
      </div>
      <button disabled={selectedId === undefined} onClick={handleProceed}>
        Proceed
      </button>
    </FlexLayout>
  )
}
