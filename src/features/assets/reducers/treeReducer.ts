import type { TreeNode } from '../types'
import { filterTreeAction } from './filterTreeAction'
import { toggleNodeAction } from './toggleNodeAction'

enum TreeAction {
  INIT = 'INIT',
  TOGGLE_NODE = 'TOGGLE_NODE',
  SET_SEARCH_QUERY = 'SET_SEARCH_QUERY',
  TOGGLE_FILTER = 'TOGGLE_FILTER',
}

type TreeFilter = {
  energySensor: boolean
  criticalStatus: boolean
}

type State = {
  nodes: TreeNode[]
  filteredNodes: TreeNode[]
  searchTerm: string
  filters: TreeFilter
}

type FilterName = keyof TreeFilter

type Action =
  | { type: TreeAction.INIT; payload: { nodes: TreeNode[] } }
  | {
      type: TreeAction.TOGGLE_NODE
      payload: { nodeId: string; isExpanded: boolean }
    }
  | {
      type: TreeAction.SET_SEARCH_QUERY
      payload: { search: string }
    }
  | {
      type: TreeAction.TOGGLE_FILTER
      payload: {
        filterName: FilterName
      }
    }

const initialState: State = {
  nodes: [],
  filteredNodes: [],
  searchTerm: '',
  filters: {
    energySensor: false,
    criticalStatus: false,
  },
}

function treeReducer(prevState: State, action: Action): State {
  switch (action.type) {
    case TreeAction.INIT: {
      const { nodes } = action.payload

      return {
        ...prevState,
        nodes,
        filteredNodes: nodes,
        searchTerm: '',
        filters: initialState.filters,
      }
    }

    case TreeAction.SET_SEARCH_QUERY: {
      const { search } = action.payload
      const filteredNodes = filterTreeAction(
        prevState.nodes,
        search,
        prevState.filters
      )

      return {
        ...prevState,
        searchTerm: search,
        filteredNodes,
      }
    }

    case TreeAction.TOGGLE_NODE: {
      const { nodeId, isExpanded } = action.payload
      const filteredNodes = toggleNodeAction(
        prevState.filteredNodes,
        nodeId,
        isExpanded
      )

      return {
        ...prevState,
        filteredNodes,
      }
    }

    case TreeAction.TOGGLE_FILTER: {
      const { filterName } = action.payload
      const updatedFilters = {
        ...prevState.filters,
        [filterName]: !prevState.filters[filterName],
      }
      const filteredNodes = filterTreeAction(
        prevState.nodes,
        prevState.searchTerm,
        updatedFilters
      )

      return {
        ...prevState,
        filters: updatedFilters,
        filteredNodes,
      }
    }

    default:
      return prevState
  }
}

export {
  type State,
  type Action,
  type TreeFilter,
  type FilterName,
  TreeAction,
  initialState,
  treeReducer,
}
