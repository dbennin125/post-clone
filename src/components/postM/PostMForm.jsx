import React from 'react';
import PropTypes from 'prop-types';

import { 
  Button,
  Radio,
  Textarea, 
  RadioGroup,
  Input, 
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
    <form onSubmit={onSubmit}>
      <Input 
        placeholder="Enter URL here"
        name="url" 
        value={URL} 
        onChange={onInputChange}
      />
      {
        methods.map((m) => {
          return <RadioGroup 
            name="method" 
            defaultChecked={method} 
            value={method}  
            key={m}>
            <Radio 
              color="red" 
              id={m} 
              checked={method === m}
              value={m} 
              onChange={onMethodChange} >
            </Radio>
            <label htmlFor={m}>{m}</label>
          </RadioGroup>;
        })
      }
     
      { method.includes('P') 
        ? <Textarea 
          name="body" 
          value={body} 
          onChange={onBodyChange} 
        />
        : <></>
      } 

      <Button 
        isLoading={isLoading}
        color="tomato.200" 
        variant="solid"
        loadingText="Submitting"
        type="submit"
      >
        Submit button
      </Button>

    </form>
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
