import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import AppComponent from './app/app.component';

render(
  <React.StrictMode>
    <BrowserRouter>
      <AppComponent />
    </BrowserRouter>
  </React.StrictMode>,
  document.querySelector('#root')
);

