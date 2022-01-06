// #region import宣言
import { FC, useMemo } from 'react';
import { useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { movePieceFromStandAction } from 'store/game/actions';

import GGPiece from 'UI/shared/GGPiece/GGPiece';
import { DRAG_FROM, GG_PIECE } from 'utils/constants';
import { DragFrom, Piece } from 'utils/types';

import './GGSquare.scss';
// #endregion
// #region 型定義
type Props = {
  pieceHistory: Piece[];
  index: number;
};

type GGDropResult = {
  piece: Piece;
  dragFrom: DragFrom;
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

  const [, dropRef] = useDrop(() => ({
    accept: GG_PIECE,
    drop: dropPiece,
  }));
  // #endregion
  // #region 内部関数

  function dropPiece({ piece, dragFrom }: GGDropResult) {
    if (dragFrom === DRAG_FROM.STAND) {
      dispatch(movePieceFromStandAction(piece, index));
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
      {displayedPiece && <GGPiece piece={displayedPiece} isBoardPiece={true} />}
    </div>
  );
  // #endregion
};

export default GGSquare;
// #endregion
