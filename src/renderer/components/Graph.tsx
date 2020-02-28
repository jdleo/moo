import { hot } from 'react-hot-loader/root';
import * as React from 'react';

// interface for props for this component
interface IProps {
    data: {}
}

// functional component
const Graph: React.FC<IProps> = ({ data }) => {

    return (
        <div>graph.</div>
    );
};

export default hot(Graph);