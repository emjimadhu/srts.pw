import {
  ITextTokens, FontWeights, IStackTokens, getTheme
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
