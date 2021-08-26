import React from 'react';
import PropTypes from 'prop-types';
import { VStack, Text, Button, HStack } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

export const HistoryItem = ({ id, url, method, handleDelete, onClick }) => {
  const DeleteButton = (props) => {
    return (
      <Button
        _hover={{
          background: '#3AD4FF',
        }}
        h={['1rem', '1rem', '1em']}
        w="auto"
        bg="transparent"
        as={DeleteIcon}
        {...props}
      />
    );
  };

  return (
    <>
      <HStack w="full" id={id} flexShrink={0}>
        <DeleteButton cursor="pointer" id={id} onClick={handleDelete} />

        <VStack
          spacing={3}
          cursor="pointer"
          boxShadow="md"
          p={1}
          onClick={onClick}
          pt=".75rem"
          minW="xs"
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
            id={id}
            fontSize={['xs', 'md']}
            align="center"
            color="#ffdf61"
            textShadow=".1rem .1rem .05rem #c061ff"
            pb="1rem"
          >
            {url}
          </Text>
        </VStack>
      </HStack>
    </>
  );
};
HistoryItem.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};
