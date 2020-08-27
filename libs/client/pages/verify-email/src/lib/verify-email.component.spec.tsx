import React from 'react';
import { render } from '@testing-library/react';

import ClientPagesVerifyEmail from './verify-email.component';

describe('ClientPagesVerifyEmail', () => {
  it('should render successfully', () => {
    expect.assertions(1);

    const {
      baseElement
    } = render(<ClientPagesVerifyEmail />);

    expect(baseElement).toBeTruthy();
  });
});
