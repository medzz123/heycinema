import styled from 'styled-components';

const StyledInput = styled.input`
  background-color: white;
  border: none;
  box-shadow: none;
  padding: 10px;
  font-size: 16px;
  font-style: italic;
  border-radius: 4px;
`;



const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return <StyledInput type="text" {...props}  />;
};

export default Input;
