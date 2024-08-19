import type { TreeNode } from '../types'

enum TreeAction {
  INIT = 'INIT',
  TOGGLE_NODE = 'TOGGLE_NODE',
  SET_SEARCH_QUERY = 'SET_SEARCH_QUERY',
  TOGGLE_FILTER = 'TOGGLE_FILTER',
}

type State = {
  nodes: TreeNode[]
  searchTerm: string
  filters: {
    energySensor: boolean
    criticalStatus: boolean
  }
}

type Action =
  | { type: TreeAction.INIT; payload: { nodes: TreeNode[] } }
  | { type: TreeAction.TOGGLE_NODE; payload: { nodeId: string } }
  | {
      type: TreeAction.SET_SEARCH_QUERY
      payload: { search: string }
    }
  | {
      type: TreeAction.TOGGLE_FILTER
      payload: {
        filterName: keyof State['filters']
      }
    }

const initialState: State = {
  nodes: [],
  searchTerm: '',
  filters: {
    energySensor: false,
    criticalStatus: false,
  },
}

function treeReducer(prevState: State, action: Action): State {
  switch (action.type) {
    case TreeAction.INIT:
      console.log('INITIALIZING TREE: ', action.payload)
      return {
        ...prevState,
        nodes: action.payload.nodes,
      }
    case TreeAction.SET_SEARCH_QUERY:
      console.log('SEARCHING FOR: ', action.payload)
      return prevState
    case TreeAction.TOGGLE_NODE:
      console.log('TOGGLING NODE: ', action.payload)
      return prevState
    case TreeAction.TOGGLE_FILTER:
      console.log('TOGGLING FILTER: ', action.payload)
      return prevState

    default:
      return prevState
  }
}

export { type State, type Action, TreeAction, initialState, treeReducer }
