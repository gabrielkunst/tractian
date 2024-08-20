import type { TreeNode } from '../types'
import { TreeFilter } from './treeReducer'

export function filterTreeAction(
  tree: TreeNode[],
  search: string,
  filters: TreeFilter
): TreeNode[] {
  const searchLowerCase = search.toLowerCase().trim()

  return tree
    .map((node) => filterNode(node, searchLowerCase, filters))
    .filter((node): node is TreeNode => node !== null)
}

function filterNode(
  node: TreeNode,
  searchLowerCase: string,
  filters: TreeFilter
): TreeNode | null {
  const nameLowerCase = node.name.toLowerCase()
  const doesNameMatch =
    !searchLowerCase || nameLowerCase.includes(searchLowerCase)
  const doesFilterMatch = applyFilters(node, filters)

  let filteredChildren: TreeNode[] = []

  if (node.children) {
    filteredChildren = filterTreeAction(node.children, searchLowerCase, filters)
  }

  if ((doesNameMatch && doesFilterMatch) || filteredChildren.length > 0) {
    return {
      ...node,
      isExpanded: true,
      children:
        filteredChildren.length > 0 ? filteredChildren : node.children || [],
    }
  }

  return null
}

function applyFilters(node: TreeNode, filters: TreeFilter): boolean {
  if (filters.criticalStatus && node.status !== 'alert') {
    return false
  }

  if (filters.energySensor && node.sensorType !== 'energy') {
    return false
  }

  return true
}
