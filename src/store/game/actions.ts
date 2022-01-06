// #region import宣言
import { Piece } from 'utils/types';

// #endregion

// #region 型定義
export type ActionType<T> = {
  type: string;
  payload: T;
};

type MovePiecePayload = {
  piece: Piece;
  toIndex: number;
  fromIndex?: number;
};
// #endregion

// #region 定数
export const MOVE_PIECE_FROM_STAND = 'BOARD/MOVE_PIECE_FROM_STAND';
// #endregion
// #region 内部関数
// #endregion
// #region 公開関数

/**
 * 盤面の更新のアクション
 * @param piece 置いた駒の情報
 * @param moveToIndex 駒を置いた位置
 */
export function movePieceFromStandAction(
  piece: Piece,
  moveToIndex: number
): ActionType<MovePiecePayload> {
  return {
    type: MOVE_PIECE_FROM_STAND,
    payload: { piece, toIndex: moveToIndex },
  };
}
// #endregion
// #region 公開モジュール
// #endregion
