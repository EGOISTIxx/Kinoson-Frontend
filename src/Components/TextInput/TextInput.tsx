import React, { useState, useEffect } from 'react'
import { Space } from 'antd'
import { STextInput } from './STextInput'

const TextInput: React.FC<any> = (props) => {
  return (
    <Space>
      <STextInput {...props} />
    </Space>
  )
}

export default TextInput
