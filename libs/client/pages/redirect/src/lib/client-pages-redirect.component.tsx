import React from 'react';
import { useQuery } from '@apollo/client';

import './client-pages-redirect.component.scss';

import {
  IGetUserByShortUrl_ResponseData, IGetUserByShortUrl_RequestVariables, GET_USER_BY_SHORT_URL_QUERY
} from './get-url-by-short-url.query';

export interface IClientPagesRedirectProps {} // eslint-disable-line @typescript-eslint/no-empty-interface

export const ClientPagesRedirect: React.FC = (properties: IClientPagesRedirectProps) => {
  const {
    loading, data
  } = useQuery<IGetUserByShortUrl_ResponseData, IGetUserByShortUrl_RequestVariables>(GET_USER_BY_SHORT_URL_QUERY, {
    variables: {
      shortUrl: window.location.href
    }
  });

  if (!loading && data?.getUrlByShortUrl) {
    window.location.href = data.getUrlByShortUrl.longUrl;
  }

  return (
    <div>
      <h1>Welcome to client-pages-redirect!</h1>
    </div>
  );
};


export default ClientPagesRedirect;
