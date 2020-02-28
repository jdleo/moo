import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Application from './components/Application';

// Create main element
const mainElement = document.createElement('div');

// set body styles here
document.body.style.backgroundColor = "#f0e3ff";
document.body.style.height = "100%";
document.body.style.width = "100%";

// for custom fonts
const fonts = document.createElement('link');
fonts.href = "https://fonts.googleapis.com/css?family=Nunito:400,600,700,900&display=swap";
fonts.rel = "stylesheet";
document.body.appendChild(fonts);


// add main element to body
document.body.appendChild(mainElement);

// Render components
const render = (Component: () => JSX.Element) => {
    ReactDOM.render(<Application />, mainElement);
};

render(Application);
