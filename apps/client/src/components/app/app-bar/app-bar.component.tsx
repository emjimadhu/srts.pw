import React from 'react';
import {
  Stack, Text, Layer
} from '@fluentui/react';

import {
  stackHorizontalGap, boldStyle
} from '../../../app/app.styles';
import { contentClass } from './app-bar.styles';

export const AppBarComponent: React.FC = () => {
  return (
    <Layer>
      <div className={contentClass}>
        <Stack horizontal tokens={stackHorizontalGap}>
          <Text variant="xxLarge" styles={boldStyle}>
              SRTS.PW
          </Text>
          <Text variant="large">
              URL Shortner
          </Text>
        </Stack>
      </div>
    </Layer>
  );
};

export default AppBarComponent;
