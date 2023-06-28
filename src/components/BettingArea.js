import React, { useState } from 'react';
import './TooltipArea.css';

function BettingArea({ id, left, top, width, height, bet_info, increment, handleBet, totalAreaBet }) {
  const [isHovered, setIsHovered] = useState(false);

  

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
  const handleLeftClick = () => {
    handleBet(id, increment);
  }

  const handleRightClick = (event) => {
    event.preventDefault();
    handleBet(id, -increment);
  }


  return (
    <div>
      <div className="total-area-bet" style={{ left, top, width, height }}> {totalAreaBet} </div>

      <div
        className="betting-area"
        id={id}
        style={{ left, top, width, height }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleLeftClick}
        onContextMenu={handleRightClick}
      ></div>
      
      {isHovered && <div className="bet-tooltip" > {bet_info} </div> }
    </div>
  );
}

export default BettingArea;
