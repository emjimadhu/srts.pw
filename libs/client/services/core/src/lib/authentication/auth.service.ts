import {
  get as cookieGet, set as cookieSet
} from 'js-cookie';
import { v4 as uuid } from 'uuid';

import { IUser } from '@srts.pw/client/shared';

export const getTemporaryUser = (): string | undefined => cookieGet('tempUserId');
export const setTemporaryUser = (): void => {
  cookieSet('tempUserId', uuid());
};

export const getUser = (): string | undefined => cookieGet('user');
export const setUser = (user: IUser): void => {
  cookieSet('user', user);
};
