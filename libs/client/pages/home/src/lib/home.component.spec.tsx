import React from 'react';
import { render } from '@testing-library/react';

import ClientPagesHome from './home.component';

describe('ClientPagesHome', () => {
  it('should render successfully', () => {
    expect.assertions(1);

    const {
      baseElement
    } = render(< ClientPagesHome />);

    expect(baseElement).toBeTruthy();
  });
});
