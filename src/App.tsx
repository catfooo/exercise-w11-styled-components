import styled from 'styled-components';

type ButtonProps = {
  $primary?: boolean;
};

const Button = styled.button<ButtonProps>`
  background: ${props => props.$primary ? "blue" : "white"};
  color: ${props => props.$primary ? "white" : "blue"};
`;

export const App = () => {
  return (
    <div>
      <Button>Normal</Button>
      <Button $primary>Primary</Button>
    </div>
  );
};
