import type { TreeNode } from '../types'

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

enum TreeAction {
  INIT_TREE_COMPLETE = 'INIT_TREE_COMPLETE',
  FILTER_TREE_ASYNC = 'FILTER_TREE_ASYNC',
  TOGGLE_NODE_ASYNC = 'TOGGLE_NODE_ASYNC',
  FILTER_TREE_COMPLETE = 'FILTER_TREE_COMPLETE',
  TOGGLE_NODE_COMPLETE = 'TOGGLE_NODE_COMPLETE',
}

type Action =
  | { type: TreeAction.INIT_TREE_COMPLETE; payload: TreeNode[] }
  | {
      type: TreeAction.FILTER_TREE_ASYNC
      payload: { searchTerm: string; filters: TreeFilter }
    }
  | {
      type: TreeAction.TOGGLE_NODE_ASYNC
      payload: { nodeId: string; isExpanded: boolean }
    }
  | { type: TreeAction.FILTER_TREE_COMPLETE; payload: TreeNode[] }
  | { type: TreeAction.TOGGLE_NODE_COMPLETE; payload: TreeNode[] }

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
    case TreeAction.INIT_TREE_COMPLETE: {
      const nodes = action.payload

      return {
        ...prevState,
        nodes,
        filteredNodes: nodes,
        searchTerm: '',
        filters: initialState.filters,
      }
    }

    case TreeAction.FILTER_TREE_ASYNC: {
      const { searchTerm, filters } = action.payload

      return {
        ...prevState,
        searchTerm,
        filters,
      }
    }

    case TreeAction.FILTER_TREE_COMPLETE: {
      const filteredNodes = action.payload

      return {
        ...prevState,
        filteredNodes,
      }
    }

    case TreeAction.TOGGLE_NODE_ASYNC: {
      return prevState
    }

    case TreeAction.TOGGLE_NODE_COMPLETE: {
      const toggledNodes = action.payload

      return {
        ...prevState,
        filteredNodes: toggledNodes,
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
