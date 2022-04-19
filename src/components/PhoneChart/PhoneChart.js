import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const PhoneChart = () => {

    const [phones, setPhones] = useState([])
    useEffect(() => {
        axios.get(`https://openapi.programming-hero.com/api/phones?search=iphone`)
            .then(data => {
                const loadedData = data.data.data;
                const phoneData = loadedData.map(phone => {

                    const parts = phone.slug.split('-');
                    const ph = {
                        name: parts[0],
                        value: parseInt(parts[1])

                    }

                    return ph;
                });
                setPhones(phoneData)
                // console.log(phoneData)


            })
    }, [])

    console.log(phones)


    return (
        <LineChart height={500} width={1500} data={phones}>
            <Line type='monotone' dataKey='value'></Line>
            <YAxis></YAxis>
            <XAxis dataKey='name'></XAxis>
            <Tooltip></Tooltip>

        </LineChart>
    );
};

export default PhoneChart;