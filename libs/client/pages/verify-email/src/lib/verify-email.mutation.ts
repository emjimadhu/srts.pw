import { gql } from '@apollo/client';


export const USER_VERIFY_EMAIL_MUTATION = gql`
  mutation UserVerifyEmailMutation($token: String!) {
    verifyEmail(
      requestVariables: {
        verificationToken: $token
      }
    )
  }
`;

export interface IUserVerifyEmail_ResponseData {
  verifyEmail : boolean;
}
