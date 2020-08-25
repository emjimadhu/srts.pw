import { gql } from '@apollo/client';

import { IUrlDocument } from '@srts.pw/client/shared';

export const GET_USER_BY_SHORT_URL_QUERY = gql`
  query GetUserByShortUrl($shortUrl: String!) {
    getUrlByShortUrl(
      requestVariables: {
        shortUrl: $shortUrl
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

export interface IGetUserByShortUrl_RequestVariables {
  shortUrl: string;
}

export interface IGetUserByShortUrl_ResponseData {
  getUrlByShortUrl: IUrlDocument;
}
