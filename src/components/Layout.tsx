import { PropsWithChildren } from 'react'
import { Header } from './Header'
import { CompaniesList } from '../features/company/components'

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header>
        <CompaniesList className="hidden sm:flex" />
      </Header>
      <main className="flex flex-col flex-1 p-3 bg-custom-gray-150">
        <div className="flex flex-col flex-1 p-4 bg-white border rounded-md border-custom-gray-200">
          {children}
        </div>
      </main>
    </div>
  )
}
