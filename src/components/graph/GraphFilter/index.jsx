import { useRef, useState } from 'react'
import './styles.css'

function GraphFilter(props) {
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
    const tempInitial = new Date(initialDate)
    const tempFinal = new Date(finalDate)

    if(initialDate.length < 10 || tempInitial.getTime() > new Date().getTime())
      return setInvalidInitial(true)

    if(finalDate.length < 10 || tempFinal.getTime() > new Date().getTime())
      return setInvalidFinal(true)

    console.log(tempFinal.getTime() < tempInitial.getTime() )
    
    if(tempFinal.getTime() < tempInitial.getTime() ){
      setInvalidInitial(true)
      setInvalidFinal(true)
      return false;
    }

    if(!invalidInitial && !invalidFinal && initialDate.length > 0 && finalDate.length > 0){
      return props.setType(`byDate;${initialDate};${finalDate}`)
    }
  }
  return (
    <div className="graphOptions" >
      <h4 style={{color:'black'}}>Filters</h4>
      <hr />
     <div className="row">
      <div class="d-grid gap-2">
        <button class="btn btn-primary" type="button" onClick={ () => props.setType('hours') }>Last Hours</button>
        <button class="btn btn-primary" type="button" onClick={ () => props.setType('week') }>Last Week</button>
        <button class="btn btn-primary" type="button" onClick={ () => props.setType('month') }>Last Month</button>
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
