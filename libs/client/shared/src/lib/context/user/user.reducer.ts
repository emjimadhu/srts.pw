import { IUserState } from './user-state.type';
import {
  UserActionEnum, IUserActionPayload
} from './user-action.type';

export const UserReducer = (
  state: IUserState,
  action: {
    type: UserActionEnum;
    payload?: IUserActionPayload;
  }): IUserState => {

  const {
    type, payload
  } = action;

  switch(type) {
    case UserActionEnum.SET_USER_AND_TOKEN:
      return {
        ...state,
        user: payload.user
      };
    case UserActionEnum.RESET_USER_AND_TOKEN:
      return {
        ...state,
        user: undefined
      };
    default:
      return state;
  }
};
