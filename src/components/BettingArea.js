import React, { useState } from 'react';
import './TooltipArea.css';

function BettingArea({ id, left, top, width, height, bet_info, increment, setTotalBet }) {
  const [isHovered, setIsHovered] = useState(false);
  const [totalAreaBet, setTotalAreaBet] = useState(0);

  const handleBet = (betAmount) => {
    if (totalAreaBet + betAmount >= 0) {
      setTotalAreaBet((prevTotalAreaBet) => prevTotalAreaBet + betAmount );
      setTotalBet((prevTotalBet) => prevTotalBet + betAmount);
      console.log(totalAreaBet);
    };
  }

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
  const handleLeftClick = () => {
    handleBet(increment);
  }

  const handleRightClick = (event) => {
    event.preventDefault();
    handleBet(-increment);
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
