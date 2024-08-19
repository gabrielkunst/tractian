import { createContext } from 'react'
import type { Component } from '../types'

interface SelectedComponentContextProps {
  selectedComponent: Component | null
  setSelectedComponent: React.Dispatch<React.SetStateAction<Component | null>>
}

export const SelectedComponentContext =
  createContext<SelectedComponentContextProps>({
    selectedComponent: null,
    setSelectedComponent: () => {},
  })
