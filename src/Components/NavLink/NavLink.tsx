import React from 'react'
import { SNavLink } from './SNavLink'

const CustomNavLink: React.FC<any> = (props) => {
  const { to, children, ...rest } = props

  return (
    <SNavLink to={to} {...rest}>
      {children}
    </SNavLink>
  )
}

export default CustomNavLink
