import { lazy, Suspense } from 'react'
import { EmptySection } from '../../../components/EmptySection'
import { LoadingSection } from '../../../components/LoadingSection'
import { useSelectedComponent } from '../hooks'

const ComponentDetails = lazy(() =>
  import('./ComponentDetails').then((mod) => ({
    default: mod.ComponentDetails,
  }))
)

export function ComponentWrapper() {
  const { selectedComponent } = useSelectedComponent()

  if (!selectedComponent) {
    return (
      <EmptySection message="Selecione um ativo para visualizar os detalhes" />
    )
  }

  return (
    <Suspense fallback={<LoadingSection />}>
      <ComponentDetails component={selectedComponent} />
    </Suspense>
  )
}
