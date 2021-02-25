import React from "react";
import LoadingIcon from "./loading.svg";
import styled from "styled-components";

const Centralized = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function Loading() {
  return (
    <Centralized>
      <img src={LoadingIcon} />
    </Centralized>
  );
}
