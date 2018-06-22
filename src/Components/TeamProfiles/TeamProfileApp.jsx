import { connect } from 'react-redux';
import { loadPlayerList,getTeamInfo,getOppsiteTeamRoster } from '../../Actions';
import  TeamProfile  from './TeamProfile';

export default connect(
  (state) => {
    return({
      teamId:state.teamId,
      teamRoster:state.teamRoster,
      teamStats:state.teamStats,
      teamInfo:state.teamInfo,
      oppTeamRoster:state.oppTeamRoster
    })
  },(dispatch) => ({
    getRoster : id => loadPlayerList(dispatch,id),
    getInfo : id => getTeamInfo(dispatch,id),
    getOppsiteTeam : e => {
      let tId = e.target.options[e.target.selectedIndex].dataset.teamId
      getOppsiteTeamRoster(dispatch,tId)
    }
  })
)(TeamProfile)
