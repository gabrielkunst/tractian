import {
  AssetsTree,
  AssetsTreeInput,
  ComponentWrapper,
  SelectedComponentProvider,
} from '../../assets/components'

export function CompanyContent() {
  return (
    <SelectedComponentProvider>
      <div className="flex flex-row flex-1 gap-3 overflow-hidden">
        <section className="flex flex-col w-full overflow-hidden border rounded sm:w-1/2 lg:w-1/3 border-custom-gray-200">
          <AssetsTreeInput />
          <AssetsTree />
        </section>

        <section className="hidden overflow-hidden border rounded sm:block sm:w-1/2 lg:w-2/3 border-custom-gray-200">
          <ComponentWrapper />
        </section>
      </div>
    </SelectedComponentProvider>
  )
}
