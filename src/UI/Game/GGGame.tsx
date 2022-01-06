// #region import宣言
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import GGPieceStand from 'UI/Game/PieceStand/GGPieceStand';
import GGBoard from 'UI/Game/Board/GGBoard';
import { PLAYER } from 'utils/constants';

import './GGGame.scss';
// #endregion
// #region 型定義
// #endregion
// #region 定数
// #endregion
// #region 内部関数
// #endregion
// #region 公開関数
// #endregion

// #region 公開モジュール
const GGGame = () => {
  // #region state変数
  // #endregion
  // #region 内部変数
  // #endregion
  // #region 内部関数
  // #endregion
  // #region イベントハンドラ
  // #endregion
  // #region 副作用処理
  // #endregion
  // #region レンダリング処理
  return (
    <div className="gg_game">
      <DndProvider backend={HTML5Backend}>
        <GGBoard />
        <div className="piece-stand-container">
          <GGPieceStand className="piece-stand" player={PLAYER.P1} />
          <GGPieceStand className="piece-stand" player={PLAYER.P2} />
        </div>
      </DndProvider>
    </div>
  );
  // #endregion
};

export default GGGame;
// #endregion
