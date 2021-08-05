import React from 'react';
import PropTypes from 'prop-types';
import { Center, VStack, Text } from '@chakra-ui/react';

export const HistoryItem = ({ id, url, method }) => (
  <Center>
    <VStack cursor="pointer" id={id} spacing={2}>
      <Text id={id} 
        size={2}
        align="center" 
        color="#4e3aff" 
        textShadow="md">
        {url}
      </Text>
      <Text id={id} 
        align="center" 
        color="#ffa63a" 
        textShadow="md">
        {method}
      </Text>
    </VStack>
  </Center>
);

HistoryItem.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired
};
