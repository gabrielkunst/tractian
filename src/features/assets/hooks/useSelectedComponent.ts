import { useContext } from 'react'
import { SelectedComponentContext } from '../contexts'

export function useSelectedComponent() {
  const context = useContext(SelectedComponentContext)

  if (!context) {
    throw new Error(
      'useSelectedComponent must be used within a SelectedComponentProvider'
    )
  }

  return context
}
