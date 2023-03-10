import React from "react";
import styled from "styled-components";

interface Props {
  gameCount: number;
  randomNumber: number[];
}
export function Header({ gameCount, randomNumber }: Props) {
  return (
    <HeaderWrapper>
      <h1>제 {gameCount}회 숫자 야구 게임</h1>
    </HeaderWrapper>
  );
}
const HeaderWrapper = styled.div`
  width: 100%;
  /* height:15%; */

  display: flex;
  justify-content: center;
`;
