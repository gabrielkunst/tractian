import { PropsWithChildren } from 'react'
import { ReactQueryProvider } from './ReactQueryProvider'
import {
  CompaniesProvider,
  SelectedCompanyProvider,
} from '../features/company/components'

export function Providers({ children }: PropsWithChildren) {
  return (
    <ReactQueryProvider>
      <CompaniesProvider>
        <SelectedCompanyProvider>{children}</SelectedCompanyProvider>
      </CompaniesProvider>
    </ReactQueryProvider>
  )
}
