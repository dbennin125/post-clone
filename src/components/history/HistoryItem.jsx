import React from 'react';
import PropTypes from 'prop-types';
import { VStack, Text } from '@chakra-ui/react';

export const HistoryItem = ({ id, url, method }) => (
  <VStack
    spacing={3}
    pt=".75rem"
    pb="1rem"
    cursor="pointer"
    w="full"
    id={id}
    flexShrink={0}
    boxShadow="md"
    p={2}
  >
    <Text
      id={id}
      align="center"
      color="#ffdf61"
      textShadow=".1rem .1rem .05rem #c061ff"
    >
      {method}
    </Text>
    <Text
      maxW="full"
      id={id}
      fontSize={['xs', 'md']}
      align="center"
      color="#ffdf61"
      textShadow=".1rem .1rem .05rem #c061ff"
    >
      {url}
    </Text>
  </VStack>
);

HistoryItem.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
};
