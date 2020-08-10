import {
  ITextTokens, FontWeights, IStackTokens, getTheme, mergeStyles, AnimationClassNames, ITextFieldStyles
} from '@fluentui/react';

export const theme = getTheme();

export const semiBoldStyle: ITextTokens = {
  root: {
    fontWeight: FontWeights.semibold
  }
};

export const boldStyle: ITextTokens = {
  root: {
    fontWeight: FontWeights.bold
  }
};

export const lightStyle: ITextTokens = {
  root: {
    fontWeight: FontWeights.regular
  }
};

export const stackHorizontalGap: IStackTokens = {
  childrenGap: 15
};

export const contentClass = mergeStyles([
  {
    backgroundColor: theme.palette.blue,
    color: theme.palette.white,
    lineHeight: '50px',
    padding: '0 20px'
  },
  AnimationClassNames.scaleUpIn100
]);
