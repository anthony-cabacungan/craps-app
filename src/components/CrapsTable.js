import React, { useState } from 'react';
import BettingArea from './BettingArea';
import './CrapsTable.css';
import table from '../images/crapstable.png';

function CrapsTable() {
  const [totalBet, setTotalBet] = useState(0);
  const [dice_1, setDice_1] = useState(1);
  const [dice_2, setDice_2] = useState(1);

  const rollTheDice = () => {
    setDice_1(Math.floor(Math.random() * 6) + 1);
    setDice_2(Math.floor(Math.random() * 6) + 1);
  }

  return (
    <div className="craps-table-container">
      <div className="image-container">
        <img src={table} alt="Craps Table" />        <BettingArea id="four-place" 
                     left='315px' 
                     top='187px' 
                     width='46px' 
                     height='15px' 
                     bet_info="Place 4: Pays 9 to 5"
                     increment={5}
                     setTotalBet={setTotalBet}
        />
        <BettingArea id="five-place" 
                     left='415px' 
                     top='187px' 
                     width='46px' 
                     height='15px' 
                     bet_info="Place 5: Pays 7 to 5"
                     increment={5}
                     setTotalBet={setTotalBet}
        />
        <BettingArea id="six-place" 
                     left='515px' 
                     top='187px' 
                     width='46px' 
                     height='15px' 
                     bet_info="Place 6: Pays 7 to 6"
                     increment={6}
                     setTotalBet={setTotalBet}
        />
        <BettingArea id="eight-place" 
                     left='615px' 
                     top='187px' 
                     width='46px' 
                     height='15px' 
                     bet_info="Place 8: Pays 7 to 6"
                     increment={6}
                     setTotalBet={setTotalBet}
        />
        <BettingArea id="nine-place" 
                     left='715px' 
                     top='187px' 
                     width='46px' 
                     height='15px' 
                     bet_info="Place 9: Pays 7 to 5"
                     increment={5}
                     setTotalBet={setTotalBet}
        />
        <BettingArea id="ten-place" 
                     left='815px' 
                     top='187px' 
                     width='46px' 
                     height='15px' 
                     bet_info="Place 10: Pays 9 to 5"
                     increment={5}
                     setTotalBet={setTotalBet}
        />

        <BettingArea id="pass-line" left='200px' top='460px' width='500px' height='60px'/>
        <BettingArea id="pass-line-odds" left='200px' top='520px' width='500px' height='50px'/>
        <button onClick={rollTheDice}>roll</button>
        You rolled: {dice_1} + {dice_2} = {dice_1 + dice_2}
      </div>
      <div>
        Total Bet = {totalBet}
      </div>
    </div>
  );
}

export default CrapsTable;
