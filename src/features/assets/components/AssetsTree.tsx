import { createAssetsTree } from '../utils'
import { TreeNode } from './TreeNode'
import { useSelectedCompany } from '../../company/hooks'
import { LoadingSection } from '../../../components/LoadingSection'
import { ErrorSection } from '../../../components/ErrorSection'
import { useAssetsTree, useAssetsData, useSelectedComponent } from '../hooks'
import { useEffect, useMemo } from 'react'
import { TreeAction } from '../reducers'
import { EmptySection } from '../../../components/EmptySection'
import type { SensorType, Status, TreeNode as TreeNodeType } from '../types'

export function AssetsTree() {
  const { selectedCompany } = useSelectedCompany()
  const { state, dispatch } = useAssetsTree()
  const { setSelectedComponent } = useSelectedComponent()

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

  const tree = useMemo(() => {
    return data ? createAssetsTree(data.locations, data.assets) : []
  }, [data])

  useEffect(() => {
    setSelectedComponent(null)
    dispatch({ type: TreeAction.INIT, payload: { nodes: tree } })
  }, [tree, dispatch, setSelectedComponent])

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
      {state.filteredNodes.map((node) => (
        <TreeNode
          key={node.id}
          handleNodeClick={handleNodeClick}
          node={node}
        />
      ))}

      {state.filteredNodes.length === 0 && (
        <EmptySection message="Nenhum ativo encontrado" />
      )}
    </div>
  )
}
