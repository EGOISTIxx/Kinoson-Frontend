import React, { useState, useEffect } from 'react'
import { Space } from 'antd'
import { SPasswordInput } from './SPasswordInput'

const PasswordInput: React.FC<any> = (props) => {
  return (
    <Space>
      <SPasswordInput {...props} />
    </Space>
  )
}

export default PasswordInput
