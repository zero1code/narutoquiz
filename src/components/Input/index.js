import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputBase = styled.input`
  width: 100%;   
  height: 40px;
  padding: 5px;
  border-radius: 4px;
  border: 2px solid ${({theme}) => theme.colors.primary};
  outline: none;
  font-size: 16px;
  font-weight: 700;
  color: #555;
`;

export default function Input({onChange, placeholder, ...props}) {
  return (
    <div>
      <InputBase 
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

Input.defaultProps = {
  value: '',
};

Input.prototypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};