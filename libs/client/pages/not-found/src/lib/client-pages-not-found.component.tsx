import React from 'react';

import './client-pages-not-found.component.scss';

export interface IClientPagesNotFoundProps {} // eslint-disable-line @typescript-eslint/no-empty-interface

export const ClientPagesNotFound: React.FC = (properties: IClientPagesNotFoundProps) => {
  return (
    <div>
      <h1>Welcome to client-pages-not-found!</h1>
    </div>
  );
};

export default ClientPagesNotFound;
