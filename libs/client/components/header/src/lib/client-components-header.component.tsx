
import React from 'react';

import './client-components-header.component.scss';


export interface IClientComponentsHeaderProps {} // eslint-disable-line @typescript-eslint/no-empty-interface

export const ClientComponentsHeader: React.FC = (properties: IClientComponentsHeaderProps) => {
  return (
    <div>
      <h1>Welcome to client-components-header!</h1>
    </div>
  );
};


export default ClientComponentsHeader;
