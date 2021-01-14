import React from 'react';
import {
  ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

// import { Container } from './styles';

function ChartLine({chartInfo}) {
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
          <Line type="monotone" dataKey="company_A" stroke="#8884d8" />
          <Line type="monotone" dataKey="company_B" stroke="#255255" />
          <Line type="monotone" dataKey="company_C" stroke="#82ca9d" />
        </LineChart>
    </ResponsiveContainer>
  );

}

export default ChartLine;