import React from "react";
import { Question } from "./components/Question";
import { useQuestions } from "./hooks/useQuestions";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addCorrectAnswer, addWrongAnswer } from "../../reducers";

const QuestionWrapper = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export function Questions() {
  const { isLoading, data, error } = useQuestions();
  const [current, setCurrent] = React.useState(0);
  const currentQuestion = data ? data[current] : null;
  const correctAnswer =
    currentQuestion?.correct_answer.toLowerCase() ?? "false";
  const dispatch = useDispatch();

  const addCorrect = React.useCallback(() => {
    dispatch(addCorrectAnswer(currentQuestion));
  }, [currentQuestion]);

  const addWrong = React.useCallback(() => {
    dispatch(addWrongAnswer(currentQuestion));
  }, [currentQuestion]);

  const moveToNext = () => {
    if (data && current <= data.length) {
      setCurrent(current + 1);
    }
  };

  if (error) {
    return <p>There was an error {error}</p>;
  }

  if (isLoading) {
    return <p>loading ...</p>;
  }

  const submitAnswer = (answer: string) => {
    console.log("CORRECT,ANSWER", correctAnswer);
    if (answer === correctAnswer) {
      addCorrect();
    } else {
      addWrong();
    }
    moveToNext();
  };

  return (
    <QuestionWrapper>
      <Question
        key={currentQuestion.question}
        category={currentQuestion.category}
        correctAnswer={correctAnswer}
        difficulty={currentQuestion.difficulty}
        question={currentQuestion.question}
        type={currentQuestion.type}
      />
      <ButtonsWrapper>
        <button onClick={() => submitAnswer("true")}>True</button>
        <button onClick={() => submitAnswer("false")}>False</button>
      </ButtonsWrapper>
    </QuestionWrapper>
  );
}
