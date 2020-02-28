import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import Button from './Button';
import Graph from './Graph';

// functional component
const Application = () => {
    // state getter/setter for data
    const [data, setData] = React.useState<number[]>([]);

    // state getter/setter for labels
    const [labels, setLabels] = React.useState<string[]>([]);

    // helper method to render date in pretty format
    const renderDate: () => string = () => {
        // get current date
        const date = new Date();

        // get date elements needed
        const day = date.toLocaleString('en-us', { weekday: 'long' });
        const month = date.toLocaleString('en-us', { month: 'long' });

        // build string and return
        return `${day}, ${date.getDate()}. ${month}`;
    };

    // componentDidMount
    React.useEffect(() => {
        let newData = []
        let newLabels = [];

        for (let i = 0; i < 750; i++) {
            newData.push(Math.random());
            newLabels.push(`${i}`);
        }
        setData(newData);
        setLabels(newLabels);
    }, [])

    // helper method to handle refresh click
    const handleRefresh: () => void = () => {
        console.log('refresh');
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.h1}>Moo(d)</h1>
            <h3 style={styles.h3}>{renderDate()}</h3>
            <Button title={'REFRESH'} onClick={() => handleRefresh()} />
            <div style={{ height: '400px', width: '100%' }}>
                <Graph data={data} labels={labels}/>
            </div>
        </div>
    );
};

// for styling
const styles = {
    container: {
        padding: '30px',
        paddingTop: '0px'
    },
    h1: {
        fontFamily: 'Nunito',
        fontWeight: 700,
        color: '#3e206d'
    },
    h3: {
        fontFamily: 'Nunito',
        color: '#916dd5'
    }
};

export default hot(Application);
