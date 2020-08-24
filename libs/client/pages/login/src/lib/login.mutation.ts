import { gql } from '@apollo/client';

import { IUser } from '@srts.pw/client/types';

export const USER_LOGIN_MUTATION = gql`
  mutation UserLoginMutation($email: String!, $password: String!) {
    login(
      requestVariables: {
        email: $email,
        password: $password
      }
    ) {
      id
      firstName
      lastName
      email
      isVerified
      createdAt
      updatedAt
    }
  }
`;

export interface IUserLogin_ResponseData {
  login : IUser;
}
