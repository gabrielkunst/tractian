import { Asset, Location, TreeNode } from '../types'

export function createAssetsTree(
  locations: Location[],
  assets: Asset[]
): TreeNode[] {
  const locationMap = new Map<string, TreeNode>()
  const assetMap = new Map<string, TreeNode>()

  locations.forEach((location) => {
    locationMap.set(location.id, {
      id: location.id,
      name: location.name,
      type: 'location',
      sensorType: null,
      status: null,
      children: [],
      isExpanded: false,
    })
  })

  assets.forEach((asset) => {
    assetMap.set(asset.id, {
      id: asset.id,
      name: asset.name,
      type: asset.sensorType ? 'component' : 'asset',
      sensorType: asset.sensorType,
      status: asset.status,
      children: [],
      isExpanded: false,
    })
  })

  const tree: TreeNode[] = []

  locations.forEach((location) => {
    const locationNode = locationMap.get(location.id)

    if (!locationNode) {
      return
    }

    if (location.parentId) {
      const parentLocationNode = locationMap.get(location.parentId)

      if (!parentLocationNode) {
        return
      }

      parentLocationNode.children.push(locationNode)
      return
    }

    tree.push(locationNode)
  })

  assets.forEach((asset) => {
    const assetNode = assetMap.get(asset.id)

    if (!assetNode) {
      return
    }

    if (asset.locationId) {
      const locationNode = locationMap.get(asset.locationId)

      if (!locationNode) {
        return
      }

      locationNode.children.push(assetNode)
      return
    }

    if (asset.parentId) {
      const parentAssetNode = assetMap.get(asset.parentId)

      if (!parentAssetNode) {
        return
      }

      parentAssetNode.children.push(assetNode)
      return
    }

    tree.push(assetNode)
  })

  return tree
}
