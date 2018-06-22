import React from 'react';

const SavedRow = ({id,info,stats,index,removePlayer })=> (
      <tbody className="playerTableData" key={id}>
        <tr>
          <th scope="row">{index+1}</th>
          <td className='rowThumb'>
            <img className="card-img-top rowThumb" src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${id}.png` } alt="Pulgares"/>
            {info.lastName}
          </td>
          <td>{stats.pts}</td>
          <td>{stats.ast}</td>
          <td>{stats.reb}</td>
          <td>{stats.pie}</td>
          <td><button className='btn btn-danger' onClick={removePlayer} data-player-id={id}>Remove</button></td>
        </tr>
      </tbody>

)
export default SavedRow;
