import AngleIcon from '../../../assets/icons/angle-icon.svg'
import LocationIcon from '../../../assets/icons/location-icon.svg'
import AssetIcon from '../../../assets/icons/asset-icon.svg'
import ComponentIcon from '../../../assets/icons/component-icon.svg'
import BoltIcon from '../../../assets/icons/bolt-icon.svg'
import DotIcon from '../../../assets/icons/dot-icon.svg'
import type { TreeNode as TreeNodeType } from '../types'
import { twMerge } from 'tailwind-merge'
import { useAssetsTree } from '../hooks'
import { memo } from 'react'

interface TreeNodeProps {
  node: TreeNodeType
  selectedId?: string
  handleNodeClick: (node: TreeNodeType) => void
}

function TreeNodeComponent({
  node,
  selectedId,
  handleNodeClick,
}: TreeNodeProps) {
  const { toggleNode } = useAssetsTree()

  const isSelected = selectedId === node.id
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

    toggleNode(node.id, !node.isExpanded)
  }

  return (
    <div>
      <button
        className={twMerge(
          'flex items-center min-w-0 gap-2 p-1 w-full transition-colors duration-200',
          isSelected && 'bg-primary text-custom-white'
        )}
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
          <ComponentIcon
            className={twMerge(
              'w-5 h-5 shrink-0 transition-colors duration-200',
              isSelected ? 'text-custom-white' : 'text-primary'
            )}
          />
        )}

        <span
          className={twMerge(
            'block truncate text-tertiary transition-colors duration-200',
            isSelected && 'text-custom-white'
          )}
        >
          {node.name}
        </span>

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
              selectedId={selectedId}
              handleNodeClick={handleNodeClick}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export const TreeNode = memo(TreeNodeComponent)
