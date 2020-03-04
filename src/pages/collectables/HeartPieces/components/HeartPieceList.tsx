import React from "react";
import styled from "styled-components";

import HeartPieceListItem from "./HeartPieceListItem";

import { HeartPiece } from "../../../../data/types/HeartPiece";

interface Props {
  heartPieces: HeartPiece[];
}

const HeartPieceListWrapper = styled.div``;

const HeartPieceList = ({ heartPieces }: Props) => {
  return (
    <HeartPieceListWrapper>
      {heartPieces.map(heartPiece => (
        <HeartPieceListItem key={heartPiece.number} heartPiece={heartPiece} />
      ))}
    </HeartPieceListWrapper>
  );
};

export default HeartPieceList;
