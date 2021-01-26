import React,  {useState} from 'react';
import styled, {keyframes} from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';

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

export default function Home() {
  const [name, setName] = useState('');
  const router = useRouter();

  function handleToQuizPage(e) {
    e.preventDefault();
       
    router.push(`/quiz?name=${name}`);
  };

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Quiz Naruto Shippuden</title>
        <meta name="title" content="Quiz Naruto Shippuden" />
        <meta name="description" content="Vamos ver se você sabe tudo da história do ninja mais atrapalhado e dedicado do mundo!" />
      </Head>
      <Head>
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://narutoquiz.zero1code.vercel.app/" />
        <meta property="og:title" content="Quiz Naruto Shippuden" />
        <meta property="og:description" content="Vamos ver se você sabe tudo da história do ninja mais atrapalhado e dedicado do mundo!" />
        <meta property="og:image" content={db.bg} />
      </Head>
      <Head>
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://narutoquiz.zero1code.vercel.app/" />
        <meta property="twitter:title" content="Quiz Naruto Shippuden" />
        <meta property="twitter:description" content="Vamos ver se você sabe tudo da história do ninja mais atrapalhado e dedicado do mundo!" />
        <meta property="twitter:image" content={db.bg} />
      </Head>
     
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Naruto Shippuden</h1>
          </Widget.Header>
          <Widget.Content emptyInput={name.length}>
            <p>Vamos ver se você sabe tudo da história do ninja mais atrapalhado e dedicado do mundo!</p>
            <form onSubmit={(e) => handleToQuizPage(e)}>
              <input
                
                placeholder="Aqui vai o seu nome, dattebayo!" 
                onChange={(e) => {
                  setName(e.target.value)
                }}
              />
              <button type="submit" disabled={name.length === 0}>COMEÇAR</button>
              </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Titulo do quiz</h1>

            <p>Lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/zero1code/narutoquiz" />
    </QuizBackground>
  );
}
