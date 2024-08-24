import { useEffect, useReducer, useRef } from 'react'
import { initialState, TreeAction, TreeFilter, treeReducer } from '../reducers'
import { createTreeWorker } from '../utils'
import { Asset, Location } from '../types'

export function useTreeReducer() {
  const [state, dispatch] = useReducer(treeReducer, initialState)
  const workerRef = useRef<Worker>()

  useEffect(() => {
    const worker = createTreeWorker()
    workerRef.current = worker

    worker.onmessage = (event: MessageEvent) => {
      const { type, payload } = event.data

      switch (type) {
        case 'FILTERED_TREE':
          dispatch({ type: TreeAction.FILTER_TREE_COMPLETE, payload })
          break
        case 'TOGGLED_NODE':
          dispatch({ type: TreeAction.TOGGLE_NODE_COMPLETE, payload })
          break
        case 'INITIALIZED_TREE':
          dispatch({ type: TreeAction.INIT_TREE_COMPLETE, payload })
          break
        default:
          break
      }
    }

    return () => {
      worker.terminate()
    }
  }, [])

  const filterTree = (searchTerm: string, filters: TreeFilter) => {
    dispatch({
      type: TreeAction.FILTER_TREE_ASYNC,
      payload: { searchTerm, filters },
    })

    let worker = workerRef.current

    if (!worker) {
      worker = createTreeWorker()
      workerRef.current = worker
    }

    worker.postMessage({
      type: 'FILTER_TREE',
      payload: { nodes: state.nodes, searchTerm, filters },
    })
  }

  const toggleNode = (nodeId: string, isExpanded: boolean) => {
    dispatch({
      type: TreeAction.TOGGLE_NODE_ASYNC,
      payload: { nodeId, isExpanded },
    })

    let worker = workerRef.current

    if (!worker) {
      worker = createTreeWorker()
      workerRef.current = worker
    }

    worker.postMessage({
      type: 'TOGGLE_NODE',
      payload: { nodes: state.filteredNodes, nodeId, isExpanded },
    })
  }

  const initTree = (locations: Location[], assets: Asset[]) => {
    let worker = workerRef.current

    if (!worker) {
      worker = createTreeWorker()
      workerRef.current = worker
    }

    worker.postMessage({
      type: 'INIT_TREE',
      payload: { locations, assets },
    })
  }

  return { state, filterTree, toggleNode, initTree }
}
