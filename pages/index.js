import styled from 'styled-components'
import Head from 'next/head';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Quiz Naruto Shippuden</title>
        <meta name="title" content="Quiz Naruto Shippuden" />
        <meta name="description" content="Vamos ver se você sabe tudo da história do ninja mais atrapalhado e dedicado do mundo!"/>
      </Head>
      <Head>
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://narutoquiz.zero1code.vercel.app/"/>
        <meta property="og:title" content="Quiz Naruto Shippuden"/>
        <meta property="og:description" content="Vamos ver se você sabe tudo da história do ninja mais atrapalhado e dedicado do mundo!"/>
        <meta property="og:image" content={db.bg}/>
      </Head>
      <Head>
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://narutoquiz.zero1code.vercel.app/"/>
        <meta property="twitter:title" content="Quiz Naruto Shippuden"/>
        <meta property="twitter:description" content="Vamos ver se você sabe tudo da história do ninja mais atrapalhado e dedicado do mundo!"/>
        <meta property="twitter:image" content={db.bg}/>
      </Head>
      <QuizContainer>
        <Widget>
          <Widget.Header>
              <h1>Titulo do quiz</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Lorem ipsum dolor sit amet...</p>
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
      <GitHubCorner projectUrl="github.com/zero1code"/>
    </QuizBackground>
  );
}
