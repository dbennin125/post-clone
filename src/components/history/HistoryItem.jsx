import React from 'react';
import PropTypes from 'prop-types';
import { Text, Button, Box, Center } from '@chakra-ui/react';

export const HistoryItem = ({ id, url, method, handleDelete, onClick }) => (
  <Box p={2} boxShadow="md" pb="1rem">
    <Box p={2} id={id} onClick={onClick} cursor="pointer">
      <Text
        id={id}
        color="#ffdf61"
        align="center"
        textShadow=".1rem .1rem .05rem #c061ff"
      >
        {method}
      </Text>

      <Text
        flexWrap="wrap"
        id={id}
        fontSize={['xs', 'md']}
        align="center"
        color="#ffdf61"
        textShadow=".1rem .1rem .05rem #c061ff"
      >
        {url}
      </Text>
    </Box>
    <Center>
      <Button
        bg="#3AD4FF"
        rounded="2xl"
        h="2.5rem"
        w="92%"
        boxShadow="md"
        cursor="pointer"
        id={id}
        onClick={handleDelete}
      >
        Delete
      </Button>
    </Center>
  </Box>
);
HistoryItem.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};
