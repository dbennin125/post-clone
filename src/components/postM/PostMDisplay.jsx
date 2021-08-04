import React from 'react';
import PropTypes from 'prop-types';

import ReactJson from 'react-json-view';
import { Center, Box } from '@chakra-ui/react';

export const PostMDisplay = ({ display }) => {
  return (
    <>
      <Center w="75wv" maxW="100wv">
        <Box>
          <pre style={{ width: '100wv' }}>
            <ReactJson src={display}  />
          </pre>
        </Box>
      </Center>
    </>
  );
};

PostMDisplay.propTypes = {
  display: PropTypes.any.isRequired
};
