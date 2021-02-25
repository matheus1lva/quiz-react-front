import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { QUIZ_PATH } from "../../constants";
import { startAgain } from "../../reducers";
import { RootState } from "../../store";
import { Button } from "reakit";
import { QuestionDisplayer } from "./components";
import styled from "styled-components";

const ScoreBlock = styled.div`
  margin-bottom: 15px;
`;

const Title = styled.h1`
  font-size: 25px;
`;

const QuestionWrapper = styled.div`
  max-width: 600px;
`;

export function Scores() {
  const allQuestions = useSelector(
    (state: RootState) => state.questions.resource
  );
  const scoreState = useSelector((state: RootState) => state.score);
  const totalCorrect = scoreState.correctAnswers.length;
  const totalWrong = scoreState.wrongAnswers.length;
  const totalQuestions = totalCorrect + totalWrong;

  const dispatch = useDispatch();
  const history = useHistory();

  const playAgain = () => {
    dispatch(startAgain());
    history.replace(QUIZ_PATH);
  };

  return (
    <QuestionWrapper>
      <Title>
        You scored {totalCorrect}/{totalQuestions}.{" "}
        {totalCorrect < 7 ? "It was not this time :(" : "Perfectoooo!!"}
      </Title>

      <ScoreBlock>
        {allQuestions.map((question) => {
          return (
            <QuestionDisplayer
              key={question.question}
              question={question}
              correctAnswers={scoreState.correctAnswers}
            />
          );
        })}
      </ScoreBlock>
      <Button onClick={playAgain}>Play Again</Button>
    </QuestionWrapper>
  );
}
