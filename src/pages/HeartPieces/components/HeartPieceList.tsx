import React, { useContext } from "react";
import styled from "styled-components";

import { AppStateContext } from "../../../AppState";

import HeartPieceListItem from "./HeartPieceListItem";

interface Props {
  heartPieces: HeartPiece[];
}

const HeartPieceListWrapper = styled.div`
  margin: 1rem 0;
`;

const HeartPieceList = ({ heartPieces }: Props) => {
  const appState = useContext(AppStateContext);

  return (
    <HeartPieceListWrapper>
      {heartPieces.map(heartPiece => (
        <HeartPieceListItem key={heartPiece.number} heartPiece={heartPiece} />
      ))}
    </HeartPieceListWrapper>
  );
};

export default HeartPieceList;
