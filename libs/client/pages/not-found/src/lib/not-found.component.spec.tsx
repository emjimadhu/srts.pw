import React from 'react';
import { render } from '@testing-library/react';

import ClientPagesNotFound from './not-found.component';

describe('ClientPagesNotFound', () => {
  it('should render successfully', () => {
    expect.assertions(1);

    const {
      baseElement
    } = render(<ClientPagesNotFound />);

    expect(baseElement).toBeTruthy();
  });
});
