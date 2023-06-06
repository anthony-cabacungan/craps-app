import React from 'react';
import BettingArea from './BettingArea';
import './CrapsTable.css';
import table from '../images/crapstable.png';

function CrapsTable() {
  
  return (
    <div className="craps-table-container">
      <div className="image-container">
        <img src={table} alt="Craps Table" />
        <BettingArea id="four-place" left='315px' top='187px' width='46px' height='15px' betType="Place 4"/>
        <BettingArea id="five-place" left='415px' top='187px' width='46px' height='15px'/>
        <BettingArea id="six-place" left='515px' top='187px' width='46px' height='15px'/>
        <BettingArea id="eight-place" left='615px' top='187px' width='46px' height='15px'/>
        <BettingArea id="nine-place" left='715px' top='187px' width='46px' height='15px'/>
        <BettingArea id="ten-place" left='815px' top='187px' width='46px' height='15px'/>

        <BettingArea id="pass-line" left='200px' top='460px' width='500px' height='60px'/>
        <BettingArea id="pass-line-odds" left='200px' top='520px' width='500px' height='60px'/>

      </div>
    </div>
  );
}

export default CrapsTable;
