import { EmptySection } from '../../../components/EmptySection'
import { Component } from '../../assets/types'
import { ComponentContent } from './ComponentContent'
import { ComponentHeader } from './ComponentHeader'
import { ComponentStatus } from './ComponentStatus'
import { ComponentTitle } from './ComponentTitle'

interface ComponentDetailsProps {
  component?: Component
}

export function ComponentDetails({ component }: ComponentDetailsProps) {
  if (!component) {
    return (
      <EmptySection message="Selecione um ativo para visualizar os detalhes" />
    )
  }

  return (
    <>
      <ComponentHeader>
        <ComponentTitle>{component.name}</ComponentTitle>
        <ComponentStatus
          status={component.status}
          sensorType={component.sensorType}
        />
      </ComponentHeader>

      <ComponentContent component={component} />
    </>
  )
}
