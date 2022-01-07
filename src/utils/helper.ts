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

const LINE_COORDINATES = [
  [0, 3, 6], // 1列目 (1)
  [1, 4, 7], // 2列目 (2)
  [2, 5, 8], // 3列目 (3)
  [0, 1, 2], // 1行目 (4)
  [3, 4, 5], // 2行目 (5)
  [6, 7, 8], // 3行目 (6)
  [0, 4, 8], // 斜め：左上から右下 (7)
  [2, 4, 6], // 斜め：右上から左下 (8)
] as const;

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
  // 移動させる駒が置いてある駒より小さい場合は移動できない
  if (PIECE_SIZE_CONVERTER[movedPiece.size] <= PIECE_SIZE_CONVERTER[placedPiece.size]) {
    return false;
  }
  return true;
}

/**
 * 現在の盤面から勝敗を判定する
 * @param boardState 現在の盤面
 * @returns 勝利プレーヤー。勝敗がついていない場合はnullを返す
 */
export function checkWinner(boardState: Piece[]) {
  // 勝敗判定を実施
  // 勝利条件を満たす直線があるか探索する
  const winnerLineIndex = LINE_COORDINATES.findIndex((line) => {
    if (
      boardState[line[0]] &&
      boardState[line[1]] &&
      boardState[line[2]] &&
      boardState[line[0]].player === boardState[line[1]].player &&
      boardState[line[1]].player === boardState[line[2]].player &&
      boardState[line[2]].player === boardState[line[0]].player
    ) {
      return true;
    } else {
      return false;
    }
  });

  // 勝利条件に合致する直線が見つかった場合は、勝利したプレーヤーを返す
  if (winnerLineIndex >= 0) {
    return boardState[LINE_COORDINATES[winnerLineIndex][0]].player;
  }
  return null;
}
// #endregion
// #region 公開モジュール
// #endregion
