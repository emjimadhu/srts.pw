import { IUser } from '../../interfaces';

export enum UserActionEnum {
  SET_USER_AND_TOKEN = 'SET_USER_AND_TOKEN',
  RESET_USER_AND_TOKEN = 'RESET_USER_AND_TOKEN'
}

export interface IUserActionPayload {
  user: IUser;
}
