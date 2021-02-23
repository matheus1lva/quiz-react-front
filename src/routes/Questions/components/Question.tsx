import React from "react";

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
      <h1>{}</h1>
    </div>
  );
}
