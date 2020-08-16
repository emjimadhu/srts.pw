import React from 'react';
import { render } from '@testing-library/react';

import ClientComponentsUrlPreview from './client-components-url-preview.component';

describe('ClientComponentsUrlPreview', () => {
  it('should render successfully', () => {
    expect.assertions(1);

    const {
      baseElement
    } = render(< ClientComponentsUrlPreview />);

    expect(baseElement).toBeTruthy();
  });
});
