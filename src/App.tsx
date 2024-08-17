import { Layout } from './components/Layout'
import { Providers } from './components/Providers'
import { CompanyOverview } from './features/company/screens'

export function App() {
  return (
    <Providers>
      <Layout>
        <CompanyOverview />
      </Layout>
    </Providers>
  )
}
