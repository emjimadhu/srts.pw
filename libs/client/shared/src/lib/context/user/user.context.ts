/* eslint-disable @typescript-eslint/ban-types */
import { createContext } from 'react';

import { IUserState } from './user-state.type';
import { userState } from './user.state';


export const UserContext = createContext<{state: IUserState; dispatch: Function}>({
  state: userState,
  dispatch: () => 0
});

export const UserProvider = UserContext.Provider;
