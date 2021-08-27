import { useState, useEffect } from 'react';
import { fetchAPI } from '../../services/fetchAPI';
import {
  getFromLocalStorage,
  setInLocalStorage,
} from '../../utils/localStorageUtils';
import swal from 'sweetalert';

export const usePostM = () => {
  const noBodyWarning = {
    title: 'Wait a minute!',
    icon: 'warning',
    text: 'Please include a body',
    button: 'Got it!',
  };

  //initialize state
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [body, setBody] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [display, setDisplay] = useState({
    idle: 'Nothing to display, add a URL!',
  });
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const localHistory = getFromLocalStorage();
    if (localHistory) setHistory(localHistory);
    else setHistory(history);
  }, [display]);

  //submit request
  const handleSubmit = (event) => {
    event.preventDefault();
    const key = `${url}+${method}+${body}`;

    if (url === '') {
      swal({
        title: 'Hold up...',
        icon: 'error',
        text: 'Please provide a URL',
        button: 'Cool!',
      });
      return;
    }
    if (url.includes('local') || url.includes('host')) {
      swal({
        title: 'Hold up...',
        icon: 'error',
        text: 'Providing a localhost will break this...',
        button: 'Alright',
      });
      return;
    }

    if (method === 'POST' && !body) {
      swal(noBodyWarning);
      return;
    }

    if (method === 'PUT' && !body) {
      swal(noBodyWarning);
      return;
    }

    setIsLoading(true);
    fetchAPI({ url, method, body })
      .then((display) => setDisplay(display))
      .then(() => {
        setIsLoading(false);
        setUrl('');
        setBody('');
        setMethod('GET');
      });

    // eslint-disable-next-line max-len
    if (history.filter((item) => item.key === key).length > 0 || method === '')
      return;

    setHistory((h) => {
      setInLocalStorage([...h, { url, method, body, key }]);
      return [...h, { url, method, body, key }];
    });
  };

  //render from history
  const handleClick = async ({ id }) => {
    const result = history.find((item) => item.key === id);

    setDisplay({ fetching: 'your old history!' });
    setBody(result.body), setMethod(result.method), setUrl(result.url);

    if (result.url === '') {
      swal({
        title: 'Hold up...',
        icon: 'error',
        text: 'Please provide a URL',
        button: 'Cool!',
      });
      return;
    }
    if (result.url.includes('local') || result.url.includes('host')) {
      swal({
        title: 'Hold up...',
        icon: 'error',
        text: 'Providing a localhost will break this...',
        button: 'Alright',
      });
      return;
    }

    if (result.method === 'POST' && !result.body) {
      swal(noBodyWarning);
      return;
    }

    if (result.method === 'PUT' && !result.body) {
      swal(noBodyWarning);
      return;
    }

    setIsLoading(true);
    fetchAPI({ ...result })
      .then((display) => setDisplay(display))
      .then(() => {
        setIsLoading(false);
      });
  };

  //delete from state and update localStorage
  const handleDelete = ({ id }) => {
    setHistory((prev) => {
      setInLocalStorage(prev.filter((item) => item.key !== id));
      return prev.filter((item) => item.key !== id);
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
    handleSubmit,
    history,
    handleClick,
    handleDelete,
    setDisplay,
  };
};
