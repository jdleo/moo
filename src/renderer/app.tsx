import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Application from './components/Application';

// Create main element
const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

// Render components
const render = (Component: () => JSX.Element) => {
    ReactDOM.render(<Application />, mainElement);
};

render(Application);
