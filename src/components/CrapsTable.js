import React from 'react';
import BettingArea from './BettingArea';
import './CrapsTable.css';
import table from '../images/crapstable.png';

function CrapsTable() {

  return (
    <div className="craps-table-container">
      <div className="image-container">
        <img src={table} alt="Craps Table" />
        <BettingArea id="four-place" left='315px' top='187px' width='46px' height='15px' tooltip="Place 4: Pays 9 to 5" />
        <BettingArea id="five-place" left='415px' top='187px' width='46px' height='15px' tooltip="Place 5: Pays 7 to 5"/>
        <BettingArea id="six-place" left='515px' top='187px' width='46px' height='15px' tooltip="Place 6: Pays 7 to 6"/>
        <BettingArea id="eight-place" left='615px' top='187px' width='46px' height='15px' tooltip="Place 8: Pays 7 to 6"/>
        <BettingArea id="nine-place" left='715px' top='187px' width='46px' height='15px' tooltip="Place 9: Pays 7 to 5"/>
        <BettingArea id="ten-place" left='815px' top='187px' width='46px' height='15px' tooltip="Place 10: Pays 9 to 5"/>

        <BettingArea id="pass-line" left='200px' top='460px' width='500px' height='60px'/>
        <BettingArea id="pass-line-odds" left='200px' top='520px' width='500px' height='50px'/>

      </div>
    </div>
  );
}

export default CrapsTable;
