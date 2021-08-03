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

const RestForm = ({ isLoading, URL, method, onChange, onSubmit, body }) => (
  <>
    <form onSubmit={onSubmit}>
      <Input 
        placeholder="Enter URL here"
        name="url" 
        value={URL} 
        onChange={onChange}
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
              onChange={onChange} >
            </Radio>
            <label htmlFor={m}>{m}</label>
          </RadioGroup>;
        })
      }
     
      { method.includes('P') 
        ? <Textarea 
          name="body" 
          value={body} 
          onChange={onChange} 
        />
        : <></>
      } 

      <Button 
        isLoading={isLoading}
        color="teal.200" 
        variant="ghost"
        loadingText="Submitting"
        type="submit"
      >
        Submit button
      </Button>

    </form>
  </>
);

RestForm.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  URL: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  body: PropTypes.string
};

export default RestForm;
