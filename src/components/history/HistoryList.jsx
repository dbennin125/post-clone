import React from 'react';
import { HistoryItem } from './HistoryItem';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { VStack, Center, UnorderedList, List } from '@chakra-ui/react';

export const HistoryList = ({ history, onClick, handleDelete }) => {
  const historyElement = history.map((h) => (
    <List size="sm" key={`${uuidv4()}`}>
      <HistoryItem
        id={h.key}
        url={h.url}
        method={h.method}
        onClick={onClick}
        handleDelete={handleDelete}
      />
    </List>
  ));

  return <UnorderedList>{historyElement}</UnorderedList>;
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
  handleDelete: PropTypes.func.isRequired,
};
