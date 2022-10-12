import React, { useState } from 'react'
import { Input } from 'antd'

const Role: React.FC = () => {
  const [text, setText] = useState('Role')
  return (
    <>
      <h1>{text}</h1>
      <Input value={text} onChange={(e) => setText(e.target.value)} />
    </>
  )
}

export default Role
