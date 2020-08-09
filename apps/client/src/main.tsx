import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {
  Customizer, mergeStyles, Customizations
} from '@fluentui/react';

import AppComponent from './app/app.component';

mergeStyles({
  selectors: {
    ':global(body), :global(html), :global(#root)': {
      margin: 0,
      padding: 0,
      height: '100vh'
    }
  }
});


render(
  <React.StrictMode>
    <BrowserRouter>
      <Customizer {...Customizations}>
        <AppComponent />
      </Customizer>
    </BrowserRouter>
  </React.StrictMode>,
  document.querySelector('#root')
);

