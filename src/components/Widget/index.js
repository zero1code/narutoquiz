import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 4px;
  overflow: hidden;

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({theme}) => theme.colors.primary};

  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  background-color: ${({theme}) => theme.colors.secondary};
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

export default Widget;