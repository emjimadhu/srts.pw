import React from 'react';
import { render } from '@testing-library/react';

import ClientPagesRegister from './register.component';

describe('ClientPagesRegister', () => {
  it('should render successfully', () => {
    expect.assertions(1);

    const {
      baseElement
    } = render(<ClientPagesRegister />);

    expect(baseElement).toBeTruthy();
  });
});
