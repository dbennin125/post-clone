import React from 'react';
import { HistoryItem } from './HistoryItem';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { VStack, Center } from '@chakra-ui/react';

export const HistoryList = ({ history, onClick }) => {
  const historyElement = history.map((h) => (
    <li onClick={onClick} key={`${uuidv4()}`}>
      <HistoryItem id={h.key} url={h.url} method={h.method} />
    </li>
  ));

  return <ul>{historyElement}</ul>;
};

HistoryList.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      method: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
};
