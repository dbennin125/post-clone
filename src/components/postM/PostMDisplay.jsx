import React from 'react';
import PropTypes from 'prop-types';

import ReactJson from 'react-json-view';
import { Center, Box } from '@chakra-ui/react';

export const PostMDisplay = ({ display }) => {
  return (
    <>
      <Center>
        <Box  w="50wv" maxW="75vw">
          <pre>
            <ReactJson src={display} />
          </pre>
        </Box>
      </Center>
    </>
  );
};

PostMDisplay.propTypes = {
  display: PropTypes.any.isRequired
};
