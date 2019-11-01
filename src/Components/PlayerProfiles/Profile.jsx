import React from 'react'

const Profile = ({totals,seasons,playerId}) => (
        <div className="d-flex justify-content-start PlayerProfilecontainer">
          <div className="card" >
            <img className="card-img-top" src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${playerId}.png` } alt="Pulgares"/>
            <div className="card-text">
              <h3>Career Totals</h3>
              <ul className = "profilePlayerCard">
                <li> Gmp: { totals[0] ? totals[0].gp  : "--"}   </li>
                <li> pts: { totals[0] ? totals[0].pts : "--"}   </li>
                <li> Ast: { totals[0] ? totals[0].ast : "--"}  </li>
                <li> Reb: { totals[0] ? totals[0].reb : "--"}  </li>
                <li> Blk: { totals[0] ? totals[0].blk : "--"}  </li>
                <li> ft%: { totals[0] ? totals[0].ftPct: "--"} </li>
                <li> Stl: { totals[0] ? totals[0].stl: "--"}   </li>
                <li> Fg%: { totals[0] ? totals[0].fgPct: "--"}   </li>
                <li> Fg3%: { totals[0] ? totals[0].fg3Pct: "--"}   </li>
              </ul>
            </div>
        </div>
        <table className="table table-striped" style={{"width":"82%"}} id="tablePlayer">
          <thead className='playerTableTitles'>
            <tr>
              <th>Team</th>
              <th>Ssn</th>
              <th>Ppg</th>
              <th>Reb</th>
              <th>Ast</th>
              <th>Fg%</th>
              <th>Ft%</th>
              <th>Fg3%</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {seasons ?
            seasons.slice(0).reverse().map((season,index)=>
              <tr key={index}>
                <td>{season.teamAbbreviation}</td>
                <td>{season.seasonId.slice(2,4)}</td>
                <td>{season.pts}</td>
                <td>{season.reb}</td>
                <td>{season.ast}</td>
                <td>{parseFloat(season.fgPct*100).toFixed(1)}</td>
                <td>{parseFloat(season.ftPct*100).toFixed(1)}</td>
                <td>{parseFloat(season.fg3Pct*100).toFixed(1)}</td>
                <td>{season.playerAge}</td>
            </tr>
              ): <tr><td colSpan="8">No data</td></tr>
            }
          </tbody>
        </table>
      </div>
)
export default Profile
