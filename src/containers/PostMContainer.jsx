import React from 'react';
import { usePostM } from '../components/hooks/usePostM';
import { PostMDisplay } from '../components/postM/PostMDisplay';
import { PostMForm } from '../components/postM/PostMForm';

export const PostMContainer = () => {
 
  const {
    url, 
    setUrl,
    body,
    setBody, 
    method,
    setMethod,
    isLoading,
    handleSubmit,
    display
  } = usePostM();

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
