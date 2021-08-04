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
  body }) => (
  <>
    <Center pb={20}>
      <form onSubmit={onSubmit}>

        <Stack spacing={10}>
          <Center>
            <Input 
              variant="flushed"
              placeholder="Enter URL here"
              type="url"
              name="url" 
              value={URL} 
              w={400}
              onChange={onInputChange}
            />
          </Center>
          <HStack spacing={10}>
            {
              methods.map((m) => {
                return <RadioGroup 
                  name="method" 
                  defaultChecked={method} 
                  value={method}  
                  key={m}
                
                >
                  <Center>
                    <Radio 
                      w={6}
                      color="red" 
                      id={m} 
                      checked={method === m}
                      value={m} 
                      onChange={onMethodChange} 
                    >
                    </Radio>
                    <label htmlFor={m}>{m}</label>
                  </Center>
                </RadioGroup>;
           
                
              })
            }
          </HStack>
          { method.includes('P') 
            ? <Textarea 
              name="body" 
              value={body} 
              onChange={onBodyChange} 
              w={400}
            />
            : <></>
          } 
          <Center>
            <Button 
              isLoading={isLoading}
              color="tomato.200" 
              variant="solid"
              loadingText="Submitting"
              type="submit"
              maxW={200}
            >
        Submit button
            </Button>
          </Center>
        </Stack>

      </form>
    </Center>
  </>
);

PostMForm.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  URL: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  onBodyChange: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onMethodChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  body: PropTypes.string
};
