import {
  get as cookieGet, set as cookieSet
} from 'js-cookie';
import { v4 as uuid } from 'uuid';

export const getUser = (): string | undefined => cookieGet('user');
export const setUser = (): void => {
  cookieSet('user', uuid());
};
