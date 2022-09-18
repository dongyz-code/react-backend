import React from 'react'

export interface Route {
  name?: string
  path: string
  component?: React.FC
  redirect?: string
  icon?: string
  children?: Route[]
  hideInMenu?: boolean
}
