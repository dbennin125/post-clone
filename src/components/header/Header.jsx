import React from 'react';
import { Center, Heading } from '@chakra-ui/react';

export const Header = () => {
  return (
    <Center h="full">
      <Heading
        size="2xl"
        textShadow=".25rem .15rem .1rem #7161ff"
        textColor="#ff9061"
      >
        Post em
      </Heading>
    </Center>
  );
};
