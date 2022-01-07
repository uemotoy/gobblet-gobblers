// #region import宣言
import { FC, useMemo } from 'react';
import { useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { movePieceFromStandAction, movePieceStandOnBoardAction } from 'store/game/actions';

import GGPiece from '../../Piece/GGPiece';
import { GG_PIECE } from 'utils/constants';
import { validatePieceMoving } from 'utils/helper';
import { Piece } from 'utils/types';

import './GGSquare.scss';
// #endregion
// #region 型定義
type Props = {
  pieceHistory: Piece[];
  index: number;
};

type GGDropResult = {
  piece: Piece;
  dragFrom: number;
};

// #endregion
// #region 定数
// #endregion
// #region 内部関数
// #endregion
// #region 公開関数
// #endregion
// #region 公開モジュール
const GGSquare: FC<Props> = ({ pieceHistory, index }) => {
  // #region state変数
  // #endregion
  // #region 内部変数
  const dispatch = useDispatch();

  const displayedPiece = useMemo(
    () => (pieceHistory.length > 0 ? pieceHistory[pieceHistory.length - 1] : undefined),
    [pieceHistory]
  );

  const [, dropRef] = useDrop(
    () => ({
      accept: GG_PIECE,
      canDrop: canDropPiece,
      drop: dropPiece,
    }),
    [pieceHistory]
  );
  // #endregion
  // #region 内部関数
  /**
   * マスに駒をドロップ可能か検証する。useDropのcanDropに渡す関数
   * @param ドロップ結果
   * @returns ドロップ可能ならtrue, 不可ならfalse
   */
  function canDropPiece({ piece }: GGDropResult): boolean {
    // マスに駒が置いてない場合はDrop可能
    if (pieceHistory.length === 0) {
      return true;
    }
    // マスに駒が置いてある場合は、Drop可能か検証する
    else {
      return validatePieceMoving(piece, pieceHistory[pieceHistory.length - 1]);
    }
  }

  /**
   * 駒をドロップした際の処理。useDropのdropに渡す関数
   * @param ドロップ結果
   */
  function dropPiece({ piece, dragFrom }: GGDropResult) {
    if (dragFrom < 0) {
      dispatch(movePieceFromStandAction(piece, index));
    } else {
      dispatch(movePieceStandOnBoardAction(piece, index, dragFrom));
    }
  }

  // #endregion
  // #region イベントハンドラ
  // #endregion
  // #region 副作用処理
  // #endregion
  // #region レンダリング処理
  return (
    <div className="gg_square" ref={dropRef}>
      {displayedPiece && <GGPiece piece={displayedPiece} boardSquareIndex={index} />}
    </div>
  );
  // #endregion
};

export default GGSquare;
// #endregion
