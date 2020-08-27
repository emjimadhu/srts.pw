import React from 'react';
import { render } from '@testing-library/react';

import ClientComponentsHeader from './header.component';

describe('ClientComponentsHeader', () => {
  it('should render successfully', () => {
    expect.assertions(1);

    const {
      baseElement
    } = render(< ClientComponentsHeader />);

    expect(baseElement).toBeTruthy();
  });
});
