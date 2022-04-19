import React from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'


const data = [
    {
        "name": "Page A",
        "price": 4000,
        "pv": 2400,
        "amt": 2400
    },
    {
        "name": "Page B",
        "price": 3000,
        "pv": 1398,
        "amt": 2210
    },
    {
        "name": "Page C",
        "price": 2000,
        "pv": 9800,
        "amt": 2290
    },
    {
        "name": "Page D",
        "price": 2780,
        "pv": 3908,
        "amt": 2000
    },
    {
        "name": "Page E",
        "price": 1890,
        "pv": 4800,
        "amt": 2181
    }
]


const MyLineChart = () => {
    return (

        <LineChart width={800} height={400} data={data}>

            <Line type='monotone' dataKey='price'></Line>
            <Tooltip></Tooltip>
            <CartesianGrid></CartesianGrid>
            <YAxis></YAxis>
            <XAxis dataKey='name'></XAxis>


        </LineChart>

    );
};

export default MyLineChart;