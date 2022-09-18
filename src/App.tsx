import React from 'react'
import routes from '@/config/routes'
import { useRoutes } from 'react-router-dom'
import '@/styles/global.less'

function App() {
  const element = useRoutes(routes)
  return <div className="App">{element}</div>
}

export default App
