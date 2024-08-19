import { useQuery } from '@tanstack/react-query'
import { fetchAssets, fetchLocations } from '../api'

interface UseAssetsDataParams {
  companyId: string
}

export function useAssetsData({ companyId }: UseAssetsDataParams) {
  return useQuery({
    queryKey: ['assets', companyId],
    queryFn: async () => {
      const [locations, assets] = await Promise.all([
        fetchLocations(companyId),
        fetchAssets(companyId),
      ])

      return { locations, assets }
    },
  })
}
