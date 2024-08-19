import { PropsWithChildren, useMemo, useState } from 'react'
import { SelectedComponentContext } from '../contexts'
import type { Component } from '../types'

export function SelectedComponentProvider({ children }: PropsWithChildren) {
  const [selectedComponent, setSelectedComponent] = useState<Component | null>(
    null
  )

  const contextValue = useMemo(
    () => ({
      selectedComponent,
      setSelectedComponent,
    }),
    [selectedComponent, setSelectedComponent]
  )

  return (
    <SelectedComponentContext.Provider value={contextValue}>
      {children}
    </SelectedComponentContext.Provider>
  )
}
