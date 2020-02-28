import { hot } from 'react-hot-loader/root';
import * as React from 'react';

// interface for props for this component
interface IProps {
    title: string;
    onClick: () => void;
}

// functional component
const Button: React.FC<IProps> = ({ title, onClick }) => {
    // for button background color property
    const [backgroundColor, setBackgroundColor] = React.useState('#fff');

    // for button color property
    const [color, setColor] = React.useState('#3e206d');

    // for button border radius property
    const [borderRadius, setBorderRadius] = React.useState('10px');

    // for handling onHover event
    const onHover: () => void = () => {
        // invert on hover
        setBackgroundColor('#3e206d');
        setColor('#fff');
        setBorderRadius('20px');
    };

    // for handling onBlur event
    const onBlur: () => void = () => {
        // set back to normal
        setBackgroundColor('#fff');
        setColor('#3e206d');
        setBorderRadius('10px');
    };

    // for styling
    const styles = {
        button: {
            fontFamily: 'Nunito',
            fontWeight: 700,
            fontSize: '14px',
            backgroundColor: backgroundColor,
            color: color,
            padding: '10px 40px',
            borderRadius: borderRadius,
            border: 'none',
            outline: 'none'
        }
    };

    return (
        <button
            onMouseEnter={() => onHover()}
            onMouseLeave={() => onBlur()}
            style={styles.button}
            onClick={onClick}
        >
            {title}
        </button>
    );
};

export default hot(Button);
