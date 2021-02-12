import React from "react";
import styled from "styled-components";

interface LayoutProps {
  children: React.ReactNode;
}

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function Layout(props: LayoutProps) {
  const { children } = props;
  return <Body>{children}</Body>;
}
