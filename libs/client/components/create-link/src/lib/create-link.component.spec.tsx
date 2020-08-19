import React from 'react';
import { render } from '@testing-library/react';

import ClientComponentsCreateUrl from './client-components-create-url.component';

describe('ClientComponentsCreateUrl', () => {
  it('should render successfully', () => {
    expect.assertions(1);

    const {
      baseElement
    } = render(< ClientComponentsCreateUrl />);

    expect(baseElement).toBeTruthy();
  });
});
