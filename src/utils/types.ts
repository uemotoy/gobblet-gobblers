// #region import宣言
import { DRAG_FROM, PIECE_SIZE, PLAYER } from './constants';
// #endregion

// #region 型定義
export type PieceSize = typeof PIECE_SIZE[keyof typeof PIECE_SIZE];
export type Player = typeof PLAYER[keyof typeof PLAYER];
export type DragFrom = typeof DRAG_FROM[keyof typeof DRAG_FROM];

export type Piece = {
  size: PieceSize;
  player: Player;
};

// #endregion

// #region 定数
// #endregion
// #region 内部関数
// #endregion
// #region 公開関数
// #endregion
// #region 公開モジュール
// #endregion
