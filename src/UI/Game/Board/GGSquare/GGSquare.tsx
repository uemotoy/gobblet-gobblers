// #region import宣言
import { FC, useMemo } from 'react';
import { useDrop } from 'react-dnd';

import GGPiece from 'UI/shared/GGPiece/GGPiece';
import { GG_PIECE } from 'utils/constants';
import { Piece } from 'utils/types';

import './GGSquare.scss';
// #endregion
// #region 型定義
type Props = {
  pieceHistory: Piece[];
};

// #endregion
// #region 定数
// #endregion
// #region 内部関数
// #endregion
// #region 公開関数
// #endregion
// #region 公開モジュール
const GGSquare: FC<Props> = ({ pieceHistory }) => {
  // #region state変数
  // #endregion
  // #region 内部変数
  const displayedPiece = useMemo(
    () => (pieceHistory.length > 0 ? pieceHistory[pieceHistory.length - 1] : undefined),
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
    <div className="gg_square" ref={dropRef}>
      {displayedPiece && <GGPiece piece={displayedPiece} />}
    </div>
  );
  // #endregion
};

export default GGSquare;
// #endregion
