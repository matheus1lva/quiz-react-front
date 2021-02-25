import React from "react";
import { QuestionDefinition } from "../../Questions/hooks/useQuestions";
import styled, { css } from "styled-components";
import { decode } from "html-entities";

export interface DisplayerProps {
  correctAnswers: string[];
  question: QuestionDefinition;
}

const QuestionBody = styled.div<{ correct?: boolean }>`
  font-size: 20px;
  margin: 10px 0;
  ${(props) =>
    !props.correct &&
    css`
      color: red;
    `};
`;

export function QuestionDisplayer(props: DisplayerProps) {
  const { correctAnswers, question } = props;
  const sign = correctAnswers.includes(question.question) ? "+" : "-";

  return (
    <QuestionBody correct={sign === "+"}>
      <span>{sign} </span>
      {decode(question.question)}
    </QuestionBody>
  );
}
