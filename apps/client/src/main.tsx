import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import { defaultTheme } from '@srts.pw/client/services/core';

import AppComponent from './app/app.component';

render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <AppComponent />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.querySelector('#root')
);

