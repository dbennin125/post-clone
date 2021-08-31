/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { useRadio, Box, } from '@chakra-ui/react';

function RadioCard(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props);
  
  const input = getInputProps();
  const checkbox = getCheckboxProps();
  console.log(checkbox);
  
  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        backgroundColor="#ffd1bc"
        _checked={{
          bg: '#fff3bc',
          color: '#fff3bc',
          borderColor: '#fff3bc',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
}
 
export default RadioCard;
