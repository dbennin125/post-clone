import { useState, useEffect } from 'react';
import { fetchAPI } from '../../services/fetchAPI';
import { 
  getFromLocalStorage, 
  setInLocalStorage 
} from '../../utils/localStorageUtils';
import  swal  from 'sweetalert';
import { VibeCheck } from '../experience/VibeCheck';

export const usePostM = () => {

  const noBodyWarning = {
    title: 'Wait a minute!',
    icon: 'warning',
    text: 'Please include a body',
    button: 'Got it!'
  };

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
    
    if(url === '') {
      swal({ 
        title: 'Hold up...',
        icon: 'error', 
        text: 'Please provide a URL',
        button: 'Cool!' 
      });
      return;
    }

    if(method === 'POST' && !body) {
      swal(noBodyWarning);
      return;
    }

    if(method === 'PUT' && !body) {
      swal(noBodyWarning);
      return;
    }
  
    
    setIsLoading(true);
    fetchAPI({ url, method, body })
      .then(display => setDisplay(display))
      .then(() => {
        setIsLoading(false);
        setUrl('');
        setBody('');
        setMethod('GET');
        VibeCheck();
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
