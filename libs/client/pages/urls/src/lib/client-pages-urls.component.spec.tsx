import React from 'react';
import { render } from '@testing-library/react';

import ClientPagesUrls from './client-pages-urls.component';

describe('ClientPagesUrls', () => {
  it('should render successfully', () => {
    expect.assertions(1);

    const {
      baseElement
    } = render(< ClientPagesUrls />);

    expect(baseElement).toBeTruthy();
  });
});
