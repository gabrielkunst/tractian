import { Title } from '../../../components/Title'
import { EmptyCompanySection } from '../components/EmptyCompanySection'
import { useSelectedCompany } from '../hooks'
import { Input } from '../../../components/Input'
import ThunderboltIcon from '../../../assets/icons/thunderbolt-icon.svg'
import InfoIcon from '../../../assets/icons/info-icon.svg'
import SearchIcon from '../../../assets/icons/search-icon.svg'
import { Button } from '../../../components/Button'
import { ComponentDetails } from '../components/ComponentDetails'

export function CompanyOverview() {
  const { selectedCompany } = useSelectedCompany()

  if (!selectedCompany) {
    return <EmptyCompanySection />
  }

  return (
    <div className="flex flex-col flex-1 space-y-3">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <Title
          text="Ativos"
          trailing={`${selectedCompany?.name} Unit`}
        />

        <div className="flex flex-col gap-2 mb:flex-row">
          <Button
            variant="outline"
            className="font-semibold"
          >
            <ThunderboltIcon className="w-4 h-4 shrink-0 text-primary" />
            Sensor de Energia
          </Button>

          <Button
            variant="outline"
            className="font-semibold"
          >
            <InfoIcon className="w-4 h-4 shrink-0 text-primary" />
            Crítico
          </Button>
        </div>
      </div>

      <div className="flex flex-row flex-1 h-full gap-3">
        <section className="w-full overflow-hidden border rounded sm:w-1/2 lg:w-1/3 border-custom-gray-200">
          <div className="relative w-full overflow-hidden border-b rounded-sm border-custom-gray-200">
            <Input
              placeholder="Buscar Ativo ou Local"
              className="flex-1 py-3 pl-4 pr-12"
            />
            <SearchIcon className="absolute w-4 h-4 -translate-y-1/2 top-1/2 shrink-0 right-4" />
          </div>
        </section>
        <section className="hidden overflow-hidden border rounded sm:block sm:w-1/2 lg:w-2/3 border-custom-gray-200">
          <ComponentDetails />
        </section>
      </div>
    </div>
  )
}
