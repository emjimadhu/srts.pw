import React from 'react';
import {
  Stack, Text, Layer
} from '@fluentui/react';

import {
  stackHorizontalGap, boldStyle, contentClass
} from '../../../app/app.component.styles';

export const AppBarComponent: React.FC = () => {
  return (
    <Layer>
      <div className={contentClass}>
        <Stack horizontal tokens={stackHorizontalGap}>
          <Text variant="large" styles={boldStyle}>
              SRTS.PW
          </Text>
          <Text variant="medium">
              URL Shortner
          </Text>
        </Stack>
      </div>
    </Layer>
  );
};

export default AppBarComponent;
