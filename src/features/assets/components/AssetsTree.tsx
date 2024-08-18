import { useQuery } from '@tanstack/react-query'
import { createAssetsTree } from '../utils/createAssetsTree'
import { TreeNode } from './TreeNode'
import { fetchAssets, fetchLocations } from '../api'
import { useSelectedCompany } from '../../company/hooks'
import { LoadingSection } from '../../../components/LoadingSection'
import { ErrorSection } from '../../../components/ErrorSection'

export function AssetsTree() {
  const { selectedCompany } = useSelectedCompany()

  const { data, isLoading, isError } = useQuery({
    queryKey: ['assets', selectedCompany!.id],
    queryFn: async () => {
      const [locations, assets] = await Promise.all([
        fetchLocations(selectedCompany!.id),
        fetchAssets(selectedCompany!.id),
      ])

      return { locations, assets }
    },
    enabled: !!selectedCompany?.id,
  })

  if (isLoading) {
    return <LoadingSection />
  }

  if (isError) {
    return (
      <ErrorSection message="Oops! Ocorreu um erro ao carregar os ativos" />
    )
  }

  const nodes = createAssetsTree(data!.locations, data!.assets)

  return (
    <div className="flex-1 p-2 overflow-auto">
      {nodes.map((node) => (
        <TreeNode
          key={node.id}
          node={node}
        />
      ))}
    </div>
  )
}
