import { TreeFilter } from '../reducers'
import { filterTreeAction } from '../reducers/filterTreeAction'
import { toggleNodeAction } from '../reducers/toggleNodeAction'
import { Asset, Location, TreeNode } from '../types'
import { createAssetsTree } from '../utils'

type WorkerRequest =
  | {
      type: 'FILTER_TREE'
      payload: { nodes: TreeNode[]; searchTerm: string; filters: TreeFilter }
    }
  | {
      type: 'TOGGLE_NODE'
      payload: { nodes: TreeNode[]; nodeId: string; isExpanded: boolean }
    }
  | {
      type: 'INIT_TREE'
      payload: { locations: Location[]; assets: Asset[] }
    }

type WorkerResponse =
  | { type: 'FILTERED_TREE'; payload: TreeNode[] }
  | { type: 'TOGGLED_NODE'; payload: TreeNode[] }
  | { type: 'INITIALIZED_TREE'; payload: TreeNode[] }

self.onmessage = (event: MessageEvent<WorkerRequest>) => {
  const { type, payload } = event.data

  switch (type) {
    case 'FILTER_TREE': {
      const { nodes, filters, searchTerm } = payload

      const filteredNodes = filterTreeAction(nodes, searchTerm, filters)

      self.postMessage({
        type: 'FILTERED_TREE',
        payload: filteredNodes,
      } as WorkerResponse)

      break
    }

    case 'TOGGLE_NODE': {
      const { nodes, nodeId, isExpanded } = payload

      const toggledNodes = toggleNodeAction(nodes, nodeId, isExpanded)

      self.postMessage({
        type: 'TOGGLED_NODE',
        payload: toggledNodes,
      } as WorkerResponse)

      break
    }

    case 'INIT_TREE': {
      const { locations, assets } = payload

      const tree = createAssetsTree(locations, assets)

      self.postMessage({
        type: 'INITIALIZED_TREE',
        payload: tree,
      } as WorkerResponse)

      break
    }

    default:
      break
  }
}
