import React, { useState } from 'react';

function BettingArea({ id, left, top, width, height, bet_info, increment_bet, decrement_bet }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
  const handleLeftClick = () => {
    increment_bet();
  }

  const handleRightClick = (event) => {
    event.preventDefault();
    decrement_bet();
  }


  return (
    <div
      className="betting-area"
      id={id}
      style={{ left, top, width, height }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleLeftClick}
      onContextMenu={handleRightClick}
    >
      {isHovered && <div className="bet-tooltip">{bet_info}</div>}
    </div>
  );
}

export default BettingArea;
