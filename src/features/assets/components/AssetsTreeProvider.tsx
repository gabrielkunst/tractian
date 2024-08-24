import { PropsWithChildren } from 'react'
import { useTreeReducer } from '../hooks/useTreeReducer'
import { AssetsTreeContext } from '../contexts'

export function AssetsTreeProvider({ children }: PropsWithChildren) {
  const { state, filterTree, toggleNode, initTree } = useTreeReducer()

  return (
    <AssetsTreeContext.Provider
      value={{
        state,
        filterTree,
        toggleNode,
        initTree,
      }}
    >
      {children}
    </AssetsTreeContext.Provider>
  )
}
