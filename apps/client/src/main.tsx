import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {
  mergeStyles, Customizations, createTheme, Fabric
} from '@fluentui/react';

import AppComponent from './app/app.component';

mergeStyles({
  selectors: {
    ':global(body), :global(html), :global(#root)': {
      margin: 0,
      padding: 0,
      height: '100vh',
      overflowX: 'hidden'
    }
  }
});

const myTheme = createTheme({
  palette: {
    themePrimary: '#00bcf2',
    themeLighterAlt: '#00080a',
    themeLighter: '#001e27',
    themeLight: '#003949',
    themeTertiary: '#007291',
    themeSecondary: '#00a7d5',
    themeDarkAlt: '#18c4f4',
    themeDark: '#3bcdf5',
    themeDarker: '#6ddaf8',
    neutralLighterAlt: '#201f1e',
    neutralLighter: '#201f1e',
    neutralLight: '#1e1e1d',
    neutralQuaternaryAlt: '#1c1b1b',
    neutralQuaternary: '#1b1a19',
    neutralTertiaryAlt: '#1a1918',
    neutralTertiary: '#f3f1f0',
    neutralSecondary: '#f5f4f2',
    neutralPrimaryAlt: '#f7f6f5',
    neutralPrimary: '#edebe9',
    neutralDark: '#fbfafa',
    black: '#fdfdfc',
    white: '#201f1e'
  }
});

Customizations.applySettings({
  theme: myTheme
});


render(
  <React.StrictMode>
    <BrowserRouter>
      <Fabric applyThemeToBody>
        <AppComponent />
      </Fabric>
    </BrowserRouter>
  </React.StrictMode>,
  document.querySelector('#root')
);

