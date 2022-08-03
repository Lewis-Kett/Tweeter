import React from 'react'

interface SideBarRowProps {
  Icon?: () => {}
  title?: string
}

function SideBarRow({Icon, title}: SideBarRowProps) {
  return (
    <h1 data-testid="test">Side bar row</h1>
  )
}

export default SideBarRow;