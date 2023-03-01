import * as React from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
  children: React.ReactNode
}

const Portal: React.FC<PortalProps> = ({ children }) => {
  const rootElement = document.getElementById('root')

  return createPortal(children, rootElement!)
}

export default Portal
