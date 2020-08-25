import { gql } from '@apollo/client';

import { IUrlDocument } from '@srts.pw/client/shared';

export const LIST_URLS_BY_USER_QUERY = gql`
  query ListUrlsByUser($user: String!) {
    urls(
      requestVariables: {
        user: $user
      }
    ) {
      id
      createdAt
      updatedAt
      shortUrl
      longUrl
      user
      metadata {
        description
        image
        title
      }
    }
  }
`;

export interface IListUrlsByUser_RequestVariables {
  user: string;
}

export interface IListUrlsByUser_ResponseData {
  urls: IUrlDocument[];
}
