import React from "react";
import './Info.css'
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Info() {
  const data = [
    { name: "Dell", sold: 20000000 },
    { name: "HP", sold: 30000000 },
    { name: "Sony", sold: 5050000 },
    { name: "Mac", sold: 500000 },
    { name: "Samsung", sold: 5005000 }
  ];

  return (
    <div className="chart">
        <h1>Laptop Selling Trend of HP over other brands</h1>
        <h3 className="data">Average Monthly Sales<br/>
            <span>$498,2793</span>
        </h3>
      <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >



<XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="sold" fill="green" background={{ fill: '#eee' }} />
        </BarChart>
    </div>
  );
}

export default Info;
