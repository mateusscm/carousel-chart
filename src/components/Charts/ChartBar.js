import PropTypes from "prop-types";
import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Brush
  } from 'recharts';

function ChartBar({chartInfo, defaultColor}) {
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
          <Brush dataKey='name' height={10} stroke={defaultColor?.color2} startIndex={0} endIndex={50}/>
          <Bar dataKey="company_A" stackId="a" fill={defaultColor?.color1} />
          <Bar dataKey="company_B" stackId="a" fill={defaultColor?.color2} />
          <Bar dataKey="company_C" stackId="a" fill={defaultColor?.color3} />
        </BarChart>
      </ResponsiveContainer>
    );
}

ChartBar.propTypes = {
  chartInfo: PropTypes.array.isRequired,
  defaultColor: PropTypes.shape({
    color1: PropTypes.string,
    color2: PropTypes.string,
    color3: PropTypes.string,
  }).isRequired,
}

export default ChartBar;