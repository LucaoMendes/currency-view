import { useRef, useState } from 'react'
import './styles.css'

function GraphFilter() {
  const [count, setCount] = useState(0)
  const [initialDate, setInitialDate] = useState('');
  const [finalDate, setFinalDate] = useState('');
  const [invalidInitial,setInvalidInitial] = useState(false);
  const [invalidFinal,setInvalidFinal] = useState(false);

  const inputDate = useRef();

  function dateChange (date,initialDate = true) {
    
    const setFunction = initialDate ? setInitialDate : setFinalDate
    const invalidFunction = initialDate ? setInvalidInitial : setInvalidFinal
    if( date.length == 0 || date.length < 10 )
      return invalidFunction(false)
    if(date.match(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/)){
      setFunction(date)
      return  invalidFunction(false)
    }
    return invalidFunction(true)

  }

  function goButton(){
    if(!invalidInitial && !invalidFinal && initialDate.length > 0 && finalDate.length > 0){
      console.log("GO")
    }
  }
  return (
    <div className="graphOptions" >
      <h4 style={{color:'black'}}>Filters</h4>
      <hr />
     <div className="row">
      <div class="d-grid gap-2">
        <button class="btn btn-primary" type="button">Last 7 hours</button>
        <button class="btn btn-primary" type="button">Last 7 Days</button>
        <button class="btn btn-primary" type="button">Last 7 Months</button>
      </div>
     </div>
     <hr />
     <div className="row">
        <p style={{color:'black'}}>Put the initial date</p>
        <input type="text" maxLength={10}  id="initialDate" class={`form-control ${invalidInitial && 'is-invalid'}`} placeholder='DD/MM/YYYY' onChange={date => dateChange(date.target.value)}></input>
       </div>
       <div className="row">
       <p style={{color:'black'}}>Put the final date</p>
       <input type="text" maxLength={10}  id="endDate" class={`form-control ${invalidFinal && 'is-invalid'}`} placeholder='DD/MM/YYYY' onChange={date => dateChange(date.target.value,false)}></input>
        <hr />
       <button class="btn btn-primary btn-block" type="button" onClick={() => goButton()}>GO!</button>
       </div>
    </div>
  )
}

export default GraphFilter
