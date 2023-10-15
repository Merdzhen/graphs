import React from 'react';
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend} from 'recharts';
import {data} from './data'


export default class RechartGraph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data,
        };
    }

  render() {
        const { data } = this.state;
            return (
                <div>
                    <div>rechart graph</div>
                    <LineChart width={400} height={400} data={data}>
                        <Line type="monotone" dataKey="react" stroke="#2196f3" strokeWidth={3}/>
                        <Line type="monotone" dataKey="angular" stroke="#f44236" strokeWidth={3}/>
                        <Line type="monotone" dataKey="vue" stroke="#ffca29" strokeWidth={3}/>
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="year"/>
                        <YAxis />
                        <Tooltip />
                        <Legend />
                    </LineChart>
                </div>
            );
        }
}
