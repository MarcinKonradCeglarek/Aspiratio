export type ApiUser = {
  id: string
  avatar: string
  name: string
  createdAt: string
}

export type User = Omit<ApiUser, 'createdAt'> & { createdAt: Date }
