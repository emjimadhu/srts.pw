import { gql } from '@apollo/client';

import { IUser } from '@srts.pw/client/shared';

export const USER_REGISTER_MUTATION = gql`
  mutation UserRegisterMutation($email: String!, $firstName: String!, $lastName: String!, $password: String!, $id: String!) {
    register(
      requestVariables: {
        email: $email,
        password: $password,
        firstName: $firstName,
        lastName: $lastName,
        id: $id
      }
    ) {
      id
      firstName
      lastName
      email
      createdAt
      updatedAt
    }
  }
`;

export interface IUserRegister_ResponseData {
  register : IUser;
}
