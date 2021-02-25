import React from "react";
import { useHistory } from "react-router-dom";
import { QUIZ_PATH } from "../../constants";
import { Button } from "reakit";
import styled from "styled-components";

const Body = styled.div`
  font-size: 25px;
  display: flex;
  height: 50vh;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export function Home() {
  const history = useHistory();
  const begin = () => {
    history.push(QUIZ_PATH);
  };

  return (
    <Body>
      <h1>Welcome to the trivia challenge</h1>
      <div>You will be presented with 10 True or False questions.</div>
      <div>Can you score 100%?</div>
      <Button onClick={begin}>LET THE GAME BEGIN!!</Button>
    </Body>
  );
}
