import { ComponentContent } from './ComponentContent'
import { ComponentHeader } from './ComponentHeader'
import { ComponentStatus } from './ComponentStatus'
import { ComponentTitle } from './ComponentTitle'

export function ComponentDetails() {
  return (
    <>
      <ComponentHeader>
        <ComponentTitle>MOTORS H12D - Stage 2</ComponentTitle>
        <ComponentStatus />
      </ComponentHeader>
      <ComponentContent />
    </>
  )
}
