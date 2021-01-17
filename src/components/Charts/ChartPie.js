import React, { useEffect, useState } from 'react';
import {
  ResponsiveContainer, PieChart, Pie, Sector, Cell,
} from 'recharts';

const renderActiveShape = ({cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
	fill, payload, percent, value,}) => {
	const RADIAN = Math.PI / 180;
	const sin = Math.sin(-RADIAN * midAngle);
	const cos = Math.cos(-RADIAN * midAngle);
	const sx = cx + (outerRadius + 10) * cos;
	const sy = cy + (outerRadius + 10) * sin;
	const mx = cx + (outerRadius + 30) * cos;
	const my = cy + (outerRadius + 30) * sin;
	const ex = mx + (cos >= 0 ? 1 : -1) * 22;
	const ey = my;
	const textAnchor = cos >= 0 ? 'start' : 'end';

	return (
		<g>
			<text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
			<Sector
				cx={cx}
				cy={cy}
				innerRadius={innerRadius}
				outerRadius={outerRadius}
				startAngle={startAngle}
				endAngle={endAngle}
				fill={fill}
			/>
			<Sector
				cx={cx}
				cy={cy}
				startAngle={startAngle}
				endAngle={endAngle}
				innerRadius={outerRadius + 6}
				outerRadius={outerRadius + 10}
				fill={fill}
			/>
			<path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
			<circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
			<text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`Valor: ${value}`}</text>
			<text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
				{`(Porcentagem: ${(percent * 100).toFixed(2)}%)`}
			</text>
		</g>
	);
};

function ChartPie({chartInfo , defaultColor}) {
  const [newInfo, setNewInfo] = useState([]);
  const [convertColor, setConvertColor] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (data, index) => {
    setActiveIndex(index);
  }

  useEffect(() => {
    const aux = chartInfo.reduce(
      // eslint-disable-next-line no-sequences
      (acc, cur) => (Object.keys(cur).forEach(item => (acc[item] = (acc[item] || 0) + cur[item])), acc), {}
    );

    const result = Object.keys(aux).map(e => ({name: e, value: aux[e]}));
    
    setNewInfo(result);
  }, [chartInfo]);

  useEffect(() => {
	  const result = Object.keys(defaultColor).map((key) => defaultColor[key]);

	  setConvertColor(result);
  }, [defaultColor]);

  return (
    <ResponsiveContainer>
      <PieChart>
          <Pie 
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={newInfo}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
			dataKey="value"
			labelLine
            onMouseEnter={onPieEnter}
          >
            {
				newInfo.map((entry, index) => <Cell key={`cell-${index}`} fill={convertColor[index % convertColor.length]} />)
			}
		  </Pie>
          {/* <Tooltip /> */}
        </PieChart>
    </ResponsiveContainer>
  );
}

export default ChartPie;