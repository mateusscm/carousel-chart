import React from 'react';
import {
  ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Brush
} from 'recharts';

// import { Container } from './styles';

function ChartLine({chartInfo, defaultColor}) {
  return (
    <ResponsiveContainer>

      <LineChart
          data={chartInfo}
          margin={{
            top: 5, right: 30, left: 5, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" height={36}/>
          <Brush dataKey='name' height={10} stroke={defaultColor?.color2} startIndex={0} endIndex={50}/>
          <Line type="monotone" dataKey="company_A" stroke={defaultColor?.color1} />
          <Line type="monotone" dataKey="company_B" stroke={defaultColor?.color2} />
          <Line type="monotone" dataKey="company_C" stroke={defaultColor?.color3} />
        </LineChart>
    </ResponsiveContainer>
  );

}

export default ChartLine;