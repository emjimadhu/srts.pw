import React from 'react';
import { render } from '@testing-library/react';

import ClientPagesLogin from './login.component';

describe('ClientPagesLogin', () => {
  it('should render successfully', () => {
    expect.assertions(1);

    const {
      baseElement
    } = render(<ClientPagesLogin />);

    expect(baseElement).toBeTruthy();
  });
});
