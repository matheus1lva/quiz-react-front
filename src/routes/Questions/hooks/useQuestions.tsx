import { useQuery } from "react-query";

const ENDPOINT_QUERIES =
  "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean";

export interface QuestionDefinition {
  category: string;
  type: "boolean";
  difficulty: string;
  question: string;
  correct_answer: string[];
}

export function useQuestions() {
  const { isLoading, error, data } = useQuery("triviaQuestions", async () => {
    const request = await fetch(ENDPOINT_QUERIES);
    const response = await request.json();
    return response.results;
  });

  return { isLoading, error, data };
}
