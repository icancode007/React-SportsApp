import React from 'react';
import RosterRow from 'RosterRow';

const RoterList = ({players}) => {
  <div className='container tabla' style={{"maxWidth":"800px"}}>
    <table className="table table-striped" style={{"maxWidth":"700px"}}>
      <thead className='playerTableTitles'>
        <tr>
          <th className="numero">#</th>
          <th className="nombre">Name</th>
          <th>Ppg</th>
          <th>Ast</th>
          <th>Reb</th>
          <th>sss</th>
          <th>sss</th>
          <th>sss</th>
          <th>sss</th>
          <th>sss</th>
        </tr>
      </thead>
      {players.length > 0 ?
        players.map(player,index) => <RosterRow key={player.id} {...player} index={index}/>
        : <tr><td colspan="8">No data</td></tr>
      }
    </table>
  </div>
}
