import React from 'react';
import { render } from '@testing-library/react';

import ClientPagesRedirect from './redirect.component';

describe('ClientPagesRedirect', () => {
  it('should render successfully', () => {
    expect.assertions(1);

    const {
      baseElement
    } = render(< ClientPagesRedirect />);

    expect(baseElement).toBeTruthy();
  });
});
