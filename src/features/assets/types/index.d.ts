export type Location = {
  id: string
  name: string
  parentId: string | null
}

export type SensorType = 'energy' | 'vibration'

export type Status = 'operating' | 'alert'

export type Asset = {
  id: string
  name: string
  parentId: string | null
  sensorId?: string
  sensorType: SensorType | null
  status: Status | null
  gatewayId?: string
  locationId: string | null
}

export type Component = {
  id: string
  name: string
  image?: string
  equipmentType: string
  sensorId: string
  receptorId: string
  department: string
  sensorType: SensorType
  status: Status
}

export type NodeType = 'location' | 'asset' | 'component'

export type TreeNode = {
  id: string
  name: string
  type: NodeType
  children: TreeNode[]
  sensorId?: string
  receptorId?: string
  sensorType: SensorType | null
  status: Status | null
  isExpanded: boolean
}
