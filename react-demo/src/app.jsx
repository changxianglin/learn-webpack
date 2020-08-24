import React from 'react'
import ReactDOM from 'react-dom'
import { isNull, isZero } from './utils'

isNull({})

const App = () => {
  return (
    <div>
      <h1>React 大法好</h1>
    </div>
  )
}

export default App 
ReactDOM.render(<App />, document.getElementById('app'))