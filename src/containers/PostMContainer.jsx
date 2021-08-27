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
    handleDelete,
    setDisplay,
  } = usePostM();

  return (
    <>
      <Grid
        h="100vh"
        maxH="full"
        maxW="full"
        w="100vw"
        minW="auto"
        templateRows="repeat(6, 1fr)"
        templateColumns="repeat(9, 1fr)"
        gap={1}
      >
        <GridItem
          colSpan={7}
          backgroundColor="#3ad4ff"
          boxShadow="xl"
          textAlign="center"
        >
          <Header />
        </GridItem>
        <GridItem
          rowSpan={6}
          colSpan={2}
          bg="#ff9061"
          w="full"
          boxShadow="2xl"
          overflowY="auto"
        >
          <HistoryList
            handleDelete={({ target }) => handleDelete(target)}
            history={history}
            onClick={({ target }) => handleClick(target)}
          />
        </GridItem>
        <GridItem
          colSpan={7}
          rowSpan={5}
          area="body"
          overflow="auto"
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
              <PostMDisplay display={display} setDisplay={setDisplay} />
            </VStack>
          </Center>
        </GridItem>
      </Grid>
    </>
  );
};
