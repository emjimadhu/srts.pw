import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';


import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    expect.assertions(1);

    const {
      baseElement
    } = render(<BrowserRouter><App /></BrowserRouter>);

    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    expect.assertions(1);

    const {
      getByText
    } = render(<BrowserRouter><App /></BrowserRouter>);

    expect(getByText('Welcome to client!')).toBeTruthy();
  });
});
