// #region import宣言
import { FC } from 'react';
import { useDrag } from 'react-dnd';
import { Avatar } from '@mui/material';
import classNames from 'classnames';

import { Piece } from 'utils/types';
import { GG_PIECE, PLAYER } from 'utils/constants';

import './GGPiece.scss';
// #endregion
// #region 型定義
type Props = {
  className?: string;
  piece: Piece;
  boardSquareIndex?: number;
};

// #endregion
// #region 定数
// #endregion
// #region 内部関数
// #endregion
// #region 公開関数
// #endregion
// #region 公開モジュール
const GGPiece: FC<Props> = ({ className, piece, boardSquareIndex = -1 }) => {
  const [{ isDragging }, dragRef] = useDrag(
    () => ({
      type: GG_PIECE,
      item: {
        piece,
        dragFrom: boardSquareIndex,
      },
      collect: (monitor) => ({
        isDragging: Boolean(monitor.isDragging()),
      }),
    }),
    [piece]
  );

  return (
    <Avatar
      ref={dragRef}
      classes={{
        root: classNames(
          'gg_piece piece',
          piece.size,
          piece.player === PLAYER.P1 ? 'p1' : 'p2',
          { 'is-dragging': isDragging },
          className
        ),
      }}
    >
      {piece.size[0].toUpperCase()}
    </Avatar>
  );
};

export default GGPiece;
// #endregion
