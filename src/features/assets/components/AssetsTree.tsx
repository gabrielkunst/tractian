import { createAssetsTree } from '../utils/createAssetsTree'
import { TreeNode } from './TreeNode'
import { useSelectedCompany } from '../../company/hooks'
import { LoadingSection } from '../../../components/LoadingSection'
import { ErrorSection } from '../../../components/ErrorSection'
import { useAssetsTree } from '../hooks/useAssetsTree'
import { useEffect, useMemo } from 'react'
import { TreeAction } from '../reducers/treeReducer'
import { useAssetsData } from '../hooks/useAssetsData'

export function AssetsTree() {
  const { selectedCompany } = useSelectedCompany()
  const { state, dispatch } = useAssetsTree()

  const { data, isLoading, isError } = useAssetsData({
    companyId: selectedCompany!.id,
  })

  const tree = useMemo(() => {
    return data ? createAssetsTree(data.locations, data.assets) : []
  }, [data])

  useEffect(() => {
    dispatch({ type: TreeAction.INIT, payload: { nodes: tree } })
  }, [tree, dispatch])

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
      {state.nodes.map((node) => (
        <TreeNode
          key={node.id}
          node={node}
        />
      ))}
    </div>
  )
}
