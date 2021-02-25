import React from "react";
import { Question } from "./components/Question";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  addCorrectAnswer,
  addWrongAnswer,
  fetchQuestions,
} from "../../reducers";
import { RootState } from "../../store";
import { useHistory } from "react-router-dom";
import { SCORE_PATH } from "../../constants";
import { QuestionDefinition } from "./hooks/useQuestions";
import { Button } from "reakit";
import { Loading } from "../../components/Loading/Loading";

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
  margin-top: 20px;
  width: 100%;
`;

export function Questions() {
  const dispatch = useDispatch();
  const history = useHistory();

  React.useEffect(() => {
    dispatch(fetchQuestions());
  }, []);

  const isLoading = useSelector(
    (state: RootState) => state.questions.isLoading
  );
  const data = useSelector((state: RootState) => state.questions.resource);
  const error = useSelector((state: RootState) => state.questions.error);

  const [current, setCurrent] = React.useState(0);
  const currentQuestion: QuestionDefinition | null = data
    ? data[current]
    : null;
  const correctAnswer =
    currentQuestion?.correct_answer.toLowerCase() ?? "false";

  const isLastStep = data ? current === data.length - 1 : false;

  const addCorrect = React.useCallback(() => {
    dispatch(addCorrectAnswer(currentQuestion?.question));
  }, [currentQuestion]);

  const addWrong = React.useCallback(() => {
    dispatch(addWrongAnswer(currentQuestion));
  }, [currentQuestion]);

  const moveToNext = () => {
    if (data && current < data.length - 1) {
      setCurrent(current + 1);
    }
    if (isLastStep) {
      history.push(SCORE_PATH);
    }
  };

  if (error) {
    return <p>There was an error {error}</p>;
  }

  if (isLoading) {
    return <Loading />;
  }

  const submitAnswer = (answer: string) => {
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
        category={currentQuestion?.category}
        correctAnswer={correctAnswer}
        difficulty={currentQuestion?.difficulty}
        question={currentQuestion?.question}
        type={currentQuestion?.type}
      />
      <ButtonsWrapper>
        <Button onClick={() => submitAnswer("true")}>True</Button>
        <Button onClick={() => submitAnswer("false")}>False</Button>
      </ButtonsWrapper>
    </QuestionWrapper>
  );
}
