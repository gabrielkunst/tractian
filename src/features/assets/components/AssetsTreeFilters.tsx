import ThunderboltIcon from '../../../assets/icons/thunderbolt-icon.svg'
import InfoIcon from '../../../assets/icons/info-icon.svg'
import { Button } from '../../../components/Button'

export function AssetsTreeFilters() {
  return (
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
  )
}
