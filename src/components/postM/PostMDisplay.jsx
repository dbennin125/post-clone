import React from 'react';
import PropTypes from 'prop-types';

import ReactJson from 'react-json-view';

export const PostMDisplay = ({ display }) => {
  return (
    <>
      <pre>
        <ReactJson src={display}  />
      </pre>
    </>
  );
};

PostMDisplay.propTypes = {
  display: PropTypes.any.isRequired
};
