import styled from 'styled-components'

const GreenButton = styled.button`
  background-color: #27ae60;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  position: fixed;
  bottom: 100px;
  right: 24px;
  z-index: 999;
`;

export const Button = ({onClick, ...rest}) => {
    return (
        <GreenButton onClick={onClick} {...rest}>Click me!</GreenButton>
    );
}
