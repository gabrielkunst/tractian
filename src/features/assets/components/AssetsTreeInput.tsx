import SearchIcon from '../../../assets/icons/search-icon.svg'
import { useEffect, useState } from 'react'
import { Input } from '../../../components/Input'
import { useAssetsTree, useDebouncedCallback } from '../hooks'
import { TreeAction } from '../reducers'
import { useSelectedCompany } from '../../company/hooks'

export function AssetsTreeInput() {
  const { selectedCompany } = useSelectedCompany()
  const { dispatch } = useAssetsTree()
  const [search, setSearch] = useState('')

  const debouncedSearchDispatch = useDebouncedCallback(
    (searchValue: string) => {
      dispatch({
        type: TreeAction.SET_SEARCH_QUERY,
        payload: { search: searchValue },
      })
    },
    500
  )

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    setSearch(value)
    debouncedSearchDispatch(value)
  }

  useEffect(() => {
    setSearch('')
  }, [selectedCompany?.id])

  return (
    <div className="relative w-full overflow-hidden border-b rounded-sm border-custom-gray-200">
      <Input
        placeholder="Buscar Ativo ou Local"
        className="flex-1 py-3 pl-4 pr-12"
        value={search}
        onChange={handleInputChange}
      />
      <SearchIcon className="absolute w-4 h-4 -translate-y-1/2 top-1/2 shrink-0 right-4" />
    </div>
  )
}
