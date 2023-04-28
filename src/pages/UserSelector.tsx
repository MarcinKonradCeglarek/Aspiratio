import { FC, useState } from 'react'
import { useUsersQuery } from '../api/useUsersQuery'
import { FlexLayout } from '../components/Layout'
import { useSelectUser } from '../context/contextStore'

export const UserSelector: FC = () => {
  const users = useUsersQuery()
  const selectUser = useSelectUser()
  const [selectedId, setSelectedId] = useState<string>('')

  const handleProceed = () => {
    selectUser(selectedId)
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
