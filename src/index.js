import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import App from './components/App';
import GlobalStyles from './components/GlobalStyles';

import { theme } from './constants';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
            <GlobalStyles />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
