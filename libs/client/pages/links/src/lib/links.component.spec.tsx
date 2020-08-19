import React from 'react';
import { render } from '@testing-library/react';

import ClientPagesLinks from './links.component';

describe('ClientPagesUrls', () => {
  it('should render successfully', () => {
    expect.assertions(1);

    const {
      baseElement
    } = render(< ClientPagesLinks />);

    expect(baseElement).toBeTruthy();
  });
});
