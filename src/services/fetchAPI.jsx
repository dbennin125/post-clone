const NO_BODY = ['GET', 'DELETE'];

export const fetchAPI = ({ url, method, body }) => {
  return fetch(url, {
    method,
    // eslint-disable-next-line max-len
    headers: NO_BODY.includes(method) 
      ? {} 
      : { 'Content-Type': 'application/json' },
    body: NO_BODY.includes(method) 
      ? null 
      : body
  })
    .then(res => res.json())
    .catch(err =>  console.error(err));
};
