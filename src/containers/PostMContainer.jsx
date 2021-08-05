import React from 'react';
import { Header } from '../components/header/Header';
import { HistoryList } from '../components/history/HistoryList';
import { usePostM } from '../components/hooks/usePostM';
import { PostMDisplay } from '../components/postM/PostMDisplay';
import { PostMForm } from '../components/postM/PostMForm';
import { Center, Grid, GridItem } from '@chakra-ui/react';

export const PostMContainer = () => {
 
  const {
    url, 
    setUrl,
    body,
    setBody, 
    method,
    setMethod,
    isLoading,
    handleSubmit,
    display,
    history, 
    handleClick
    
  } = usePostM();

  return <>

    <Grid
      h="100vh"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(7, 1fr)"
      gap={4}
    >
      <GridItem rowSpan={4} bg="tomato" >   
        <HistoryList history={history} 
          onClick={({ target }) => 
            handleClick(target)}/></GridItem>
      <GridItem colSpan={6} bg="papayawhip" > 
    
        <Header />
    
      </GridItem>
      <GridItem colSpan={4} rowSpan={1} >    
        <PostMForm 
          isLoading={isLoading}
          onInputChange={({ target }) => 
            setUrl(target.value)}
          onMethodChange={({ target }) => 
            setMethod(target.value)}
          onBodyChange={({ target }) => 
            setBody(target.value)}
          URL={url}
          method={method}
          body={body}
          onSubmit={handleSubmit}
        />
 
        <PostMDisplay display={display} />
      </GridItem>
    </Grid>

  
 

 

  </>;
};
