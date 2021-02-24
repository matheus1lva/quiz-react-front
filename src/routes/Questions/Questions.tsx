import React from "react";
import { Question } from "./components/Question";
import { useQuestions } from "./hooks/useQuestions";
import styled from "styled-components";

const QuestionWrapper = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-items: space-between;
`;

export const Questions = () => {
  const { isLoading, data, error } = useQuestions();
  const [currentQuestion, setCurrentQuestion] = React.useState(0);

  if (error) {
    return <p>There was an error {error}</p>;
  }

  if (isLoading) {
    return <p>loading ...</p>;
  }

  return (
    <QuestionWrapper>
      <Question
        key={data[currentQuestion].question}
        category={data[currentQuestion].category}
        correctAnswer={data[currentQuestion].correct_answer[0].toLowerCase()}
        difficulty={data[currentQuestion].difficulty}
        question={data[currentQuestion].question}
        type={data[currentQuestion].type}
      />
      <ButtonsWrapper>
        <button onClick={() => setCurrentQuestion(currentQuestion + 1)}>
          go to next
        </button>
      </ButtonsWrapper>
    </QuestionWrapper>
  );
};
