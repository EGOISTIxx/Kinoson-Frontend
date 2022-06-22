import React from 'react'
import { SLink } from './SLink'

const CustomLink: React.FC<any> = (props) => {
  const { to, children } = props
  return (
    <SLink to={to} {...props}>
      {children}
    </SLink>
  )
}

export default CustomLink
