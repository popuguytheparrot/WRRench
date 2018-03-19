import styled, { keyframes } from 'styled-components';
import { lightBlue, grey } from 'material-ui/colors';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;


export const ExampleContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${lightBlue[500]};
  color: ${grey[50]}
`;

export const ExampleHeader = styled.div`
> h1 > div {
  display: inline-block;
  animation: ${rotate360} 2s linear infinite;
  padding: 2rem 1rem;
  }
`;

export const ExampleContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  img {
  display: inline-block;
    width: 150px;
    height: auto;
  }
`;
