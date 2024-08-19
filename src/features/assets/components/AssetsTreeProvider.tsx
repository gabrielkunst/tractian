import { PropsWithChildren, useReducer } from 'react'
import { AssetsTreeContext } from '../contexts'
import { initialState, treeReducer } from '../reducers'

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
