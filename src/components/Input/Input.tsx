import { Search } from '@assets/Icons';
import React from 'react';
import { IconContainer, InputWrapper, StyledInput } from './Input.styles';

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (
  props
) => {
  return (
    <InputWrapper>
      <StyledInput type="text" {...props} />
      <IconContainer>
        <Search />
      </IconContainer>
    </InputWrapper>
  );
};

export default Input;
