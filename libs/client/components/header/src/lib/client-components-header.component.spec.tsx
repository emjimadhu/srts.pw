import React from 'react';
import { render } from '@testing-library/react';

import ClientComponentsHeader from './client-components-header';

describe('ClientComponentsHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< ClientComponentsHeader />);
    expect(baseElement).toBeTruthy();
  });
});
