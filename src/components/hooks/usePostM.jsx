import { useState, useEffect } from 'react';
import { fetchAPI } from '../../services/fetchAPI';
import { 
  getFromLocalStorage, 
  setInLocalStorage 
} from '../../utils/localStorageUtils';

export const usePostM = () => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [body, setBody] = useState(''); 
  const [isLoading, setIsLoading] = useState(false);
  const [display, setDisplay] = useState({
    'idle':'Nothing to display, add a URL!' 
  });
  const [history, setHistory] = useState([]);
 

 
  useEffect(() => {
    const localHistory = getFromLocalStorage();
    if(localHistory) setHistory(localHistory);
  }, []);
  
  const handleSubmit = event => {
    event.preventDefault();
    const key = `${url}+${method}+${body}`;
    
    if(url === '') alert('Please provide a URL');
    if(url === '') return;
    
    setIsLoading(true);
    fetchAPI({ url, method, body })
      .then(display => setDisplay(display))
      .then(() => {
        setIsLoading(false);
        setUrl('');
        setBody('');
        setMethod('GET');
      });
    
    // eslint-disable-next-line max-len
    if(history.filter(item => item.key === key).length > 0 || method === '') return; 
        
    setHistory(h => {
      setInLocalStorage([...h, { url, method, body, key }]);
      return  [...h, { url, method, body, key }]; 
    });


  };
  
  const handleClick = ({ id }) => {
    const result = history.find(item => item.key === id);

    setBody(result.body);
    setMethod(result.method);
    setUrl(result.url);
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
    handleSubmit,
    history,
    handleClick
  };
};
