import { useState } from 'react'
import './App.css'
import GraphContainer from '../../components/graph/GraphContainer'
import GraphFilter from '../../components/graph/GraphFilter'

function Index() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <div className="row">
        <h1>Currency in real Time!!</h1>
      </div>
      <div className="row">
        <div className="col-8">
          <GraphContainer type='hours'/>
        </div>
        <div className="col-4">
          <GraphFilter/>
        </div>
      </div>
    </div>
  )
}

export default Index
