import React, {useState, useEffect} from 'react';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Button from '../src/components/Button';
import AlternativesForm from '../src/components/AlternativesForm';


function LoadingWidget() {
  return (
    <Widget.Loading>
      <Widget.Spin />
      <h3>Carregando perguntas...</h3>
    </Widget.Loading>

  );
}

function ResultWidget({results}) {
  return (
    <Widget>
      <Widget.Header>
        Tela de resultado:
      </Widget.Header>
      <Widget.Content>
        <p>
          Você acertou
          {' '} 
          {/* {results.reduce((somatorio, resultAtual) => {
            const isAcerto = resultAtual === true;
            if (isAcerto) {
              return resultAtual +1;
            }

            return somatorio;
          }, 0)}  */}
          {results.filter((acertos) => acertos).length}
          {' '}
          perguntas
        </p>

        <ul>
          {results.map((result, index) => (
            <li>
              #{index+1} Resultado:{' '}
              {
                result === true 
                  ? 'Acertou' 
                  : 'Errou'
              }
            </li>
          ))}
        </ul>
      </Widget.Content>
    </Widget>

  );
}

function QuestionWidget({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  addResult,
}) {
  const questionId = `question__${questionIndex}`;
  const [selectedAlternative, setSelectedAlternative] = useState(false);
  const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false);
  const hasAlternativeSelected = selectedAlternative === false;
  const isCorrect = selectedAlternative === question.answer;

  return (
    <Widget>
      <Widget.Header>
        {/* <BackLinkArrow href="/" /> */}
        <h3>{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</h3>
      </Widget.Header>

      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Widget.Content>
        <h3>{question.title}</h3>
        <p>{question.description}</p>

        <AlternativesForm
          onSubmit={(e) => {
            setIsQuestionSubmited(true);
            e.preventDefault();
            setTimeout(() => {
              setSelectedAlternative(false);
              addResult(isCorrect);
              setIsQuestionSubmited(false);
              onSubmit();
            }, 3000);
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === alternativeIndex;
            return (
              <Widget.Topic
                key={alternativeIndex}
                as="label"
                htmlFor={alternativeId}
                data-status={isQuestionSubmited && alternativeStatus}
                data-selected={isSelected}
              >
                <input
                  style={{ display: 'none' }}
                  id={alternativeId}
                  name={questionId}
                  type="radio"
                  checked={alternativeIndex === selectedAlternative}
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          <Button disabled={hasAlternativeSelected} type="submit">
            { questionIndex === 9 ? 'Finalizar' : 'Confirmar'}
          </Button>
          {isQuestionSubmited && isCorrect && <p>Você acertou!</p>}
          {isQuestionSubmited && !isCorrect && <p>Você errou!</p>}
        </AlternativesForm>
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};
export default function QuizPage() {
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const [results, setResults] = useState([]);
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  function addResult(result) {
    setResults([...results, result]);
  }

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 2000);
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
            addResult={addResult}
          />
        )}

        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && <ResultWidget results={results}/>}
      </QuizContainer>
    </QuizBackground>
  );
}