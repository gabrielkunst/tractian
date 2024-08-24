/* eslint-disable react-hooks/exhaustive-deps */

import { TreeNode } from './TreeNode'
import { useSelectedCompany } from '../../company/hooks'
import { LoadingSection } from '../../../components/LoadingSection'
import { ErrorSection } from '../../../components/ErrorSection'
import { useAssetsTree, useAssetsData, useSelectedComponent } from '../hooks'
import { memo, useDeferredValue, useEffect } from 'react'
import { EmptySection } from '../../../components/EmptySection'
import type { SensorType, Status, TreeNode as TreeNodeType } from '../types'

function AssetsTreeComponent() {
  const { selectedCompany } = useSelectedCompany()
  const { state, initTree } = useAssetsTree()
  const { selectedComponent, setSelectedComponent } = useSelectedComponent()
  const deferredTree = useDeferredValue(state.filteredNodes)

  const { data, isLoading, isError } = useAssetsData({
    companyId: selectedCompany!.id,
  })

  const handleNodeClick = (node: TreeNodeType) => {
    setSelectedComponent({
      id: node.id,
      name: node.name,
      department: 'Mecânica',
      equipmentType: 'Motor Elétrico (Trifásico)',
      receptorId: node.receptorId ?? 'N/A',
      sensorId: node.sensorId ?? 'N/A',
      sensorType: node.sensorType as SensorType,
      status: node.status as Status,
    })
  }

  useEffect(() => {
    setSelectedComponent(null)

    if (!data) {
      return
    }

    initTree(data.locations, data.assets)
  }, [data])

  if (isLoading) {
    return <LoadingSection />
  }

  if (isError) {
    return (
      <ErrorSection message="Oops! Ocorreu um erro ao carregar os ativos" />
    )
  }

  return (
    <div className="flex-1 p-2 overflow-auto">
      {deferredTree.map((node) => (
        <TreeNode
          key={node.id}
          handleNodeClick={handleNodeClick}
          selectedId={selectedComponent?.id}
          node={node}
        />
      ))}

      {deferredTree.length === 0 && (
        <EmptySection message="Nenhum ativo encontrado" />
      )}
    </div>
  )
}

export const AssetsTree = memo(AssetsTreeComponent)
