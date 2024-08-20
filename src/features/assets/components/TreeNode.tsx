import AngleIcon from '../../../assets/icons/angle-icon.svg'
import LocationIcon from '../../../assets/icons/location-icon.svg'
import AssetIcon from '../../../assets/icons/asset-icon.svg'
import ComponentIcon from '../../../assets/icons/component-icon.svg'
import BoltIcon from '../../../assets/icons/bolt-icon.svg'
import DotIcon from '../../../assets/icons/dot-icon.svg'
import type { TreeNode as TreeNodeType } from '../types'
import { twMerge } from 'tailwind-merge'
import { useAssetsTree } from '../hooks'
import { TreeAction } from '../reducers'

interface TreeNodeProps {
  node: TreeNodeType
  handleNodeClick: (node: TreeNodeType) => void
}

export function TreeNode({ node, handleNodeClick }: TreeNodeProps) {
  const { dispatch } = useAssetsTree()

  const isLocation = node.type === 'location'
  const isAsset = node.type === 'asset'
  const isComponent = node.type === 'component'
  const hasChildren = node.children.length > 0
  const isEnergySensor = node.sensorType === 'energy'
  const isOperating = node.status === 'operating'

  const onClick = () => {
    if (isComponent) {
      handleNodeClick(node)
      return
    }

    handleToggle()
  }

  const handleToggle = () => {
    if (!hasChildren) {
      return
    }

    dispatch({
      type: TreeAction.TOGGLE_NODE,
      payload: { nodeId: node.id, isExpanded: !node.isExpanded },
    })
  }

  return (
    <div>
      <button
        className="flex items-center min-w-0 gap-2 p-1"
        onClick={onClick}
      >
        {hasChildren && (
          <AngleIcon
            className={twMerge(
              'w-3 h-3 shrink-0 transition-transform duration-200 ease-in-out',
              node.isExpanded ? 'rotate-0' : '-rotate-90'
            )}
          />
        )}

        {isLocation && (
          <LocationIcon className="w-5 h-5 text-primary shrink-0" />
        )}

        {isAsset && <AssetIcon className="w-5 h-5 shrink-0 text-primary" />}

        {isComponent && (
          <ComponentIcon className="w-5 h-5 shrink-0 text-primary" />
        )}

        <span className="block truncate text-tertiary">{node.name}</span>

        {isEnergySensor && (
          <BoltIcon
            className={twMerge(
              'w-4 h-4 shrink-0',
              isOperating ? 'text-success' : 'text-destructive'
            )}
          />
        )}

        {isComponent && !isEnergySensor && (
          <DotIcon
            className={twMerge(
              'w-3 h-3 shrink-0',
              isOperating ? 'text-success' : 'text-destructive'
            )}
          />
        )}
      </button>

      {node.isExpanded && hasChildren && (
        <div className="pl-2 ml-2 border-l border-custom-gray-150">
          {node.children.map((child) => (
            <TreeNode
              key={child.id}
              node={child}
              handleNodeClick={handleNodeClick}
            />
          ))}
        </div>
      )}
    </div>
  )
}
