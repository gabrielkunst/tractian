import type { TreeNode } from '../types'
import { TreeFilter } from './treeReducer'

export function filterTreeAction(
  tree: TreeNode[],
  search: string,
  filters: TreeFilter
): TreeNode[] {
  const searchLowerCase = search.toLowerCase().trim()
  const hasActiveFilters = hasFilters(filters)

  return tree
    .map((node) => filterNode(node, searchLowerCase, filters, hasActiveFilters))
    .filter((node): node is TreeNode => node !== null)
}

function filterNode(
  node: TreeNode,
  searchLowerCase: string,
  filters: TreeFilter,
  hasActiveFilters: boolean
): TreeNode | null {
  const { name, children } = node
  const nameLowerCase = name.toLowerCase()

  const doesNameMatch =
    !searchLowerCase || nameLowerCase.includes(searchLowerCase)
  const doesFilterMatch = applyFilters(node, filters)

  const filteredChildren = children
    ? filterTreeAction(children, searchLowerCase, filters)
    : []

  const isExpanded =
    hasActiveFilters &&
    ((doesNameMatch && doesFilterMatch) || filteredChildren.length > 0)

  if ((doesNameMatch && doesFilterMatch) || filteredChildren.length > 0) {
    return {
      ...node,
      isExpanded,
      children: filteredChildren.length > 0 ? filteredChildren : children || [],
    }
  }

  return null
}

function applyFilters(
  { status, sensorType }: TreeNode,
  { criticalStatus, energySensor }: TreeFilter
): boolean {
  if (criticalStatus && status !== 'alert') {
    return false
  }

  if (energySensor && sensorType !== 'energy') {
    return false
  }

  return true
}

function hasFilters(filters: TreeFilter): boolean {
  return Object.values(filters).some(Boolean)
}
