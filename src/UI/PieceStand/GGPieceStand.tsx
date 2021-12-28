// #region import宣言
import { FC } from "react";
import classNames from "classnames";

import { Piece, Player } from "utils/types";
import { PIECE_SIZE, PLAYER } from "utils/constants";
import GGPiece from "UI/shared/GGPiece/GGPiece";

import "./GGPieceStand.scss";
// #endregion
// #region 型定義
type Props = {
  className?: string;
  player: Player;
};
// #endregion
// #region 定数
const gamePieces: { p1: Piece[]; p2: Piece[] } = {
  p1: [
    { size: PIECE_SIZE.L, player: PLAYER.P1 },
    { size: PIECE_SIZE.L, player: PLAYER.P1 },
    { size: PIECE_SIZE.M, player: PLAYER.P1 },
    { size: PIECE_SIZE.M, player: PLAYER.P1 },
    { size: PIECE_SIZE.S, player: PLAYER.P1 },
    { size: PIECE_SIZE.S, player: PLAYER.P1 },
  ],
  p2: [
    { size: PIECE_SIZE.L, player: PLAYER.P2 },
    { size: PIECE_SIZE.M, player: PLAYER.P2 },
    { size: PIECE_SIZE.S, player: PLAYER.P2 },
  ],
};
// #endregion
// #region 内部関数

// #endregion
// #region 公開関数
// #endregion
// #region 公開モジュール

const GGPieceStand: FC<Props> = ({ className, player }) => {
  // #region state変数
  // #endregion
  // #region 内部変数
  const pieces = player === PLAYER.P1 ? gamePieces.p1 : gamePieces.p2;
  // #endregion
  // #region 内部関数
  // #endregion
  // #region イベントハンドラ
  // #endregion
  // #region 副作用処理
  // #endregion
  // #region レンダリング処理
  return (
    <div className={classNames("gg-piece-stand", className)}>
      {pieces.map((piece, index) => (
        <GGPiece key={index} className="piece-item" piece={piece} />
      ))}
    </div>
  );
  // #endregion
};

export default GGPieceStand;
// #endregion
