import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
  } from 'recharts';
// import { Container } from './styles';

function ChartBar({chartInfo}) {
  return (
    <ResponsiveContainer>
        <BarChart
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
          <Bar dataKey="company_A" stackId="a" fill="#8884d8" />
          <Bar dataKey="company_B" stackId="a" fill="#81d255" />
          <Bar dataKey="company_C" stackId="a" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
}

export default ChartBar;