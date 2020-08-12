import {
  AnimationClassNames, mergeStyles
} from '@fluentui/react';

import { theme } from '../../../app/app.styles';

export const contentClass = mergeStyles([
  {
    backgroundColor: theme.palette.blue,
    color: theme.palette.white,
    lineHeight: '70px',
    padding: '0 20px',
    height: '7vh'
  },
  AnimationClassNames.scaleUpIn100
]);
