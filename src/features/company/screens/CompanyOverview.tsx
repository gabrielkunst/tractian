import { Title } from '../../../components/Title'
import { EmptyCompanySection } from '../components/EmptyCompanySection'
import { useSelectedCompany } from '../hooks'
import { Input } from '../../../components/Input'
import ThunderboltIcon from '../../../assets/icons/thunderbolt-icon.svg'
import InfoIcon from '../../../assets/icons/info-icon.svg'
import SearchIcon from '../../../assets/icons/search-icon.svg'

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
          <button className="flex items-center w-full gap-2 px-3 py-2 font-semibold border rounded sm:w-fit">
            <ThunderboltIcon className="w-4 h-4 shrink-0" />
            Sensor de Energia
          </button>
          <button className="flex items-center w-full gap-2 px-3 py-2 font-semibold border rounded sm:w-fit">
            <InfoIcon className="w-4 h-4 shrink-0" />
            Crítico
          </button>
        </div>
      </div>

      <div className="flex flex-row flex-1 h-full gap-3">
        <section className="w-full overflow-hidden border rounded sm:w-1/2 lg:w-1/3 border-custom-gray-200">
          <div className="relative w-full overflow-hidden border-b rounded-sm border-custom-gray-200">
            <Input
              placeholder="Buscar Ativo ou Local"
              className="flex-1 p-4 pr-12"
            />
            <SearchIcon className="absolute w-5 h-5 -translate-y-1/2 top-1/2 shrink-0 right-4" />
          </div>
        </section>
        <section className="hidden overflow-hidden border rounded sm:block sm:w-1/2 lg:w-2/3 border-custom-gray-200">
          section 2
        </section>
      </div>
    </div>
  )
}