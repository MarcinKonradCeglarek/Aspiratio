export type ApiCompany = {
  id: string
  name: string
  users?: Array<string>
  features?: Array<string>
}

export type Company = {
  id: string
  name: string
  users: Array<string>
  features: Array<string>
}
