import React, { useState } from 'react';
import {
  Stack, TextField, PrimaryButton
} from '@fluentui/react';
import { useMutation } from '@apollo/client';

import { getUser } from 'apps/client/src/services/core/auth.service';

import {
  CREATE_SHORT_URL_QUERY, IUrlDocument
} from './create-short-url.query';


const CreateShortUrlComponent: React.FC = () => {
  const [
    url,
    setUrl
  ] = useState('');
  const [
    disableTextField,
    setDisableTextField
  ]= useState(false);
  const [
    disableButton,
    setDisableButton
  ]= useState(false);

  const [createShortUrl] = useMutation(CREATE_SHORT_URL_QUERY);

  const handleButtonChange = (event_: React.MouseEvent<HTMLButtonElement | HTMLDivElement | HTMLSpanElement, MouseEvent>) => {
    event_.preventDefault();
    setDisableTextField(true);
    setDisableButton(true);

    createShortUrl({
      variables: {
        url,
        user: getUser()
      }
    }).then(data => {
      console.log('Data');
      console.log(data);
      setUrl('');
    }).catch(error => {
      console.log('Error');
      console.log(error);
    }).finally(() => {
      setDisableTextField(false);
      setDisableButton(false);
    });
  };

  return (
    <Stack
      horizontal
      horizontalAlign="center"
    >
      <TextField
        autoFocus
        styles={{
          root: {
            width: '50vw'
          }
        }}
        placeholder="Enter URL here"
        disabled={disableTextField}
        value={url}
        onChange={(event_: React.FormEvent<HTMLTextAreaElement>) => {
          setUrl(event_.target['value']);
        }}
      />
      <PrimaryButton
        text="SHORTEN"
        disabled={disableButton}
        onClick={(event_: React.MouseEvent<HTMLButtonElement | HTMLDivElement | HTMLSpanElement, MouseEvent>) => handleButtonChange(event_)}
      />
    </Stack>
  );
};

export default CreateShortUrlComponent;
