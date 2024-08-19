import type { TreeNode } from '../types'

export function toggleNodeAction(
  tree: TreeNode[],
  nodeId: string,
  isExpanded: boolean
): TreeNode[] {
  return tree.map((node) => {
    if (node.id === nodeId) {
      return {
        ...node,
        isExpanded,
      }
    }

    return {
      ...node,
      children: node.children
        ? toggleNodeAction(node.children, nodeId, isExpanded)
        : [],
    }
  })
}
