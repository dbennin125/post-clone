import React from 'react';
import { Header } from '../components/header/Header';
import { HistoryList } from '../components/history/HistoryList';
import { usePostM } from '../components/hooks/usePostM';
import { PostMDisplay } from '../components/postM/PostMDisplay';
import { PostMForm } from '../components/postM/PostMForm';
import { Center, Grid, GridItem, VStack } from '@chakra-ui/react';

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
    handleClick,
  } = usePostM();

  return (
    <>
      <Grid
        h="100vh"
        maxW="full"
        w="100vw"
        templateRows="repeat(6, 1fr)"
        templateColumns="repeat(9, 1fr)"
        gap={1}
      >
        <GridItem
          maxW="inherit"
          colSpan={7}
          backgroundColor="#3ad4ff"
          boxShadow="xl"
          textAlign="center"
        >
          <Header />
        </GridItem>
        <GridItem
          w="full"
          // maxW="inherit"
          rowSpan={6}
          colSpan={2}
          bg="#ff9061"
          overflow="auto"
          boxShadow="2xl"
        >
          <HistoryList
            history={history}
            onClick={({ target }) => handleClick(target)}
          />
        </GridItem>
        <GridItem
          colSpan={7}
          rowSpan={5}
          area="body"
          overflow="auto"
          w="full"
          pt="8rem"
          h="full"
        >
          <Center>
            <VStack>
              <PostMForm
                isLoading={isLoading}
                onInputChange={({ target }) => setUrl(target.value)}
                onMethodChange={({ target }) => setMethod(target.value)}
                onBodyChange={({ target }) => setBody(target.value)}
                URL={url}
                method={method}
                body={body}
                onSubmit={handleSubmit}
              />

              <PostMDisplay display={display} />
            </VStack>
          </Center>
        </GridItem>
      </Grid>
    </>
  );
};
