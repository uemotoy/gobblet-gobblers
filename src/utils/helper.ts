// #region import宣言
import { Piece } from "./types";
// #endregion
// #region 型定義
// #endregion
// #region 定数
// #endregion
// #region 内部関数
// #endregion
// #region 公開関数

export function encodePieceInfo(piece: Piece, index: number): string {
  return `${piece.player}__${piece.size}__${index}`;
}

// #endregion
// #region 公開モジュール
// #endregion
