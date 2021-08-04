import React from 'react';
import { Center } from '@chakra-ui/react';

export const Header = () => {
  return <header style={{ paddingBottom: '70px' }}>
    <Center 
      w="100vw" 
      maxW="100vw" 
      backgroundColor="#bceeff" 
      h="20vh" 
      shadow="dark-lg"
    > 
      <h1>Posty</h1>
    </Center>
  </header>;
};
