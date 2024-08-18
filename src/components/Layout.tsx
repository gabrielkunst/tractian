import { PropsWithChildren } from 'react'
import { Header } from './Header'
import { CompaniesList } from '../features/company/components'

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col max-h-screen min-h-screen overflow-hidden">
      <Header>
        <CompaniesList className="hidden sm:flex" />
      </Header>

      <main className="flex flex-col flex-1 p-3 bg-custom-gray-150 max-h-[calc(100vh-64px)]">
        <div className="flex flex-col flex-1 max-h-full p-4 overflow-hidden bg-white border rounded-md border-custom-gray-200">
          {children}
        </div>
      </main>
    </div>
  )
}
