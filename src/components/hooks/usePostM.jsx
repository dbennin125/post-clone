import { useState } from 'react';
import { fetchAPI } from '../../services/fetchAPI';


export const usePostM = () => {
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
  

  return {
    url, 
    setUrl, 
    method, 
    setMethod,
    body, 
    setBody, 
    isLoading, 
    display, 
    handleSubmit
  };
};
