// #region import宣言
import { FC } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import GGSquare from './GGSquare/GGSquare';
import './GGBoard.scss';
// #endregion
// #region 型定義
type Props = {
  className?: string;
};
// #endregion
// #region 定数
// #endregion
// #region 内部関数
// #endregion
// #region 公開関数
// #endregion
// #region 公開モジュール
// #endregion

const GGBoard: FC<Props> = ({ className }) => {
  // #region state変数
  // #endregion
  // #region 内部変数
  const { boardPieces } = useSelector((store) => store.game);
  // #endregion
  // #region 内部関数
  // #endregion
  // #region イベントハンドラ
  // #endregion
  // #region 副作用処理
  // #endregion
  // #region レンダリング処理
  return (
    <div className={classNames('gg_board', className)}>
      {boardPieces.map((piece, index) => (
        <GGSquare key={index} pieceHistory={piece} index={index} />
      ))}
    </div>
  );
  // #endregion
};

export default GGBoard;
