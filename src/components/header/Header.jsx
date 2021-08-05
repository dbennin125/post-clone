import React from 'react';
import { Center, Heading } from '@chakra-ui/react';

export const Header = () => {
  return <header style={{ paddingBottom: '70px' }}>
    <Center 
      maxW="100vw" 
      backgroundColor="#3ad4ff" 
      h="30vh"
      shadow="dark-lg"
    > 
      <Heading 
        size="2xl" 
        textShadow="20px 20px 10px 10px green"
        textColor="#ff443a"
      >
        Post em
      </Heading>
    </Center>
  </header>;
};
