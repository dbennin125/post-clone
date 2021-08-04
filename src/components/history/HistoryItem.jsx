import React from 'react';
import PropTypes from 'prop-types';
import { Center } from '@chakra-ui/react';

export const HistoryItem = ({ id, url, method }) => (
  <Center>
    <div id={id}>
      <p id={id}>{url}</p>
      <span id={id}>{method}</span>
    </div>
  </Center>
);

HistoryItem.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired
};
