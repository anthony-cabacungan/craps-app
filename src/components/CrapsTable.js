import React, { useState } from 'react';
import BettingArea from './BettingArea';
import './CrapsTable.css';
import table from '../images/crapstable.png';

function CrapsTable() {
  const [totalBet, setTotalBet] = useState(0);
  const [bets, setAllBets] = useState({
    four_place: 0,
    five_place: 0,
    six_place: 0,
    eight_place: 0,
    nine_place: 0,
    ten_place: 0
  });
  const [dice_1, setDice_1] = useState(1);
  const [dice_2, setDice_2] = useState(1);

  const rollTheDice = () => {
    setDice_1(Math.floor(Math.random() * 6) + 1);
    setDice_2(Math.floor(Math.random() * 6) + 1);
  }

  const handleBet = (id, betAmount) => {
    if (bets[id] + betAmount >= 0) {
      setTotalBet((prevTotalBet) => prevTotalBet + betAmount );
      setAllBets((prevBets) => ({...prevBets, [id]: prevBets[id] + betAmount}));
      console.log(totalBet);
    };
  }

  return (
    <div className="craps-table-container">
      <div className="image-container">
        <img src={table} alt="Craps Table" />        
        <BettingArea id="four_place"
                     left='315px' 
                     top='187px' 
                     width='46px' 
                     height='15px' 
                     bet_info="Place 4: Pays 9 to 5"
                     increment={5}
                     totalAreaBet={bets.four_place}
                     handleBet={handleBet}
        />
        <BettingArea id="five_place" 
                     left='415px' 
                     top='187px' 
                     width='46px' 
                     height='15px' 
                     bet_info="Place 5: Pays 7 to 5"
                     increment={5}
                     setTotalBet={setTotalBet}
        />
        <BettingArea id="six_place" 
                     left='515px' 
                     top='187px' 
                     width='46px' 
                     height='15px' 
                     bet_info="Place 6: Pays 7 to 6"
                     increment={6}
                     setTotalBet={setTotalBet}
        />
        <BettingArea id="eight_place" 
                     left='615px' 
                     top='187px' 
                     width='46px' 
                     height='15px' 
                     bet_info="Place 8: Pays 7 to 6"
                     increment={6}
                     setTotalBet={setTotalBet}
        />
        <BettingArea id="nine_place" 
                     left='715px' 
                     top='187px' 
                     width='46px' 
                     height='15px' 
                     bet_info="Place 9: Pays 7 to 5"
                     increment={5}
                     setTotalBet={setTotalBet}
        />
        <BettingArea id="ten_place" 
                     left='815px' 
                     top='187px' 
                     width='46px' 
                     height='15px' 
                     bet_info="Place 10: Pays 9 to 5"
                     increment={5}
                     setTotalBet={setTotalBet}
        />

        <BettingArea id="pass_line" left='200px' top='460px' width='500px' height='60px'/>
        <BettingArea id="pass_line_odds" left='200px' top='520px' width='500px' height='50px'/>
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
