import React, { useState } from 'react';
import { PostMDisplay } from '../components/postM/PostMDisplay';
import { PostMForm } from '../components/postM/PostMForm';
import { fetchAPI } from '../services/fetchAPI';

export const PostMContainer = () => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [body, setBody] = useState(''); 
  const [isLoading, setIsLoading] = useState(false);
  const [display, setDisplay] = useState({
    'idle':'Nothing to display, add a URL!' 
  });
 
  const handleSubmit = event => {
    event.preventDefault();
    setIsLoading(true);

    if(url === '') alert('Please provide a URL');
  
    fetchAPI({ url, method, body })
      .then(display => setDisplay(display))
      .then(() => {
        setUrl('');
        setBody('');
        setMethod('GET');
        setIsLoading(false);
      });
  };
  
  return <>
    <PostMForm 
      isLoading={isLoading}
      onInputChange={({ target }) => setUrl(target.value)}
      onMethodChange={({ target }) => setMethod(target.value)}
      onBodyChange={({ target }) => setBody(target.value)}
      URL={url}
      method={method}
      body={body}
      onSubmit={handleSubmit}

    />
    <PostMDisplay display={display} />
  </>;
};
