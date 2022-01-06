// #region import宣言
import { PIECE_SIZE, PLAYER } from 'utils/constants';
import { Piece } from 'utils/types';
import { ActionType, MOVE_PIECE_FROM_STAND, MOVE_PIECE_ON_BOARD } from './actions';
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
export function reducer(state = INITIAL_STATE, action: ActionType<any>) {
  switch (action.type) {
    // #region MOVE_PIECE_FROM_STAND
    case MOVE_PIECE_FROM_STAND: {
      const { payload } = action;

      // 盤面の更新
      const newBoard = state.boardPieces.map((square, index) => {
        // 移動先のマスに駒情報を追加する
        if (index === payload.toIndex) {
          return [...square, payload.piece];
        }
        return square;
      });

      // 駒置き場の更新
      if (payload.piece.player === PLAYER.P1) {
        const newStandPieces = [...state.player1Pieces];
        const removedPieceIndex = newStandPieces.findIndex(
          (piece) => piece.size === payload.piece.size
        );
        newStandPieces.splice(removedPieceIndex, 1);

        return {
          ...state,
          boardPieces: newBoard,
          player1Pieces: newStandPieces,
        };
      } else {
        const newStandPieces = [...state.player2Pieces];
        const removedPieceIndex = newStandPieces.findIndex(
          (piece) => piece.size === payload.piece.size
        );
        newStandPieces.splice(removedPieceIndex, 1);

        return {
          ...state,
          boardPieces: newBoard,
          player2Pieces: newStandPieces,
        };
      }
    }
    // #endregion

    case MOVE_PIECE_ON_BOARD: {
      const { payload } = action;
      // 移動元のマスと移動先のマスの駒情報を更新する
      const newBoard = state.boardPieces.map((square, index) => {
        // 移動先のマスに駒情報を追加する
        if (index === payload.toIndex) {
          return [...square, payload.piece];
        }
        if (index === payload.fromIndex) {
          return [...square].slice(0, -1);
        }
        return square;
      });

      return { ...state, boardPieces: newBoard };
    }

    default: {
      return state;
    }
  }
}

// #endregion
