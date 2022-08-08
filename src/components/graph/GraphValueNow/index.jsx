import { useEffect, useState } from 'react'
import './styles.css'



function GraphValueNow(props) {
console.log(props)
  return <div className="valueContainer">
              USD x BRL  <br/>  1 $ = R$ {props.brlValue.toFixed(2)}
          </div>
}

export default GraphValueNow
