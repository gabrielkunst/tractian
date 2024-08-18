import BoltIcon from '../../../assets/icons/bolt-icon.svg'
import DotIcon from '../../../assets/icons/dot-icon.svg'
import { twMerge } from 'tailwind-merge'
import { SensorType, Status } from '../../assets/types'

interface ComponentStatusProps {
  status: Status
  sensorType: SensorType
}

export function ComponentStatus({ status, sensorType }: ComponentStatusProps) {
  const statusColor =
    status === 'operating' ? 'text-success' : 'text-destructive'
  const isEnergySensor = sensorType === 'energy'

  if (isEnergySensor) {
    return <BoltIcon className={twMerge('w-4 h-4 shrink-0', statusColor)} />
  }

  return <DotIcon className={twMerge('w-3 h-3 shrink-0', statusColor)} />
}
