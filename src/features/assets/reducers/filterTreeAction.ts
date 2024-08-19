import type { TreeNode } from '../types'
import { TreeFilter } from './treeReducer'

export function filterTreeAction(
  tree: TreeNode[],
  search: string,
  filters: TreeFilter
): TreeNode[] {
  return tree
}
