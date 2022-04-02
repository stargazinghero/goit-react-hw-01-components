import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@emotion/react';

import { App } from 'components/App/App';
import './index.css';
import { theme } from 'constant';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
