import ThunderboltIcon from '../../../assets/icons/thunderbolt-icon.svg'
import InfoIcon from '../../../assets/icons/info-icon.svg'
import { Button } from '../../../components/Button'
import { useAssetsTree } from '../hooks/useAssetsTree'
import { TreeAction, type FilterName } from '../reducers/treeReducer'
import { twMerge } from 'tailwind-merge'

export function AssetsTreeFilters() {
  const { state, dispatch } = useAssetsTree()

  const isEnergySensorActive = state.filters.energySensor
  const isCriticalStatusActive = state.filters.criticalStatus

  const handleFilter = (filter: FilterName) => {
    dispatch({
      type: TreeAction.TOGGLE_FILTER,
      payload: { filterName: filter },
    })
  }

  return (
    <div className="flex flex-col gap-2 mb:flex-row">
      <Button
        variant={isEnergySensorActive ? 'default' : 'outline'}
        className="font-semibold"
        onClick={() => handleFilter('energySensor')}
      >
        <ThunderboltIcon
          className={twMerge(
            'w-4 h-4 shrink-0 transition-colors',
            isEnergySensorActive ? 'text-white' : 'text-primary'
          )}
        />
        Sensor de Energia
      </Button>

      <Button
        variant={isCriticalStatusActive ? 'default' : 'outline'}
        className="font-semibold"
        onClick={() => handleFilter('criticalStatus')}
      >
        <InfoIcon
          className={twMerge(
            'w-4 h-4 shrink-0 transition-colors',
            isCriticalStatusActive ? 'text-white' : 'text-primary'
          )}
        />
        Crítico
      </Button>
    </div>
  )
}
