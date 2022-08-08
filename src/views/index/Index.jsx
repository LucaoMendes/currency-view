import { useEffect, useState } from 'react'
import './App.css'
import GraphContainer from '../../components/graph/GraphContainer'
import GraphFilter from '../../components/graph/GraphFilter'
import GraphValueNow from '../../components/graph/GraphValueNow'
import { getLast } from '../../services/fetch'

function Index(props) {
  const [graphType,setGraphType] = useState('hours')
  const [brlValue,setBrlValue] = useState(5.55)
  const [isLoading,setIsLoading] = useState(true)

  useEffect(()=>{
    reloadBrlValue()
  },[props])

  async function reloadBrlValue(){
    setIsLoading(true)
    const thisValue = await getLast()
    setBrlValue(thisValue.brlValue)
    setIsLoading(false)
  }

  return isLoading ? <Loading/> : <Main/>

  function Main(){
    return (
      <div className="container">
        <div className="row">
          <h1>Currency in real Time!!</h1>
        </div>
        <div className="row">
          <div className="col-lg-8 col-12">
            <GraphContainer type={graphType}/>
            <GraphValueNow brlValue={brlValue}/>
          </div>
          <div className="col-lg-4 col-12">
            <GraphFilter setType={setGraphType}/>
          </div>
        </div>
      </div>
    )
  }

  function Loading(){
    return <div className="all">
              <div className='spinner-border' role='status'>
                      <span className='sr-only'></span>
                  </div>
            </div>
  }
}

export default Index
