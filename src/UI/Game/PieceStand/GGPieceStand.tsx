// #region import宣言
import { FC } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import { Player } from 'utils/types';
import { PLAYER } from 'utils/constants';
import GGPiece from 'UI/shared/GGPiece/GGPiece';

import './GGPieceStand.scss';
// #endregion
// #region 型定義
type Props = {
  className?: string;
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

const GGPieceStand: FC<Props> = ({ className, player }) => {
  // #region state変数
  // #endregion
  // #region 内部変数
  const gameState = useSelector((state) => state.game);
  const pieces = player === PLAYER.P1 ? gameState.player1Pieces : gameState.player2Pieces;
  // #endregion
  // #region 内部関数
  // #endregion
  // #region イベントハンドラ
  // #endregion
  // #region 副作用処理
  // #endregion
  // #region レンダリング処理
  return (
    <div className={classNames('gg_piece-stand', className)}>
      {pieces.map((piece, index) => (
        <GGPiece key={index} className="piece-item" piece={piece} />
      ))}
    </div>
  );
  // #endregion
};

export default GGPieceStand;
// #endregion
