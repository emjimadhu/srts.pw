import { gql } from '@apollo/client';

import { IUrlDocument } from '@srts.pw/client/shared';

export const CREATE_SHORT_URL_QUERY = gql`
  mutation CreateShortUrl($url: String!, $user: String!, $slug: String) {
    createShortUrl(
    requestVariables: {
      url: $url
      user: $user
      slug: $slug
    }
  ) {
    id
    shortUrl
    longUrl
    user
    createdAt
    updatedAt
    metadata {
      description
      image
      title
    }
  }
  }
`;

export interface ICreateShortUrl_ResponseData {
  createShortUrl : IUrlDocument;
}
