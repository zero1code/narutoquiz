import styled, {keyframes} from 'styled-components';

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-200px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const QuizContainer = styled.div`

  background: linear-gradient(197deg, #ffffff1a, #ffffff00);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  border-radius: 4px;
  width: 100%;
  max-width: 370px;
  padding: 10px;
  margin: 30px 10%;
  @media screen and (max-width: 500px) {
    margin: 35px auto;
    padding: 10px
  }
  animation: ${appearFromLeft} 1s;
`;

export default QuizContainer;