import React, { useState } from 'react';

function BettingArea({ id, left, top, width, height, betType }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="betting-area"
      id={id}
      style={{ left, top, width, height }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered && <div className="bet-tooltip">{betType}</div>}
    </div>
  );
}

export default BettingArea;
