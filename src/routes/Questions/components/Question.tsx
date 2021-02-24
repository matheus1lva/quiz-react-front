import React from "react";
import styled from "styled-components";

const QuestionBlock = styled.div`
  border: 1px solid red;
  padding: 50px;
`;

export interface QuestionProps {
  category: string;
  type: "boolean";
  difficulty: string;
  question: string;
  correctAnswer: string;
}

export function Question(props: QuestionProps) {
  const { category, type, difficulty, question, correctAnswer } = props;
  return (
    <div>
      <h1>Category: {category}</h1>
      <QuestionBlock>{question}</QuestionBlock>
    </div>
  );
}
