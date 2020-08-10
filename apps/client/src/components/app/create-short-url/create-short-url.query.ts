import { gql } from '@apollo/client';

export const CREATE_SHORT_URL_QUERY = gql`
  mutation CreateShortUrl($url: String!, $user: String!) {
    createShortUrl(
    requestVariables: {
      url: $url
      user: $user
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

export interface IUrlDocument {
  id: string;
  shortUrl: string;
  longUrl: string;
  user: string;
  createdAt: Date;
  updatedAt: Date;
  metadata?: {
    description?: string;
    image?: string;
    title?: string;
  };
}
