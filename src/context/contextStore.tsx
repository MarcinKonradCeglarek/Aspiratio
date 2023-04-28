import { FC, ReactElement, createContext, useContext, useState } from 'react'
import { User } from '../types/user'
import { useUsersQuery } from '../api/useUsersQuery'

interface IStore {
  currentUser: User | undefined
  selectUser(userId: string): void
  logout(): void
}

const useStore = () => {
  const users = useUsersQuery()
  const [currentUser, setCurrentUser] = useState<User>()

  return {
    currentUser,
    selectUser: (userId: string) => {
      const user = users.data?.find((u) => u.id === userId)
      setCurrentUser(user)
    },
    logout: () => {
      setCurrentUser(undefined)
    },
  }
}

const StoreContext = createContext<IStore>({
  currentUser: undefined,
  selectUser: (userId) => undefined,
  logout: () => undefined,
})

interface Props {
  children: ReactElement
}

export const StoreContextProvider: FC<Props> = ({ children }) => {
  return <StoreContext.Provider value={useStore()}>{children}</StoreContext.Provider>
}

export const useCurrentUser = () => useContext(StoreContext).currentUser
export const useSelectUser = () => useContext(StoreContext).selectUser
export const useLogout = () => useContext(StoreContext).logout
