
import React from 'react';

import './client-pages-home.scss';

export interface IClientPagesHomeProps {} // eslint-disable-line @typescript-eslint/no-empty-interface

export const ClientPagesHome: React.FC = (properties: IClientPagesHomeProps) => {
  return (
    <div>
      <h1>Welcome to client-pages-home!</h1>
    </div>
  );
};


export default ClientPagesHome;
