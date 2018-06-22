import React from 'react';

const TeamCard =({Tinfo,Tstats})=>(
  <div className="col col-lg-6 playerTables" style={{backgroundImage:`url(http://i.cdn.turner.com/nba/nba/assets/logos/teams/primary/web/${Tinfo.teamAbbreviation}.SVG)`, backgroundSize: '850px 600px', backgroundPosition: 'center center',backgroundRepeat: 'no-repeat'}} id="teamRankStats">
    <div className="container text-center teamCard" >
       <h2>{Tinfo.teamName} Stats</h2>
         <table className="table table-striped actualTable enphasis">
           <thead>
             <tr>
               <th >Cat</th>
               <th>Stat</th>
               <th>Rank</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Astists</td>
                <td>{Tstats.astPg}</td>
                <td>{Tstats.astRank? Tstats.astRank:"not ranked"}</td>
              </tr>
              <tr>
                <td>Pts Allowed</td>
                <td>{Tstats.oppPtsPg}</td>
                <td>{Tstats.oppPgRank? Tstats.oppPgRank:"not ranked"}</td>
              </tr>
              <tr>
                <td>Pts PerGame</td>
                <td>{Tstats.ptsPg}</td>
                <td>{Tstats.ptsRank? Tstats.ptsRank:"not ranked"}</td>
              </tr>
              <tr>
                <td>Reb PerGame</td>
                <td>{Tstats.rebPg}</td>
                <td>{Tstats.rebRank? Tstats.rebRank:"not ranked"}</td>
              </tr>
            </tbody>
         </table>
     </div>
  </div>
)
export default TeamCard;
