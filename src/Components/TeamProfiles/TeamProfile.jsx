import React,{Component} from 'react';
import RosterTable from './RosterTable';
import TeamCard from './TeamCard';
import Footer from '../Partials/Footer';

import '../../styles/additional_stylesheets/teamProfile.css';
import NBA from 'nba';

class TeamProfile extends Component {

componentDidMount(){
  let idOfteam =this.props.match.params.id
  this.props.getRoster(idOfteam)
  this.props.getInfo(idOfteam)
}
componentDidUpdate(prevProps){
  let idOfteam =this.props.match.params.id
  if (prevProps.match.params.id !== this.props.match.params.id) {
    this.props.getRoster(idOfteam)
    this.props.getInfo(idOfteam)
  }
}

render() {
  let Tstats = this.props.teamInfo
  let Tinfo = this.props.teamStats
  let roster = this.props.teamRoster
  let oppTR= this.props.oppTeamRoster
  return(
  <div className="fix">
    <div className="container" id="compareWrapper">

        <div className='container' id="teamsProf">
          <div className="row" id="firstRow">
            {Tinfo.teamAbbreviation ?
              <div className="col col-md-4" id="headerLogo">
                <img src={`http://i.cdn.turner.com/nba/nba/assets/logos/teams/primary/web/${Tinfo.teamAbbreviation}.SVG`} alt={Tinfo.teamAbbreviation} id="teamLogoImg"/>
              </div>: <div> Nothin Yet </div>
            }
              <div className="col col-md-4" id ="teamNameHeader">
                <h1>{Tinfo.teamCity} {Tinfo.teamName}</h1>
              </div>
              <div className="col col-md-4" id ="teamYearHeader">
                <h4>{Tinfo.minYear}-{Tinfo.maxYear}</h4>
              </div>
          </div>
        </div>

        <div className='container' id="compareTeams">
          <div className="row">
              <div className="col tableBtns">
                <button className='btn btn-success' hidden style={{float:'right'}}>Compare</button>
              </div>
              <div className="col tableBtns" style={{textAlign:'center'}} >
                <div className="row">
                  <div className='col'>
                    <button className='btn btn-primary'>Compare</button>
                  </div>
                  <div className='col'>
                    <div className="form-group">
                      <select className="form-control" onChange={this.props.getOppsiteTeam} id="sel1">
                        <option>---</option>
                        {
                            NBA.teams.map((team,index)=>{
                              let teamid = team.teamId
                              return(
                                index >= 0 ?
                                team.abbreviation !== Tinfo.teamAbbreviation ?
                                  <option key={index} data-team-id={teamid}>{team.abbreviation}</option>
                                :null
                              :<option>---</option>)
                            })
                        }
                      </select>
                    </div>
                  </div>

                </div>
              </div>
              <div className="col tableBtns">
              <button className='btn btn-success' hidden style={{float:'left'}}>Compare</button>
            </div>
          </div>
          <div className="row">
            <RosterTable roster={roster} />
            {
             oppTR.length > 0 ?
             <RosterTable roster = {oppTR} />
             : <TeamCard Tinfo={Tinfo} Tstats={Tstats} />
            }
          </div>
        </div>
    </div>
    <div>
      <Footer/>
    </div>
  </div>
    )
  }
}

export default TeamProfile;
