import React,  {useState} from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizContainer from '../src/components/QuizContainer';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

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
        <meta name="title" content="Quiz Naruto" />
        <meta name="description" content="Vamos ver se você sabe tudo da história do ninja mais atrapalhado e dedicado do mundo!" />
      </Head>
      <Head>
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://narutoquiz.zero1code.vercel.app/" />
        <meta property="og:title" content="Quiz Naruto" />
        <meta property="og:description" content="Vamos ver se você sabe tudo da história do ninja mais atrapalhado e dedicado do mundo!" />
        <meta property="og:image" content={db.bg} />
      </Head>
      <Head>
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://narutoquiz.zero1code.vercel.app/" />
        <meta property="twitter:title" content="Quiz Naruto" />
        <meta property="twitter:description" content="Vamos ver se você sabe tudo da história do ninja mais atrapalhado e dedicado do mundo!" />
        <meta property="twitter:image" content={db.bg} />
      </Head>
     
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Naruto</h1>
          </Widget.Header>
          <Widget.Content emptyInput={name.length}>
            <p>Vamos ver se você sabe tudo da história do ninja mais atrapalhado e dedicado do mundo!</p>
            <form onSubmit={(e) => handleToQuizPage(e)}>
              <Input
                name="nomeUsuario"
                placeholder="Aqui vai o seu nome, dattebayo!" 
                onChange={(e) => {
                  setName(e.target.value)
                }}
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>COMEÇAR</Button>
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
