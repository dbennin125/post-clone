import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Radio,
  Textarea,
  RadioGroup,
  Input,
  Stack,
  HStack,
  Center,
} from '@chakra-ui/react';

const methods = ['GET', 'POST', 'PUT', 'DELETE'];

export const PostMForm = ({
  isLoading,
  URL,
  method,
  onInputChange,
  onMethodChange,
  onBodyChange,
  onSubmit,
  body,
}) => {
  return (
    <>
      <Center pb={8} w="full" textOverflow="auto">
        <form onSubmit={onSubmit}>
          <Stack spacing={10} w="full">
            <Input
              variant="flushed"
              placeholder="Enter URL here"
              type="url"
              name="url"
              value={URL}
              onChange={onInputChange}
            />

            <HStack w="fit-content" spacing={10}>
              {methods.map((m) => {
                return (
                  <RadioGroup
                    name="method"
                    defaultChecked={method}
                    value={method}
                    key={m}
                  >
                    <Center>
                      <Radio
                        w={6}
                        colorScheme="blackAlpha"
                        id={m}
                        isChecked={method === m}
                        value={m}
                        onChange={onMethodChange}
                      ></Radio>
                      <label htmlFor={m}>{m}</label>
                    </Center>
                  </RadioGroup>
                );
              })}
            </HStack>
            {method.includes('P') ? (
              <Textarea
                w="full"
                name="body"
                value={body}
                onChange={onBodyChange}
                placeholder={`Please use valid JSON
Example: 
{
  "key": "value"
}`}
                height={40}
              />
            ) : (
              <></>
            )}
            <Center>
              <Button
                isLoading={isLoading}
                backgroundColor="#ffa63a"
                color="#4e3aff"
                variant="solid"
                loadingText="Submitting"
                type="submit"
                maxW={200}
                shadow=".25rem .25rem .25rem grey"
                _hover={{
                  background: '#4e3aff',
                  color: '#ffa63a',
                }}
              >
                Submit button
              </Button>
            </Center>
          </Stack>
        </form>
      </Center>
    </>
  );
};

PostMForm.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  URL: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  onBodyChange: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onMethodChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  body: PropTypes.string,
};
