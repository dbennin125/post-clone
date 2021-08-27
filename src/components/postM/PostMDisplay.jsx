import React from 'react';
import PropTypes from 'prop-types';

import ReactJson from 'react-json-view';
import { Flex, Box } from '@chakra-ui/react';

export const PostMDisplay = ({ display, setDisplay }) => {
  if (!display)
    setDisplay({
      working: 'Almost done!',
    });
  return (
    <>
      <Flex direction="column" align="center" textOverflow="auto">
        <Box maxW="100%">
          <ReactJson
            quotesOnKeys={false}
            theme="shapeshifter:inverted"
            src={display}
          />
        </Box>
      </Flex>
    </>
  );
};

PostMDisplay.propTypes = {
  display: PropTypes.any.isRequired,
  setDisplay: PropTypes.func.isRequired,
};
