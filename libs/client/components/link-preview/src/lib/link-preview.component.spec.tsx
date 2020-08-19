import React from 'react';
import { render } from '@testing-library/react';

import ClientComponentsLinkPreview from './link-preview.component';

describe('ClientComponentsLinkPreview', () => {
  it('should render successfully', () => {
    expect.assertions(1);

    const {
      baseElement
    } = render(< ClientComponentsLinkPreview />);

    expect(baseElement).toBeTruthy();
  });
});
