import { useEffect, useState } from 'react'
import './styles.css'
import { getByDate, getLastHours, getLastMonth, getLastWeek } from '../../../services/fetch'; 
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';


function GraphContainer(props) {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([])
  const [loading,setIsLoading] = useState(true)
  const [dataKey,setDataKey] = useState('thisHour')
  useEffect(()=>{
    getData()
  },[props])

  async function getData(){
      console.log(props)
      let data;
      
      setIsLoading(true);
      switch(props.type){
        case 'hours':
          data = await getLastHours()
          setDataKey('thisHour')
          break;
        case 'week':
          console.log("CAIU NA WEEK")
          data = await getLastWeek()
          setDataKey('thisDate')
          break;
        case 'month':
          data = await getLastMonth()
          setDataKey('thisDate')
          break;
        default:
          if(props.type.includes('byDate')){
            const typeParsed = props.type.split(';')
            const startDate = typeParsed[1]
            const finalDate = typeParsed[2]

            data = await getByDate(startDate,finalDate)
            if(startDate != finalDate){
              setDataKey('thisDate')
            }else{
              setDataKey('thisHour')
            }
          }
      }
      console.log("TEMDATA?",data)
      
      if(data){
        parseData(data)
      }
      
      setIsLoading(false)
  }
  function parseData(data){
      const parsedData = []
      data.forEach(info => {
        const thisDate = new Date(info.thisDate)
        parsedData.push({
          "id": info.id,
          "thisDate": thisDate.toLocaleDateString().substring(0,5),
          "thisHour": thisDate.getHours(),
          "brlValue": info.brlValue.toFixed(2)
        })
      })
      setData(parsedData)
  }
  return (
    <div className="graphContainer">
      {
        loading ? <Loading /> : <GraphRow />
      }
    </div>
  )
  function GraphRow(){
    return <div className="graphRow">
              <LineChart
              width={600}
              height={300}
              data={data}
              
              >
              <Line
                name='R$'
                type='monotone'
                dataKey='brlValue'
                stroke='#8884d8'
                activeDot={{r: 8}}
                />
              <CartesianGrid strokeDasharray='3 3'/>
              <Tooltip/>
              <YAxis/>
              <XAxis dataKey={dataKey}/>
              <Legend/>
            </LineChart>
          </div>
  }
  function Loading(){
    return <div className='spinner-border' role='status'>
              <span className='sr-only'></span>
          </div>
  }
}

export default GraphContainer
