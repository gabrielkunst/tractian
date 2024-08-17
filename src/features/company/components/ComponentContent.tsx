import ReceptorIcon from '../../../assets/icons/receptor-icon.svg'
import SensorIcon from '../../../assets/icons/sensor-icon.svg'
import { Avatar } from '../../../components/Avatar'
import { Separator } from '../../../components/Separator'
import {
  ComponentInfo,
  ComponentInfoTitle,
  ComponentInfoValue,
  ComponentInfoValueWrapper,
} from './ComponentInfo'

export function ComponentContent() {
  return (
    <div className="grid grid-cols-1 gap-4 p-3 lg:p-5">
      <div className="flex flex-col gap-4 lg:items-center lg:flex-row col-span-full">
        <div className="w-full h-full overflow-hidden rounded max-w-80 max-h-52">
          <img
            className="object-cover object-center w-full h-full"
            src="https://via.placeholder.com/300x300"
            alt="Motor"
          />
        </div>

        <div className="flex flex-col flex-1 gap-4">
          <ComponentInfo>
            <ComponentInfoTitle>Tipo de Equipamento</ComponentInfoTitle>
            <ComponentInfoValue>Motor Elétrico (Trifásico)</ComponentInfoValue>
          </ComponentInfo>

          <Separator />

          <ComponentInfo>
            <ComponentInfoTitle>Responsáveis</ComponentInfoTitle>
            <ComponentInfoValueWrapper>
              <Avatar placeholder="M" />
              <ComponentInfoValue>Mecânica</ComponentInfoValue>
            </ComponentInfoValueWrapper>
          </ComponentInfo>
        </div>
      </div>

      <Separator />

      <div className="grid grid-cols-3 gap-4 col-span-full">
        <ComponentInfo className="col-span-1">
          <ComponentInfoTitle>Sensor</ComponentInfoTitle>
          <ComponentInfoValueWrapper>
            <SensorIcon className="w-6 h-6 text-primary shrink-0" />
            <ComponentInfoValue>RWET667</ComponentInfoValue>
          </ComponentInfoValueWrapper>
        </ComponentInfo>

        <ComponentInfo className="col-span-1">
          <ComponentInfoTitle>Receptor</ComponentInfoTitle>
          <ComponentInfoValueWrapper>
            <ReceptorIcon className="w-6 h-6 text-primary shrink-0" />
            <ComponentInfoValue>86GTFD7</ComponentInfoValue>
          </ComponentInfoValueWrapper>
        </ComponentInfo>
      </div>
    </div>
  )
}
