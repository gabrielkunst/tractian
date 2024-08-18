import SearchIcon from '../../../assets/icons/search-icon.svg'
import { useDebouncedValue } from '../hooks/useDebouncedValue'
import { useEffect, useState } from 'react'
import { Input } from '../../../components/Input'

export function AssetsTreeInput() {
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebouncedValue(search, 500)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value
    setSearch(searchValue)
  }

  const handleSearch = (searchValue: string) => {
    console.log('SEARCHING FOR ASSETS: ', searchValue.trim())
  }

  useEffect(() => {
    if (!debouncedSearch) {
      return
    }

    handleSearch(debouncedSearch)
  }, [debouncedSearch])

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
