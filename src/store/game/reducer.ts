// #region import宣言
import { PIECE_SIZE, PLAYER } from 'utils/constants';
import { Piece } from 'utils/types';
// #endregion

// #region 型定義
type GameState = {
  boardPieces: Piece[][];
  player1Pieces: Piece[];
  player2Pieces: Piece[];
};
// #endregion
// #region 定数
const INITIAL_STATE: GameState = {
  boardPieces: Array(9).fill([]),
  player1Pieces: [
    { size: PIECE_SIZE.L, player: PLAYER.P1 },
    { size: PIECE_SIZE.L, player: PLAYER.P1 },
    { size: PIECE_SIZE.M, player: PLAYER.P1 },
    { size: PIECE_SIZE.M, player: PLAYER.P1 },
    { size: PIECE_SIZE.S, player: PLAYER.P1 },
    { size: PIECE_SIZE.S, player: PLAYER.P1 },
  ],
  player2Pieces: [
    { size: PIECE_SIZE.L, player: PLAYER.P2 },
    { size: PIECE_SIZE.L, player: PLAYER.P2 },
    { size: PIECE_SIZE.M, player: PLAYER.P2 },
    { size: PIECE_SIZE.M, player: PLAYER.P2 },
    { size: PIECE_SIZE.S, player: PLAYER.P2 },
    { size: PIECE_SIZE.S, player: PLAYER.P2 },
  ],
};
// #endregion
// #region 内部関数

// #endregion
// #region 公開関数

// #endregion
// #region 公開モジュール
export function reducer(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    default:
      return state;
  }
}

// #endregion
