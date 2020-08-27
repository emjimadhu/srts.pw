import { Dispatch } from 'react';

import { IUrlDocument } from '@srts.pw/client/shared';

export interface IClientComponentsCreateLinkProperties {
  setCreatedUrl: Dispatch<React.SetStateAction<IUrlDocument>>;
  setFetchErrorMessage: Dispatch<React.SetStateAction<string>>;
}
