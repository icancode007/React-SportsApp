import React from 'react';
import SavedCardApp from './SavedCardApp';
import SavedRowApp from './SavedRowApp';

const PlayerList = ({isDislayingAsRows,players,onClick}) => {

    return(
      <div className='container playerToggler'>
        <div className= "col-md-12 togg">
          <button className='btn btn-primary' onClick={onClick}> Row/Card</button>
        </div>
          <div className='d-flex align-items-start flex-row saveCompo'>
          {isDislayingAsRows ?
            <div className='col'>
              <table className="table table-striped">
                <thead className='playerTableTitles'>
                  <tr>
                    <th className="numero">#</th>
                    <th className="nombre">Name</th>
                    <th>Ppg</th>
                    <th>Ast</th>
                    <th>Reb</th>
                    <th>Pie</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                {
                  players.length > 0 && players.length <= 5 ?
                  players.map((player,index) => <SavedRowApp key={player.id} {...player} index={index}/>)
                  : <tr><td colspan="8">No data</td></tr>
                }
              </table>
            </div>: players && players.length > 0 && players.length <= 5 ? players.map(player => <SavedCardApp key={player.id} {...player} />)
              : null
          }
          </div>
      </div>
    )
}

export default PlayerList;
