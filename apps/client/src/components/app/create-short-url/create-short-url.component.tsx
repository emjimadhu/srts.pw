import React from 'react';
import {
  Stack, TextField, PrimaryButton
} from '@fluentui/react';

import { appTextField } from '../../../app/app.component.styles';

const CreateShortUrlComponent: React.FC = () => {
  return (
    <Stack horizontal horizontalAlign="center">
      <TextField autoFocus styles={appTextField} placeholder="Enter URL here" />
      <PrimaryButton text="SHORTEN" allowDisabledFocus />
    </Stack>
  );
};

export default CreateShortUrlComponent;
