// #region import宣言
import { PIECE_SIZE } from './constants';
import { Piece } from './types';
// #endregion
// #region 型定義
// #endregion
// #region 定数
const PIECE_SIZE_CONVERTER = {
  [PIECE_SIZE.S]: 1,
  [PIECE_SIZE.M]: 2,
  [PIECE_SIZE.L]: 3,
};
// #endregion
// #region 内部関数
// #endregion
// #region 公開関数

/**
 * 駒が移動可能か検証する
 * @param movedPiece 移動させる駒
 * @param placedPiece マスに置いてある駒
 * @returns 移動可能ならtrue, 不可ならfalseを返す
 */
export function validatePieceMoving(movedPiece: Piece, placedPiece: Piece) {
  console.log(PIECE_SIZE_CONVERTER[movedPiece.size]);
  console.log(PIECE_SIZE_CONVERTER[placedPiece.size]);
  // 自分の駒が置いてある場合は移動できない
  if (movedPiece.player === placedPiece.player) {
    return false;
  }

  // 移動させる駒が置いてある駒より小さい場合は移動できない
  if (PIECE_SIZE_CONVERTER[movedPiece.size] <= PIECE_SIZE_CONVERTER[placedPiece.size]) {
    return false;
  }
  console.log(PIECE_SIZE_CONVERTER[movedPiece.size]);
  console.log(PIECE_SIZE_CONVERTER[placedPiece.size]);
  return true;
}
// #endregion
// #region 公開モジュール
// #endregion
