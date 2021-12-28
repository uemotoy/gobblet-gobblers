// #region import宣言
import classNames from "classnames";
import { FC, useMemo } from "react";
import { useDrop } from "react-dnd";

import GGPiece from "UI/shared/GGPiece/GGPiece";
import { GG_PIECE, PIECE_SIZE, PLAYER } from "utils/constants";
import { Piece } from "utils/types";

import "./GGBoard.scss";
// #endregion
// #region 型定義
type GGSquareProps = {
  pieceHistory: Piece[];
};

type Props = {
  className?: string;
};
// #endregion
// #region 定数
// #endregion
// #region 内部関数

const GGSquare: FC<GGSquareProps> = ({ pieceHistory }) => {
  // #region state変数
  // #endregion
  // #region 内部変数
  const displayedPiece = useMemo(
    () =>
      pieceHistory.length > 0
        ? pieceHistory[pieceHistory.length - 1]
        : undefined,
    [pieceHistory]
  );

  const [, dropRef] = useDrop(() => ({
    accept: GG_PIECE,
    drop: dropEnd,
  }));
  // #endregion
  // #region 内部関数

  function dropEnd(item: Piece) {
    console.log(item);
    console.log(displayedPiece);
  }

  // #endregion
  // #region イベントハンドラ
  // #endregion
  // #region 副作用処理
  // #endregion
  // #region レンダリング処理
  return (
    <div className="square" ref={dropRef}>
      {displayedPiece && <GGPiece piece={displayedPiece} />}
    </div>
  );
  // #endregion
};

// #endregion
// #region 公開関数
// #endregion
// #region 公開モジュール
// #endregion

const squares = [
  [
    { size: PIECE_SIZE.S, player: PLAYER.P1 },
    { size: PIECE_SIZE.L, player: PLAYER.P2 },
  ],
  [],
  [],
  [{ size: PIECE_SIZE.S, player: PLAYER.P1 }],
  [],
  [],
  [],
  [],
  [],
];

const GGBoard: FC<Props> = ({ className }) => {
  // #region state変数
  // #endregion
  // #region 内部変数
  // #endregion
  // #region 内部関数
  // #endregion
  // #region イベントハンドラ
  // #endregion
  // #region 副作用処理
  // #endregion
  // #region レンダリング処理
  return (
    <div className={classNames("gg-board", className)}>
      {squares.map((square, index) => (
        <GGSquare key={index} pieceHistory={square} />
      ))}
    </div>
  );
  // #endregion
};

export default GGBoard;
