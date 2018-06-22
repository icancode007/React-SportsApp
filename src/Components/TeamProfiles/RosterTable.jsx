import React from 'react';

const RosterTable=({roster}) => (
  <div className="col col-lg-6 playerTables">
    <table className="table table-striped actualTable">
      <thead>
        <tr>
          <th>#</th>
          <th>id</th>
          <th>Name</th>
          <th>Ppg</th>
          <th>Ast</th>
          <th>Reb</th>
          <th>Pie</th>
        </tr>
      </thead>
      <tbody>
        {
          roster ?
            roster.map((player,index)=>
            <tr key={index}>
              <td>{index+1}</td>
              <td className="tableFaces"><img src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.id}.png`} onError={(event)=>event.target.setAttribute("src","http://i.cdn.turner.com/nba/nba/.element/img/2.0/sect/statscube/players/large/default_nba_headshot_v2.png")} alt={player.id}/></td>
              <td>{player.info ? player.info.lastName : "---" }</td>
              <td>{player.stats ? player.stats.pts : "---"}</td>
              <td>{player.stats ? player.stats.ast : "---"}</td>
              <td>{player.stats ? player.stats.reb : "---"}</td>
              <td>{player.stats ? player.stats.pie : "---"}</td>
            </tr>
        ): <tr><td colSpan="7">No data</td></tr>
        }
     </tbody>
    </table>
  </div>
)
// let sortedarr = [];
// const quick_Sort = (origArray) => {
// 	if (origArray.length <= 1) {
// 		return origArray;
// 	} else {
//
// 		let left = [];
// 		let right = [];
// 		let newArray = [];
// 		let pivot = origArray.pop();
// 		let length = origArray.length;
//
// 		for (let i = 0; i < length; i++) {
// 			if (origArray[i].stats.pts <= pivot.stats.pts) {
// 				left.push(origArray[i]);
// 			} else {
// 				right.push(origArray[i]);
// 			}
// 		}
// 		return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
// 	}
// }
export default RosterTable;
