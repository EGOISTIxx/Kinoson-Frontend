import React from 'react'
import { SButton } from './SButton'

const CustomButton: React.FC<any> = (props) => {
  const { authbtn, ...rest } = props
  return <SButton authbtn={authbtn} {...rest} />
}

export default CustomButton
