import React from "react";
import styled from "styled-components";
import { decode } from "html-entities";

const QuestionBlock = styled.div`
  border: 1px solid red;
  padding: 50px;
  font-size: 25px;
`;

const Body = styled.div`
  width: 400px;
`;

export interface QuestionProps {
  category: string;
  type: "boolean";
  difficulty: string;
  question: string;
  correctAnswer: string;
}

export function Question(props: QuestionProps) {
  const { category, question } = props;
  return (
    <Body>
      <h1>Category: {category}</h1>
      <QuestionBlock>{decode(question)}</QuestionBlock>
    </Body>
  );
}
