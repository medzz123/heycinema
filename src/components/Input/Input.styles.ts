import styled from 'styled-components';

export const StyledInput = styled.input`
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: none;
  padding: 10px;
  font-size: 16px;
  font-style: italic;
  border-radius: 4px;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: inline;
`;

export const IconContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  width: 20px;
  height: 20px;
  transform: translateY(-50%);
`;
