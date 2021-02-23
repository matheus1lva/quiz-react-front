import React from "react";
import { useQuestions } from "./hooks/useQuestions";

export const Questions = () => {
  const { isLoading, data, error } = useQuestions();

  if (error) {
    return <p>There was an error {error}</p>;
  }

  if (isLoading) {
    return <p>loading ...</p>;
  }

  return <h1>hi</h1>;
};
