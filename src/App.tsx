import styled from 'styled-components';

interface ButtonProps {
  $primary?: boolean;
}

const Button = styled.button<ButtonProps>`
  /* Adapt the colors based on primary prop */
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
