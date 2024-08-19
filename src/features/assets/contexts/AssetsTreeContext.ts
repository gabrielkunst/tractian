import { createContext, Dispatch } from 'react'
import { Action, State } from '../reducers/treeReducer'

interface AssetsTreeContextProps {
  state: State
  dispatch: Dispatch<Action>
}

export const AssetsTreeContext = createContext<AssetsTreeContextProps>(
  {} as AssetsTreeContextProps
)
