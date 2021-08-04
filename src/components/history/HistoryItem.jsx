import React from 'react';
import PropTypes from 'prop-types';

export const HistoryItem = ({ id, url, method }) => (
  <div id={id}>
    <p id={id}>{url}</p>
    <span id={id}>{method}</span>
  </div>
);

HistoryItem.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired
};
