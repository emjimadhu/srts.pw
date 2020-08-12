import React, {
  useState, useEffect
} from 'react';
import {
  Stack, TextField, PrimaryButton
} from '@fluentui/react';
import { useMutation } from '@apollo/client';

import './create-short-url.component.scss';

import { getUser } from '../../../services/core/auth.service';
import { CREATE_SHORT_URL_QUERY } from './create-short-url.query';
import {
  createUrlTextFieldStyles, createUrlSlugTextFieldWidth, createUrlUrlTextFieldWidth, shortenButtonStyles
} from './create-short-url.styles';


const getUrlErrorMessage = (value: string): string => {
  const urlRegEx = new RegExp(/https?:\/\/(www\.)?[\w#%+.:=@~-]{1,256}\.[\d()a-z]{1,6}\b([\w#%&()+./:=?@~-]*)/gi);
  return (!value.match(urlRegEx)) ? 'Should be valid URL. (ex: https://google.com)' : '';
};


const CreateShortUrlComponent: React.FC = () => {
  const [
    url,
    setUrl
  ] = useState('');
  const [
    slug,
    setSlug
  ] = useState('');
  const [
    disableTextField,
    setDisableTextField
  ]= useState(false);
  const [
    disableButton,
    setDisableButton
  ]= useState(true);

  const [createShortUrl] = useMutation(CREATE_SHORT_URL_QUERY);

  const handleButtonChange = (event_: React.FormEvent<HTMLFormElement>) => {
    event_.preventDefault();
    setDisableTextField(true);
    setDisableButton(true);

    createShortUrl({
      variables: {
        url,
        user: getUser(),
        slug: (slug.length > 0) ? slug : undefined
      }
    }).then(data => {
      console.log('Data');
      console.log(data);
      if (!data.errors) {
        setUrl('');
        setSlug('');
      }
    }).catch(error => {
      console.log('Error');
      console.log(typeof error);
      console.log(Object.keys(error));
      console.log(error);
      console.log(error.message);
      console.log(error.graphQLErrors);
      console.log(error.networkError);
      console.log(error.extraInfo);
    }).finally(() => {
      setDisableTextField(false);
      setDisableButton(true);
    });
  };

  return (
    <form
      onSubmit={handleButtonChange}
    >
      <Stack
        horizontal
        horizontalAlign="center"
      >
        <TextField
          autoFocus
          styles={createUrlUrlTextFieldWidth}
          required
          placeholder="Enter URL here (ex: https://google.com) *"
          name="url"
          disabled={disableTextField}
          value={url}
          onGetErrorMessage={getUrlErrorMessage}
          validateOnLoad={false}
          onChange={(event_: React.FormEvent<HTMLTextAreaElement>) => {
            setUrl(event_.target['value']);

            (getUrlErrorMessage(event_.target['value']).length === 0) ? setDisableButton(false) : setDisableButton(true);
          }}
        />
        <TextField
          styles={createUrlSlugTextFieldWidth}
          placeholder="Slug"
          name="slug"
          disabled={disableTextField}
          value={slug}
          onChange={(event_: React.FormEvent<HTMLTextAreaElement>) => {
            setSlug(event_.target['value']);
          }}
        />
        <PrimaryButton
          text="SHORTEN"
          type="submit"
          styles={shortenButtonStyles}
          disabled={disableButton}
        />
      </Stack>
    </form>
  );
};

export default CreateShortUrlComponent;
