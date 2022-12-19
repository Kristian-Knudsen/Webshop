import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styles from './SalesActivitiesChart.module.scss';

const SalesActivitiesChart = () => {
    const DATA = [
        {
            name: 'January',
            "$": 4000,
            "DKK": 2400,
            "€": 2400,
        },
        {
            name: 'Febuary',
            "$": 3000,
            "DKK": 1398,
            "€": 2210,
        },
        {
            name: 'March',
            "$": 2000,
            "DKK": 9800,
            "€": 2290,
        },
        {
            name: 'April',
            "$": 2780,
            "DKK": 3908,
            "€": 2000,
        },
        {
            name: 'May',
            "$": 1890,
            "DKK": 4800,
            "€": 2181,
        },
        {
            name: 'June',
            "$": 2390,
            "DKK": 3800,
            "€": 2500,
        },
        {
            name: 'July',
            "$": 3490,
            "DKK": 4300,
            "€": 2100,
        },
        {
            name: 'August',
            "$": 3490,
            "DKK": 4300,
            "€": 2100,
        },
        {
            name: 'September',
            "$": 3490,
            "DKK": 4300,
            "€": 2100,
        },
        {
            name: 'Oktober',
            "$": 3490,
            "DKK": 4300,
            "€": 2100,
        },
        {
            name: 'November',
            "$": 3490,
            "DKK": 4300,
            "€": 2100,
        },
        {
            name: 'December',
            "$": 3490,
            "DKK": 4300,
            "€": 2100,
        },
    ];
    return (
        <div className={styles.wrapper}>
            <h1>Sales Activities</h1>
            <ResponsiveContainer width="100%" height="80%">
                <LineChart
                    width={500}
                    height={300}
                    data={DATA}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis tickMargin={5} angle={20} dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="$" strokeWidth={2} stroke="blue" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="DKK" strokeWidth={2} stroke="red" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="€" strokeWidth={2} stroke="green" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>

        </div>
    )
}

export default SalesActivitiesChart