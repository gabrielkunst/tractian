import { PropsWithChildren, useReducer } from 'react'
import { AssetsTreeContext } from '../contexts/AssetsTreeContext'
import { initialState, treeReducer } from '../reducers/treeReducer'

export function AssetsTreeProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(treeReducer, initialState)

  return (
    <AssetsTreeContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AssetsTreeContext.Provider>
  )
}
