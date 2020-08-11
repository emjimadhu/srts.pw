import {
  ITextFieldStyles, IButtonStyles
} from '@fluentui/react';

export const createUrlTextFieldStyles: Partial<ITextFieldStyles> = {
  fieldGroup: {
    height: '6vh'
  },
  field: {
    height: '6vh',
    fontSize: '2vh'
  },
  errorMessage: {
    fontSize: '1.5vh'
  }
};

export const createUrlUrlTextFieldWidth: Partial<ITextFieldStyles> = {
  root: {
    width: '40vw'
  },
  ...createUrlTextFieldStyles
};

export const createUrlSlugTextFieldWidth: Partial<ITextFieldStyles> = {
  root: {
    width: '10vw'
  },
  ...createUrlTextFieldStyles
};

export const shortenButtonStyles: IButtonStyles = {
  root: {
    height: '6vh'
  },
  label: {
    fontSize: '2vh'
  }
};
