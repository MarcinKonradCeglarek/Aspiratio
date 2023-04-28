export type features = 'random-number' | 'kittens' | 'company'

export type ApiCompany = {
  id: string
  name: string
  users?: Array<string>
  features?: Array<features>
}

export type Company = {
  id: string
  name: string
  users: Array<string>
  features: Array<features>
}
