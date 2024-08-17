import { PropsWithChildren } from 'react'
import { Header } from './Header'
import { CompaniesList } from '../features/company/components'

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header>
        <CompaniesList className="hidden sm:flex" />
      </Header>
      <main className="flex-1">{children}</main>
    </div>
  )
}
