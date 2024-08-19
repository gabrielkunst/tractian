import { useContext } from 'react'
import { AssetsTreeContext } from '../contexts'

export function useAssetsTree() {
  const context = useContext(AssetsTreeContext)

  if (!context) {
    throw new Error('useAssetsTree must be used within a AssetsTreeProvider')
  }

  return context
}
