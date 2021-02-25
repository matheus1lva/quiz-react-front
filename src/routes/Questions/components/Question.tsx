import React from "react";
import styled from "styled-components";
import { decode } from "html-entities";

const QuestionBlock = styled.div`
  border: 1px solid #2f3c47;
  padding: 50px;
  font-size: 25px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const QuestionTitle = styled.h1`
  font-size: 25px;
`;

const Body = styled.div`
  width: 570px;
`;

export interface QuestionProps {
  category: string;
  type: "boolean";
  difficulty: string;
  question: string;
  correctAnswer: string;
}

export function Question(props: QuestionProps) {
  const { question } = props;
  const category = props?.category?.replace(/:/g, " -");
  return (
    <Body>
      <QuestionTitle>Category: {category}</QuestionTitle>
      <QuestionBlock>{decode(question)}</QuestionBlock>
    </Body>
  );
}
