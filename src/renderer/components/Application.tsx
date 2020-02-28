import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import Button from './Button';

// functional component
const Application = () => {
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

    // helper method to handle refresh click
    const handleRefresh: () => void = () => {
        console.log('refresh');
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.h1}>Moo(d)</h1>
            <h3 style={styles.h3}>{renderDate()}</h3>
            <Button title={'REFRESH'} onClick={() => handleRefresh()} />
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
