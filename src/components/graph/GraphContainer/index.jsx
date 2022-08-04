import { useState } from 'react'
import './styles.css'
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
const data = [
  {date: '12:00', value: 2.3, time: 210100},
  {date: '13:00', value: 2.4, time: 2210},
  {date: '14:00', value: 3.2, time: 2290},
  {date: '15:00', value: 3.45, time: 2000},
  {date: '16:00', value: 2.8, time: 2181},
  {date: '17:00', value: 3.33, time: 2500},
  {date: '18:00', value: 2.9, time: 2100},
];


function GraphContainer(props) {
  const [count, setCount] = useState(0)
  console.log(props)

  return (
    <div className="graphContainer">
      
      <div className="graphRow">
        <LineChart
        width={600}
        height={300}
        data={data}
        
        >
        <Line
          name='R$'
          type='monotone'
          dataKey='value'
          stroke='#8884d8'
          activeDot={{r: 8}}
          />
        <CartesianGrid strokeDasharray='3 3'/>
        <Tooltip/>
        <YAxis/>
        <XAxis dataKey='date'/>
        <Legend/>
      </LineChart>
      </div>
    </div>
  )
}

export default GraphContainer
