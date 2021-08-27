import React from 'react';
import PropTypes from 'prop-types';

import ReactJson from 'react-json-view';
import { Box, Center } from '@chakra-ui/react';

export const PostMDisplay = ({ display, setDisplay }) => {
  if (!display)
    setDisplay({
      error: 'Something went wrong! Try again...',
    });
  return (
    <>
      <Center>
        <Box maxW="100%">
          <ReactJson
            quotesOnKeys={false}
            theme="shapeshifter:inverted"
            src={display}
          />
        </Box>
      </Center>
    </>
  );
};

PostMDisplay.propTypes = {
  display: PropTypes.any.isRequired,
  setDisplay: PropTypes.func.isRequired,
};
