import { Company } from '../types'

const COMPANIES: Company[] = [
  {
    id: '662fd0ee639069143a8fc387',
    name: 'Jaguar',
  },
  {
    id: '662fd0fab3fd5656edb39af5',
    name: 'Tobias',
  },
  {
    id: '662fd100f990557384756e58',
    name: 'Apex',
  },
] as const

export async function fetchCompaniesMock(): Promise<Company[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(COMPANIES)
    }, 0)
  })
}
