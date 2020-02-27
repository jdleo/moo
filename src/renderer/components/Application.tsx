import { hot } from 'react-hot-loader/root';
import * as React from 'react';

const Application = () => (
    <div style={styles.container}>
        <link href="https://fonts.googleapis.com/css?family=Nunito:400,600,700,900&display=swap" rel="stylesheet"></link>
        <h1 style={styles.h1}>Moo(d)</h1>
    </div>
);

const styles = {
    container: {
        padding: "30px",
        paddingTop: "0px"
    },
    h1: {
        fontFamily: "Nunito",
        fontWeight: 700,
        color: "#3e206d"
    }
}

export default hot(Application);
