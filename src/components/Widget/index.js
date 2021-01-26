import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  background-color: #0000004d;
  /* border: 1px solid rgba(255, 255, 255, 0.5); */
  border-radius: 4px;
  overflow: hidden;

  p {
    font-size: 16px;
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

  input {
   width: 100%;   
   height: 40px;
   padding: 5px;
   border-radius: 4px;
   border: 2px solid ${({theme}) => theme.colors.primary};
   outline: none;
   font-size: 16px;
   font-weight: 700;
  }

  button {
    margin-top: 16px;
    width: 100%;
    height: 40px;
    border-radius: 4px;
    background-color: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.contrastText};
    font-size: 16px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    text-decoration: none;
    border: none;
    outline: none;
    transition: background-color 0.3s;
  }

  button:hover {
      background-color: ${({emptyInput, theme}) => emptyInput !== 0 ? theme.colors.success : theme.colors.secondary};
    }
`;

export default Widget;