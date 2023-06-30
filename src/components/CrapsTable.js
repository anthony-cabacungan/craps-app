import React, { useState } from 'react';
import BettingArea from './BettingArea';
import './CrapsTable.css';
import table from '../images/crapstable.png';

function CrapsTable() {
  const [playerBalance, setPlayerBalance] = useState(200);
  const [totalBet, setTotalBet] = useState(0);
  const [totalWin, setTotalWin] = useState(0);
  const [bets, setAllBets] = useState({
    pass_line: 0,
    pass_line_odds: 0,
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
  };

  const handleBet = (id, betAmount) => {
    if (bets[id] + betAmount >= 0) {
      setTotalBet((prevTotalBet) => prevTotalBet + betAmount );
      setPlayerBalance((prevPlayerBalance) => (prevPlayerBalance - betAmount));
      setAllBets((prevBets) => ({...prevBets, [id]: prevBets[id] + betAmount}));
      console.log(totalBet);
    };
  };
  
  const handlePlaceWin = (id, win_ratio) => {
    if (bets[id] > 0) {
      let win_amount = win_ratio * bets[id];
      setPlayerBalance((prevPlayerBalance) => (prevPlayerBalance + win_amount));
      setTotalWin((prevTotalWin) => (prevTotalWin + win_amount));
      console.log(totalBet);
    };
  };

  const handleLose = (id) => {
    setAllBets((prevBets) => ({...prevBets, [id]: 0}));
  };

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
                     win_ratio={9/5}
                     increment={5}
                     totalAreaBet={bets}
                     handleBet={handleBet}
                     handleWin={handlePlaceWin}
                     handleLose={handleLose}
                     win_condition={[4]}
                     lose_condition={[7]}
        />
    
        <BettingArea id="five_place" 
                     left='415px' 
                     top='187px' 
                     width='46px' 
                     height='15px' 
                     bet_info="Place 5: Pays 7 to 5"
                     win_ratio={7/5}
                     increment={5}
                     totalAreaBet={bets}
                     handleBet={handleBet}
                     handleWin={handlePlaceWin}
                     handleLose={handleLose}
                     win_condition={[5]}
                     lose_condition={[7]}
        />
        <BettingArea id="six_place" 
                     left='515px' 
                     top='187px' 
                     width='46px' 
                     height='15px' 
                     bet_info="Place 6: Pays 7 to 6"
                     win_ratio={7/6}
                     increment={6}
                     totalAreaBet={bets}
                     handleBet={handleBet}
                     handleWin={handlePlaceWin}
                     handleLose={handleLose}
                     win_condition={[6]}
                     lose_condition={[7]}
        />
        <BettingArea id="eight_place" 
                     left='615px' 
                     top='187px' 
                     width='46px' 
                     height='15px' 
                     bet_info="Place 8: Pays 7 to 6"
                     win_ratio={7/6}
                     increment={6}
                     totalAreaBet={bets}
                     handleBet={handleBet}
                     handleWin={handlePlaceWin}
                     handleLose={handleLose}
                     win_condition={[8]}
                     lose_condition={[7]}
        />
        <BettingArea id="nine_place" 
                     left='715px' 
                     top='187px' 
                     width='46px' 
                     height='15px' 
                     bet_info="Place 9: Pays 7 to 5"
                     win_ratio={7/5}
                     increment={5}
                     totalAreaBet={bets}
                     handleBet={handleBet}
                     handleWin={handlePlaceWin}
                     handleLose={handleLose}
                     win_condition={[9]}
                     lose_condition={[7]}
        />
        <BettingArea id="ten_place" 
                     left='815px' 
                     top='187px' 
                     width='46px' 
                     height='15px' 
                     bet_info="Place 10: Pays 9 to 5"
                     win_ratio={9/5}
                     increment={5}
                     totalAreaBet={bets}
                     handleBet={handleBet}
                     handleWin={handlePlaceWin}
                     handleLose={handleLose}
                     win_condition={[10]}
                     lose_condition={[7]}
        />

        <BettingArea id="pass_line" 
                     left='200px' 
                     top='460px' 
                     width='500px' 
                     height='60px'
                     bet_info="Pass Line: Pays 1 to 1"
                     win_ratio={1/1}
                     increment={5}
                     totalAreaBet={bets}
                     handleBet={handleBet}
                     handleWin={handlePlaceWin}
                     handleLose={handleLose}
                     win_condition={[7, 11]}
                     lose_condition={[2, 3, 12]}
        />

        {/* <BettingArea id="pass_line_odds" 
                     left='200px' 
                     top='520px' 
                     width='500px' 
                     height='50px'
                     bet_info="Pass Line Odds: Pays 1 to 1"
                     increment={5}
                     totalAreaBet={bets}
                     handleBet={handleBet}
        /> */}

        <button onClick={rollTheDice}>roll</button>
        You rolled: {dice_1} + {dice_2} = {dice_1 + dice_2}
      </div>
      <div>
        Total Bet = {totalBet}
      </div>
      <div>
        Player Balance = {playerBalance}
      </div>
    </div>
  );
}

export default CrapsTable;
