// #region import宣言
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import GGPieceStand from 'UI/Game/PieceStand/GGPieceStand';
import GGBoard from 'UI/Game/Board/GGBoard';
import { PLAYER } from 'utils/constants';
import { checkWinner } from 'utils/helper';
import { Player } from 'utils/types';
import { RootState } from 'store';
import { GameState } from 'store/game/reducer';

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
  const [winner, setWinner] = useState<Player | null>(null);
  // #endregion
  // #region 内部変数
  const { boardPieces } = useSelector<RootState, GameState>((store) => store.game);
  // #endregion
  // #region 内部関数
  // #endregion
  // #region イベントハンドラ
  // #endregion
  // #region 副作用処理
  useEffect(() => {
    const currentBoardState = boardPieces.map((square) => square[square.length - 1]);

    const result = checkWinner(currentBoardState);
    if (result) {
      setWinner(result);
    }
  }, [boardPieces]);

  useEffect(() => {
    if (winner) {
      if (!Boolean(alert(`${winner} is winner!!!`))) {
        setWinner(null);
      }
    }
  }, [winner]);
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
