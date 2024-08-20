import ReceptorIcon from '../../../assets/icons/receptor-icon.svg'
import SensorIcon from '../../../assets/icons/sensor-icon.svg'
import { Avatar } from '../../../components/Avatar'
import { Separator } from '../../../components/Separator'
import { Component } from '../../assets/types'
import { ComponentImage } from './ComponentImage'
import {
  ComponentInfo,
  ComponentInfoTitle,
  ComponentInfoValue,
  ComponentInfoValueWrapper,
} from './ComponentInfo'

interface ComponentContentProps {
  component: Component
}

export function ComponentContent({ component }: ComponentContentProps) {
  const { name, equipmentType, department, receptorId, sensorId, image } =
    component

  return (
    <div className="grid grid-cols-1 gap-4 p-3 lg:p-5">
      <div className="flex flex-col gap-4 xl:items-center xl:flex-row col-span-full">
        <ComponentImage
          image={image}
          alt={name}
        />

        <div className="flex flex-col flex-1 gap-4">
          <ComponentInfo>
            <ComponentInfoTitle>Tipo de Equipamento</ComponentInfoTitle>
            <ComponentInfoValue>{equipmentType}</ComponentInfoValue>
          </ComponentInfo>

          <Separator />

          <ComponentInfo>
            <ComponentInfoTitle>Responsáveis</ComponentInfoTitle>
            <ComponentInfoValueWrapper>
              <Avatar placeholder={department[0].toUpperCase()} />
              <ComponentInfoValue>{department}</ComponentInfoValue>
            </ComponentInfoValueWrapper>
          </ComponentInfo>
        </div>
      </div>

      <Separator />

      <div className="grid grid-cols-3 gap-4 col-span-full">
        <ComponentInfo className="col-span-full lg:col-span-1">
          <ComponentInfoTitle>Sensor</ComponentInfoTitle>
          <ComponentInfoValueWrapper>
            <SensorIcon className="w-6 h-6 text-primary shrink-0" />
            <ComponentInfoValue>{sensorId}</ComponentInfoValue>
          </ComponentInfoValueWrapper>
        </ComponentInfo>

        <ComponentInfo className="col-span-full lg:col-span-1">
          <ComponentInfoTitle>Receptor</ComponentInfoTitle>
          <ComponentInfoValueWrapper>
            <ReceptorIcon className="w-6 h-6 text-primary shrink-0" />
            <ComponentInfoValue>{receptorId}</ComponentInfoValue>
          </ComponentInfoValueWrapper>
        </ComponentInfo>
      </div>
    </div>
  )
}
