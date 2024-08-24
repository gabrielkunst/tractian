import { createContext } from 'react'
import { State, TreeFilter } from '../reducers'
import { Asset, Location } from '../types'

interface AssetsTreeContextProps {
  state: State
  filterTree: (searchTerm: string, filters: TreeFilter) => void
  toggleNode: (nodeId: string, isExpanded: boolean) => void
  initTree: (locations: Location[], assets: Asset[]) => void
}

export const AssetsTreeContext = createContext<AssetsTreeContextProps>(
  {} as AssetsTreeContextProps
)
