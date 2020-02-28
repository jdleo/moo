import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import { Line } from 'react-chartjs-2';

// interface for props for this component
interface IProps {
    data: number[];
    labels: string[];
}

// functional component
const Graph: React.FC<IProps> = ({ data, labels }) => {
    return (
        <Line
            data={{
                labels: labels,
                datasets: [
                  {
                    label: 'Mood',
                    fill: false,
                    lineTension: 0.3,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 2,
                    pointHitRadius: 10,
                    data: data
                  }
                ]
              }}
        />
    );
};

export default hot(Graph);
